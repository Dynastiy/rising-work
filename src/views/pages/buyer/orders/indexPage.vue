<template>
    <div>
        <!-- <h2>User Dashboard</h2> -->
        <!-- Analytics  -->
        <section class="my-4 analytics">
            <div class="price--options-1 price--options">
                <h6 class="text-muted text-uppercase small">Total Orders</h6>
                <div class="d-flex mt-3 justify-content-between">
                    <h1 class="text-info">
                        {{ orders.orders_count }}
                    </h1>
                    <IconComponent class="text-info" style="font-size:40px" icon="carbon:cost-total" />
                </div>
            </div>
            <div class="price--options-1 price--options">
                <h6 class="text-muted text-uppercase small">Delivered Transactions</h6>
                <div class="d-flex mt-3 justify-content-between">
                    <h1 class="text-success">
                        {{ order.delivered_orders_count }}
                    </h1>
                    <IconComponent class="text-success" style="font-size:40px" icon="carbon:cost-total" />
                </div>
            </div>
            <div class="price--options-1 price--options">
                <h6 class="text-muted text-uppercase small">completed orders</h6>
                <div class="d-flex mt-3 justify-content-between">
                    <h1 class="text-primary">
                        {{ order.completed_orders_count }}
                    </h1>
                    <IconComponent class="text-primary" style="font-size:40px" icon="carbon:cost-total" />
                </div>
            </div>
            <div class="price--options-1 price--options">
                <h6 class="text-muted text-uppercase small">Pending Transactions</h6>
                <div class="d-flex mt-3 justify-content-between">
                    <h1 class="text-warning">
                        {{ order.pending_orders_count }}
                    </h1>
                    <IconComponent class="text-warning" style="font-size:40px" icon="carbon:cost-total" />
                </div>
            </div>
            <div class="price--options-1 price--options">
                <h6 class="text-muted text-uppercase small">Inprogress Transactions</h6>
                <div class="d-flex mt-3 justify-content-between">
                    <h1 class="text-info">
                        {{ order.inprogress_orders_count }}
                    </h1>
                    <IconComponent class="text-info" style="font-size:40px" icon="carbon:cost-total" />
                </div>
            </div>
            <div class="price--options-1 price--options">
                <h6 class="text-muted text-uppercase small">Cancelled Transactions</h6>
                <div class="d-flex mt-3 justify-content-between">
                    <h1 class="text-danger">
                        {{ order.canceled_orders_count }}
                    </h1>
                    <IconComponent class="text-danger" style="font-size:40px" icon="carbon:cost-total" />
                </div>
            </div>
        </section>

        <!-- Transactions Table  -->
        <section class="mt-4 mb-5">
            <h3 class="text-bold">All Transactions</h3>
             <div class="mt-4 other--tables bg-white p-3  shadow-sm">
                     <div class="table-responsive">
                            <table class="table table-centered table-nowrap mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(order, index) in orders.orders " :key="index">
                                     <td> {{ index + 1 }} </td>
                                     <td> {{ order.product_name }} </td>
                                     <td>  {{ order.plan_name }} </td>
                                    <td> ${{ order.total_amount }} </td>
                                    <td> {{ timeStamp(order.created_at) }} </td>
                                    <td> <span :class="order.status">{{ order.status }}</span> </td>
                                    <td> <button class="view-more-button" @click="viewItem(order)">View More</button> </td>
                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                </div>
        </section>
    </div>
</template>

<script>

import {createRef, timeStamp} from '@/plugins/filters'
export default {
    data(){
        return{
            createRef, timeStamp,
            orders: [],
            order: {},
        }
    },
    methods:{
        viewItem(order){
            this.$router.push({name: "order-details", params:{id: order.id } })
        },
        getOrders(){
            this.$axios.get('/user-dashboard')
            .then((res)=>{
                console.log(res.data.user_orders_total.data[0]);
                this.order = res.data.user.data[0];
                this.orders = res.data.user_orders_total.data[0]
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },
    mounted() {
    this.getOrders(); 
  },
}
</script>