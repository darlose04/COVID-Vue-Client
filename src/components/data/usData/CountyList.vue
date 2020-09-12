<template>
  <div class="county-list">
    <div>
      <h1>This is where the county list will go</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountyList",
};
</script>

<style scoped>
.county-list {
  margin-right: 1rem;
  padding: 1rem;
  height: 2035px;
  overflow: scroll;
}

.county-list div h1 {
  border-bottom: 2px solid black;
}

.county-list div ul li {
  margin: 0.5rem 0;
  border-bottom: 1px dotted black;
}

.county-list div ul li:last-child {
  border: none;
}
</style>
