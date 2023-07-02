<template>
  <progress_bar />
  <!-- <Menu :routes="routes" v-show="inMD" /> -->
  <Menu :routes="routes" v-show="true" />
  <!-- <MenuMd :routes="routes" v-show="!inMD" /> -->
  <div style="root_bg">
    <!-- <SideBarMd class="col-0 col-md-24" v-show="!inMD" /> -->
    <div class="detect col-md-0" ref="detectInMD">
      1
    </div>
    <Header />
    <div class="col-24 row">
      <SideBar class="col-md-0" :class="[{ 'col-1': !toggleSidebar }, { 'col-3': toggleSidebar }]" v-show="inMD"
        @toggle-sidebar="toggleSidebar = toggleSidebar ? false : true" />
      <router-view :root_bg="root_bg" class="col-md-24"
        :class="[{ 'col-20 offset-1 col-lg-21': !toggleSidebar }, { 'col-20': toggleSidebar }]" />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onUpdated, onMounted, nextTick, inject, getCurrentInstance, watch } from "vue";
import progress_bar from "@/components/progress.vue";
import Menu from "@/components/Menu3.0.vue";
import MenuMd from "@/components/MenuMd.vue";
import SideBar from "@/components/SideBar.vue";
import SideBarMd from "@/components/SideBarMd.vue";
import { useRoute } from 'vue-router'
import { routes } from "@/routes";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

const route = useRoute()
const toggleSidebar = ref(false);
const root_bg = ref("root-bg");
const detectInMD = ref(true);
const inMD = ref(null);
const Headers = ref()
const { proxy } = <any>getCurrentInstance();

onMounted(() => {
  watch(proxy.onresize, () => {
    inMD.value = detectInMD.value.offsetWidth > 0;
  });
  inMD.value = detectInMD.value.offsetWidth > 0;
  console.log("onmounted");

});

</script>
<style lang="scss">
@import "@/style/index.scss";

* {
  margin: 0;
  padding: 0;
}


:root {
  background-color: var(--bg-base);
}

.detect {
  position: absolute;
  color: transparent;
  height: 0;
  margin: 0;
  padding: 0;
}

.content {
  box-sizing: border-box;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;

  img{
    width: 70%;
    margin-left: 15%;
  }
}

@media (max-width: 768px) {
  .content {
    margin: 0rem;
    border-radius: 0px;
  }
}

/* This code adds a horizontal rule to the bottom of all h2 elements. */
h2::after {
  content: "";
  display: block;
  width: 100%;
  height: 1.5px;
  background-color: #666;
  margin-top: 0;
  opacity: .25;
  margin-bottom: 0;
}


hr{
  display: none;
}
</style>
