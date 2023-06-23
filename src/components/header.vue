<template>
    <header>   
        <h1>{{ router.currentRoute.value.name }}</h1>
    </header>
</template>
<script setup lang="ts">
import { router } from "@/main";
</script>
<style lang="scss" scoped>
header {
    width: 100%;
    h1{
        margin: 3rem 0 2.5rem 0;
        font-size: 5rem;
        text-align: center;
    }
}
html.dark header h1 {
  --color-header: rgb(165, 214, 255);;
}
html header h1 {
  --color-header: rgb(255, 255, 255);
}

header h1 {
  color: var(--color-header);
}
</style>