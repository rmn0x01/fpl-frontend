<template>
    <auth-form titleMsg="Register" @auth-submit="submitRegister"></auth-form>
</template>
<script>
import AuthForm from '@/components/AuthForm.vue';
export default {
    name: 'Register',
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
        submitRegister(email, password){
            console.log(email);
            console.log(password);
        }
    }
}
</script>