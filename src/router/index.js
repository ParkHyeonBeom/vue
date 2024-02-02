import { createRouter, createWebHistory } from 'vue-router'

import VerifyPage from '@/page/VerifyPage.vue'
import LoginPage from '@/page/LoginPage.vue'
import SignUpPage from "@/page/SignUpPage.vue";
import CartPage from "@/page/CartPage.vue";
import MainPage from "@/page/MainPage.vue";
import ProductDetailPage from "@/page/ProductDetailPage.vue";
import ProductRegister from "@/page/ProductRegister.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: MainPage },
        { path: '/verify', component: VerifyPage },
        { path: '/member/login', component: LoginPage },
        { path: '/member/signup', component: SignUpPage },
        { path: '/cart', component: CartPage},
        { path: '/product/:id', component: ProductDetailPage},
        { path: '/product/register', component: ProductRegister}
    ]
})

router.beforeEach((to, from, next) => {
    if (to.fullPath === "/cart" && sessionStorage.getItem("token") == null) {
        next("/member/login");
    } else {
        next();
    }
})

export default router;