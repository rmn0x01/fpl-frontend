<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item to="/welcome">Welcome</b-nav-item>
                <b-nav-item to="/">Dashboard</b-nav-item>
                <b-nav-item to="about">About</b-nav-item>

                <b-nav-item-dropdown text="User" right>
                    <b-dropdown-item v-if="isLoggedIn" @done-logout="logout" to="/logout">Logout</b-dropdown-item>
                    <div v-else>
                        <b-dropdown-item @done-login="login" to="/login">Login</b-dropdown-item> <!-- probably bug origins why isLoggedIn not updating-->
                        <b-dropdown-item to="/register">Register</b-dropdown-item>
                    </div>
                </b-nav-item-dropdown>
                <b-nav-item v-if="isLoggedIn"> Hello, User</b-nav-item>
                <b-nav-item v-else> Hello, Guest </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <login-state-toggle  :is-logged-in="isLoggedIn" @done-login="login" @done-logout="logout"></login-state-toggle>
    </div>
</template>

<script>
import LoginStateToggle from '@/components/LoginStateToggle.vue'
export default {
    name: 'NavBar',
    components: {
        LoginStateToggle
    },
    props: {
        isLoggedIn: Boolean
    },
    methods:{
        login(){
            this.$emit('logged-in-updated', true);
        },
        logout(){
            this.$emit('logged-in-updated', false);
        }
    }
}
</script>
