<template>
  <div class="data-wrapper">
    <svg-map class="map" :map="USA" :location-class="getLocationClass" @mouseover="pointLocation" @mouseout="unpointLocation" @mousemove="moveOnLocation" />
    <div></div>
  </div>
</template>

<script>
import { SvgMap } from 'vue-svg-map';
import USA from "@svg-maps/usa";

export default {
  name: "USMap",
  components: {
    SvgMap
  },
  data() {
    return {
      USA,
      pointedLocation: null,
      tooltipStyle: null,
    }
  },
  methods: {
    pointLocation(event) {
      this.pointedLocation = 
    }
  }
}
</script>

<style scoped >
  .data-wrapper {
    width: 1400px;
    margin: auto;
  }

  .map {
    margin-top: 60px;
  }
</style>