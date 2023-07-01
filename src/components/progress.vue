<template>
    <div class="progress-bar">
        <div :class="`progress-inner ${transition}`" :style="{
            width: `${progress}%`
        }"></div>
    </div>
</template>
<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, watch } from 'vue';
const { proxy } = <any>getCurrentInstance();
const progress = ref(0);
const transition = ref("");
onMounted(() => {
    watch(proxy.loading, (val) => {
        console.log(val);
        if (val) {
            transition.value = 'transition-none';
            transition.value = 'transition-ease-out';
            progress.value = 70;
        }
        else {
            transition.value = 'transition-ease-in';
            progress.value = 100;
            setTimeout(() => {
                if(!proxy.loading.value){
                    progress.value = 0;
                    transition.value = 'transition-none';
                }
            }, 500);
        }
    });
});
</script>
<style lang="scss" scoped>
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: 9999;

    .progress-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 20%;
        height: 100%;
        background-color: var(--has-background-success);
        opacity: 1;
    }
    .transition-ease-in {
        opacity: 0;
        transition: width 0.5s ease-in, opacity 0.5s ease-in;
    }
    .transition-none {
        transition: width 0s ease;
    }
    .transition-ease-out {
        transition: width 5s ease-out;
    }


}
</style>