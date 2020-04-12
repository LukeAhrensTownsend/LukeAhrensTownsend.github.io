<template>
  <b-container>
    <div class="row h-100">
      <div class="my-auto mx-auto">
        <div id="title-name" class="text-center">Luke Ahrens-Townsend</div>
        <div
          id="title-description"
          class="lead text-center"
        >Computer Science Graduate (BSc 4-year in Applied Computer Science)</div>
        <b-button-toolbar class="justify-content-center">
          <b-button class="mx-3" to="/about" variant="outline-info">About Me</b-button>
          <b-button class="mx-3" to="/projects" variant="outline-info">Projects</b-button>
          <b-button class="mx-3" to="/resume" variant="outline-info">Resume</b-button>
        </b-button-toolbar>

        <b-button-toolbar id="social-button-group" class="justify-content-center">
          <b-button id="email-button-home" class="social-button mx-3" variant="white">
            <img class="social-logo" src="@/assets/email-logo-dark.png" alt="E-mail logo" />
          </b-button>
          <b-button id="phone-button-home" class="social-button mx-3" variant="white">
            <img class="social-logo" src="@/assets/phone-logo-dark.png" alt="Phone logo" />
          </b-button>
          <b-button
            href="https://ca.linkedin.com/in/luke-ahrens-townsend-09a8aa181"
            class="social-button mx-3"
            variant="white"
          >
            <img class="social-logo" src="@/assets/linkedin-logo-dark.png" alt="LinkedIn logo" />
          </b-button>
          <b-button
            href="https://github.com/LukeAhrensTownsend"
            class="social-button mx-3"
            variant="white"
          >
            <img class="social-logo" src="@/assets/github-logo-dark.png" alt="GitHub logo" />
          </b-button>
        </b-button-toolbar>
        <b-tooltip target="email-button-home" placement="top">
          Please e-mail me at
          <b-link href="mailto:lahrenstownsend@gmail.com">lahrenstownsend@gmail.com</b-link>
        </b-tooltip>
        <b-tooltip target="phone-button-home" placement="top">
          Please call me at
          <b-link id="phone-field" href="tel:+12048036976">1 (204) 803-6976</b-link>
        </b-tooltip>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
#title-name {
  font-size: calc(16px + 4vw);
  font-weight: 100;
}

#title-description {
  font-size: calc(10px + 0.5vw);
  margin-bottom: 5%;
}

.social-logo {
  height: 2em;
}

#social-button-group {
  margin-top: 20%;
}
</style>