<template>
    <div>
        <app-drawer></app-drawer>
        <router-view></router-view>
    </div>
</template>

<script>
import AppDrawer from '@/components/static/dashboardAppDrawer.vue'
export default {
    components: {
        AppDrawer
    }
}
</script>