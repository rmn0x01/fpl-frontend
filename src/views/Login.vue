<template>
    <auth-form titleMsg="Login" @auth-submit="submitLogin"></auth-form>
</template>
<script>
import AuthForm from '../components/AuthForm.vue'
import axios from 'axios'
export default {
    name: 'Login',
    components: {
        AuthForm
    },
    data(){
        return {
            email : '',
            password : '',
        }
    },
    methods: {
        submitLogin(email, password){
            console.log(email);
            console.log(password);
            axios.get('http://127.0.0.1:3000/')
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }
}
</script>