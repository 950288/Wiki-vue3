<template>
  <Menu :routes="routes" />
  <router-view />
</template>

<script setup lang="ts">
import Vue from "vue";
import Menu from "@/components/Menu.vue";
// import type { NavItem } from '@/interface';
import { routes } from "@/main";
</script>
<style lang="scss">
@import "@/style/index.scss";
// @include set-color-mode(light);
* {
  margin: 0;
  padding: 0;
  // background-color: var(--has-background-success);
}
:root {
  background-color: var(--has-background-white);
}
</style>
