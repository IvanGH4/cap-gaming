<template>
  <div class="about page bg-dark">
    <div class="about-title">
      <h1>About this project</h1>
    </div>
    <div class="desc-container">
      <transition name="custom">
        <div class="used-techs" v-show="transitionActive">
          <h3>Technologies used in this project</h3>
          <ul>
            <li>Sass</li>
            <li>Bootstrap</li>
            <li>Firebase</li>
            <ul>
              <li>Cloud firestore</li>
              <li>Firebase authentication</li>
            </ul>
            <li>Vue js</li>
            <ul>
              <li>
                Vue state management - Vuex
              </li>
              <li>
                Vue Router
              </li>
            </ul>
          </ul>
          <p>
            Feel free to check the project's repository on <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i>GitHub</a>
          </p>
        </div>
      </transition>
      <transition name="custom-two">
        <div class="project-explanation" v-show="transitionActive">
          <h3>What can you do on this site?</h3>
          <p>On the home page, you can log in with your google account, if you do, you will have access to the Account page, where your data will be displayed. You can navigate to this page from the side menu.</p>
          <p>You don't have to log in to get access to the Games page. You can go there from the side menu, or by clicking <router-link to="/games">here</router-link>. There you will find some games displayed, and you will be able to navigate to their website and play them!</p>
          <p></p>
        </div>
      </transition>
    </div>

  <div class="end-line"></div>

  </div>
</template>

<script>
export default {
  name: 'Faq',
  props: {
    panel: {
      type: String,
      default: 'panel'
    }
  },
  data() {
    return {
      transitionActive: false,
    }
  },
  mounted(){
    setTimeout(() => {
      this.transitionActive = true
    }, 200);
  },
}
</script>