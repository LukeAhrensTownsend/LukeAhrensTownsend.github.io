<template>
  <div id="app">
    <b-navbar
      v-show="this.$route.path !== '/'"
      toggleable="md"
      :sticky="true"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand to="/">
        <img id="website-logo" class="navbar-logo" src="@/assets/logo.png" alt="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about" v-bind:active="this.$route.path === '/about'">About</b-nav-item>
          <b-nav-item to="/projects" v-bind:active="this.$route.path === '/projects'">
            Projects
            <b-badge
              :variant="this.$route.path === '/projects' ? 'light' : ''"
            >{{projectData.length}}</b-badge>
          </b-nav-item>
          <b-nav-item to="/resume" v-bind:active="this.$route.path === '/resume'">Resume</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button-toolbar id="social-button-group" class="justify-content-md-center">
            <b-button id="email-button" class="social-button" variant="dark">
              <img class="navbar-logo" src="@/assets/email-logo-light.png" alt="E-mail logo" />
            </b-button>

            <b-button id="phone-button" class="social-button" variant="dark">
              <img class="navbar-logo" src="@/assets/phone-logo-light.png" alt="Phone logo" />
            </b-button>

            <b-button
              class="social-button"
              href="https://ca.linkedin.com/in/luke-ahrens-townsend-09a8aa181"
              variant="dark"
            >
              <img class="navbar-logo" src="@/assets/linkedin-logo-light.png" alt="LinkedIn logo" />
            </b-button>

            <b-button
              class="social-button"
              href="https://github.com/LukeAhrensTownsend"
              variant="dark"
            >
              <img class="navbar-logo" src="@/assets/github-logo-light.png" alt="GitHub logo" />
            </b-button>
          </b-button-toolbar>
        </b-navbar-nav>
        <b-tooltip target="email-button" placement="bottom">
          Please e-mail me at
          <b-link href="mailto:lahrenstownsend@gmail.com">lahrenstownsend@gmail.com</b-link>
        </b-tooltip>
        <b-tooltip target="phone-button" placement="bottom">
          Please call me at
          <a id="phone-field" href="tel:+12048036976">1 (204) 803-6976</a>
        </b-tooltip>
      </b-collapse>
    </b-navbar>
    <router-view :projectData="projectData"></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  head: {
    title: {
      inner: "Portfolio | Luke Ahrens-Townsend"
    },
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }
    ]
  },
  data() {
    return {
      projectData: {}
    };
  },
  async created() {
    try {
      const response = await fetch(
        "https://api.github.com/users/LukeAhrensTownsend/repos",
        {
          method: "GET"
        }
      );

      this.projectData = await response.json();
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
html,
body,
#app,
.container {
  height: 100%;
}

.navbar-logo {
  height: 1.7em;
}

.nav-item:hover .badge {
  opacity: 1;
}

.router-link-active .badge {
  opacity: 1 !important;
}

#website-logo,
.social-button,
.badge {
  opacity: 0.7;
}

#website-logo:hover,
.social-button:hover {
  opacity: 1;
  transition: 0.1s;
}

#social-button-group button:hover,
#social-button-group a:hover {
  background-color: rgba(0, 0, 0, 0) !important;
  border-color: rgba(0, 0, 0, 0) !important;
}

#phone-field {
  display: block;
}
</style>
