<template>
  <div class="">
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <label for="confirm">Confirm</label>
    <input id="confirm"
          type="checkbox"
          @click="confirmed = !confirmed"
          style="margin-left:5px">
    <br><br>
    <div style="height:700px; background-color:lightgray"></div>
    <br>
    <p id="bananas">Some data</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        confirmed: false,
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirmed==true){
        next();
      } else {
        if(confirm('Are you sure?')){
          next();
        } else {
          next(false);
        };
      }

    }
  }

</script>
