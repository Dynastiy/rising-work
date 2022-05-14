<template>
    <div>
        <div>
            <div class="checkout mt-4">
                <div class="container">
                    <div class="checkout--item shadow-lg p-3">
                       <div>
                            <div class="d-flex" style="gap:15px">
                                <div class="product--image">
                                    <img src="https://yesofcorsa.com/wp-content/uploads/2018/07/Bakery-Products-Desktop-Wallpaper.jpg" alt="">
                                </div>
                                <div>
                                    <h5 class="font-weight-bold">Product Name</h5>
                                    <p class="small">Description</p>
                                </div>
                            </div>
                            <div class="mt-4">
                                <h6 class="font-weight-bold">Additional Features</h6>
                                <ul>
                                    <li>
                                        Feature 1
                                    </li>
                                </ul>
                            </div>
                            <div class="d-flex justify-content-end">
                                <stripe-checkout
                                    ref="checkoutRef"
                                    mode="payment"
                                    :pk="pk"
                                   :line-items="lineItems"
                                    @loading="v => loading = v"
                                    />
                                <button class="checkout--button d-flex align-items-center" style="gap:5px" @click="submit"> <IconComponent icon="fluent:payment-16-filled" /> Checkout</button>
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
          pk: 'pk_test_51KxDJlJCbiXlKCJaU8Lyx0aL2pHkx7XMolreyZEiPVXB1CVCZtKIjwYQV3SugatbwSelXXygLhmBaJIG5rhqS0Sp00ia5vsAlO',
          lineItems: [
        {
          price: '1234', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      }
  },
  methods:{
      submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    async getCartItems(){

    }
  }
};
</script>