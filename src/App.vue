<template>
  <Menu :routes="routes" v-show="inMD" />
  <MenuMd :routes="routes" v-show="!inMD" />
  <div style="root_bg">
    <SideBarMd class="col-0 col-md-24" v-show="!inMD" />
    <div class="col-22 col-lg-23 col-md-24 offset-md-0 row">
      <SideBar class="col-md-0" :class="[{ 'col-1': !toggleSidebar }, { 'col-4': toggleSidebar }]" v-show="inMD"
        @toggle-sidebar="toggleSidebar = toggleSidebar ? false : true" />
      <router-view :root_bg="root_bg" class="col-md-24"
        :class="[{ 'col-22 offset-1': !toggleSidebar }, { 'col-20': toggleSidebar }]" />
    </div>
    <div class="detect col-md-0" ref="detectInMD">
      1
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUpdated, onMounted, nextTick, inject, getCurrentInstance ,watch } from "vue";
import Menu from "@/components/Menu3.0.vue";
import MenuMd from "@/components/MenuMd.vue";
import SideBar from "@/components/SideBar.vue";
import SideBarMd from "@/components/SideBarMd.vue";
import { useRoute } from 'vue-router'
import { router , routes } from "@/main";
const route = useRoute()
const toggleSidebar = ref(false);
const root_bg = ref("root-bg");
const detectInMD = ref(true);
const inMD = ref(null);
const Headers = ref()
const { proxy } = <any>getCurrentInstance();

onMounted(() => {
  watch(proxy.onresize , () => {
    inMD.value = detectInMD.value.offsetWidth > 0;
  });
  inMD.value = detectInMD.value.offsetWidth > 0;
  console.log(detectInMD.value.offsetWidth);

});

</script>
<style lang="scss">
@import "@/style/index.scss";

// @include set-color-mode(light);
* {
  margin: 0;
  padding: 0;
  // background-color: var(--has-background-success);
}

.main {
  // background: #000;
  // margin: 0 auto;
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
</style>
