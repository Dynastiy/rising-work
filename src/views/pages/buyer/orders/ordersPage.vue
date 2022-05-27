<template>
    <div>
      <section class="my-4">
           <div class="d-flex align-items-center justify-content-between my-3">
            <h3 class="text-bold order-header">Orders</h3>
            <div class="orders--header my-4">
                <div>
                    <ul class="list-unstyled m-0"  id="myDIV">
                        <li> <a class="nav--item active" href="javascript:void(0)" @click="all">In Progress Orders</a> </li>
                        <li> <a class="nav--item" href="javascript:void(0)" @click="pending">Pending Orders</a> </li>
                        <li> <a class="nav--item" href="javascript:void(0)" @click="completed">Completed Orders</a> </li>
                        <li> <a class="nav--item" href="javascript:void(0)" @click="delivered">Delivered Orders</a> </li>
                        <li> <a class="nav--item" href="javascript:void(0)" @click="cancelled">Cancelled Orders</a> </li>
                    </ul>
                </div>
            </div>
            <div class="mobile-orders-header">
                <!-- Default dropleft button -->
                <div class="btn-group dropleft">
                <div class="orders--menus" type="button"  data-toggle="dropdown" aria-expanded="false">
                    <IconComponent icon="dashicons:menu-alt" style="font-size:70px" />
                </div>
                <div class="dropdown-menu">
                    <ul class="list-unstyled m-0"  id="myDIV2">
                        <li> <a class="nav--item2 active2" href="javascript:void(0)" @click="all">In Progress Orders</a> </li>
                        <li> <a class="nav--item2" href="javascript:void(0)" @click="pending">Pending Orders</a> </li>
                        <li> <a class="nav--item2" href="javascript:void(0)" @click="completed">Completed Orders</a> </li>
                        <li> <a class="nav--item2" href="javascript:void(0)" @click="delivered">Delivered Orders</a> </li>
                        <li> <a class="nav--item2" href="javascript:void(0)" @click="cancelled">Cancelled Orders</a> </li>
                    </ul>
                </div>
                </div>
            </div>
           </div>
             <div class="other--tables bg-white p-3 rounded-lg shadow-sm">
                    <h5 class="font-weight-bold">{{ order_type }} Orders </h5>
                    <div class="table-responsive">
                            <table class="table table-centered table-nowrap mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(order, index) in orders " :key="index">
                                     <td> {{ index + 1 }} </td>
                                     <td> {{ order.product_name }} </td>
                                     <td>  {{ order.plan_name }} </td>
                                    <td> ${{ order.total_amount }} </td>
                                    <td> {{ timeStamp(order.created_at) }} </td>
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
            order_type: '',
            orders: [],
            order_data: '',
        }
    },
    methods:{
        all(){
            this.order_type = 'In Progress'
            this.order_data = 'inprogress_orders'
            this.getOrders();
        },
        pending(){
            this.order_type = 'Pending'
            this.order_data = 'pending_orders'
            this.getOrders();
        },
        completed(){
            this.order_type = 'Completed'
            this.order_data = 'completed_orders'
            this.getOrders();
        },
        cancelled(){
            this.order_type = 'Cancelled'
            this.order_data = 'canceled_orders'
            this.getOrders();
        },
        delivered(){
            this.order_type = 'Delivered'
            this.order_data = 'delivered_orders'
            this.getOrders();
        },
        viewItem(order){
            this.$router.push({name: "order-details", params:{id: order.id } })
        },
        getOrders(){
            this.$axios.get('/user-dashboard')
            .then((res)=>{
                // console.log(res.data.user.data[0]);
                // this.orders = res.data.user.data[0]+(this.order_data)
                // this.orders = res.data.user_orders_total.data[0].orders

                switch (this.order_data) {
                    case this.order_data === 'inprogress_orders':
                        this.orders = res.data.user.data[0].inprogress_orders;
                        console.log(this.orders);
                        break;
                    case this.order_data === 'pending_orders':
                        this.orders = res.data.user.data[0].pending_orders;
                        console.log(this.orders);
                        break;
                    case this.order_data === 'completed_orders':
                        this.orders = res.data.user.data[0].completed_orders;
                        console.log(this.orders);
                        break;
                    case this.order_data === 'canceled_orders':
                        this.orders = res.data.user.data[0].canceled_orders;
                        console.log(this.orders);
                        break;
                    case this.order_data === 'delivered_orders':
                        this.orders = res.data.user.data[0].delivered_orders;
                        console.log(this.orders);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },
    mounted() {
    this.getOrders();

    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("nav--item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

    // FOr the orders Menu
    var header2 = document.getElementById("myDIV2");
    var btns2 = header2.getElementsByClassName("nav--item2");
    for (var j = 0; j < btns2.length; j++) {
      btns2[j].addEventListener("click", function () {
        var current2 = document.getElementsByClassName("active2");
        current2[0].className = current2[0].className.replace(" active2", "");
        this.className += " active2";
      });
    } 
  },
  async created(){
      this.all()
  }
}
</script>