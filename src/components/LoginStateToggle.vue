<template>
    <div>
        <button @click="toggleLoginState"> Login State Toggle</button>
    </div>
</template>

<script>
export default {
    name: 'LoginStateToggle',
    props: {
        isLoggedIn: Boolean
    },
    methods: {
        toggleLoginState(){
            if(this.isLoggedIn){
                this.$emit('done-logout')
            } else{
                this.$emit('done-login')
            }
        }
    }
}
</script>
