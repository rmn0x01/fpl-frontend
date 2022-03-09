<template>
    <div class="row mt-5">
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
            <b-card
                :title="titleMsg"
            >
            <form @submit.prevent="authSubmit">
                <b-card-text>
                    <b-form-input v-model.lazy.trim="email" type="text" placeholder="Email"></b-form-input>
                    <b-form-input class="mt-2" v-model.lazy.trim="password" type="password" placeholder="Password"></b-form-input>
                </b-card-text>
                <b-button variant="primary" type="submit">{{titleMsg}}</b-button>
            </form>
            </b-card>
        </div>
        <div class="col-md-4">
        </div>
    </div>
</template>
<script>
export default {
    name: "AuthForm",
    props: {
        titleMsg: String
    },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        authSubmit(){
            if((this.email === "") || (this.password === "")){
                return ;
            }
            this.$emit('auth-submit', this.email, this.password);
            this.email = "";
            this.password = "";
        }
    }
}
</script>