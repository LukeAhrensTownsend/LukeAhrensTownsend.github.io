<template>
  <div>
    <b-jumbotron header="Projects" lead="Here's some of the projects I've worked on recently..."></b-jumbotron>
    <b-container>
      <b-row>
        <b-card
          v-for="project in this.$props.projectData"
          v-bind:key="project.id"
          :title="project.name.replace(/-/g, ' ')"
          :img-src="require(`@/assets/${project.name}.png`)"
          :img-alt="`${project.name} image`"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-5 mx-auto mx-md-3"
        >
          <b-card-text>{{ project.description }}</b-card-text>

          <b-button-toolbar justify>
            <b-button :href="project.html_url" variant="outline-primary">Source Code</b-button>
            <b-button
              :href="project.homepage"
              variant="primary"
              v-show="project.homepage !== null && project.homepage !== ''"
            >Live Version</b-button>
          </b-button-toolbar>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["projectData"],
  head: {
    title: {
      inner: "Projects | Luke Ahrens-Townsend"
    }
  }
};
</script>

<style scoped>
</style>