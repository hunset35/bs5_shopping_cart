<template>
  <div>
    <frameHeader></frameHeader>
    <router-view></router-view>
    <frameFooter></frameFooter>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin> -->
    <!-- <GoogleLogin :params="params" :logoutButton=true>Logout</GoogleLogin> -->
    <!-- <ModelWindow /> -->
    <!-- <router-link variant="primary">Home</router-link> -->
    <!-- <router-link variant="primary">AlertTest</router-link> -->
    <!-- <router-view><router-view> -->
    <!-- <AlertTest /> -->
    <!-- <splide :options="options">
        <splide-slide>
            <img src="image01.jpg">
        </splide-slide>
        <splide-slide>
            <img src="image02.jpg">
        </splide-slide>
        <splide-slide>
            <img src="image03.jpg">
        </splide-slide>
    </splide> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ModelWindow from './components/Model.vue'
// import AlertTest from './components/AlertTest.vue'
// import { Splide, SplideSlide } from '@splidejs/vue-splide';

// const { Popover, Toast, Collapse } = bootstrap
// import EventBus from "@/utils/eventBus"

import frameHeader from "./views/layouts/frameHeader/frameHeader.vue";
import frameFooter from "./views/layouts/frameFooter/frameFooter.vue";
// import { resetOrientation } from "@/utils/common"

export default {
  name: "App",
  components: {
    frameHeader,
    frameFooter
    // EventBus
    // ModelWindow,
    // AlertTest,
    // Splide,
    // SplideSlide,
  },
  data() {
    return {
      // modal: null,
      // options: {
      //   rewind: true,
      //   width: 800,
      //   perPage: 1,
      //   gap: "1rem"
      // }
      // params: {
      //     client_id: ""
      // },
      // renderParams: {
      //     width: 250,
      //     height: 50,
      //     longtitle: true
      // }
    };
  },
  methods: {
    // onSuccess(googleUser) {
    //   console.log(googleUser);
    //   // This only gets the user information: id, name, imageUrl and email
    //   console.log(googleUser.getBasicProfile());
    // }
  },
  mounted() {
    // this.modal = new Modal(this.$refs.exampleModal)
    // document.title = "錢龍皇Online"
    // resetOrientation()
  }
};
</script>

<style>
@import "~@/styles/layouts/reset.css";
</style>
