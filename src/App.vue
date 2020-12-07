<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <BaseLayout />
  </div>
</template>

<script>
import BaseLayout from '@/components/layout/BaseLayout';
import {mapActions} from 'vuex'
export default {
  mounted(){
    this.getClientWidth();
    window.addEventListener('resize', this.getClientWidth);
  },
  methods:{
    getClientWidth(){
      let wWidth = window.innerWidth || document.documentElement.clientWidth;
      this.stateUpdateWidth(wWidth);
      //console.log(wWidth)
      //this.$store.dispatch('viewportWMod/setViewportW', wWidth);
    },
    ...mapActions({
      stateUpdateWidth:'viewportWMod/setViewportW',
    })
  },
  components: {
    BaseLayout
  },
}
</script>

<style lang="scss">

</style>
