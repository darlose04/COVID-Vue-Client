<template>
  <div class="list-data">
    <GlobalTotals />
  </div>
</template>

<script>
import GlobalTotals from "./GlobalTotals";

export default {
  name: "CountryList",
  components: {
    GlobalTotals,
  },
};
</script>

<style scoped>
.list-data {
  margin-left: 1rem;
  padding: 1rem 1rem;
  max-height: 1000px;
}

.country-list {
  height: 1863px;
  overflow: scroll;
}

.country-list h2 {
  border-bottom: 2px solid black;
  margin-bottom: 0.5rem;
}

.country-list ul li {
  border-bottom: 1px dotted black;
  margin: 0.5rem 0;
}

.country-list ul li:last-child {
  border-bottom: none;
}

.country-list ul li h3 {
  cursor: pointer;
}

.country-list ul li h3:hover {
  color: red;
}
</style>
