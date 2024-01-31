import { createRouter, createWebHistory } from 'vue-router'

import VerifyPage from '@/page/VerifyPage.vue'
import LoginPage from '@/page/LoginPage.vue'
import SignUpPage from "@/page/SignUpPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/verify', component: VerifyPage },
        { path: '/login', component: LoginPage },
        { path: '/signup', component: SignUpPage },

    ]
})

export default router;