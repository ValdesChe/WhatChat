<template>
  <div class="messenger">
    <div class="el-asider" style="width:404px">
      <!-- v-loading="loading" -->
      <div class="logo-container">
        <a href="" class="logo-icon" >
          <img class="svg-icon" :src="user.image" />
        </a>
      </div>
      <div class="search-container">
        <el-input
          placeholder="      Search or start a new chat"
          prefix-icon="el-icon-search"
          v-model="seach_input"
          autocomplete="on"
          autofocus="true"
          class="search-input">
        </el-input>
      </div>
      <div class="list-conversation">
        <div v-for="conversation in conversations" :key="conversation.id" >
          <el-collapse-transition v-if="conversation.id != 1">
          <router-link class="convervation" :to="{ name: 'conversation', params: { id: conversation.id}}">
            <div class="conversation-image">
              <a href="" class="logo-icon" >
                <img class="svg-icon" :src="conversation.image" :alt="conversation.id" />
              </a>
            </div>
            <div class="conversation-details">
              <div class="first-row">
                  <div class="conversation--username">
                    <span>  {{ conversation.username }} </span>
                  </div>
                  <div class="conversation--date">
                    <span style="float: right; text-align: right;" class="span--datespan--date">13:45</span>
                  </div>
              </div>
              <div class="second-row">
                <div class="lastmessage">
                  <span>  Bonjour {{ user.name }} </span>
                </div>
                <div class="ismessage" v-if="conversation.id == 3" >
                    <el-badge :value="3" class="item"></el-badge>
                </div>

              </div>

            </div>
          </router-link>

        </el-collapse-transition>

        </div>
      </div>
    </div>
    <div class="el-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna
         aliqua. Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea commodo consequat. Du
         is aute irure dolor in reprehenderit in voluptate velit ess
         e cillum dolore eu fugiat nulla pariatur. Excepteur sint oc
         caecat cupidatat non
         proident, sunt in culpa qui officia deserunt mollit anim i
         d est laborum.
      </p>
    </div>
  </div>
</template>


<script>

  import auth from "../auth"
  import {mapGetters} from 'vuex'

  export default {
    name:"Messagerie",
    data() {

      return {
        seach_input: '',
        user: auth.user
      }
    },
    computed:{
      ...mapGetters(
        ['conversations']
      )
    },
    methods: {

    },
    mounted() {
      //do something after mounting vue instance
      // console.log(auth);
      this.$store.dispatch('loadConversations')
    }

  };

</script>


<style lang="sass" scoped>
  .messenger{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;

    /* Asider */
    .el-asider {
      background: #FFFFFF;
      border-right: 1px solid #DED6CE;
      height: 100%;
      overflow: hidden;
      flex: 404px;
    }

    /* Main Container */
    .el-body{
      flex: 70%;
      height: 100%;

    }
  }
  .item {
      margin-top: 10px;
      margin-right: 40px;

  }
  .header-profile {
    background-color: #B3DED1;
    color: #000000;
    width: 100%;
    height: 70px;
    line-height: 10px;
  }
  .logo-container{
    padding: 5px;
    background: #EEEEEE;
    border-bottom: 1px solid #DED6CE;
    position: relative;

    .logo-icon{
      width: 3em;
      height: 3em;
      display: flex;
      align-items: center;
      justify-content: center;
      /*display: block;*/
      padding: 7px;
      margin-left: 15px;
      position: relative;
      border-radius: 50%;
      border: 1px inset rgba(0,0,0,.1);
      background: #FFFFFF;

    }

    .svg-icon {
      width: 2em;
      height: 2em;
      /*position: absolute;
      top: auto;
      bottom: auto;*/

      margin: 0 auto ;
    }
  }
  .search-container {
      -webkit-flex: none;
      flex: none;
      height: 54px;
      box-sizing: border-box;
      position: relative;
      z-index: 100;
      padding: 10px;

      background: #F6F6F6;
      transition: box-shadow 0.18s ease-out, background-color 0.18s ease-out;

      .search-input{
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #f6f6f6;
      }
  }

  .list-conversation{
    display: block;
    height: 500px;
    position: relative;
    overflow: hidden;
    overflow-y: scroll;

    a {
      text-decoration: none;
    }

    /* The link */
    .convervation{
      display: flex;
      width: 400px;
      background: white;
      flex-direction: row;

    }
    .conversation-image{
      padding: 5px;
      position: relative;
      flex: 22%;

      .logo-icon{
        width: 3.5em;
        height: 3.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        /*display: block;*/
        padding: 7px;
        margin-left: 15px;
        position: relative;
        border-radius: 50%;
        border: 1px inset rgba(0,0,0,.1);
        background: #FFFFFF;

      }

      .svg-icon {
        width: 2.5em;
        height: 2.5em;
        /* position: absolute;
        top: auto;
        bottom: auto; */

        margin: 0 auto ;
      }

    }
    .conversation-details{
      flex: 78%;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      min-width: 0;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-justify-content: center;
      justify-content: center;
      cursor: pointer;

      border-bottom: 2px solid #F2F2F2;

      .first-row {
          -webkit-align-items: center;
          align-items: center;
          line-height: normal;
          display: -webkit-flex;
          display: flex;


          .conversation--username{
            text-align: left;
            color: #333333;


            font-weight: bold;
            font-size: 19px;
            line-height: 19px;


          }
          .conversation--date{
            text-align: right;
            color: #8E9090;
            font-size: 0.9em;
            padding-right: 7px;
            position: absolute;
            right: 0;
          }

      }
      .second-row {
          -webkit-align-items: center;
          align-items: center;
          line-height: normal;
          display: -webkit-flex;
          display: flex;


          .lastmessage{
            text-align: left;
            color: #696969;

            padding-top: 5px;
            font-weight: bold;
            font-size: 14px;
            line-height: 19px;


          }
          .ismessage{
            text-align: right;
            color: #8E9090;
            font-size: 0.9em;
            padding-right: 7px;
            position: absolute;
            right: 0;
          }

      }

    }
  }
</style>
