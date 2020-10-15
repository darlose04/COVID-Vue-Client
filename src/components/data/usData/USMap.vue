<template>
  <div class="data-wrapper">
    <svg-map class="map" :map="USA" :location-class="getLocationClass" @mouseover="pointLocation" @mouseout="unpointLocation" @mousemove="moveOnLocation" />
    <div class="tooltips" :style="tootipStyle">
      {{ pointedLocation }}
    </div>
  </div>
</template>

<script>
import { SvgMap } from 'vue-svg-map';
import USA from "@svg-maps/usa";
import getLocationName from '../../../utilities';

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
      this.pointedLocation = getLocationName(event.target)
    },
    unpointLocation() {
      this.pointedLocation = null;
      this.tooltipStyle = { display: 'none' }
    },
    moveOnLocation(event) {
      this.tooltipStyle = {
        display: "block",
        top: `${event.clientY + 10}px`,
        left: `${event.clientX - 100}px`,
      }
    },
    getLocationClass(location, index) {
      return `svg-map__location svg-map__location--heat${index % 4}`
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