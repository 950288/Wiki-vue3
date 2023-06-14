import Home from "@/pages/home.vue";
import About from "@/pages/about.vue";
import Contact from "@/pages/contact.vue";
import Look from "@/pages/look.vue";
import Test from "@/pages/test.vue";
import Editor from "@/pages/editor.vue";

export const routes = [
    {component: Home, name: 'Home', path: '/vue3/'},
        {component: About, name: 'About', path: '/vue3/about'},
        {component: Contact, name: 'Contact', path: '/vue3/contact'},
        {component: Look, name: 'Look', path: '/vue3/look'},
        {component: Test, name: 'Test', path: '/vue3/test'},
        {component: Editor, name: 'Editor', path: '/vue3/editor'}
]
export default routes;
