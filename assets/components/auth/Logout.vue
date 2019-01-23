<template>
  <div>
    Logout
  </div>
</template>
<script>
  
  import auth from './../../auth'
  
  export default {
    data (){
      return {
      }
    },
    created:function(){
      auth.signOut(this);
      this.$router.go('/login');
    }
  }
</script>