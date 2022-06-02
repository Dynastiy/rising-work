<template>
    <div class="pb-3" style="background-color: var(--gray-100)">
        <div class=" shadow-sm bg-light py-3">
           <div class="container">
               <span> Home </span>
               <span> <IconComponent icon="uit:angle-double-right"/> </span>
               <span class="text-capitalize text-muted"> {{ product.name }} </span>
           </div>
        </div>

        <!-- View By Id, Web View  -->
        <div class="mt-4">
            
            <div class="single_product">
                <!-- <h1 class="text-capitalize"> {{ product.name }} </h1>
                <p> <span v-if="rating.avg_rating !== null ">Rating {{ rating.avg_rating }}</span> {{ rating.total_reviews}}  reviews</p> -->
                <section>
                    <div class="container body--content">
                        <div>
                            <div class=" mb-3">
                                <h4 class="font-weight-bold text-capitalize">
                                    {{ product.name }}
                                </h4>
                                <!-- <p class="small font-weight-bold text-uppercase" style="color:var(--primary-color)" v-if="product.category"><span class="text-dark">Category:</span> {{ product.category.category_name }} </p> -->
                                <p class="text-secondary" v-if="product.reviews"> <span> <b>Rating</b> <IconComponent color="#ffb20f" icon="ant-design:star-filled" /> </span> <span> {{ product.reviews.length }} Reviews </span></p>
                            </div>
                            <Gallery :dataObj="dataObj"/>
                        </div>
                       <div class="">
                            <div class="item--details content" id="plans">

                            <div class="bg-white content" >
                                
                                <div class="select--plan shadow-sm mb-3 d-flex flex-column justify-content-between" style="min-height:500px" v-if="plan">
                                    <div >
                                        <div>
                                        <h5 class="text-uppercase text-dark text-center py-3"> {{ plan.name }} </h5>
                                    </div>
                                    <!-- <label for="" class="m-0 d-block text-capitalize text-dark"> Select Plan to add to Cart </label> -->
                                   <div class="d-flex align-items-center">
                                       <div class="plan--selector w-100" id="myDIV" v-for="plan in plansObj" :key="plan.id" >
                                            <div role="button"  class="text-center py-2 nav--item bg-light w-100 text" :class="{ active: (isActive === plan.id) }" @click="selectPlan(plan)">
                                                <span class="m-0"  style="font-size: 15px">${{ plan.price}}</span>  
                                                <!-- <span> {{ plan.name }} </span>  -->
                                            </div>
                                        </div>
                                   </div>

                                   <div class="p-3">
                                       <div class="">
                                           <span class="" v-if="plan.delivery_time !== 'null' ">
                                           <span class="material-icons " style="font-size:15px" >
                                                event_repeat
                                            </span> {{ plan.delivery_time }} Days Delivery</span> <span v-else>Not Specified</span> 
                                       </div>
                                       
                                       <div class="d-flex align-items-center mt-3" style="gap:10px" v-for="plan_desc in plan.plan_descriptions" :key="plan_desc.id">
                                           <span class="material-icons text-success" style="font-size:24px" >
                                                task_alt
                                            </span>
                                            <span style="font-size:15px"> {{ plan_desc.name }} </span>
                                       </div>
                                   </div>
                                    </div>

                                    <div class="d-flex align-items-center mt-4 bg-light py-3 justify-content-between px-3" style="gap:30px">
                                <div>
                                    <h3 style="color: var(--primary-color)"><span v-if="product.price !== 'null' ">${{ product.price }}</span> <span v-else>Free</span> </h3>
                                </div>
                                <div v-show="addItem" role="button" class="add-to-cart shadow-lg" @click="addToCart"> 
                                    <span class="material-icons" style="font-size:12px">
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
                        </div>
                    </div>

                    <hr>
                   <section class="container features mt-5" style="" id="featured">
                        <div>
                            <div class="mb-4">
                            <h4 class="m-0 text-dark mb-3">Additional Features</h4>
                            <div class="bg-white shadow-sm p-4">
                                <div class="row additional-items mb-2" role="button" v-for="feature in product.features" :key="feature.id">
                                <input type="checkbox" class="col select-feature" :id="feature.id" :value="feature" v-model="cartItem" @change="addPrice">
                                <label :for="feature.id" class="col-11 m-0 text-capitalize"> 
                                    <div class="row">
                                        <div class="col-9">
                                            <h5 >
                                            {{ feature.name }}
                                            </h5> 
                                            <h6 class="text-secondary">
                                                {{ feature.name }}
                                            </h6>
                                        </div>
                                        <h2 class="col-3">+${{ feature.price }}</h2>
                                    </div> 
                                </label>
                            </div>
                            </div>
                        </div>

                        <hr>
                        <div class="description my-4">
                                <!-- <p class="text-capitalize"> {{ product.description }} </p> -->
                                 <div v-html="product.description"></div>
                        </div>

                        <div>
                            <div class="ratings--reviews bg-white p-3 shadow-sm " >
                                    <!-- <div class="ratings ">
                                        <h3 v-if="reviews">{{ reviews.length }} Reviews</h3>
                                    </div> -->

                                    <div class="">
                                        <div class="">
                                            <h5> Reviews <span class="small"> ({{ reviews.length }} Reviews) </span> </h5>
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
                                        <!-- <div class="mt-4" v-show="loggedIn">
                                            
                                            <form action="" @submit.prevent="addReview">
                                                <div class="add--review">
                                                    <input type="text" v-model="comment" placeholder="Enter a Review">
                                                    <button type="submit" style="background-color: transparent; border:none">
                                                        <IconComponent icon="akar-icons:send" style="font-size:30px"/>
                                                    </button>
                                                </div>
                                            </form>
                                            
                                        </div> -->
                                    </div>
                            </div>
                        </div>
                        </div>
                   </section>

                   
                </section>
            </div>
        </div>
        
       

        <div class="container" >
            <!-- Feature Products  -->
            <div class="featured--products mb-4">
                <div class="mt-4">
                <h2 class="mb-4">Related Services</h2>
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
                <router-link to="/categories" class="d-flex align-items-center mt-4 text-dark font-weight-bold" style="gap:20px"> <span>All Services</span>  <span class="material-icons">
                arrow_forward
                </span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { nairaFilter, percentFilter, percentageFilter, timeStamp } from '@/plugins/filters.js'
import Gallery from '@/components/galleryView.vue'
// import GalleryMobile from '@/components/galleryViewMobile.vue'
// import Plans from '@/components/plansView.vue'
export default {
    components:{
        Gallery, 
        // GalleryMobile,
    },
     data(){
        return {
            nairaFilter, percentFilter, percentageFilter, timeStamp,
            addItem: false,
            product: {},
            slug: this.$route.params.slug,
            item_id: '',
            dataObj: {},
            plansObj: [],
            comment: '',
            reviews: '',
            posting: false,
            rating: '',
            cart: [],
            cartItem: [],
            selected_plan: '',
            isActive: true,
            plan_id: '',
            feature_id: '',
            total_amount:'',
            products: [],
            url: 'https://api.risingwork.com/',
            plan: {}
        }
    },
    methods:{
        selectPlan(plan){
            this.isActive = ( this.isActive === plan.id ) ? null : plan.id;
            this.addItem = true;
            console.log(plan);
            this.findPlan(plan.id);
            this.plan_id = plan.id
            this.selected_plan = plan.price;
            console.log(this.selected_plan);
            this.addPrice()
        },
        findPlan(plan){
            this.$axios.get(`/find-plan/${plan}`)
            .then((res)=>{
                console.log(res);
                this.plan = res.data.plan
            })
        },
        async getTrending(){
            try {
                let res = await this.$http.get('/trending-products') 
                this.products = res.data.trending_products
                console.log(res.data.trending_products);
            } catch (error) {
                console.log(error);
            }
        },
        viewProduct(slug){ 
            this.$router.push({ name: 'product-detail', params: { slug } })
        },
        addPrice(){
            console.log(this.cartItem);
                let totalPrice = this.cartItem.reduce((accumulator, item) => {
                    return accumulator + item.price;
                }, 0);

            this.product.price = totalPrice + this.selected_plan;
            this.total_amount = totalPrice + this.selected_plan;
            console.log(totalPrice);
        },
        async addItemToCart(){
            // var sub_array = [];
            for (let item of this.cartItem) {
                // sub_array.push(item.id);
                this.feature_id = item.id
                // super_array.push(sub_array.slice(0));
            }
            let formData = new FormData()
            formData.append("product_id", this.product.id)
            formData.append("plan_id", this.plan_id)
            formData.append("product_name", this.product.name)
            formData.append("feature_id", this.feature_id)
            formData.append("total_amount", Number(this.total_amount))
            try {
                let res = await this.$axios.post('/add-to-cart', formData)
                console.log(res);
                this.$router.push('/cart/checkout')
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
        async addToCart(){
            if(!this.$store.getters.isLoggedIn){
                for (let item of this.cartItem) {
                // sub_array.push(item.id);
                this.feature_id = item.id
                // super_array.push(sub_array.slice(0));
            }
                let payload = {};
                payload = {product_id: this.product.id, plan_id: this.plan_id, product_name: this.product.name, feature_id: this.feature_id, total_amount: this.total_amount}
                console.log(payload);
                // this.$router.push({ name: 'login' })
                this.$store.dispatch("addCart", { payload });
                let url = '/cart/checkout'
                this.$router.push({ name: 'login', query: {return_url: url } });
                
            }
            else {
                this.addItemToCart();
            }
        },
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
                let plan_id = res.data.product.plans[0].id
                console.log(plan_id);
                this.plan_id = plan_id
                this.findPlan(plan_id);
                this.isActive = ( this.isActive === plan_id ) ? null : plan_id;
                // this.getProduct()
            } catch (error) {
                console.log(error);
            }
        },
       
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
            this.getTrending()
            window.onscroll = function() {myFunction()};
            var navbar = document.getElementById("plans")
            var featuredItems = document.getElementById('featured')
            // var sticky = navbar.offsetTop;
            var sticky2 = featuredItems.offsetTop;
            function myFunction() {
                if (window.pageYOffset < sticky2) {
                navbar.classList.add("sticky")
                }
                
                // else if(window.pageYOffset >= sticky2) {
                //     navbar.classList.remove("sticky")
                // }
                else {
                navbar.classList.remove("sticky");
                }
            }
    },
    computed:{
      loggedIn(){
        return this.$store.getters.isLoggedIn
      }
    }
}
</script>

<style>
    .sticky {
  position: fixed;
  top: 0;
  width: 30%;
  z-index: 999;
  padding-top: 160px ;
}
</style>