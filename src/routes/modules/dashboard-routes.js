import DashboardLayout from 'src/components/Dashboard/Layout/DashboardLayout.vue'

// Dashboard pages
const Overview = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Overview.vue')
const Widgets = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Widgets.vue')
import Calendar from 'src/components/Dashboard/Views/Calendar/CalendarRoute.vue'
const Charts = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Charts.vue')


let dashboardMenu =     {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    meta: {
        requiresAuth: true
    },
    children: [
        {
            path: 'calendar',
            name: 'Calendar',
            component: Calendar
        },
        {
            path: 'charts',
            name: 'Charts',
            component: Charts
        },
        {
            path: 'overview',
            name: 'Overview',
            component: Overview
        },
        {
            path: 'widgets',
            name: 'Widgets',
            component: Widgets
        }
    ]
}

const routes = [
    dashboardMenu
]

export default routes
