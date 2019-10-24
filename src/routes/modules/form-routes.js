import DashboardLayout from '../../components/Dashboard/Layout/DashboardLayout.vue'
// Forms pages
const RegularForms    = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/RegularForms.vue')
const ExtendedForms = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/ExtendedForms.vue');
const ValidationForms = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/ValidationForms.vue')
const Wizard = () => import(/* webpackChunkName: "forms" */ 'src/components/Dashboard/Views/Forms/Wizard.vue');

let formsMenu = {
    path: '/forms',
    component: DashboardLayout,
    redirect: '/forms/regular',
    children: [
        {
            path: 'regular',
            name: 'Regular Forms',
            component: RegularForms
        },
        {
            path: 'extended',
            name: 'Extended Forms',
            component: ExtendedForms
        },
        {
            path: 'validation',
            name: 'Validation Forms',
            component: ValidationForms
        },
        {
            path: 'wizard',
            name: 'Wizard',
            component: Wizard
        }
    ]
}

const routes = [
    formsMenu
]

export default routes
