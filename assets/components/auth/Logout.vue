<template>
  <div>
    Logout
  </div>
</template>
<script>
  import { Action } from './../../auth'
  export default {
    data (){
      return {
      }
    },
    created: function() {
      this.$store.dispatch(Action.AUTH_LOGOUT).then((resp) => {
        this.$router.push({ name: 'login'})
      },  (err) => {
        this.$router.push({ name: 'login'})
      })
    }
  }
</script>