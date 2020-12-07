<template>
  <div class="home page">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BaseVideo />
    <transition appear name="zoom">
      <div class="title">
        <BaseLogo subTitle="GAMING"/>
      </div>
    </transition>
    <BaseLogin :isHome="true" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import BaseLogin from '@/components/share-tools/BaseLogin';
import BaseVideo from '@/components/share-tools/BaseVideo';
import BaseLogo from '@/components/share-tools/BaseLogo';


export default {
  name: 'Home',
  components: {
    BaseLogin,
    BaseVideo,
    BaseLogo
  },

}
</script>