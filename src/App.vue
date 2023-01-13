<template>
  <Menu :routes="routes" v-show="inMD" />
  <MenuMd :routes="routes" v-show="!inMD" />
  <div style="root_bg">
    <SideBarMd class="col-0 col-md-24" v-show="!inMD" />
    <div class="col-21 col-lg-22  col-md-24 offset-1 offset-md-0 row">
      <SideBar class="col-5 col-md-0" v-show="inMD" />
      <router-view :root_bg="root_bg" class="col-19 col-md-24" />
    </div>
    <div class="detect col-md-0" ref="detectInMD">
      1
    </div>
  </div>
</template>

<script setup lang="ts">
import Vue from "vue";
import { ref, watch, onMounted } from "vue";
import Menu from "@/components/Menu.vue";
import MenuMd from "@/components/MenuMd.vue";
import SideBar from "@/components/SideBar.vue";
import SideBarMd from "@/components/SideBarMd.vue";
import { routes } from "@/main";
const root_bg = ref("root-bg");
const detectInMD = ref(true);
const inMD = ref(null);

onMounted(() => {
  window.onresize = () => {
    console.log(detectInMD.value);
    inMD.value = detectInMD.value.offsetWidth > 0;
    console.log(detectInMD.value.offsetWidth);

  };
  console.log(detectInMD.value);
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
