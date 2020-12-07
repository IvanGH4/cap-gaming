<template>
    <div :class="[mainClass, homeClass]">
         <!--v-if="isHome"-->
         <template v-if="isHome">
            <span class="google-logo" v-if="!isLogin"> <img src="@/assets/imgs/google.svg" alt="google"></span>
            <button class="btn-login login-title" v-if="!isLogin" @click="logIn()">{{btnText}}</button> <!--v-if="!isLogin"-->
         </template>

        <template v-else>
            <button class="menu-btn" @click="logIn()" v-if="!isLogin">
                {{btnText}}
            </button>
            <template v-else>
                <img :src="userAvatar" class="avatar" />
                <h4>{{userName}}</h4>
                <button class="menu-btn" @click="logOut()" >
                    {{btnText}}
                </button>
               
            </template>
             
        </template>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    name: 'BaseLogin',
    props:{
        mainClass:{
            type: String,
            default: 'login'
        },
        isHome:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        logIn(){
            this.userLogin();
        },
        logOut(){
            this.userLogout();
            this.$route.name === 'Accounts' || this.$route.name === 'Dashboard' ? this.$router.push({name: 'Home'}) : false;
        },
        ...mapActions({
            userLogin:'userMod/setUser',
            userLogout:'userMod/setLogOut',
        })
    },
    computed:{
        ...mapState('userMod', {
            isLogin: state => state.user,
        }),
        btnText(){
            return this.isLogin ? 'LogOut' : 'Log In'
        },
        ...mapGetters('userMod',{
            userAvatar:'getUserAvatar',
            userName: 'getUserName'
        }),
        homeClass(){
            return this.isHome ? 'login_home' : 'login_nav'
        }
    }
}
</script>