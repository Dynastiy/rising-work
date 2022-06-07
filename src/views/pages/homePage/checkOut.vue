<template>
    <div>
        <div>
            <div class="checkout my-4 ">
                <div class="container"> 

                    <div v-if="loading">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                    
                   <div v-else>
                        <div v-if="Object.keys(cart).length === 0 " >
                            <div class="d-flex mb-3" style="gap:10px"> <p><span class="cancelled">1</span> Pending Item </p>
                            <p style="color:var(--secondary-color)" role="button" @click="addItem">Add to cart</p>
                            </div>
                            <h2>No Cart Items Here Yet</h2>
                        </div>
                        <div v-else class="checkout--item shadow-lg bg-white p-3">
                            <div>
                                <div class="d-flex" style="gap:15px">
                                    <div class="product--image">
                                        <img :src="url+'services/photos/'+ product.app_icon" alt="">
                                    </div>
                                    <div>
                                        <h4 class="font-weight-bold text-capitalize"> {{ cart.product_name }} </h4>
                                        <div class="text-capitalize" v-html="product.description">

                                        </div>
                                        <!-- <p class="small text-capitalize"> {{product.description}} </p> -->
                                        <div class="plan mt-2 " style="gap: 2rem" v-for="plan in cart.plans" :key="plan.id">
                                            <div class="d-flex align-items-center" style="gap:5px">
                                                <h6 class="font-weight-bold"> Plan: </h6>
                                                <p>{{ plan.name }}</p>
                                            </div>

                                            <div class="d-flex align-items-center" style="gap:5px">
                                                    <IconComponent icon="akar-icons:clock" /> <p> {{ plan.delivery_time }} Delivery </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ml-auto">
                                        <h3>
                                            ${{ cart.total_amount }}
                                        </h3>
                                    
                                    </div>
                                    
                                </div>
                                <div class="mt-4">
                                    <h6 class="font-weight-bold">Additional Features</h6>
                                    <ul>
                                        <li v-for="features in cart.features" :key="features.id" class="d-flex align-items-center" style="gap:8px">
                                            <IconComponent icon="charm:circle-tick" /> {{ features.name }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <stripe-checkout
                                        ref="checkoutRef"
                                        mode="payment"
                                        :pk="publishableKey"
                                        :sessionId="sessionId"
                                        />
                                    <button class="checkout--button d-flex align-items-center" style="gap:5px" @click="submit"> <IconComponent icon="fluent:payment-16-filled" /> Checkout</button>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data(){
      return{
        publishableKey: 'pk_test_51KxDJlJCbiXlKCJaU8Lyx0aL2pHkx7XMolreyZEiPVXB1CVCZtKIjwYQV3SugatbwSelXXygLhmBaJIG5rhqS0Sp00ia5vsAlO',
        sessionId: null,
        cart: {},
        payload: {},
        product: {},
        url: 'https://api.risingwork.com/',
        loading: false,
      }
  },
  methods:{
      async submit () {
          let formData = new FormData();
          formData.append("product_name", this.cart.product_name)
          formData.append("unit_amount", this.cart.total_amount)
      try {
          let res = await this.$axios.post('make-payment', formData)
          console.log(res);
          this.sessionId = res.data.checkout.id;
          this.makePayment()
      } catch (error) {
          console.log(error);
      }
    },

    // Add item to Cart
    async addItem(){
        
        this.loading = true
        try {
            let res = await this.$axios.post('/add-to-cart', this.payload)
            console.log(res);
            this.getCartItems();
        } catch (error) {
            console.log(error);
        }
        this.loading = false
    },

    // Get user Cart 
    async getCartItems(){
        this.loading = true
      try {
          let res = await this.$axios.get('/auth/user-cart')
          console.log(res);
          this.cart = res.data
          console.log(this.cart);
          this.product = res.data.products[0]

      } catch (error) {
          console.log(error);
      }
      this.loading = false
    },
    // Get Session Id 
    makePayment(){
            // You will be redirected to Stripe's secure checkout page
        this.$refs.checkoutRef.redirectToCheckout();
       
    }
  },
  mounted(){
      console.log(this.$store.getters.getCartItems);
      this.payload = this.$store.getters.getCartItems
  },
  async created(){
      this.getCartItems();
    //   this.getSessionId()
    
  }
};
</script>