<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item to="/welcome">Welcome</b-nav-item>
                <b-nav-item to="/">Dashboard</b-nav-item>
                <b-nav-item to="about">About</b-nav-item>

                <b-nav-item-dropdown text="User" right>
                    <b-dropdown-item v-if="this.$store.state.isLoggedIn" to="/logout">Logout</b-dropdown-item>
                    <div v-else>
                        <b-dropdown-item to="/login">Login</b-dropdown-item>
                        <b-dropdown-item to="/register">Register</b-dropdown-item>
                    </div>
                </b-nav-item-dropdown>
                <b-nav-item v-if="this.$store.state.isLoggedIn"> Hello, User</b-nav-item>
                <b-nav-item v-else> Hello, Guest </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <login-state-toggle></login-state-toggle>
    </div>
</template>

<script>
import LoginStateToggle from '@/components/LoginStateToggle.vue'
export default {
    name: 'NavBar',
    components: {
        LoginStateToggle
    }
}
</script>
