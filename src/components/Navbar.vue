<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-warning px-3">
    <h1 class="fw-bold"><i class="mdi mdi-email"></i>Bloggr</h1>
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'Home' }"
            class="btn text-dark lighten-30 selectable text-uppercase fw-bold fs-5 border-dark">
            Home
          </router-link>
          <router-link :to="{ name: 'Details' }"
            class="btn text-dark lighten-30 selectable text-uppercase fw-bold fs-5 border-dark">
            Create
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.border-dark {
  border-width: 3px;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
