<template>
  <nav class="navigation-bar">
    <ul class="nav-items">
      <li v-for="item in items" :key="item.text" class="nav-item">
        <!-- <a :href="item.url" class="nav-link">{{ item.text }}</a> -->
        <router-link :to="item.url"  class="nav-link">{{item.text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NavigationBar',
  props: {
    items: {
      type: Array as () => NavItem[],
      required: true,
    },
  },
  data() {
    return {
      currentItem: ref(null),
    };
  },
  methods: {
    handleClick(item: NavItem) {
      // this.currentItem = item;
    },
  },
});

interface NavItem {
  text: string;
  url: string;
}
</script>

<style scoped>
.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  height: 60px;
}

.nav-items {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  height: 100%;
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
</style>
