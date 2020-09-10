<template>
  <div class="list-data">
    <Totals v-bind:dailyReport="dailyReport" />
    <div class="state-list">
      <h2>States / Territories</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Totals from "./Totals";

export default {
  name: "StateList",
  components: {
    Totals,
  },
  props: ["dailyReport"],
};
</script>

<style scoped>
.list-data {
  margin-left: 1rem;
  padding: 1rem 1rem;
  max-height: 1000px;
}

.state-list {
  height: 1823px;
  overflow: scroll;
}

.state-list h2 {
  border-bottom: 2px solid black;
  margin-bottom: 0.5rem;
}

.state-list ul li {
  border-bottom: 1px dotted black;
  margin: 0.5rem 0;
}

.state-list ul li:last-child {
  border-bottom: none;
}

.state-list ul li h3 {
  cursor: pointer;
}

.state-list ul li h3:hover {
  color: red;
}
</style>
