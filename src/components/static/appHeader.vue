<template>
  <div>
    <div class="app--header">
      <div class="container menu">
        <div class="">
          <router-link to="/">LOGO</router-link>
        </div>
        <div class="other--menu">
          <router-link to="/">Categories</router-link>
          <router-link to="/">How it Works</router-link>
        </div>
        <div class="user--area ml-auto">
            <button class="btn--main" @click="goToLogin">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        goToLogin(){
            this.$router.push('/sign-in')
        }
    }
}
</script>
