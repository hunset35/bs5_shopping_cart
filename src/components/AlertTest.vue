<template>
  <div>
    <h2>Alert</h2>
    <!-- <b-button size="sm" @click="toggle">
        {{ show ? 'Hide' : 'Show' }} Alert
    </b-button>
    <b-alert
        v-model="show"
        class="mt-3"
        dismissible
        @dismissed="dismissed"
    >
        Hello {{ name }}! -->
    <!-- </b-alert>。 -->
    <!-- <splide>
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
    <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
    </g-signin-button>

    </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'BootstrapVue',
      show: true,
      googleSignInParams: {
        client_id: '810760964618-h6pc302oco4vhedknbl2h6v3vbjs969h.apps.googleusercontent.com'
      }

    }
  },
  watch: {
    show(newVal) {
      console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
    }
  },
  methods: {
    toggle() {
      console.log('Toggle button clicked')
      this.show = !this.show
    },
    dismissed() {
      console.log('Alert dismissed')
    },
    onSignInSuccess (googleUser) {
      console.log(googleUser)
      const profile = googleUser.getBasicProfile()
      console.log(profile)
    },onSignInError (error) {
      console.log('OH NOES',error)
    }

  }
}
</script>

<style scoped>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}

</style>