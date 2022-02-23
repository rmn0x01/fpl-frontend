<template>
    <div id="app">
        <nav-bar :is-logged-in="isLoggedIn" @logged-in-updated="updateLoggedIn"></nav-bar>
        <router-view/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    components: {
        NavBar,
    },
    data(){
        return {
            isLoggedIn: false
        }
    },
    methods: {
        updateLoggedIn(isLoggedIn){
            this.isLoggedIn = isLoggedIn
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
