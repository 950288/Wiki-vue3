import { createApp, onMounted, ref } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import { useColorMode } from "@vueuse/core";
import routes_list from "@/routes.json";
export const themeMode = useColorMode();

routes_list.routes.forEach((route: { component: any; name: string , path : string }, index) => {
  route.component = () => import(`@/pages/${route.name.toLowerCase()}.vue`);
  route.path = "/vue3" + route.path;
});

export const routes: any = routes_list.routes;
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);

// console.log(routes)
app.use(router);

app.mount("#app");
