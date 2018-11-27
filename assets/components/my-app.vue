<template>
  <div class="my-app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name:"MyApp",
    data() {
      return {
        message: ""
      }
    },
    // components: {
    //   Asida
    // },
    // computed: {
    //   messages() {
    //     return this.$parent.messages
    //   }
    // },
    // methods: {
    //   sendMessage() {
    //     this.$parent.channel.push("new_msg", { body: this.message })
    //     this.message = ''
    //   }
    // }
  }
</script>
<style lang="sass">
  body {
    margin: 0;
    box-sizing: border-box
    h1 {
      text-align: center;
    }
  }
</style>
