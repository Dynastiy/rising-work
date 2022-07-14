<template>
  <div>
    <div class="top-categories">
      <div class="container">
        <h1 class="font-weight-bold" style="font-size: 3.2rem">The Product you need.</h1>
        <h3 class="w-50 font-weight-bold text-white" style="font-size: 2rem">
          Find the product needed to get your business growing.
        </h3>
      </div>
    </div>

    <div class="trusted--by">
      <div class="container">
        <Slider />
      </div>
    </div>

    <!-- Listing by category -->
    <div class="featured--products mb-4 container">
      <div class="mt-4">
        <h3 class="mb-4 font-weight-bold">All Services</h3>
        <div>
          <div v-for="item in products" :key="item.id" class="mb-5">
            <div>
              <h5 class="mb-3 font-weight-bold text-dark">
                {{ item.category_name }}
              </h5>
              <div v-if="item.products.length === 0">
                <span class="cancelled">No Products in this category</span>
              </div>
              <div v-else>
                <div class="">
                  <section class="cards content">
                    <div
                      class="professional__card"
                      v-for="product in item.products"
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
                        class="
                          rating--section
                          p-2
                          d-flex
                          justify-content-between
                        "
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
                <!-- <div v-for="product in item.products" :key="product.id" class="content">
                            <div class="creative--services creative--services1" :style="{ 'background-image': `url(${url}/services/photos/${product.app_icon})` }" role="button" @click="viewProduct(product.slug)">
                                <div>
                                    <hr class="bg-white w-50" style="height:2px">
                                    <h3 class="text-capitalize"> {{ product.name }} </h3>
                                    <h5>Start at ${{product.price}}</h5>
                                </div>
                            </div>
                        </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/static/sponsorSlider.vue";
export default {
  components: {
    Slider,
  },
  data() {
    return {
      url: "https://api.risingwork.com/",
      products: [],
    };
  },
  methods: {
    async getProducts() {
      try {
        let res = await this.$http.get("/all-categories");
        this.products = res.data.categories;
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
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