<template>
  <div>
    <b-jumbotron
      header="Resume"
    >
      <b-button variant="outline-info" href="/RESUME_LUKE-AHRENS-TOWNSEND.pdf" download>Download PDF</b-button>
    </b-jumbotron>
    <b-container>
      <h1 id="title-name" class="display-4 text-center">Luke Ahrens-Townsend</h1>
      <div class="lead text-center mb-5">Software/Web Application Developer</div>
      <b-row>
        <b-col md="4">
          <h2>Contact</h2>
          <div class="my-1">
            <img class="contact-logo" src="@/assets/email-logo-dark.png" alt="Email logo" />
            <b-link href="mailto:lahrenstownsend@gmail.com">lahrenstownsend@gmail.com</b-link>
          </div>
          <div class="my-1">
            <img class="contact-logo" src="@/assets/phone-logo-dark.png" alt="Phone logo" />
            <b-link href="tel:+12048036976">1 (204) 803-6976</b-link>
          </div>
          <div class="my-1">
            <img class="contact-logo" src="@/assets/linkedin-logo-dark.png" alt="LinkedIn logo" />
            <b-link href="https://ca.linkedin.com/in/luke-ahrens-townsend-09a8aa181">LinkedIn</b-link>
          </div>
          <div class="my-1">
            <img class="contact-logo" src="@/assets/github-logo-dark.png" alt="GitHub logo" />
            <b-link href="https://github.com/LukeAhrensTownsend">GitHub</b-link>
          </div>

          <hr />

          <h2>Education</h2>
          <h5 class="section-subheader">University of Winnipeg</h5>
          <small>2015-2020</small>
          <div
            class="lead"
          >In April 2020 I completed my Bachelor of Science degree (majoring in Applied Computer Science) at the University of Winnipeg.</div>

          <br />

          <h5 class="section-subheader">University of Manitoba</h5>
          <small>2013-2015</small>
          <div
            class="lead"
          >Studied accounting and environmental sciences with an average grade of B+.</div>

          <br />

          <h5 class="section-subheader">Shaftesbury High School</h5>
          <small>2010-2013</small>
          <div class="lead">Earned high school diploma.</div>

          <hr />

          <h2>Achievements</h2>
          <h5 class="section-subheader">Dean's Honour List</h5>
          <small>Nov 2019 &#x2022; University of Winnipeg</small>
          <div
            class="lead"
          >In the 2018-19 academic year, I was placed on the Dean’s Honour List as a student of distinction for achieving a 3.708 GPA.</div>

          <hr />
        </b-col>
        <b-col>
          <h2>Objective</h2>
          <div
            class="lead"
          >Seeking full-time employment in the area of information technology and software/web application development. I'm a hard-working team player who's looking for like-minded coworkers and employers who share the same enthusiasm.</div>

          <hr />

          <b-row>
            <b-col md="5">
              <h2>Skills</h2>
              <ul>
                <li>
                  <big>Java</big>
                </li>
                <li>
                  <big>Javascript</big>
                </li>
                <li>
                  <big>HTML</big>
                </li>
                <li>
                  <big>Node.js</big>
                </li>
                <li>
                  <big>React</big>
                </li>
                <li>
                  <big>Vue.js</big>
                </li>
                <li>
                  <big>SQL/PostgreSQL</big>
                </li>
                <li>
                  <big>MongoDB</big>
                </li>
                <li>
                  <big>C/C++</big>
                </li>
                <li>
                  <big>C#</big>
                </li>
                <li>
                  <big>Python</big>
                </li>
                <li>
                  <big>Unity</big>
                </li>
                <li>
                  <big>RStudio</big>
                </li>
              </ul>
            </b-col>
            <b-col>
              <h2>Industry Knowledge</h2>
              <ul>
                <li>
                  <big>Software Development</big>
                </li>
                <li>
                  <big>Web Development</big>
                </li>
                <li>
                  <big>Cloud Computing</big>
                </li>
                <li>
                  <big>Database Administration</big>
                </li>
                <li>
                  <big>Data Warehousing</big>
                </li>
                <li>
                  <big>Statistical Data Analysis</big>
                </li>
                <li>
                  <big>Enterprise Resource Planning</big>
                </li>
                <li>
                  <big>Network Security</big>
                </li>
                <li>
                  <big>User Experience Design</big>
                </li>
                <li>
                  <big>User Interface Design</big>
                </li>
                <li>
                  <big>Game Development</big>
                </li>
                <li>
                  <big>Version Control Tools</big>
                </li>
              </ul>
            </b-col>
          </b-row>

          <hr />

          <h2>Academic Projects</h2>
          <h5
            class="section-subheader"
          >Capstone Project - Visualizations of Data for Medieval Manuscripts of the Gospel of Nicodemus</h5>
          <small>2019-2020 &#x2022; University of Winnipeg</small>
          <div
            class="lead"
          >I’ve recently completed an academic project for the final year of my computer science degree which involved the planning and development of a data visualization web application built primarily with Node.js and React. The application was intended to aid the discovery and research of medieval documents for scholars and researchers in the field. My primary role on the project was to be the quality control specialist, which required me to ensure that all documentation and standards were met by the team. I also ended up taking on many of the integral front-end features of the application as I was considered to have a “good eye” for clean design and efficient user interfaces.</div>

          <hr />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  head: {
    title: {
      inner: "Resume",
      complement: "Luke Ahrens-Townsend"
    }
  }
};
</script>

<style scoped>
#title-name {
  font-size: calc(18px + 4vw);
}

.section-subheader {
  margin-bottom: 0;
}

.contact-logo {
  height: 1.5em;
  margin-right: 5px;
}
</style>