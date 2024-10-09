<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/hello">Hello</router-link>
    </nav>
    <router-view></router-view>
    <!-- This is where the routed component will render -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped></style>
