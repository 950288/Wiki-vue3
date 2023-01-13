<template>
  <nav :class="`menu`">
    <div :class="`ribbon`"></div>
    <ul class="nav-items">
      <!-- <div
        :class="`indicator`"
        :style="{
          left: `${indicator_X}px`,
          width: `${indicator_W}px`,
        }"
      ></div> -->
      <!-- <li
        v-for="(route, index) in routes"
        :key="route.name"
        :class="`nav-item`"
        @mouseenter="handleMouseEnter(route.name, index)"
        @mouseleave="handleMouseLeave(index)"
        ref="pages"
      >
        <router-link :to="route.path" class="nav-link">{{
          route.name
        }}</router-link>
      </li> -->
      <li :class="`switcher`">
        <ThemeButton />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref, computed, onMounted, watch } from "vue";
import type { NavItem } from "@/interface";
import ThemeButton from "@/components/theme-button.vue";
import { router } from "@/main";
import { useWindowScroll } from "@vueuse/core";

</script>

<style lang="scss" scoped>
.menu {
  position: sticky;
  top: 0;
  padding: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 60px;
  width: 100%;
  left: 0;
  z-index: 2;

  .ribbon {
    top: 0;
    background-color: #333;
    position: absolute;
    height: 60px;
    width: 100%;
    left: 0;
    transition: width 0.2s ease, height 0.2s ease, top 0.2s ease, left 0.2s ease;
  }

  .ribbon.float {
    height: 40px;
    top: 10px;
    width: 70%;
    left: 15%;
    border-radius: 5px;
  }
}

.nav-items {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  margin-left: 15%;
  margin-right: 15%;
  padding: 0;
  width: 100%;
}

.nav-item {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}

.switcher {
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;
  padding: 10px 0px 10px 5px;
  transition: margin 0.2s ease;
}

.nav-link {
  display: block;
  padding: 0 20px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
}

.indicator {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 60px;
  height: 40px;
  background-color: rgb(70, 70, 70);
  border-radius: 5px;
  transform: translateX(0);
  transition: left 0.2s ease, width 0.2s ease;
  animation: none 1s ease 0 1 normal;
}
</style>
