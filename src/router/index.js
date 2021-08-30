import { createRouter, createWebHistory } from 'vue-router'
import PlanetPage from '@/views/PlanetPage'

const routes = [
    {
        path: '/',
        redirect: '/mercury',
        component: PlanetPage,
    },
    {
        path: '/:planet',
        props: true,
        component: PlanetPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
