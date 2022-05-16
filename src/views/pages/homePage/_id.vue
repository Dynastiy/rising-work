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
                                <p class="small font-weight-bold text-uppercase" style="color:var(--primary-color)" v-if="product.category"><span class="text-dark">Category:</span> {{ product.category.category_name }} </p>
                            </div>
                            <div class="mt-3">
                                <div class="select--plan mb-3">
                                    <label for="" class="m-0 d-block text-capitalize text-dark"> Select Plan to add to Cart </label>
                                   <div class="d-lg-flex" style="gap:20px">
                                       <div class="plan--selector mb-2" id="myDIV" v-for="plan in plansObj" :key="plan.id" >
                                            <button class="nav--item" :class="{ active: (isActive === plan.id) }" @click="selectPlan(plan)">{{ plan.name}}</button>
                                        </div>
                                   </div>
                                </div>
                                <div>
                                    <label  for="" class="m-0 text-dark">Select Additional Features</label>
                                    <div class="d-flex align-items-center mb-2" style="gap:10px" v-for="feature in product.features" :key="feature.id">
                                        <input type="checkbox" :id="feature.id" :value="feature" v-model="cartItem" @change="addPrice">
                                        <label :for="feature.id" class="m-0 text-capitalize d-flex " style="gap:30px"> <span>
                                            {{ feature.name }}
                                        </span> <span>${{ feature.price }}</span> </label>
                                    </div>
                                </div>
                            </div>
                            <div class="description mt-4">
                                
                                <h4 class="text-uppercase text-dark font-weight-bold"> about {{ product.name }} </h4>
                                <p class="small text-capitalize"> {{ product.description }} </p>
                            </div>

                            <div class="d-flex align-items-center mt-4" style="gap:30px">
                                <div>
                                    <h1>${{ product.price }} </h1>
                                </div>
                                <div v-show="addItem" role="button" class="add-to-cart shadow-lg" @click="addToCart"> 
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
        }
    },
    methods:{
        selectPlan(plan){
            this.isActive = ( this.isActive === plan.id ) ? null : plan.id;
            this.addItem = true;
            console.log(plan);
            this.plan_id = plan.id
            this.selected_plan = plan.price;
            console.log(this.selected_plan);
            this.addPrice()
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
                let url = '/cart/checkout'
                this.$router.push({ name: 'login', query: {return_url: url } })
                // this.$router.push({ name: 'login' })
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