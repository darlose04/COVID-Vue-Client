<template>
  <div class="disclaimer">
    <h1>THE INFORMATION PRESENTED HERE IS NOT UP TO DATE!</h1>
    <h3>
      In order to get more recent statistics, visit this link:
      <a
        href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
        target="_blank"
        rel="noopener noreferrer"
      >
        COVID-19 Dashboard by the Center for Systems Science and Engineering
        (CSSE) at Johns Hopkins University (JHU)
      </a>
      .
    </h3>
  </div>
</template>

<script>
export default {
  name: "Disclaimer",
};
</script>

<style scoped>
.disclaimer {
  grid-column: 1 / span 5;
  background-color: red;
  color: #fff;
  padding: 1rem;
  text-align: center;
  align-items: center;
  margin: 1rem 1rem 1rem 1rem;
}

.disclaimer h3 a {
  color: #fff;
}

.disclaimer h3 a:hover {
  color: #000;
}
</style>
