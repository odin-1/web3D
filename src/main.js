import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index.js';

Vue.config.productionTip = false

import router from './router/router.js'

new Vue({
    store,
    router, // 注入 router 实例
    render: h => h(App),
}).$mount('#app')

