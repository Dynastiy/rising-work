<template>
  <div>
    <!-- Listing by category -->
    <div class="shadow-sm bg-light py-3">
      <div class="container">
        <span> Home </span>
        <span> <IconComponent icon="uit:angle-double-right" /> </span>
        <span class="text-capitalize text-secondary"> Products </span>
      </div>
    </div>

    <div v-if="loading" class="container my-4">
      <p>Searching . . .</p>
    </div>

    <div
      v-else-if="products.length !== 0"
      class="featured--products mb-4 container"
    >
      <div class="mt-4">
        <!-- <h1 class="mb-4">All Services</h1> -->
        <div>
          <div>
            <div class="">
              <section class="cards content">
                <div
                  class="professional__card"
                  v-for="product in products"
                  :key="product.id"
                >
                  <div
                    class="card__top"
                    role="button"
                    @click="viewProduct(product.slug)"
                  >
                    <img
                      :src="`${url}/services/photos/${product.app_icon}`"
                      alt=""
                    />
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <h5
                      class="font-weight-bold text-dark"
                      style="font-size: 14px"
                    >
                      {{ product.name }}
                    </h5>
                    <h6 class="text-right">
                      From
                      <span class="text-dark font-weight-bold"
                        >${{ product.price }}</span
                      >
                    </h6>
                  </div>
                  <div
                    class="rating--section p-2 d-flex justify-content-between"
                  >
                    <span class="" style="font-size: 14px">
                      <b class="text-dark">Rating</b>
                      {{ product.avg_ratings || 0 }}
                      <IconComponent
                        color="#ffb20f"
                        icon="ant-design:star-filled"
                      />
                    </span>
                    <span class="" style="font-size: 12px">
                      {{ product.delivery_time }} Day<span
                        v-if="product.delivery_time > 1"
                        >s</span
                      >
                      <span class="">Delivery</span>
                    </span>
                  </div>
                </div>
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
      this.loading = true;
      let query = this.$route.query.name;
      try {
        let res = await this.$http.get(`/all-products?name=${query}`);
        this.products = res.data.products.data;
        console.log(res.data.products.data);
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
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