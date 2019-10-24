import DashboardLayout from '../../components/Dashboard/Layout/DashboardLayout.vue'

// Components pages
import Buttons from 'src/components/Dashboard/Views/Components/Buttons.vue'
import GridSystem from 'src/components/Dashboard/Views/Components/GridSystem.vue'
import Panels from 'src/components/Dashboard/Views/Components/Panels.vue'
import SweetAlert from 'src/components/Dashboard/Views/Components/SweetAlert.vue'
import Notifications from 'src/components/Dashboard/Views/Components/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Components/Icons.vue'
import Typography from 'src/components/Dashboard/Views/Components/Typography.vue'

let componentsMenu = {
    path: '/components',
    component: DashboardLayout,
    redirect: '/components/buttons',
    children: [
        {
            path: 'buttons',
            name: 'Buttons',
            component: Buttons
        },
        {
            path: 'grid-system',
            name: 'Grid System',
            component: GridSystem
        },
        {
            path: 'panels',
            name: 'Panels',
            component: Panels
        },
        {
            path: 'sweet-alert',
            name: 'Sweet Alert',
            component: SweetAlert
        },
        {
            path: 'notifications',
            name: 'Notifications',
            component: Notifications
        },
        {
            path: 'icons',
            name: 'Icons',
            component: Icons
        },
        {
            path: 'typography',
            name: 'Typography',
            component: Typography
        }

    ]
}

const routes = [
    componentsMenu
]

export default routes
