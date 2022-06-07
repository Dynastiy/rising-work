<template>
    <div>
        <div>
            <section class="py-5">
		<div class="">
			<h1 class="mb-5">Account Settings</h1>
			<div class="bg-white shadow rounded-lg d-block d-sm-flex">
				<div class="profile-tab-nav border-right">
					<div class="p-4">
						<div class="img-circle text-center mb-3">
							<img v-if="userData.profile_photo" src="img/user2.jpg" alt="Image" class="shadow">
                            <div class="span--user" v-else :class="userData.first_name.charAt(0)"> {{ userData.first_name.charAt(0) }} </div>
							<div class="edit--button" role="button" @click="changePhoto()">
								<span class="material-icons">
									edit
								</span>
							</div>
						</div>
						
						<h5 class="text-center">{{ userData.first_name }} {{ userData.last_name }}</h5>
                        <div class="d-flex align-items-center justify-content-center mt-2" style="gap:10px">
                            <div class="status ">
                                <div class="completed" v-if="userData.status === 'active' ">
                                    Active
                                </div>
                                <div class="cancelled" v-else>
                                    Banned
                                </div>
                                
                            </div>
                            <div class="verified">
                                <div class="cancelled" v-if="getUser.verification_code === null ">
                                   Not Verified
                                </div>
                                <div class="completed" v-else>
                                    Verified
                                </div>
                            </div>
                        </div>
					</div>
					<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a class="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i class="fa fa-home text-center mr-1"></i> 
							Profile
						</a>
						<a class="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
							<i class="fa fa-key text-center mr-1"></i> 
							Change Password
						</a>
					</div>
				</div>
				<div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 class="mb-4">Account Settings</h3>
						<div class="">
							<div class="">
								<div class="form-group">
                                <label>First Name</label>
                                <input type="text" class="form-control" v-model="userData.first_name">
								</div>
							</div>
							<div class="">
								<div class="form-group">
                                <label>Last Name</label>
                                <input type="text" class="form-control" v-model="userData.last_name">
								</div>
							</div>
							<div class="">
								<div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" v-model="userData.email">
								</div>
							</div>
							<div class="">
								<div class="form-group">
                                <label>Phone number</label>
                                <input type="text" class="form-control" v-model="userData.phone_no">
								</div>
							</div>
                            <div class="">
								<div class="form-group">
                                <label>Country</label>
                                <input type="text" class="form-control" v-model="userData.country">
								</div>
							</div>
							<div class="">
								<div class="form-group">
								<label>About</label>
									<textarea class="form-control" v-model="userData.about" rows="4">
                                    </textarea>
								</div>
							</div>
						</div>
						<div class="text-right">
							<button class="btn--main" @click="updateProfile()">Update</button>
						</div>
					</div>
					<div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
						<h3 class="mb-4">Change Password</h3>
						<div class="">
							<div class="">
								<div class="form-group">
								<label>Old password</label>
								<input type="password" class="form-control" v-model="credentials.old_password">
								</div>
							</div>
						</div>
						<div class="">
							<div class="">
								<div class="form-group">
								<label>New password</label>
								<input type="password" class="form-control" v-model="credentials.new_password">
								</div>
							</div>
						</div>
						<div class="text-right">
							<button class="btn--main" @click="updatePassword">Update</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            userData: {
                first_name: '',
                last_name: '',
                phone_no: '',
                about: '',
                country: '',
                email: ''
            },
            credentials:{
				old_password: '',
				new_password: '',
            },
            countries: {},
        }
    },
    methods:{
        async getCountries(){
      let res = await this.$axios.get('https://restcountries.com/v2/all')
      this.countries = res.data
    },
	async updateProfile(){
		let payload =  {
                first_name: this.userData.first_name,
                last_name: this.userData.last_name,
                phone_no: this.userData.phone_no,
                about: this.userData.about,
                country: this.userData.country,
                email: this.userData.email
            }
		try {
			let res = await this.$axios.post('/auth/update-profile', payload)
			console.log(res);
			this.$toastify({
          text: `${res.data.message}`,
          className: "info",
          style: {
            background: "green",
          },
        }).showToast();
		} catch (error) {
			console.log(error);
		}
		this.getUser()
	},
	getUser(){
            this.$axios.get('/user-dashboard')
            .then((res)=>{
                console.log(res.data.user_orders_total.data[0]);
				this.userData = res.data.user_orders_total.data[0]
                // this.order = res.data.user.data[0];
                // this.orders = res.data.user_orders_total.data[0]
            })
            .catch((err)=>{
                console.log(err);
            })
        },
	async updatePassword(){
		try {
			let res = await this.$axios.post('/auth/change-password/', this.credentials)
			console.log(res);
			this.$toastify({
          text: `${res.data.message}`,
          className: "info",
          style: {
            background: "green",
          },
        }).showToast();
		} catch (error) {
			console.log(error);
		}
		this.credentials = {}
	}
    },
    mounted(){
        this.getCountries()
		this.getUser()
    },
    computed:{
        
    }
}
</script>