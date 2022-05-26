<template>
    <div>
       <div class="plans--container">
            <div class="plans sticky-top">
            <h3>
                {{ plan.name }}
            </h3>
            <div>
                <div class="plans--top">
                    <ul>
                        <!-- <li >
                            <a role="button" class="plan--text" href="javascript:void(0)" @click="getPlan(plan)"> {{ plan.name }} </a>
                        </li> -->
                    </ul>
                    <!-- <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation" v-for="plan in plansObj" :key="plan.id">
                            <a class="nav-link active" :id="plan.name" data-toggle="tab" :href="'#'+plan.name" @click="getPlan(plan)" role="tab" aria-controls="home" aria-selected="true"> {{ plan.name }} </a>
                        </li>
                       
                    </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" :id="plan.name" role="tabpanel" aria-labelledby="home-tab"> {{ plan.name }} </div>
                        </div> -->

                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation" v-for="plan in plansObj" :key="plan.id">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" :href="'#'+plan.name " @click="getPlan(plan)" role="tab" aria-controls="pills-home" aria-selected="true"> {{ plan.name }} </a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" :id="plan.name" role="tabpanel" aria-labelledby="pills-home-tab"> {{ plan.name }} </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                        </div>
                </div>
            </div>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    props:['plansObj'],
    data(){
        return {
            plan: {},
        }
    },
    methods:{
        async getPlan(plan){
            // alert('Hello')
            try {
                let res = await this.$axios.get(`/find-plan/${plan.id}`)
                console.log(res.data.plan);
                this.plan = res.data.plan
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        console.log(this.plansObj);
    }
}
</script>