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
            console.log(email)
            console.log(password)
            const user_id = email
            this.$store.dispatch('login', {user_id, password})
                .then(() => this.$router.push('/welcome'))
                .catch(error => {
                    console.error(error)
                })
        }
    }
}
</script>