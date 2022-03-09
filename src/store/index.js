import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    isLoggedIn: false,
    token: localStorage.getItem('token') || null,
    status: '',
    user: localStorage.getItem('user') || null,
    loginError: ''
  },
  getters : {
    authStatus: state => {
      return state.status
    },
    isLoggedIn: state => {
      return !!state.token
    },
    userLoggedIn: state => {
      return JSON.parse(state.user).user_nm || ''
    },
    readToken: state => {
      return state.token
    },
    readUser: state => {
      return JSON.parse(state.user) || ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    loginAction (state) {
      state.isLoggedIn = true
    },
    logoutAction (state) {
      state.isLoggedIn = false
    },
    authRequest (state) {
      state.status = 'loading'
    },
    authSuccess (state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    authError (state, errorMessage) {
      state.status = 'error'
      state.token = null
      state.loginError = errorMessage
    },
    logout (state) {
      state.status = ''
      state.token = null
      state.user = ''
      state.loginError = ''
    }
  },
  actions: {
    login ({commit}, loginData) {
      commit('authRequest')

      axios.post('http://127.0.0.1:3000/user/login', {
        ...loginData
      })
        .then(response => {
          const token = response.data.data.token
          const user  = {
            user_id : response.data.data.user_id,
            user_nm : response.data.data.user_nm,
            email   : response.data.data.email,
            role_id : response.data.data.role_id,
          }
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          axios.defaults.headers.common['x-access-token'] = token
          commit('authSuccess', {token: token, user: user})
        })
        .catch(error => {
          commit('authError',error.response.data.error)
          localStorage.removeItem('token')
          console.log(error)
        })
    },
    logout ({commit}) {
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete axios.defaults.headers.common['x-access-token']
    }
  }
})

