<template>
    <div class="pb-3">
        <div class=" shadow-lg py-3">
           <div class="container">
               <span> Home </span>
               <span> <IconComponent icon="uit:angle-double-right"/> </span>
               <span class="text-capitalize"> {{ product.name }} </span>
           </div>
        </div>
        <div class="container mt-4">
            <div class="single_product">
                <!-- <h1 class="text-capitalize"> {{ product.name }} </h1>
                <p> <span v-if="rating.avg_rating !== null ">Rating {{ rating.avg_rating }}</span> {{ rating.total_reviews}}  reviews</p> -->
                <section>
                    <div class="body--content shadow-lg">
                        <div>
                            <Gallery :dataObj="dataObj"/>
                        </div>
                       <div class="">
                            <div class="item--details">
                                <div class="">
                                <h1 class="font-weight-bold text-uppercase">
                                    {{ product.name }}
                                </h1>
                                <p class="small font-weight-bold text-uppercase" style="color:var(--primary-color)"><span class="text-dark">Category:</span> {{ product.category.category_name }} </p>
                            </div>
                            <div class="d-flex align-items-center mt-4" style="gap:30px">
                                <div>
                                    <label for="" class="m-0">Select Plan</label>
                                    <div class="dropdown ">
                                        <button class="select--more dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                        <!-- <span class="text-dark material-icons" type="button" id="dropdownMenuButton" data-toggle="dropdown" > -->
                                            Select Plan
                                        <!-- </span> -->
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div class="px-3 d-flex align-items-center" style="gap:10px" v-for="plan in plansObj" :key="plan.id">
                                                <input type="checkbox" name="" id="">
                                                <label for="" class="m-0 text-capitalize"> {{ plan.name }} </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label  for="" class="m-0">Select Additional Features</label>
                                    <div class="dropdown ">
                                        <button class="select--more dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                        <!-- <span class="text-dark material-icons" type="button" id="dropdownMenuButton" data-toggle="dropdown" > -->
                                            Select Additional Features
                                        <!-- </span> -->
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div class="px-3 d-flex align-items-center" style="gap:10px" v-for="feature in product.features" :key="feature.id">
                                                <input type="checkbox" name="" id="">
                                                <label for="" class="m-0 text-capitalize"> {{ feature.name }} </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="description mt-4">
                                <h2 class="text-uppercase"> about {{ product.name }} </h2>
                                <p> {{ product.description }} </p>
                            </div>

                            <div class="d-flex align-items-center" style="gap:30px">
                                <div>
                                    <h1>$300</h1>
                                </div>
                                <div role="button" class="add-to-cart shadow-lg" > 
                                    <span class="material-icons" style="font-size:14px">
                                        shopping_cart
                                    </span>
                                   <span>
                                        Add to Cart
                                   </span>
                                   
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>

                    <section class="ratings--reviews bg-white py-4">
                                <div class="ratings ">
                                    <h3 v-if="reviews">{{ reviews.length }} Reviews</h3>
                                </div>

                                <div class="mt-3">
                                    <div class="">
                                        <h4> Reviews</h4>
                                    </div>
                                    <div v-if="posting">
                                        <p class="text-danger">Posting...</p>
                                    </div>
                                    <div  v-if="reviews.length === 0 " class="mt-3">
                                        <span  class="cancelled">No Reviews for this product yet</span>
                                    </div>
                                    <div v-else >
                                        <div v-for="review in reviews" class="d-flex mt-3" style="gap:20px" :key="review.id">
                                            <div>
                                                <span class="b user--avatar" :class="[review.reviewer_name.charAt(0)]">
                                                    {{ review.reviewer_name.charAt(0) }}
                                                </span>
                                            </div>
                                            <div class="">
                                                <h5> {{ review.reviewer_name }} </h5>
                                                <p class="small"> {{ review.comment }} </p>
                                                <small class="text-secondary">Posted {{ timeStamp(review.created_at) }} </small>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Add Review  -->
                                    <div class="mt-4" v-show="loggedIn">
                                        
                                        <form action="" @submit.prevent="addReview">
                                            <div class="add--review">
                                                <input type="text" v-model="comment" placeholder="Enter a Review">
                                                <button type="submit" style="background-color: transparent; border:none">
                                                    <IconComponent icon="akar-icons:send" style="font-size:30px"/>
                                                </button>
                                            </div>
                                        </form>
                                        
                                    </div>
                                </div>
                            </section>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { nairaFilter, percentFilter, percentageFilter, timeStamp } from '@/plugins/filters.js'
import Gallery from '@/components/galleryView.vue'
// import Plans from '@/components/plansView.vue'
export default {
    components:{
        Gallery
    },
     data(){
        return {
            nairaFilter, percentFilter, percentageFilter, timeStamp,
            product: {},
            slug: this.$route.params.slug,
            item_id: '',
            dataObj: {},
            plansObj: [],
            comment: '',
            reviews: '',
            posting: false,
            rating: ''
        }
    },
    methods:{
        async getProductId(){
            try {
                let res = await this.$http.get(`/show-product/${this.slug}`)
                this.item_id = res.data.product
                console.log(this.item_id);
                this.product = res.data.product
                this.rating = res.data
                this.dataObj = res.data.product
                this.reviews = res.data.product.reviews;
                this.plansObj = res.data.product.plans
                // this.getProduct()
            } catch (error) {
                console.log(error);
            }
        },
        // async getProduct(){
        //      try {
        //         let res = await this.$http.get(`/find-product/${this.item_id}`)
        //         this.product = res.data.product
        //         this.dataObj = res.data.product
        //         this.reviews = res.data.product.reviews;
        //         console.log(res);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
        
        async addReview(){
            this.posting = true;
            let dataObj = {
                comment: this.comment,
                product_id: this.item_id
            }
            try {
                let res = await this.$axios.post('/create-review/', dataObj)
                console.log(res);
            } catch (error) {
                console.log(error);
            }
            this.posting = false;
            this.comment = "";
            // this.getProductId();
            this.getProduct();
        }
    },
    mounted(){
        this.getProductId()
        // this.getProduct();
        
    },
    computed:{
      loggedIn(){
        return this.$store.getters.isLoggedIn
      }
    }
}
</script>

<style>

</style>