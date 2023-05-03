import Home from "@/pages/home.vue";
import About from "@/pages/about.vue";
import Contact from "@/pages/contact.vue";
import Look from "@/pages/look.vue";
import Test from "@/pages/test.vue";
import Editor from "@/pages/editor.vue";

export const routes = [
    {component: Home, name: 'Home', path: '/'},
        {component: About, name: 'About', path: '/about'},
        {component: Contact, name: 'Contact', path: '/contact'},
        {component: Look, name: 'Look', path: '/look'},
        {component: Test, name: 'Test', path: '/test'},
        {component: Editor, name: 'Editor', path: '/editor'}
]
export default routes;
