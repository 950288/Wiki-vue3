<template>
  <div class="tableview">
      <table class="table" id="table">
        <slot />
      </table>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.tableview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .content {
    background: #fff;
    width: 60%;

    #table {
      width: 100%;

      th {
      }
    }
  }
}
</style>
