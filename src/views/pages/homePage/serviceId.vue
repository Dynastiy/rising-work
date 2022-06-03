<template>
    <div>
        <!-- Listing by category -->
        <div class=" shadow-sm bg-light py-3">
           <div class="container">
               <span> Home </span>
               <span> <IconComponent icon="uit:angle-double-right"/> </span>
               <span class="text-capitalize text-secondary"> Products </span>
           </div>
        </div>

        <div v-if="loading" class="container my-4">
            <p>Searching . . .</p>
        </div>

        <div v-else-if="products.length !== 0 " class="featured--products mb-4 container">
        <div class="mt-4">
          <!-- <h1 class="mb-4">All Services</h1> -->
          <div>
            <div>
                <div class="">
                    <section class="cards content">
                        <article class="card card--1" v-for="product in products" :key="product.id">
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
                </div>
            </div>
          </div>
        </div>

        <div class="container my-4" v-else>
            <p class="text-danger">No Results Found</p>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: "https://api.risingwork.com/",
      products: [],
      loading: false,
    };
  },
  methods: {
    async getProducts() {
        this.loading = true
      let query = this.$route.query.name;
      try {
        let res = await this.$http.get(`/all-products?name=${query}`);
        this.products = res.data.products.data;
        console.log(res.data.products.data);
      } catch (error) {
        console.log(error);
      }
      this.loading = false
    },
    viewProduct(slug) {
      this.$router.push({ name: "product-detail", params: { slug } });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>