import DashboardLayout from '../../components/Dashboard/Layout/DashboardLayout.vue'
import User from 'src/components/Dashboard/Views/Pages/UserProfile.vue'
import TimeLine from 'src/components/Dashboard/Views/Pages/TimeLinePage.vue'
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/Dashboard/Views/Pages/Register.vue'
import Lock from 'src/components/Dashboard/Views/Pages/Lock.vue'

let pagesMenu = {
    path: '/pages',
    component: DashboardLayout,
    redirect: '/pages/user',
    children: [
        {
            path: 'user',
            name: 'User Page',
            component: User
        },
        {
            path: 'timeline',
            name: 'Timeline Page',
            component: TimeLine
        }
    ]
}

let loginPage = {
    path: '/loginlogin',
    name: 'Login',
    component: Login
}

let registerPage = {
    path: '/register',
    name: 'Register',
    component: Register
}

let lockPage = {
    path: '/lock',
    name: 'Lock',
    component: Lock
}

const routes = [
    pagesMenu,
    loginPage,
    registerPage,
    lockPage
]

export default routes
