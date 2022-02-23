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
                        <b-dropdown-item @done-login="login" to="/login">Login</b-dropdown-item>
                        <b-dropdown-item to="/register">Register</b-dropdown-item>
                    </div>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
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
