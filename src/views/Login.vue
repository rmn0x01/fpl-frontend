<template>
    <auth-form titleMsg="Login" @auth-submit="submitLogin"></auth-form>
</template>
<script>
import AuthForm from '../components/AuthForm.vue'
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
        }
    }
}
</script>