<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark" class="frameHeader">
      <div>
        <router-link class="home" :to="'/'">
          <BIconHouseDoorFill></BIconHouseDoorFill>
        </router-link>
        <div class="logo" @click="slideTo('enterGame')">
          <img v-lazy="require(`@/assets/images/logo.png`)" alt="" />
        </div>
      </div>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"
            ><router-link :to="'/beginner'"
              >{{ $t("TIRO_TEACH") }} - {{ $t("ACTIVITY_VALUE") }}</router-link
            ></b-nav-item
          >
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
          <b-icon-arrow-up></b-icon-arrow-up>
          <div class="h2 mb-0">
            <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
            <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>
            <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
            <b-icon icon="exclamation-circle-fill" variant="info"></b-icon>
            <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
            <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
            <b-icon icon="exclamation-circle-fill" variant="dark"></b-icon>
            <b-icon icon="arrow-up"></b-icon>
            <b-icon icon="exclamation-triangle"></b-icon>
          </div>
          <div style="font-size: 4rem;">
            <b-icon icon="bell-fill" class="border rounded p-2"></b-icon>
            <b-icon
              icon="bell-fill"
              class="border border-info rounded p-2"
              variant="info"
            ></b-icon>
            <b-icon
              icon="bell-fill"
              class="rounded-circle bg-danger p-2"
              variant="light"
            ></b-icon>
            <b-icon
              icon="unlock-fill"
              class="rounded bg-primary p-1"
              variant="light"
            ></b-icon>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import { BIcon, BIconArrowUp, BIconArrowDown } from "bootstrap-vue";
// import {
//   BNavbar,
//   BNavbarNav,
//   BNavbarToggle,
//   BCollapse,
//   BNavItem,
//   BIcon,
//   BIconList,
//   BIconX,
//   BIconHouseDoorFill
// } from "bootstrap-vue"
// import {
//   BIcon,
//   BIconList,
//   BIconX,
//   BIconHouseDoorFill
// } from "bootstrap-icons-vue";
export default {
  // components: {
  //   BIcon,
  //   BIconArrowUp,
  //   BIconArrowDown
  // }
  // components: {
  //   BIcon,
  //   BIconList,
  //   BIconX,
  //   BIconHouseDoorFill
  // }
  // data() {
  //   return {};
  // },
  // computed: {
  //   isLogin() {
  //     return !!this.$store.getters.getUserInfo.account;
  //   }
  // },
  // created() {},
  // methods: {
  //   slideTo(indexElementID) {
  //     EventBus.$emit("slideToIndexID", indexElementID);
  //   },
  //   logout() {
  //     this.$store.dispatch("logout");
  //   }
  // },
  // beforeDestroy() {}
};
</script>

<style>
@import "~@/styles/layouts/frameHeader.css";
</style>
