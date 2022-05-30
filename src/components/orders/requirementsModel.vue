<template>
    <div>
        <div>
            <div class="requirements" v-if="requirementsData">
                <div class="top mt-3" >
                <!-- <div class="top mt-3"> -->
                    <div class="mb-3 text-right" v-if="Object.keys(requirementsData).length === 0 ">
                        <button class="main--button" @click="requirement = !requirement">Add requirement</button>
                    </div >
                    <!-- Add Requirements Modal -->
                    <div v-show="requirement">
                        <form action="" @submit.prevent="updateRequirement()">
                            <div class="mb-3">
                                <label for="" class="d-block" >Business Name</label>
                                <input type="text" v-model="payload.business_name">
                            </div>
                            <div class="mb-3">
                                <label for="" class="d-block">Business Description</label>
                                <textarea name="" id="" cols="30" rows="4" v-model="payload.business_description"></textarea>
                            </div>
                            <div class="images mb-3">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <input type="file" @change="photoOneUpload($event)">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="file" name="" id="" @change="photoTwoUpload($event)">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="file" @change="photoThreeUpload($event)">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="file" @change="photoFourUpload($event)">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="main--button" v-show="value === 'update' ">Update</button>
                                <button class="main--button" v-show="value === 'add' " @click ="createRequirement(requirement)">Create</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- View requirement -->
                <div>
                    <div class="text-right mb-3">
                        <button class="main--button" @click="editRequirement">Edit</button>
                    </div>
                    <h3 class="text-capitalize"> {{ requirementsData.business_name }} </h3>
                    <h6 class="text-capitalize"> {{ requirementsData.business_description }} </h6>

                    <div class="images">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="" alt="">
                            </div>
                            <div class="col-md-6">
                                <img src="" alt="">
                            </div>
                            <div class="col-md-6">
                                <img src="" alt="">
                            </div>
                            <div class="col-md-6">
                                <img src="" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
export default {
    props:['requirementsData'],
    data(){
        return{
            requirement: false,
            value: '',
            payload:{
                business_name: '',
                business_description: '',
                sample_photo_one: null,
                sample_photo_two: null,
                sample_photo_three: null,
                sample_photo_four: null,
            },
            id: this.$route.params.id
        }
    },
    methods: {
        photoOneUpload() {
        var input = event.target;
        this.payload.sample_photo_one = input.files[0];
        console.log(this.payload.sample_photo_one);
        },
        photoTwoUpload() {
        var input = event.target;
        this.payload.sample_photo_two = input.files[0];
        console.log(this.payload.sample_photo_two);
        },
        photoThreeUpload() {
        var input = event.target;
        this.payload.sample_photo_three = input.files[0];
        console.log(this.payload.sample_photo_three);
        },
        photoFourUpload() {
        var input = event.target;
        this.payload.sample_photo_four = input.files[0];
        console.log(this.payload.sample_photo_four);
        },
        editRequirement(){
            this.requirement = !this.requirement;
            this.value = 'update'
        },
        addRequirement(){
            this.requirement = !this.requirement;
            this.value = 'add'
        },
        createRequirement(){

        },
        updateRequirement(){
            let formData = new FormData();
            formData.append('business_name', this.payload.business_name);
            formData.append('business_description', this.payload.business_description)
            formData.append('sample_photo_one', this.payload.sample_photo_one)
            formData.append('sample_photo_two', this.payload.sample_photo_two)
            formData.append('sample_photo_three', this.payload.sample_photo_three)
            formData.append('sample_photo_four', this.payload.sample_photo_four)
            this.$axios.post(`/update-requirement/${this.requirementsData.id}`, formData)
            .then((res)=>{
                console.log(res);
                this.requirement = !this.requirement;
            })
            .catch((res)=>{
                console.log(res);
            })
            .finaly(()=>{
                this.$emit('reload');
            })
        }
    },
    mounted() {
        this.payload = this.requirementsData;
    }
}
</script>