<template>
  <section class="about-section">
    <h1>ABOUT</h1>
    <p>
      The information presented on this site is not intended to be used for
      medical advice or guidance. The data used is open source, provided by
      <a
        href="https://github.com/CSSEGISandData/COVID-19"
        target="_blank"
        rel="noopener noreferrer"
        class="about-link"
      >
        this Github repository
      </a>
      created by the Center for Systems Science and Engineering (CSSE) at Johns
      Hopkins University (JHU).
    </p>
    <br />
    <p>
      The information provided by JHU is gathered from multiple public sources
      that do not always agree on the statistics. Differences in data and
      numbers is encountered across many different sites that provide data
      related to COVID-19. Visiting the Github link above will provide
      information regarding the different sources that JHU gathers data from.
    </p>
    <br />
    <p>
      This site uses a public API (
      <a
        href="https://www.cov-api.com/"
        class="about-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.cov-api.com/
      </a>
      ) to access the data gathered by JHU. The data provided by the API comes
      from the Daily Report and Time Series directories in the JHU Github
      repository. There are some differences in statistics that are presented
      here. For example, the Daily Report information is displayed in the States
      / Territories list, while information for the charts is gathered from the
      Time Series directories. In some cases the numbers do not exactly line up.
      This is due to differences between the two directories regarding available
      data .
    </p>
  </section>
</template>

<style scoped>
.about-section {
  margin: auto;
  width: 1000px;
}

.about-section h1 {
  text-align: center;
  font-size: 3rem;
  margin: 1rem 0;
  text-decoration: underline;
}

.about-section p {
  margin: 0 1rem;
  line-height: 1.4;
  font-size: 1.3rem;
}

.about-link {
  color: red;
  text-decoration: none;
}

.about-link:hover {
  text-decoration: underline;
  color: #b60006;
}
</style>
