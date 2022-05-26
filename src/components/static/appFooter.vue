<template>
  <div>
    <footer class="footer">
     <div class="container py-3">
          <div class="footer--top">
        <div class="row">
          <div class="col-md-3">
            <h4 class="footer--header">Company</h4>
            <ul class="list-unstlyed">
                <li> <a target="_blank" href="https://samzuga.exchange/">About</a> </li>
                <li> <a target="_blank" href="https://africanapp.store/"> Privacy Policy</a></li>
                <li> <a target="_blank" href="https://samzuga.exchange/">Terms and Conditions</a> </li>
                <li> <a target="_blank" href="https://africanapp.store/"> Refund Policy</a></li>
            </ul>
            
          </div>
          <div class="col-md-3">
              <h4 class="footer--header">
                  Quicklinks
              </h4>
              <ul class="list-unstlyed">
                  <!-- <li> <a target="_blank" href="https://zugacoin.io">Blockmay.com</a> </li> -->
                  <li><router-link to="/sign-in">Login</router-link></li>
                  <li><router-link to="register">Register</router-link></li>
                  <!-- <li> <a target="_blank" href="https://africanapp.store/">Merchant Wallet</a> </li>
                  <li> <a target="_blank" href="https://samzuga.org">Samzuga Family</a> </li> -->
              </ul>
          </div>
          <div class="col-sm-6 col-md-3 ">
              <h4 class="footer--header">
                  Get a Design
              </h4>
              <ul class="list-unstlyed">
                  <li v-for="product in categories.data" :key="product.id"> <router-link :to="'/services/'+ product.slug" class="text-capitalize"> {{ product.name }} </router-link> </li>
              </ul>
          </div>
          <div class="col-md-2 col-md-3">
              <h4>
                  Contact Us
              </h4>
              <h6 class="text-white">Follow Us</h6>
              <ul class="list-unstlyed d-flex align-items-center" style="gap:10px">
                  <a target="_blank" href="http://facebook.com/officialbuybnb/"> 
                  Facebook
                  </a>
                  <!-- <a target="_blank" href="https://t.me/officialzugacoin"><i class="fa fa-telegram" aria-hidden="true"></i></a> -->
              </ul>
          </div>
        </div>
      </div>

      <div class="footer--copyright">
        <hr class="w-50 mx-auto bg-secondary" />
        <p class="text-center small">Copyright 2022 © Risingwork. All rights reserved.</p>
      </div>
     </div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      categories: '',
    }
  },
  methods: {
    async getCategories(){
      try {
        let res = await this.$http('/trending-products')
        console.log(res.data.trending_products);
        this.categories = res.data.trending_products
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted(){
    this.getCategories();
  },
  computed:{
    
  }
}
</script>