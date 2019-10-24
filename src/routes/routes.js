import Vue from 'vue';
import VueRouter from 'vue-router'
import axios from 'axios';
import store from '../store/store'
Vue.use(VueRouter)

// GeneralViews
import NotFound from 'src/components/GeneralViews/NotFoundPage.vue'
import Login from 'src/components/Login.vue';

import DashboardRoute from './modules/dashboard-routes'
import PageRoute from './modules/page-routes'
import ComponentRoute from './modules/component-routes'
import FormRoute from './modules/form-routes'
import TableRoute from './modules/table-routes'
import MapRoute from './modules/map-routes'
import JobOpeningRoute from './modules/job-opening-routes'

const baseRoutes = [
    {
        path: '/',
        component: Login,
        beforeEnter: (to, from, next) => {
            // create new url just for auto login auth. use verifytoken for verifying only.
            axios.get('/api/verifyToken').then(res => {
                if(res.data.status === true) {
                    store.dispatch('login', {
                        token: res.data.token
                    })
                    next('/admin');
                } else {
                    store.dispatch('logout')
                    next();
                }
            }).catch(error => {
                console.log(error);
                store.dispatch('logout')
                next();
            })
        }
    },
    {path: '*', component: NotFound}
];

const routes = baseRoutes.concat(DashboardRoute, PageRoute, ComponentRoute, FormRoute, TableRoute, MapRoute, JobOpeningRoute)

export default new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    linkActiveClass: 'active'
})
