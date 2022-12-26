<template>
  <div class="content is-large">
    <h2>width: 1024px</h2>
    <p>
      2022-12-25 22:05:14
    </p>
    <div id="chart">
      <apexchart v-if="renderComponent" type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      <apexchart v-if="renderComponent" type="area" height="350" :options="chartOptions0" :series="series0"></apexchart>
      <apexchart v-if="renderComponent" type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      <apexchart v-if="renderComponent" type="area" height="350" :options="chartOptions0" :series="series0"></apexchart>
    </div>
  </div>
</template>
<script setup lang="ts">
import apexchart from 'vue3-apexcharts';
import { themeMode } from "@/main";
import { nextTick, watch ,ref } from 'vue';
const renderComponent = ref(true);

console.log(themeMode.value);
let series = [{
  data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
}];
let chartOptions = {
  chart: {
    type: 'line',
    height: 350
  },
  stroke: {
    curve: 'stepline',
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Stepline Chart',
    align: 'left'
  },
  markers: {
    hover: {
      sizeOffset: 4
    }
  },
  theme: {
    mode: themeMode.value,
    palette: 'palette1',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
    },
  },
}
let series0 = [
  {
    name: 'South',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'North',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 20
    })
  },
  {
    name: 'Central',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 15
    })
  }
]
let chartOptions0 = {
  chart: {
    type: 'area',
    height: 350,
    stacked: true,
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min))
      }
    },
  },
  colors: ['#008FFB', '#00E396', '#CED4DC'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  xaxis: {
    type: 'datetime'
  },
  theme: {
    mode: themeMode.value,
    palette: 'palette1',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
    },
  },
}

//rerender chart component on theme change
watch(themeMode, async () => {
  chartOptions0.theme.mode = themeMode.value;
  chartOptions.theme.mode = themeMode.value;
  // Remove MyComponent from the DOM
  renderComponent.value = false;

  // Wait for the change to get flushed to the DOM
  await nextTick();

  // Add the component back in
  renderComponent.value = true;
})
function generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
</script>
