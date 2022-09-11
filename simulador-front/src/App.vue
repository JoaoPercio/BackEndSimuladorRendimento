<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      class="py-3"
      v-if="notIsLoginPage"
      ><b-navbar-brand to="/"
        ><img src="./assets/logoblack.png" width="70px" class="mx-4"
      /></b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        class="me-4 toggle-dropdown"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="align-items-center">
          <b-nav-item to="/">Simular Objetivo</b-nav-item>
          <b-nav-item to="/historico">Histórico de Objetivos</b-nav-item>
          <b-nav-item to="/login">Sair</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    notIsLoginPage() {
      if (this.$route.name !== "criar-conta") {
        return this.$route.name !== "login";
      } else {
        return this.$route.name !== "criar-conta";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");
*,
*::after,
*::before {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}

.navbar.navbar-light.bg-light {
  background-color: #daecec !important;
}

.navbar-light .navbar-nav .nav-link {
  color: #132649 !important;
}
.toggle-dropdown {
  color: #132649 !important;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #4562ba !important;
  text-decoration: underline;
}
</style>
