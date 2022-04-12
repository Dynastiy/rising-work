import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/pages/homePage/homepageLayout.vue'
import DashboardView from '../views/pages/buyer/dashboard/dashboardLayout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: HomeView,
        children: [{
            path: '/',
            name: 'index',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/homePage/indexPage.vue')
        }, ]
    },
    {
        path: '/buyer',
        component: DashboardView,
        children: [{
            path: '/buyer',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/buyer/dashboard/indexPage.vue')
        }, ]
    },
    {
        path: '/register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/pages/auth/registerPage.vue')
    },
    {
        path: '/sign-in',
        name: 'Sign in',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/pages/auth/signIn.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/pages/errorPage.vue"),
    },
]


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes
})

export default router