<template>
  <div>
    <div class="app--header">
      <div class="container menu">
        <div class="">
          <router-link to="/">LOGO</router-link>
        </div>
        <div class="other--menu">
          <router-link to="/categories">Categories</router-link>
          <!-- <router-link to="/">How it Works</router-link> -->
        </div>
        <div class="user--area ml-auto d-flex" style="gap:20px" v-if="!loggedIn">
            <button class="btn--main" @click="goToLogin">Login</button>
            <button class="btn--main" @click="goToRegister">Register</button>
        </div>
        <div class="ml-auto d-flex" style="gap:20px" v-else>
          <div class="cart">
            <span class="material-icons text-white">
              shopping_bag
            </span>
            <div class="notification">
              {{ user.cart_item.length }}
            </div>
          </div>
          
          <div class="dropdown ">
            <!-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"> -->
             <span class="text-white material-icons" type="button" id="dropdownMenuButton" data-toggle="dropdown" >
            account_circle_full
          </span>
            <!-- </button> -->
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link to="/dashboard/profile" class="dropdown-item text-dark" href="#">Profile</router-link>
              <router-link to="/dashboard" class="dropdown-item text-dark" href="#">Dashboard</router-link>
              <a class="dropdown-item text-dark" href="javascript:void(0)" @click="logout">Logout</a>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile--menu px-4">
        <div class="d-flex align-items-center justify-content-between">
          <div class="text-white">
            <router-link to="/">LOGO</router-link>
          </div>
          <div >
            <span class="material-icons text-white" id="tog" style="font-size:30px"  role="button">
              menu
            </span>
          </div>
        </div>
      </div>

      <div class="mobile--nav pt-3" id="side-bar">
        <div class="text-right mb-5 pr-4 mt-3">
          <span class="material-icons text-white" style="font-size:30px" >
              close
            </span>
        </div>
        <ul class="list-unstyled">
          <li>
            <router-link to="/categories">Categories</router-link>
          </li>
          <li>
            <router-link to="/">How It Works</router-link>
          </li>
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link to="sign-in">Login</router-link>
          </li>
          <li>
            <router-link to="register">Register</router-link>
          </li>
          <li>
            <a class="" href="javascript:void(0)" @click="logout">Logout</a>
          </li>
        </ul>
      </div>




      <!-- Logout Confirmation Box -->
      <Logout v-show="logout_confirmation" @close="closeConfirmBox"/>
    </div>
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
      user: {},
      menu: true,
    }
  },
    methods:{
        goToLogin(){
            this.$router.push('/sign-in')
        },
        goToRegister(){
            this.$router.push('/register')
        },
         logout() {
        this.logout_confirmation = !this.logout_confirmation
        },
        closeConfirmBox() {
        this.logout_confirmation = !this.logout_confirmation
        },
    },
    mounted(){
      const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        const bodyEl = document.getElementsByTagName('body')[0]
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
            bodyEl.classList.remove("active");
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        bodyEl.classList.toggle("active")
        }
    },
    created(){
      console.log(this.$store.getters.getUser);
      this.user = this.$store.getters.getUser
    },
    computed:{
      loggedIn(){
        return this.$store.getters.isLoggedIn
      }
    }
}
</script>
