import JobOpening from 'src/components/JobOpening.vue'
import ApplyJobOpening from 'src/components/ApplyJobOpening.vue'

let jobOpeningRoutes = {
    path: '/jobopening',
    component: JobOpening,
}

let applyJobOpening = {
    path: '/jobopening/:id/apply',
    component: ApplyJobOpening
}

const routes = [
    jobOpeningRoutes,
    applyJobOpening
]

export default routes
