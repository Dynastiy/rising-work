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
        },
        {
            path: '/categories',
            name: 'Categories',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/homePage/allServices.vue')
        }, 
        {
            path: '/services/:slug',
            name: 'product-detail',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/homePage/_id.vue')
        },
        {
            path: '/cart/checkout',
            name: 'checkout',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/homePage/checkOut.vue')
        },
        {
            path: '/success-payment',
            name: 'success-payment',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/homePage/successPayment.vue')
        },
        {
            path: '/cancel-payment',
            name: 'cancel-payment',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/pages/homePage/cancelPayment.vue')
        },
     ]
    },
    {
        path: '/dashboard',
        component: DashboardView,
        children: [{
                path: '/dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/buyer/orders/indexPage.vue')
            },
            {
                path: '/orders',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/buyer/orders/ordersPage.vue')
            },
            {
                path: '/profile',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/buyer/navigation/profilePage.vue')
            },
        ]
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
        name: 'login',
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