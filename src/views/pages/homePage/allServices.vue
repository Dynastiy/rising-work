<template>
    <div>
        <div class="top-categories">
            <div class="container">
                <h1 class="" style="font-size:3.2rem">The Product you need.</h1>
                <h2 class="w-50" style="font-size:2rem">Find the product needed to get your business growing.</h2>
            </div>
        </div>

         <div class="trusted--by">
            <div class="container">
            <Slider/>
            </div>
        </div>

        <!-- Listing by category -->
        <div class="featured--products mb-4 container">
        <div class="mt-4">
          <h1 class="mb-4">All Services</h1>
          <div>
            <div v-for="item in products" :key="item.id" class="mb-5">
                <div>
                    <h4 class="mb-3 text-dark">{{ item.category_name }}</h4>
                    <div  v-if="item.products.length === 0 ">
                        <span class="cancelled">No Products in this category</span>
                    </div>
                    <div v-else>
                        <div class="">
                            <section class="cards content">
                                <article class="card card--1" v-for="product in item.products" :key="product.id">
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
import Slider from '@/components/static/sponsorSlider.vue'
export default {
    components:{
        Slider
    },
    data(){
        return{
            url: 'https://api.risingwork.com/',
           products:[]
        }
    },
    methods:{
        async getProducts(){
            try {
                let res = await this.$http.get('/all-categories') 
                this.products = res.data.categories
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        },
        viewProduct(slug){ 
            this.$router.push({ name: 'product-detail', params: { slug } })
        },
        
    },
    mounted(){
        this.getProducts()
    }
}
</script>