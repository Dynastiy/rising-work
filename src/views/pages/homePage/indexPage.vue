<template>
  <div>
    <div class="home--page mb-4">
      <div class="hero--section  ">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h1 class="mb-4" data-aos="fade-up-right">World Class <span style="color:var(--secondary-color)">design</span> at your service.</h1>
              <p class="text-white">
                We make it easy to work with professional, creative experts from
                around the world and build your brand through custom, memorable
                design.
              </p>
             
                <form action="" @submit.prevent="searchProduct"> 
                  <div class="input--field">
                    <input type="search" name="" id="" v-model="search_data" />
                    <input type="button" value="Search" @click="searchProduct"/>
                  </div>
                </form>
              
              <div>
                <div class="trending--products">
                  <h5 class="text-secondary">Trending Services:</h5>
                  <div class="text-white trending" style="gap:15px" v-for="product in products.data" :key="product.id">
                    <a class="text-secondary m-0" role="button" @click="viewProduct(product.slug)"> {{product.name}}  </a>
                  </div>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 text-right animated-content animate__animated animate__pulse animate__slow animate__infinite	infinite" data-aos="fade-down-left">
              <img src="@/assets/img/mockup.png" class="rounded-lg" width="100%" alt="">
            </div>
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
          <h1 class="mb-4"><span style="color: var(--secondary-color)">Trending</span> Services</h1>
          <div class="">
            <!-- <div v-for="product in products.data" :key="product.id">
                <div class="creative--services creative--services1" :style="{ 'background-image': `url(${url}/services/photos/${product.app_icon})` }" role="button" @click="viewProduct(product.slug)">
                    <div>
                        <hr class="bg-white w-50" style="height:2px">
                        <h3 class="text-capitalize"> {{ product.name }} </h3>
                        <h5>Start at ${{product.price}}</h5>
                    </div>
                </div>
            </div> -->
          <section class="cards content">
          <article class="card card--1" v-for="product in products.data" :key="product.id">
            <div class="card__img" :style="{ 'background-image': `url(${url}/services/photos/${product.app_icon})` }" role="button" @click="viewProduct(product.slug)"></div>
            <a href="javascript:void(0)" class="card_link" role="button" @click="viewProduct(product.slug)">
              <div class="card__img--hover"  :style="{ 'background-image': `url(${url}/services/photos/${product.app_icon})` }"></div>
            </a>
            <div class="card__info" role="button" @click="viewProduct(product.slug)">
              <span class="card__category" v-if="product.price !== 'null' "> Start at ${{product.price}}</span>
              <span class="card__category" v-else> not specified </span>
              <h5 class="card__title text-white text-capitalize"> {{ product.name }} </h5>
              <!-- <span class="card__by">by <a href="#" class="card__author" title="author">Celeste Mills</a></span> -->
            </div>
          </article>
        </section>
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
          <h1 class="mb-4"><span style="color: var(--secondary-color)">Top Rated</span> Professional Services</h1>
          <div class="">
          <section class="cards content">
          <article class="card card--1" v-for="product in top_rated_products" :key="product.id">
            <div class="card__img" :style="{ 'background-image': `url(${url}/services/photos/${product.app_icon})` }" role="button" @click="viewProduct(product.slug)"></div>
            <a href="javascript:void(0)" class="card_link" role="button" @click="viewProduct(product.slug)">
              <div class="card__img--hover"  :style="{ 'background-image': `url(${url}/services/photos/${product.app_icon})` }"></div>
            </a>
            <div class="card__info" role="button" @click="viewProduct(product.slug)">
              <span class="card__category" v-if="product.price !== 'null' "> Start at ${{product.price}}</span>
              <span class="card__category" v-else> not specified </span>
              <h5 class="card__title text-white text-capitalize"> {{ product.name }} </h5>
              <span class="card__by card__author d-lg-flex justify-content-between "> 
                <span class="d-block"> <b class="text-white">Rating</b> {{ product.avg_ratings }} <IconComponent color="#ffb20f" icon="ant-design:star-filled" /> </span> 
                <span class="d-block"> {{ product.delivery_time }} Days <span class="text-white">Delivery</span> </span> </span>
            </div>
          </article>
        </section>
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
import 'animate.css';
import slider from '@/components/static/sponsorSlider.vue'
export default {
    components:{
        slider 
    },
    data(){
      return {
        products: [],
        url: 'https://api.risingwork.com/',
        top_rated_products: '',
        search_data: ''
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
        async searchProduct() {
          this.$router.push({ name:'product-details', query:{ name: this.search_data } })
          // this.loading = true;
          // try {
          //   let res = await this.$axios.get(
          //     `/all-products?name=${this.search_data}`
          //   );
          //   console.log(res.data);
          //   this.$router.push({ name:'product-details', query:{ name:  } })
          // } catch (error) {
          //   console.log(error);
          // }
          // this.loading = false;
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

