<template>
  <div class="view">
    <div class="content">
      <table class="table" id="table">
        <thead>
          <tr>
            <th v-for="header in headers" :key="(header as any)">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td v-for="value in row.values" :key="value">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Row {
  id: number;
  values: Array<any>;
}
const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array<Row>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.view {
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
