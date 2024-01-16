import { LoginCallback, navigationGuard } from "@okta/okta-vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/my-test-app/',
        component: () => import("../pages/FirstPage.vue"),
        name: 'First Page',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/my-test-app/login/callback',
        component: LoginCallback
      }
]


export const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

router.beforeEach(navigationGuard);