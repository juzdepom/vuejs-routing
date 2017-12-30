<template>
  <div class="">
    <h1>The User Page</h1>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.id
      }
    },
    watch: {
      // if we dont add this the this.id does not change even though the url changes
      '$route'(to, from) {
        this.id = to.params.id
      }
    },
    methods: {
      navigateToHome(){
        this.$router.push('/');
      }
    }
  }

</script>
