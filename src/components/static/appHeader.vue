<template>
  <div class="sticky-top shadow-sm" style="z-index: 9999">
    <div class="app--header">
      <div class="container menu">
        <div class="">
          <router-link to="/">
            <img src="@/assets/img/rising.svg" width="200" alt="" srcset="" />
          </router-link>
        </div>
        <div class="other--menu ml-auto">
          <router-link class="" to="/categories">Services</router-link>
          <router-link class="" to="/">How it Works</router-link>
        </div>
        <div class="user--area d-flex" style="gap: 20px" v-if="!loggedIn">
          <button class="btn--main" @click="goToLogin">Login</button>
          <!-- <button class="btn--main" @click="goToRegister">Register</button> -->
        </div>
        <div class="" v-else>
          <!-- <div class="cart">
            <span class="material-icons text-white">
              shopping_bag
            </span>
            <div class="notification">
              {{ user.cart_item.length }}
            </div>
          </div> -->

          <div>
            <h5 v-if="user" class="text-white">
              Hello,
              <span style="color: var(--secondary-color)">{{
                user.first_name
              }}</span>
            </h5>
          </div>
          <!-- <div class="dropleft ">
             <button class="text-dark add--button btn btn-light" type="button" data-toggle="dropdown" >
            User
            </button>
            <div class="dropdown-menu" >
              <router-link to="/profile" class="dropdown-item text-dark" href="#">Profile</router-link>
              <router-link to="/dashboard" class="dropdown-item text-dark" href="#">Dashboard</router-link>
              <a class="dropdown-item text-dark" href="javascript:void(0)" @click="logout">Logout</a>
            </div>
          </div> -->
        </div>
      </div>

      <div class="mobile--menu px-4">
        <div class="d-flex align-items-center justify-content-between">
          <div class="">
            <span
              class="material-icons text-white"
              id="tog"
              style="font-size: 30px"
              role="button"
            >
              menu
            </span>
          </div>

          <div class="text-center">
            <router-link to="/">
              <img src="@/assets/img/rising.svg" width="150" alt="" srcset="" />
            </router-link>
          </div>

          <div class="">
            <div v-if="!loggedIn">
              <!-- <button class="add--button sign--in">
                <router-link to="/sign-in" class="text-white"
                  >Sign In</router-link
                >
              </button> -->
              <button class="btn--main" @click="goToLogin">Sign In</button>
            </div>
            <div v-else>
              <button class="add--button btn btn-light">
                <router-link to="/dashboard" class="text-dark"
                  >Dashboard</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile--nav pt-3" id="side-bar">
        <div class="text-right mb-5 pr-4 mt-3">
          <span class="material-icons text-dark" style="font-size: 30px">
            close
          </span>
        </div>
        <ul class="list-unstyled">
          <li>
            <router-link to="/" class="small">
              <span class="material-icons mr-2">home</span> Home
            </router-link>
          </li>
          <li>
            <router-link to="/categories" class="small">
              <span class="material-icons mr-2">category</span>
              Categories</router-link
            >
          </li>
          <li v-if="loggedIn">
            <router-link to="/dashboard" class="small">
              <span class="material-icons mr-2">apps</span>
              Dashboard</router-link
            >
            <a class="small" href="javascript:void(0)" @click="logout">
              <span class="material-icons mr-2">logout</span> Logout</a
            >
          </li>
        </ul>
      </div>

      <!-- Logout Confirmation Box -->
      <Logout v-show="logout_confirmation" @close="closeConfirmBox" />
    </div>
    <!-- 
    <div>
          <hr class="m-0" style="background-color:#fff">
        </div> -->
  </div>
</template>

<script>
import Logout from "@/components/confirmLogout.vue";
export default {
  components: {
    Logout,
  },
  data() {
    return {
      logout_confirmation: false,
      user: {},
      menu: true,
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/sign-in");
    },
    goToRegister() {
      this.$router.push("/register");
    },
    logout() {
      this.logout_confirmation = !this.logout_confirmation;
    },
    closeConfirmBox() {
      this.logout_confirmation = !this.logout_confirmation;
    },
  },
  mounted() {
    const toggller = document.getElementById("tog");
    const sidee = document.getElementById("side-bar");
    const bodyEl = document.getElementsByTagName("body")[0];
    document.onclick = function (e) {
      if (e.target.id !== "tog" && e.target.id !== "side-bar") {
        sidee.classList.remove("active");
        bodyEl.classList.remove("active");
      }
    };
    toggller.onclick = function () {
      sidee.classList.toggle("active");
      bodyEl.classList.toggle("active");
    };
  },
  created() {
    console.log(this.$store.getters.getUser);
    this.user = this.$store.getters.getUser;
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>
