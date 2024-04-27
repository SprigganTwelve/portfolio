import { createRouter, createWebHistory } from 'vue-router'
import App6 from '../App6.vue'
import App2 from '../App2.vue'
import App3 from '../App3.vue'
import App4 from '../App4.vue'
import App5 from '../App5.vue'
import NotFound from '../NotFound.vue'
import showingUp from '../components/showingUp.vue'
// there is also createWebHashHistory and createMemoryHistory

const routes = [
    {
        path: '/',
        name: 'Home',
        component: showingUp
    },
    { 
        path: '/about',
        name: 'About',
        component: App6
    },
    { 
        path: '/projets',
        name: 'projets',
        component: App2
    },
    { 
        path: '/Competences',
        name: 'Competences',
        component: App4
    },
    { 
        path: '/veilles',
        name: 'veilles',
        component: App5
    },
    { 
        path: '/thisProject',
        name: 'projet',
        component: App3
    },
    { 
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFound
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router