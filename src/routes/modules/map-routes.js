import DashboardLayout from '../../components/Dashboard/Layout/DashboardLayout.vue'
// Maps pages
const GoogleMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/GoogleMaps.vue')
const FullScreenMap = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/FullScreenMap.vue')
const VectorMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Dashboard/Views/Maps/VectorMapsPage.vue');

let mapsMenu = {
    path: '/maps',
    component: DashboardLayout,
    redirect: '/maps/google',
    children: [
        {
            path: 'google',
            name: 'Google Maps',
            component: GoogleMaps
        },
        {
            path: 'full-screen',
            name: 'Full Screen Map',
            component: FullScreenMap
        },
        {
            path: 'vector-map',
            name: 'Vector Map',
            component: VectorMaps
        }
    ]
}

const routes = [
    mapsMenu
]

export default routes
