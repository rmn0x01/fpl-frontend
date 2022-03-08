import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    isLoggedIn: false,
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
    }
  }
})

