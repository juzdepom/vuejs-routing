<template>
  <ul class="nav nav-pills">
      <!-- using router-link instead of the normal anchor tag stops the page from reloading -->
      <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link>
      <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
