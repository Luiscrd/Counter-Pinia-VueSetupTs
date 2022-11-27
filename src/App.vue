<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import IconPiniaVue from '@/shared/components/icons/IconPinia.vue';
</script>

<template>
  <header>
    <IconPiniaVue />
    <div class="wrapper">
      <h3>Pinia - Ejercicios</h3>
      <nav>
        <RouterLink to="/options">Counter Options</RouterLink>
        <RouterLink to="/setup">Counter Setup</RouterLink>
        <RouterLink to="/client/list">Clientes</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

h3 {
    text-align: center;
    margin-top: 15px;
    width: 100%;
  }

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #ffc107;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;
    width: 100%;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
