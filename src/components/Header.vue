<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <!-- using router-link instead of the normal anchor tag stops the page from reloading -->
      <router-link to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/user">User</router-link>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
