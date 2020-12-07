<template>
    <div>
        <button :class="[btnBurger, {'open': isMenuOpen}]" @click="openMenu()">
            <span class="top-line"></span>
            <span class="middle-line"></span>
            <span class="bottom-line"></span>
        </button>
         <nav :class="[navigationMainClass, {'main-navigation_show':isMenuOpen}]">
            <ul class="list">
                
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/faq">About the project</router-link>
                
                </li>
                <li>
                    <router-link to="/games">Games</router-link>
                </li>
                <li v-if="isLogin">
                    <router-link to="/accounts">Account</router-link>
                </li>
                <li>
                    <BaseLogin />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import BaseLogin from '@/components/share-tools/BaseLogin'
import { mapState } from 'vuex';
export default {
    name: 'BaseMenu',
    components:{
        BaseLogin
    },
    props:{
        navigationMainClass: {
            type: String,
            default:'main-navigation'
        }, 
        btnBurger:{
            type: String,
            default:'hamburger'
        }
    },
    data(){
        return{
            isMenuOpen:false,
            //menuIcon: 'menu'
        }
    },
    computed:{
        ...mapState('userMod',{
            isLogin: state => state.user
        })
    },
    methods:{
        openMenu(){
            this.isMenuOpen = !this.isMenuOpen;
            //this.isMenuOpen ? this.menuIcon = 'close' : this.menuIcon = 'menu'
        }
    },
    watch: {
        '$route' () { //esto detecta si cambias de pagina.
            this.isMenuOpen = false;
            //this.menuIcon = 'menu';
        }
    }
}
</script>