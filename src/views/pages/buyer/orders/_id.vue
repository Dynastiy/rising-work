<template>
    <div>
      <section class="my-4">
           <div class="d-flex align-items-center justify-content-between my-3">
            <h3 class="text-bold order-header text-uppercase">Order #{{ createRef(id) }}</h3>
            <div class="orders--header my-4">
                <div>
                    <ul class="list-unstyled m-0"  id="myDIV">
                        <li> <a class="nav--item active" href="javascript:void(0)" @click="overview">Overview</a> </li>
                        <li> <a class="nav--item" href="javascript:void(0)" @click="requirements">Requirements</a> </li>
                        <!-- <li> <a class="nav--item" href="javascript:void(0)" @click="completed">Delivery Unit</a> </li> -->
                        <li> <a class="nav--item" href="javascript:void(0)" @click="delivered">Delivered Files</a> </li>
                        <li> <a class="nav--item" href="javascript:void(0)" @click="messages">Messages</a> </li>
                    </ul>
                </div>
            </div>
            <div class="mobile-orders-header">
                <!-- Default dropleft button -->
                <div class="btn-group dropleft">
                <div class="orders--menus" type="button"  data-toggle="dropdown" aria-expanded="false">
                    <IconComponent icon="dashicons:menu-alt" style="font-size:30px" />
                </div>
                <div class="dropdown-menu">
                    <ul class="list-unstyled m-0"  id="myDIV2">
                        <li> <a class="nav--item2 active2" href="javascript:void(0)" @click="overview">Overview</a> </li>
                        <li> <a class="nav--item2" href="javascript:void(0)" @click="requirements">Requirements</a> </li>
                        <!-- <li> <a class="nav--item2" href="javascript:void(0)" @click="completed">Delivery Unit</a> </li> -->
                        <li> <a class="nav--item2" href="javascript:void(0)" @click="delivered">Delivered Files</a> </li>
                        <li> <a class="nav--item2" href="javascript:void(0)" @click="messages">Messages</a> </li>
                    </ul>
                </div>
                </div>
            </div>
           </div>
             <div class="other--tables bg-white p-3 rounded-lg shadow-sm">
                    <h4 class="font-weight-bold text-dark"> {{ data_link }} </h4>
                    <Overview :overviewData="overviewData" v-show="data_link == 'Overview' "/>
                    <DeliveredFiles :deliveredFiles="deliveredFiles" v-show="data_link == 'Delivered Files' "/>
                    <Requirements :requirementsData="requirementsItem" v-show="data_link == 'Requirements' "/>
                    <Messages :chats="chats" v-show="data_link == 'Messages' "/>
            </div>
      </section>
    </div>
</template>

<script>
import Overview from '@/components/orders/overviewModel.vue'
import DeliveredFiles from '@/components/orders/deliveredModel.vue'
import Requirements from '@/components/orders/requirementsModel.vue'
import Messages from '@/components/orders/messagesModel.vue'

import {createRef} from '@/plugins/filters'
export default {
    components:{
        Overview, DeliveredFiles,
        Requirements, Messages
    },
    data(){
        return{
            createRef,
            data_link: '',
            id: this.$route.params.id,
            overviewData: null,
            requirementsItem: null,
            chats: null,
            deliveredFiles: null,
        }
    },
    methods:{
        overview(){
            this.data_link = 'Overview'
        },
        requirements(){
            this.data_link = 'Requirements'
        },
        messages(){
            this.data_link = 'Messages'
        },
        delivered(){
            this.data_link = 'Delivered Files'
        },
        getOrder(){
            this.$axios.get(`/find-order/${this.id}`)
            .then((res)=>{
                console.log(res.data.order);
                this.overviewData = res.data.order;
                this.requirementsItem = res.data.order.requirement;
                this.chats = res.data.order.chats;
                this.deliveredFiles = res.data.order.delivered_items;
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },
    mounted() {
        this.getOrder();
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
      this.overview()
  }
}
</script>