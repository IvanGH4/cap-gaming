import Vue from 'vue'
import Vuex from 'vuex'
import viewportWMod from '@/store/modules/viewportWMod'
import userMod from '@/store/modules/userMod'
import gamesMod from '@/store/modules/gamesMod'
import { auth } from '@/firebase.js'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    authState({commit}){
      auth.onAuthStateChanged((user)=>{
        user ? commit('userMod/mtnUser', user) : commit('userMod/mtnUser', null); 
      })
    }
  },
  modules: {
    viewportWMod,
    userMod,
    gamesMod
  }
})

export default store;

store.dispatch('authState');
store.dispatch('gamesMod/setGames');