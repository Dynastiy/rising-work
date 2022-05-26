<template>
  <div>
    <div class="dashboard--header">
      <div class="container py-5">
        <div class="top d-flex justify-content-between align-items-center mb-4">
            <div>
              <router-link to="/" class="text-dark font-weight-bold">
                <img src="@/assets/img/logo.svg" width="120" alt="" srcset=""> 
              </router-link>
            </div>
            <div class="d-flex align-items-center" style="gap:5px">
              <div>
                <span class="user--avatar" :class="getUser.first_name.charAt(0)"> {{getUser.first_name.charAt(0) }} </span>
              </div>
              <div>
                <h5 class="text-dark"> {{ getUser.first_name }} {{ getUser.last_name }} </h5>
                <p class="small m-0" role="button" @click="logout">Logout</p>
              </div>
            </div>
        </div>

        <div class="main--menu mt-5">
          <ul class="list-unstyled d-flex align-items-center p-2" style="gap:20px">
            <li>
              <router-link to="/dashboard" class="text-white">
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link class="text-white" to="/orders">Orders</router-link>
            </li>
            <li>
              <router-link to="/profile" class="text-white">Profile</router-link>
            </li>
          </ul>
        </div>

        <!-- User Greeting -->
        <div class="mt-5">
          <h3 class="text-white">
            Good Morning, {{ getUser.first_name }} {{ getUser.last_name }}
          </h3>
          <div class="mt-3">
            <p>Welcome to your account dashboard</p>
            <p class="small">Check out Product Categories. Click <router-link class="text-white" to="/categories">Categories</router-link>  </p>
          </div>
        </div>
      </div>
    </div>

     <!-- Logout Confirmation Box -->
      <Logout v-show="logout_confirmation" @close="closeConfirmBox"/>

  </div>
</template>

<script>
import Logout from '@/components/confirmLogout.vue'
export default {
  components:{
    Logout
  },
  data(){
    return{
      logout_confirmation: false,
    }
  },
  methods:{
    logout() {
        this.logout_confirmation = !this.logout_confirmation
        },
        closeConfirmBox() {
        this.logout_confirmation = !this.logout_confirmation
        },
  },
  computed:{
      getUser(){
        return this.$store.getters.getUser
      }
    },
}
</script>