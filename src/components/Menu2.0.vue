<template>
  <nav :class="`menu`">
    <div :class="`ribbon`"></div>
    <ul class="nav-items col-md-22 col-20">
      <div :class="`indicator`" :style="{
          left: `${indicator_X}px`,
          width: `${indicator_W}px`,
        }"></div>
      <li>
        <Logo  :class="`nav-item`"/>

      </li>
      <li v-for="(route, index) in routes" :key="route.name" :class="`nav-item`"
        @mouseenter="handleMouseEnter(route.name, index)" @mouseleave="handleMouseLeave(index)" ref="pages">
        <router-link :to="route.path" class="nav-link">{{
          route.name
        }}</router-link>
      </li>
      <li :class="`switcher`">
        <ThemeButton />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import Logo from "./logo.vue";
import { getCurrentInstance, type Ref } from "vue";
import { ref, computed, onMounted, watch } from "vue";
import type { NavItem } from "@/interface";
import ThemeButton from "@/components/theme-button.vue";
import { router } from "@/main";
import { useWindowScroll } from "@vueuse/core";
const { proxy } = <any>getCurrentInstance();

const pages = ref([]);
const { x, y } = useWindowScroll();
const float = ref<string>("");
const props = defineProps({
  routes: {
    type: Array as () => NavItem[],
    required: true,
  },
});

const indicator_X = ref<number>(0);
const indicator_W = ref<number>(0);
const drift_X = ref<number>(0);
const drift_W = ref<number>(0);
const current_pg_index = computed(() => {
  // console.log(router.currentRoute.value.name);
  // console.log(props.routes.findIndex(route => route.name === router.currentRoute.value.name));
  return props.routes.findIndex(
    (route) => route.name === router.currentRoute.value.name
  );
});
function back_position() {
  console.log("back_position");
  indicator_X.value = pages.value[current_pg_index.value]["offsetLeft"];
  indicator_W.value = pages.value[current_pg_index.value]["offsetWidth"];
}

onMounted(() => {
  watch(proxy.onresize, () => {
    back_position();
  });
  watch([router.currentRoute, float], () => {
    // console.log("watch");
    back_position();
  });
});

const currentItem = ref("home") as Ref<string>;
// const  = ref(null)

function handleMouseEnter(item: string, pageindex: number) {
  currentItem.value = item;
  // console.log(pages)
  // console.log(currentItem.value);
  indicator_X.value = pages.value[pageindex]["offsetLeft"];
  indicator_W.value = pages.value[pageindex]["offsetWidth"];
}

function handleMouseLeave(pageindex: number) {
  if (typeof router.currentRoute.value.name == "string") {
    currentItem.value = router.currentRoute.value.name;
    // console.log(currentItem.value);
    // console.log(current_pg_index.value);
    back_position();
  } else {
    currentItem.value = "home";
  }
}
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
  margin: 0 auto 0 auto;
  padding: 0;
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
