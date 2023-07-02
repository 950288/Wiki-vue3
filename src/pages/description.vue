<template>
  <div class="content is-large">
    <!-- <div id="chart"> -->
      <!-- WikiBreeze des start--><h2>Project Background</h2><p>PET, also known as polyethylene terephthalate, is a type of plastic commonly used to make beverage bottles, food containers and other consumer goods. Although PET is convenient, the harm it brings to the environment is also worth noting. PET accounts for 12% of the world&apos;s solid waste. Theoretically, PET can be degraded into monomers through rapid enzymatic hydrolysis, and then re-polymerized or converted / added value to other products to achieve a circular carbon economy of PET.</p><p>In 2005, enzymes that can degrade PET were first reported, and 19 different PET hydrolytic enzymes (PHEs) have been preliminarily proven. However, most of these enzymes can only show obvious hydrolytic activity at high reaction temperatures and highly processed substrates. Most other PET hydrolytic enzymes have poor activity under moderate temperature and neutral pH conditions. This greatly limits the in situ / microbial degradation solutions for PET waste.</p><p>Recently, a study published in Nature, a research team from the University of Texas at Austin designed a powerful and highly active hydrolytic enzyme that can decompose plastics that usually take centuries to degrade in 24 hours through machine learning algorithms. On the basis of PETase, the team obtained an optimal mutant through engineering modifications and tests, named FAST-PETase (functional, active, stable and tolerant PETase).  </p><p>At the same time, through directed evolution, a new enzyme variant DepoPETase with PET degradation ability similar to FAST-PETase was produced, so it was also included in our consideration.</p><p>The project plans to design a microbial system based on FAST-PETase or DepoPETase to decompose PET in the environment to benefit humanity.</p><h2>PET Degradation</h2><p>With the joint action of PETase and MHETase, PET will decompose into TPA (terephthalic acid).</p><h2>Main Modules</h2><p>We choose <em>Bacillus subtilis</em> as the chassis organism. </p><h3>PET Degradation Module (Core Module)</h3><p>This module is responsible for expressing the synthesis of downstream PET-degrading enzymes PETase and MHETase. These four enzymes (two more not shown in the figure) can degrade PET into PCA, which eventually enters the tricarboxylic acid cycle as a carbon source.</p><img class="image" src="https://static.igem.wiki/teams/4591/wiki/wiki/fast.png"><p>The expression of related genes in this module is controlled by the constitutive promoter P43. In addition, we plan to add a signal peptide SPamy in front of the two plastic degrading enzymes to increase the expression and secretion of the two plastic degrading enzymes.</p><h3>Reporting  Module  </h3><p>XylS is a mixotrophic transcription factor from Pseudomonas putida that can bind benzoate and various derivatives but cannot recognize PA and TPA. This mutant XylS can be used to construct a biosensor for PA and TPA detection to detect the presence of TPA and activate the corresponding module (regulated by promoter Pm).</p><img class="image" src="https://static.igem.wiki/teams/4591/wiki/wiki/xyls.png"><p>  </p><p>This module reports the degradation of TPA by expressing the downstream gene green fluorescent protein sfGFP.</p><h3>Attachment Module</h3><p>MstX is a protein that promotes biofilm formation in <em>Bacillus subtilis</em>. MstX promotes the expression of two proteins (tasA and tapA) required for biofilm formation and the required polysaccharides (EPSA-O, 15 genes in total) by increasing the phosphorylation level of Spo0A, and prevents flagella rotation. Finally, we aim to improve the PET degradation efficiency by promoting the formation of biofilms in engineered bacteria.  </p><p>If PETase acts directly on the PET surface, it may be difficult to stably adsorb due to its water-soluble nature. As the crystallinity of the plastic increases, the degradation efficiency gradually decreases. BslA is a surfactant protein produced during biofilm formation in Bacillus subtilis. BslA can spontaneously polymerize to form a hydrophobic polymer and build a hydrophobic layer on the biofilm surface.</p><img class="image" src="https://static.igem.wiki/teams/4591/wiki/wiki/hydro.png"><p>Through the combined action of the above two proteins, the adhesion ability of engineered bacteria can be greatly enhanced, their mobility reduced, and the degradation efficiency of PET improved.</p><p>  </p><h3>Suicide Switch</h3><p>Although our engineered bacteria can propagate in the natural environment, in order to prevent potential unknown hazards after engineered bacteria are released, we designed a lactose promoter to activate the suicide of engineered bacteria. When engineered bacteria encounter lactose, the Plac promoter is activated to express the downstream mazF to activate engineered bacteria suicide.</p><img class="image" src="https://static.igem.wiki/teams/4591/wiki/wiki/kill.png"><h3>Summary</h3><p>This project proposes a microbial system to degrade PET using FAST-PETase and other enzymes. Through module design and kill switch construction, we aim to improve the efficiency and safety of PET degradation. We welcome iGEM teams with related interests to collaborate with us.</p><!-- WikiBreeze des end-->

      <apexchart v-if="renderComponent" type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      <apexchart v-if="renderComponent" type="area" height="350" :options="chartOptions0" :series="series0"></apexchart>
      <apexchart v-if="renderComponent" type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      <apexchart v-if="renderComponent" type="area" height="350" :options="chartOptions0" :series="series0"></apexchart>
    <!-- </div> -->
  </div>
</template>
<script setup lang="ts">
import loading from "@/components/loadingBlock.vue";
import { defineAsyncComponent } from 'vue';
const apexchart = defineAsyncComponent({
  loader: () => import('vue3-apexcharts'),
  loadingComponent: loading
});
import { themeMode } from "@/main";
import { nextTick, watch, ref } from 'vue';
const renderComponent = ref(true);
const name = "name";

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
