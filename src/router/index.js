import { createRouter, createWebHistory } from 'vue-router'

import VerifyPage from '@/page/VerifyPage.vue'
import LoginPage from '@/page/LoginPage.vue'
import SignUpPage from "@/page/SignUpPage.vue";
import CartPage from "@/page/CartPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/verify', component: VerifyPage },
        { path: '/member/login', component: LoginPage },
        { path: '/member/signup', component: SignUpPage },
        {path: '/cart', component: CartPage},
    ]
})

export default router;