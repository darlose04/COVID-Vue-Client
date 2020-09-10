<template>
  <div class="data-wrapper">
    <Disclaimer />
    <StateList />
  </div>
</template>

<script>
import Disclaimer from "../../layout/Disclaimer";
import StateList from "./StateList";

export default {
  name: "USData",
  components: {
    Disclaimer,
    StateList,
  },
};
</script>

<style scoped>
.data-wrapper {
  width: 1400px;
  margin: auto;
}

.data {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  height: 2000px;
  margin-bottom: 4rem;
}
</style>
