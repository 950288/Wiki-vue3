<template>
  <nav :class="`menu`">
    <div :class="`ribbon  ${float}`"></div>
    <ul class="nav-items col-md-22 col-20">
      <div :class="`indicator   ${float}`" :style="{
        left: `${indicator_X}px`,
        width: `${indicator_W}px`,
      }"></div>
      <li>
        <Logo class="nav-item" />

      </li>
      <!-- <li v-for="(heading, index) in headings" :key="index" :class="`nav-item`"
        @mouseenter="handleMouseEnter(route.name, index)" @mouseleave="handleMouseLeave(index)" ref="pages">
        <router-link :to="route.path" class="nav-link">{{
          route.name
        }}</router-link>
      </li> -->
      <li v-for="(heading, index) in headings" :key="index" class="nav-item" ref="pages">
        <div v-if="heading != ''" class="nav-link toggle" @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave()">{{
            index
          }}
        </div>
        <router-link v-if="heading == ''" :to="'/vue3/' + (index == 'Home' ? '' : index.toLowerCase())" class="nav-link"
          @mouseenter="handleMouseEnter(index)" @mouseleave="handleMouseLeave()">{{
            index
          }}</router-link>
        <!-- {{  }} -->
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
// import type { NavItem } from "@/interface";
import ThemeButton from "@/components/theme-button.vue";
import { headings } from "@/routes";
import { router } from "@/main";
import { useWindowScroll } from "@vueuse/core";
const { proxy } = <any>getCurrentInstance();

const pages = ref([]);
const { x, y } = useWindowScroll();
const float = ref<string>("");
const props = defineProps({
  routes: {
    type: Array as () => any[],
    required: true,
  },
});

const indicator_X = ref<number>(0);
const indicator_W = ref<number>(0);
const drift_X = ref<number>(0);
const drift_W = ref<number>(0);

const keymap = {}

let index = 0;
for (let key in headings) {
  if (headings[key] != "") {
    keymap[key] = index;
    for (let key2 in headings[key]) {
      keymap[key2] = index;
    }
  } else {
    keymap[key] = index;
  }
  index++;
}

console.log(keymap);

const current_pg_index = computed(() => {
  return keymap[router.currentRoute.value.name];
});
function back_position() {
  console.log("back_position");
  console.log(pages.value);
  indicator_X.value = pages.value[keymap[router.currentRoute.value.name]]["offsetLeft"];
  indicator_W.value = pages.value[keymap[router.currentRoute.value.name]]["offsetWidth"];
}

onMounted(() => {
  watch(proxy.onresize, () => {
    setTimeout(() => {
      back_position();
    }, 20);
  });
  watch(y, () => {
    if (y.value > 1) {
      float.value = "float";
      drift_X.value = 0;
      drift_W.value = 0;
    } else {
      float.value = "";
      drift_X.value = 10;
      drift_W.value = 20;
    }
  });
  watch([router.currentRoute, float], () => {
    back_position();
  });
});

const currentItem = ref("home") as Ref<string>;
// const  = ref(null)

function handleMouseEnter(index: string) {
  currentItem.value = index;
  console.log(index);
  indicator_X.value = pages.value[keymap[index]]["offsetLeft"];
  indicator_W.value = pages.value[keymap[index]]["offsetWidth"];
}

function handleMouseLeave() {
  // if (typeof router.currentRoute.value.name == "string") {
  //   currentItem.value = router.currentRoute.value.name;
  //   // console.log(currentItem.value);
  //   // console.log(current_pg_index.value);
  back_position();
  // } else {
  //   currentItem.value = "home";
  // }
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
    height: 0px;
    width: 100%;
    left: 0;
    transition: width 0.2s ease, height 0.2s ease, top 0.2s ease, left 0.2s ease;
  }

  .ribbon.float {
    height: 60px;
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

.nav-link.toggle::after {
  content: "";
  display: inline-block;
  margin-left: 0.355em;
  vertical-align: 0.15em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
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
  border-radius: 5px;
  // background-color: rgb(91 91 216);
  transform: translateX(0);
  transition: left 0.2s ease, width 0.2s ease, background-color 0.2s ease;
  animation: none 1s ease 0 1 normal;
}

html.dark .indicator {
  --color-indicator: rgb(48, 48, 48);
}

html .indicator {
  --color-indicator: rgb(99, 99, 234);
}

.indicator {
  background-color: var(--color-indicator);
}

.indicator.float {
  background-color: rgb(70, 70, 70);

}
</style>
