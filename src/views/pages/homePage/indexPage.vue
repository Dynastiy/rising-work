<template>
  <div>
    <div class="home--page">
      <div class="hero--section text-center ">
        <div class="container">
          <h1>World Class design at your service.</h1>
          <p class="w-50 mx-auto">
            We make it easy to work with professional, creative experts from
            around the world and build your brand through custom, memorable
            design.
          </p>
          <div class="input--field">
            <input type="search" name="" id="" />
            <input type="button" value="Get Started" />
          </div>
        </div>
      </div>

      <!-- Trusted By Section  -->
      <div class="trusted--by">
        <div class="container">
          <slider/>
        </div>
      </div>

      <!-- Feature Products  -->
      <div class="featured--products mb-4 container">
        <div class="mt-4">
          <h2 class="mb-4">Trending Services</h2>
          <div class="content">
            <div v-for="product in products.data" :key="product.id">
                <div class="creative--services creative--services1" :style="{ 'background-image': `url(${url}/services/photos/${product.app_icon})` }" role="button" @click="viewProduct(product.slug)">
                    <div>
                        <hr class="bg-white w-50" style="height:2px">
                        <h3 class="text-capitalize"> {{ product.name }} </h3>
                        <h5>Start at ${{product.price}}</h5>
                    </div>
                </div>
            </div>
            </div>
          <router-link to="/categories" class="d-flex align-items-center mt-4 text-dark font-weight-bold" style="gap:20px"> <span>All Services</span>  <span class="material-icons">
          arrow_forward
          </span></router-link>
        </div>
      </div>

      <div class="explore--div container rounded-lg p-4">
        <div>
          <h1 class="text-white">Explore Magic?</h1>
          <h3 class="mb-3" style="color: var(--gray-400)">Need a logo or any graphics design?</h3>
          <p class="w-50 text-white mb-3 small">Join 10,000+ businesses, agencies and others
              that leverage to grow their businesses through
              high quality custom design and branding.
          </p>
          <button class="btn--main">Explore</button>
        </div>
      </div>

        <!-- Trending Professional Services  -->
      <div class="featured--products mb-4 container">
        <div class="mt-4">
          <h2 class="mb-4">Top rated Professional Services</h2>
          <div class="content">
            <div v-for="product in top_rated_products" :style="{ 'background-image': `url(${url}/services/photos/${product.app_icon})` }"
            :key="product.key" class="creative--services creative--services1" data-aos="fade-up-right"
            role="button" @click="viewProduct(product.slug)">
              <div>
               <h3 class="text-capitalize"> {{ product.name }} </h3>
                <h5>Start at ${{product.price}}</h5>
              </div>
            </div>

          </div>
          <router-link to="/categories" class="d-flex align-items-center mt-4 text-dark font-weight-bold" style="gap:20px"> <span>All Services</span>  <span class="material-icons">
          arrow_forward
          </span></router-link>
        </div>
      </div>

       <div class="explore--div container rounded-lg p-4">
        <div>
          <h1 class="text-white">Explore Magic?</h1>
          <h3 class="mb-3" style="color: var(--gray-400)">Need a logo or any graphics design?</h3>
          <p class="w-50 text-white mb-3 small">Join 10,000+ businesses, agencies and others
              that leverage to grow their businesses through
              high quality custom design and branding.
          </p>
          <button class="btn--main">Explore</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slider from '@/components/static/sponsorSlider.vue'
export default {
    components:{
        slider 
    },
    data(){
      return {
        products: [],
        url: 'https://api.risingwork.com/',
        top_rated_products: ''
      }
    },
    methods:{
      async getTrending(){
            try {
                let res = await this.$http.get('/trending-products') 
                this.products = res.data.trending_products
                console.log(res.data.trending_products);
            } catch (error) {
                console.log(error);
            }
        },
        async getTopRated(){
            try {
                let res = await this.$http.get('/top-rated-products') 
                this.top_rated_products = res.data.top_rated_products
                console.log(res.data.top_rated_products);
            } catch (error) {
                console.log(error);
            }
        },
        viewProduct(slug){ 
            this.$router.push({ name: 'product-detail', params: { slug } })
        },
    },
    mounted(){
      this.getTrending()
      this.getTopRated()
    }
    
}
</script>
