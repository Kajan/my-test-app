
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/my-test-app/',
        component: () => import("../pages/FirstPage.vue"),
        name: 'First Page',
        
    }
    // {
    //     path: '/my-test-app/login/callback',
    //     component: LoginCallback,
    //     redirectUri: './index.html'
    // }
]


export const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

// router.beforeEach(navigationGuard);
