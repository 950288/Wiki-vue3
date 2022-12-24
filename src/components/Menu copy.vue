<template>
  <nav class="menu">
    <ul class="nav-items" :ref="'java'">
      <li v-for="item in items" :key="item.name" class="nav-item" 
        @mouseenter="handleMouseEnter(item.name , 'nav_link_' + item.name.toLowerCase())"
        @mouseleave="handleMouseLeave()"
        >
        <router-link :to="item.path" class="nav-link" :ref="`nav_link_${item.name.toLowerCase()}`">{{ item.name }}</router-link>
      </li>
      <li  class="switcher" >
        <ThemeButton />
      </li>
      <div class="indicator" ></div>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { Ref , ComputedRef  } from 'vue';
import { ref , computed ,onMounted } from 'vue';
import type { NavItem } from '@/interface';
import ThemeButton from '@/components/theme-button.vue'
import { router } from '@/main';
// import { useElementBounding } from '@vueuse/core'
import Contact from '@/pages/contact.vue';
const props = defineProps({
  items: {
    type: Array as () => NavItem[],
    required: true,
  },
});
const java = ref(null)
// console.log(nav_link_Home.value)
const navLinkRefs :ComputedRef<{[name: string]: Ref<HTMLElement>}> = computed<{[name: string]: Ref<HTMLElement>}>(() => {
  const refs: Record<string, Ref<HTMLElement>> = {};
  for (const item of props.items) {
    // refs[`nav_link_${item.name.toLowerCase()}`] = ref<HTMLElement>(null);
    // console.log(refs[`nav-link-${item.name}`]);
  }
  // console.log(refs);
  return refs;
});

onMounted(() => {
  console.log(navLinkRefs.value);
  console.log(navLinkRefs.value["nav_link_home"]);
  console.log(navLinkRefs.value["nav_link_home"].value);
  console.log(java);
  console.log(java.value);
})


// const refs: Record<string, Ref<HTMLElement>> = {}
// for (let i :NavItem of props.items) {
//   refs[`nav-link-${i.name}`] = ref<HTMLElement>(null);
// }


const currentItem = ref("home") as Ref<string>;
// const  = ref(null)

function handleMouseEnter(item: string , nav_link_ref: string) {
  currentItem.value = item;
  console.log(navLinkRefs.value[nav_link_ref].value)
  // console.log(nav_link_Home.value)

  // console.log(useElementBounding(navLinkRefs.value[nav_link_ref]));
}

function handleMouseLeave() {
  if(typeof(router.currentRoute.value.name) == "string"){
    currentItem.value = router.currentRoute.value.name
  }else{
    currentItem.value = "home";
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  height: 60px;
  position: relative;
}

.nav-items {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
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
  margin-right: 20px;
  position: relative;
  padding: 10px 5px 10px 5px;
}

.nav-link {
  display: block;
  padding: 0 20px;
  color: inherit;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
}

.nav-link:hover,
.nav-link.active {
  background-color: #444;
}

/* 指示器样式 */
.indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  // height: 100%;
  background-color: #fff;
  border-radius: 5px;
  transform: translateX(0);
  transition: transform 0.3s ease;
}
</style>
