import Vue from 'vue'
import './pollyfills'
import VueRouter from 'vue-router'
import VueNotify from 'vue-notifyjs'
import VeeValidate from 'vee-validate'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import App from './App.vue'
import axios from 'axios';

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
// import SideBar from './components/UIComponents/SidebarPlugin'
import initProgress from './progressbar';

// router setup
import router from './routes/routes'
import store from './store/store'

// library imports

import './assets/sass/paper-dashboard.scss'
import './assets/sass/element_variables.scss'
import './assets/sass/demo.scss'

// import sidebarLinks from './sidebarLinks'

// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalDirectives)
Vue.use(GlobalComponents)
Vue.use(VueNotify)
// Vue.use(SideBar, {sidebarLinks: sidebarLinks})
Vue.use(VeeValidate, {events: 'blur'})
locale.use(lang)

initProgress(router);

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next()
            return
        } else {
            axios.get('/api/verifyToken').then(res => {
                if(res.data.status === true) {
                    console.log('true')
                    store.dispatch('login', {
                        token: res.data.token
                    })
                    next();
                } else {
                    store.dispatch('logout')
                    next('/');
                }
            }).catch(error => {
                console.log(error);
                store.dispatch('logout')
                next('/');
            })
        }
    } else {
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
