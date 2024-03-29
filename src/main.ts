import { createApp, nextTick, ref } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import { useColorMode } from "@vueuse/core";
import {routes}  from "@/routes";

routes.push({
  path: "/:pathMatch(.*)*",
  redirect: "/vue3/",
});


console.log(routes);

export const themeMode = useColorMode();

export const router = createRouter({
  history: createWebHistory(),
  routes: <any>routes,
});

const app = createApp(App);

app.config.globalProperties.loading = ref(false);
router.afterEach((to, from) => {
  app.config.globalProperties.loading.value = false;
  nextTick(() => {
    getHeaders();
  });
});
router.beforeEach((to, from) => {
  app.config.globalProperties.loading.value = true;
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
