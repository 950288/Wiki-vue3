<script setup lang="ts">
import tableframe from "@/components/Tableframe.vue";

let tableHeaders = ["Column 1", "Column 2", "Column 3"];
let tableRows = [
  {
    id: 1,
    values: ["Row 1 Column 1", "Row 1 Column 2", "Row 1 Column 3"],
  },
  {
    id: 2,
    values: ["Row 2 Column 1", "Row 2 Column 2", "Row 2 Column 3"],
  },
  {
    id: 3,
    values: ["Row 3 Column 1", "Row 3 Column 2", "Row 3 Column 3"],
  },
];
</script>
<template>
  <header>
    <br />
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>
  <main>
    <tableframe :headers="tableHeaders" :rows="tableRows" />
    <br />
    <tableframe :headers="tableHeaders" :rows="tableRows" />
    <br />
    <tableframe :headers="tableHeaders" :rows="tableRows" />
    <br />
    <tableframe :headers="tableHeaders" :rows="tableRows" />
    <br />
    <tableframe :headers="tableHeaders" :rows="tableRows" />
    <br />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    /* margin: 0 2rem 0 0; */
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
