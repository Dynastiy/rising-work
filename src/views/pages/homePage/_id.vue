<template>
  <div class="pb-3" style="background-color: var(--gray-100)">
    <div class="shadow-sm bg-light py-3">
      <div class="container small">
        <span> Home </span>
        <span> <IconComponent icon="uit:angle-double-right" /> </span>
        <span class="text-capitalize text-muted"> {{ product.name }} </span>
      </div>
    </div>

    <!-- View By Id, Web View  -->
    <div class="mt-3" id="">
      <div class="single_product position-relative">
        <section>
          <div class="container body--content">
            <div class="row">
              <div class="col-lg-8">
                <div class="mb-3">
                  <h4 class="text-capitalize" style="font-weight: 800">
                    {{ product.name }}
                  </h4>
                  <p class="text-secondary" v-if="product.reviews">
                    <span>
                      <b>Rating</b>
                      <IconComponent
                        color="#ffb20f"
                        icon="ant-design:star-filled"
                      />
                    </span>
                    <span> {{ product.reviews.length }} Reviews </span>
                  </p>
                </div>
                <Gallery
                  class="mb-2"
                  :starting-image="2"
                  :images="other_images"
                  :auto-slide-interval="1500"
                />

                <!-- Additional Features  -->
                <section class="features" style="">
                  <div class="mt-4">
                    <div class="mb-4" v-if="product.features.length !== 0">
                      <h4 class="m-0 text-dark mb-3 font-weight-bold">Additional Features</h4>
                      <div class="bg-white shadow-sm p-4">
                        <div
                          class="row additional-items mb-2"
                          role="button"
                          v-for="feature in product.features"
                          :key="feature.id"
                        >
                          <input
                            type="checkbox"
                            class="col select-feature"
                            :id="feature.id"
                            :value="feature"
                            v-model="cartItem"
                            @change="addPrice"
                          />
                          <label
                            :for="feature.id"
                            class="col-11 m-0 text-capitalize"
                          >
                            <div class="d-flex justify-content-between">
                              <div class="">
                                <h5 class="font-weight-bold">
                                  {{ feature.name }}
                                </h5>
                                <h6 class="text-secondary">
                                  {{ feature.name }}
                                </h6>
                              </div>
                              <h3 class=" font-weight-bold">+${{ feature.price }}</h3>
                            </div>
                          </label>
                        </div>
                      </div>

                      <hr />
                      <div class="description mb-4 mt-2">
                        <!-- <p class="text-capitalize"> {{ product.description }} </p> -->
                        <div v-html="product.description"></div>
                      </div>

                      <div>
                        <div class="ratings--reviews bg-white p-3 shadow-sm">
                          <div class="">
                            <div class="">
                              <h4 class="font-weight-bold">
                                Reviews
                                <span class="small">
                                  ({{ reviews.length }} Reviews)
                                </span>
                              </h4>
                            </div>
                            <div v-if="posting">
                              <p class="text-danger">Posting...</p>
                            </div>
                            <div v-if="reviews.length === 0" class="mt-3">
                              <span class="cancelled"
                                >No Reviews for this product yet</span
                              >
                            </div>
                            <div v-else>
                              <div
                                v-for="review in reviews"
                                class="d-flex mt-3"
                                style="gap: 20px"
                                :key="review.id"
                              >
                                <div>
                                  <span
                                    class="b user--avatar"
                                    :class="[review.reviewer_name.charAt(0)]"
                                  >
                                    {{ review.reviewer_name.charAt(0) }}
                                  </span>
                                </div>
                                <div class="">
                                  <h5>{{ review.reviewer_name }}</h5>
                                  <p class="small">{{ review.comment }}</p>
                                  <small class="text-secondary"
                                    >Posted {{ timeStamp(review.created_at) }}
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-lg-4">
                <div
                  class="item--details content add-sticky bg-white content"
                  id="plans"
                >
                  <div
                    class="
                      select--plan
                      shadow-sm
                      mb-3
                      d-flex
                      flex-column
                      justify-content-between
                    "
                    style="min-height: 500px"
                    v-if="plan"
                  >
                    <div>
                      <div>
                        <h4
                          class="
                            text-uppercase text-dark
                            font-weight-bold
                            text-center
                            py-3
                          "
                        >
                          {{ plan.name }}
                        </h4>
                      </div>
                      <!-- <label for="" class="m-0 d-block text-capitalize text-dark"> Select Plan to add to Cart </label> -->
                      <div class="d-flex align-items-center">
                        <div
                          class="plan--selector w-100"
                          id="myDIV"
                          v-for="plan in plansObj"
                          :key="plan.id"
                        >
                          <div
                            role="button"
                            class="
                              text-center
                              py-2
                              nav--item
                              bg-light
                              w-100
                              text
                            "
                            :class="{ active: isActive === plan.id }"
                            @click="selectPlan(plan)"
                          >
                            <span
                              class="m-0 font-weight-bold"
                              style="font-size: 18px"
                              >${{ plan.price }}</span
                            >
                            <!-- <span> {{ plan.name }} </span>  -->
                          </div>
                        </div>
                      </div>

                      <div class="p-3">
                        <div class="">
                          <span class="" v-if="plan.delivery_time !== 'null'">
                            <span
                              class="material-icons"
                              style="font-size: 15px"
                            >
                              event_repeat
                            </span>
                            {{ plan.delivery_time }} Days Delivery</span
                          >
                          <span v-else>Not Specified</span>
                        </div>

                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            mt-3
                          "
                          style="gap: 10px"
                          v-for="plan_desc in plan.descriptions"
                          :key="plan_desc.id"
                        >
                          <span
                            class="d-block text-secondary text-capitalize"
                            style="font-size: 15px"
                          >
                            {{ plan_desc.name }}
                          </span>

                          <div>
                            <span
                              v-if="plan_desc.status == 'available'"
                              class="material-icons d-block"
                              style="font-size: 20px; color: green"
                            >
                              check
                            </span>
                            <span
                              v-else
                              class="material-icons d-block"
                              style="font-size: 20px; color: red"
                            >
                              close
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4 py-3 px-2">
                      <div
                        role="button"
                        class="add-to-cart text-center py-2"
                        @click="addToCart"
                      >
                        <span class="material-icons" style="font-size: 14px">
                          shopping_cart
                        </span>
                        <span> Add to Cart </span>
                        <span v-if="product.price !== 'null'"
                          >(${{ product.price }})</span
                        >
                        <span v-else>(Free)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="container" id="featured">
      <!-- Feature Products  -->
      <div class="featured--products mb-4">
        <div class="mt-4">
          <h4 class="mb-4 font-weight-bold">Related Services</h4>
          <section class="cards content">
             <div class="professional__card" v-for="product in products.data" :key="product.id">
            <div class="card__top" role="button" @click="viewProduct(product.slug)">
            <img :src="`${url}/services/photos/${product.app_icon}`" alt="">
            </div>
            <div class="d-flex justify-content-between p-2">
              <h5 class="font-weight-bold text-dark" style="font-size:14px">{{ product.name }}</h5>
                <h6 class="text-right"> From <span class="text-dark font-weight-bold">${{ product.price }}</span> </h6>
            </div>
            <div class="rating--section p-2 d-flex justify-content-between">
              <span class="" style="font-size:14px"> <b class="text-dark">Rating</b> {{ product.avg_ratings || 0 }} <IconComponent color="#ffb20f" icon="ant-design:star-filled" /> </span> 
                <span class="" style="font-size:12px"> {{ product.delivery_time }} Day<span v-if="product.delivery_time > 1">s</span> <span class="">Delivery</span> </span> 
            </div>
          </div>
          </section>
          <router-link
            to="/categories"
            class="d-flex align-items-center mt-4 text-dark font-weight-bold"
            style="gap: 20px"
          >
            <span>All Services</span>
            <span class="material-icons"> arrow_forward </span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sticky from "vue-sticky-directive";
import {
  nairaFilter,
  percentFilter,
  percentageFilter,
  timeStamp,
} from "@/plugins/filters.js";
import Gallery from "@/components/galleryView.vue";
// import GalleryMobile from '@/components/galleryViewMobile.vue'
// import Plans from '@/components/plansView.vue'
export default {
  directives: { Sticky },
  components: {
    Gallery,
    // GalleryMobile,
  },
  data() {
    return {
      nairaFilter,
      percentFilter,
      percentageFilter,
      timeStamp,
      addItem: false,
      product: {},
      other_images: [],
      slug: this.$route.params.slug,
      item_id: "",
      dataObj: {},
      plansObj: [],
      comment: "",
      reviews: "",
      posting: false,
      rating: "",
      cart: [],
      cartItem: [],
      selected_plan: "",
      isActive: true,
      plan_id: "",
      feature_id: "",
      total_amount: "",
      products: [],
      url: "https://api.risingwork.com/",
      plan: {},
    };
  },
  methods: {
    selectPlan(plan) {
      this.isActive = this.isActive === plan.id ? null : plan.id;
      this.addItem = true;
      console.log(plan);
      this.findPlan(plan.id);
      this.plan_id = plan.id;
      this.selected_plan = plan.price;
      console.log(this.selected_plan);
      this.addPrice();
    },
    findPlan(plan) {
      this.$axios.get(`/get-plan-description/${plan}`).then((res) => {
        console.log(res);
        this.plan = res.data;
      });
    },
    async getTrending() {
      try {
        let res = await this.$http.get("/trending-products");
        this.products = res.data.trending_products;
        console.log(res.data.trending_products);
      } catch (error) {
        console.log(error);
      }
    },
    viewProduct(slug) {
      this.$router.push({ name: "product-detail", params: { slug } });
    },
    addPrice() {
      console.log(this.cartItem);
      let totalPrice = this.cartItem.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);

      this.product.price = totalPrice + this.selected_plan;
      this.total_amount = totalPrice + this.selected_plan;
      console.log(totalPrice);
    },
    async addItemToCart() {
      // var sub_array = [];
      for (let item of this.cartItem) {
        // sub_array.push(item.id);
        this.feature_id = item.id;
        // super_array.push(sub_array.slice(0));
      }
      let formData = new FormData();
      formData.append("product_id", this.product.id);
      formData.append("plan_id", this.plan_id);
      formData.append("product_name", this.product.name);
      formData.append("feature_id", this.feature_id);
      formData.append("total_amount", Number(this.total_amount));
      try {
        let res = await this.$axios.post("/add-to-cart", formData);
        console.log(res);
        this.$router.push("/cart/checkout");
      } catch (error) {
        console.log(error);
        this.$toastify({
          text: `Select only one feature please`,
          className: "info",
          style: {
            background: "red",
          },
        }).showToast();
      }
    },
    async addToCart() {
      if (!this.$store.getters.isLoggedIn) {
        for (let item of this.cartItem) {
          // sub_array.push(item.id);
          this.feature_id = item.id;
          // super_array.push(sub_array.slice(0));
        }
        let payload = {};
        payload = {
          product_id: this.product.id,
          plan_id: this.plan_id,
          product_name: this.product.name,
          feature_id: this.feature_id,
          total_amount: this.total_amount,
        };
        console.log(payload);
        // this.$router.push({ name: 'login' })
        this.$store.dispatch("addCart", { payload });
        let url = "/cart/checkout";
        this.$router.push({ name: "login", query: { return_url: url } });
      } else {
        this.addItemToCart();
      }
    },
    async getProductId() {
      try {
        let res = await this.$http.get(`/show-product/${this.slug}`);
        this.item_id = res.data.product;
        console.log(this.item_id);
        this.product = res.data.product;
        this.rating = res.data;
        this.dataObj = res.data.product;
        let dataObj = res.data.product;
        let other_images = [
          {
            id: "1",
            big:
              "https://api.risingwork.com/services/photos/" + dataObj.app_icon,
            thumb:
              "https://api.risingwork.com/services/photos/" + dataObj.app_icon,
          },
          {
            id: "2",
            big:
              "https://api.risingwork.com/services/photos/" + dataObj.photo_one,
            thumb:
              "https://api.risingwork.com/services/photos/" + dataObj.photo_one,
          },
          {
            id: "3",
            big:
              "https://api.risingwork.com/services/photos/" + dataObj.photo_two,
            thumb:
              "https://api.risingwork.com/services/photos/" + dataObj.photo_two,
          },
          {
            id: "4",
            big:
              "https://api.risingwork.com/services/photos/" +
              dataObj.photo_three,
            thumb:
              "https://api.risingwork.com/services/photos/" +
              dataObj.photo_three,
          },
          {
            id: "5",
            big:
              "https://api.risingwork.com/services/photos/" +
              dataObj.photo_four,
            thumb:
              "https://api.risingwork.com/services/photos/" +
              dataObj.photo_four,
          },
          {
            id: "6",
            big:
              "https://api.risingwork.com/services/photos/" +
              dataObj.photo_five,
            thumb:
              "https://api.risingwork.com/services/photos/" +
              dataObj.photo_five,
          },
        ];
        this.other_images = other_images;
        this.reviews = res.data.product.reviews;
        this.plansObj = res.data.product.plans;
        let plan_id = res.data.product.plans[0].id;
        console.log(plan_id);
        this.plan_id = plan_id;
        this.findPlan(plan_id);
        this.isActive = this.isActive === plan_id ? null : plan_id;
        // this.getProduct()
      } catch (error) {
        console.log(error);
      }
    },

    async addReview() {
      this.posting = true;
      let dataObj = {
        comment: this.comment,
        product_id: this.item_id,
      };
      try {
        let res = await this.$axios.post("/create-review/", dataObj);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      this.posting = false;
      this.comment = "";
      // this.getProductId();
      this.getProduct();
    },
  },
  mounted() {
    console.log(this.other_images);
    this.getProductId();
    this.getTrending();
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>

<style scoped>
div.add-sticky {
  position: -webkit-sticky;
  position: sticky !important;
  top: 0;
}
</style>