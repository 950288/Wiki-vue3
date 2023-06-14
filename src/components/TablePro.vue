<template>
  <div class="table-pro">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.table-pro {
  width: 90%;
  display: block;
  padding: 0;
  margin: 1em auto;
}

table {
  width: 90%;
  margin: 1em auto;
  border-collapse: collapse;
}

.table-pro>table {
  width: 100%;
  margin: 0 0 .5em 0;
}

.table-pro>p {
  text-align: center;
}

table p {
  margin-top: .2em;
  margin-bottom: .2em;
}
</style>
