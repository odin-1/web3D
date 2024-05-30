// src/router/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ModelPage from '@/views/ModelPage.vue';
import AboutPage from "@/views/AboutPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/model',
        name: 'ModelPage',
        component: ModelPage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    }
];

const router = new VueRouter({
    mode: 'history', // 使用 HTML5 history 模式
    base: process.env.BASE_URL,
    linkActiveClass: 'active-link',
    routes
});

export default router;
