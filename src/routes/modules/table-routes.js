import DashboardLayout from '../../components/Dashboard/Layout/DashboardLayout.vue'
// TableList pages
const RegularTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/RegularTables.vue');
const ExtendedTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/ExtendedTables.vue');
const PaginatedTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Dashboard/Views/Tables/PaginatedTables.vue');

let tablesMenu = {
    path: '/table-list',
    component: DashboardLayout,
    redirect: '/table-list/regular',
    children: [
        {
            path: 'regular',
            name: 'Regular Tables',
            component: RegularTables
        },
        {
            path: 'extended',
            name: 'Extended Tables',
            component: ExtendedTables
        },
        {
            path: 'paginated',
            name: 'Paginated Tables',
            component: PaginatedTables
        }]
}

const routes = [
    tablesMenu
]

export default routes
