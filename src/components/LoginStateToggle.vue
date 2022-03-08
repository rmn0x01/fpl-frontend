<template>
    <div>
        <button @click="toggleLoginState"> Login </button>
        <button @click="toggleLogoutState"> Logout </button>
    </div>
</template>

<script>
export default {
    name: 'LoginStateToggle',
    methods: {
        toggleLoginState(){
            this.$store.commit('loginAction')
        },
        toggleLogoutState(){
            this.$store.commit('logoutAction')
        }
    }
}
</script>
