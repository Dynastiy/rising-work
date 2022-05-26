<template>
    <div>
        <app-header/>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import AppDrawer from '@/components/static/dashboardAppDrawer.vue'
import AppHeader from '@/components/static/dashboardAppHeader.vue'
export default {
    components: {
        AppHeader
    },
    async created(){
        if(!this.$store.getters.isLoggedIn){
            this.$router.push ('/sign-in')
        }
    }
}
</script>