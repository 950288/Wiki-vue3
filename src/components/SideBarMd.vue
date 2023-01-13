<template>
<div class="main row">
<div class="left col-12">
</div>
<div class="right col-12">

</div>
</div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.main{
    position: fixed;
    // position: sticky;
    left: 0;
    top: 60px;
    // background: rgb(82, 151, 19);
    // margin: 0 auto;
    margin: 0;
    height: 90vh;
    z-index: 2;
    .left{
        background: rgb(82, 151, 19);
        height: 100%;
        // width: 50%;
    }
    .right{
        // background: rgb(82, 151, 19);
        height: 100%;
        // width: 50%;
    }
}
</style>