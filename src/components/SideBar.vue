<template>
<div class="main">
    <button class="button toggle" @click="$emit('toggleSidebar')">toggle</button>
    <Aside />
</div>
</template>

<script setup lang="ts">
import Aside from "@/components/aside.vue";
</script>
<style lang="scss" scoped>
.main{
    box-sizing: border-box;
    position: sticky;
    top: calc(1.5rem + 60px);
    background: rgb(82, 151, 19);

    // margin: 0 auto;
    margin-top: 1.5rem;
    height: 60vh;
    padding: 1em;
    padding-top: 3rem;
    .toggle{
        position: absolute;
        top: 1rem;
        left: 1rem;
    }
}
</style>