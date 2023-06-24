<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const tablePro = defineAsyncComponent(() => import("@/components/TablePro.vue"));
</script>
<style lang="scss" scoped></style>
<template>
  <div class="content is-large">
    <!-- WikiBreeze contact1 start--><p>Example Text</p><p>WHAT IS IT</p><table><tr><th colspan="1" rowspan="1"><p>WWW</p></th><th colspan="1" rowspan="1"><p>QQQ</p></th><th colspan="1" rowspan="1"><p></p></th></tr><tr><td colspan="1" rowspan="1"><p>EEE</p></td><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p>QQQ</p></td></tr><tr><td colspan="1" rowspan="1"><p>QQQ</p></td><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr></table><img class="image" src="https://pic4.zhimg.com/v2-4eab4289d962a2f900c27711b8539c23_b.jpg"><!-- WikiBreeze contact1 end-->
  </div>
</template>
