import { createApp, nextTick, ref } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import { useColorMode } from "@vueuse/core";
import routes_list from "@/routes.json";
export const themeMode = useColorMode();

routes_list.routes.forEach((route: { component: any; name: string, path: string }, index) => {
  route.component = () => import(`@/pages/${route.name.toLowerCase()}.vue`);
  route.path = "/vue3" + route.path;
});

export const routes: any = routes_list.routes;
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);

router.afterEach((to, from) => {
  nextTick(() => {
    // const headingList = ref("globalRef")
    // app.config.globalProperties.headingList = headingList;
    getHeaders();
  });
});
app.config.globalProperties.headingList = ref();
app.config.globalProperties.onresize = ref(1);

window.onresize = () => {
  app.config.globalProperties.onresize.value++;
};

function getHeaders() {
  let headers = [];
  let headings = document.querySelectorAll('h1,h2');
  //nest h2 under h1
  headings.forEach((heading, index) => {
    if (heading.nodeName == "H1") {
      headers.push({
        text: heading.innerText,
        subheading: []
      });
    } else {
      if (headers.length) {
        headers[headers.length - 1].subheading.push({
          text: heading.innerText
        });
      }
    }
  });
  console.log(headers);
  Headers.value = headers;
  app.config.globalProperties.headingList.value = headers;
}
app.use(router);


app.mount("#app");
