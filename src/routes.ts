

export const routes = [
    {component: () => import('@/pages/home.vue'), name: 'Home', path: '/vue3/'},
        {component: () => import('@/pages/about.vue'), name: 'About', path: '/vue3/about'},
        {component: () => import('@/pages/contact.vue'), name: 'Contact', path: '/vue3/contact'},
        {component: () => import('@/pages/look.vue'), name: 'Look', path: '/vue3/look'},
        {component: () => import('@/pages/test.vue'), name: 'Test', path: '/vue3/test'},
        {component: () => import('@/pages/editor.vue'), name: 'Editor', path: '/vue3/editor'}
]
export default routes;
