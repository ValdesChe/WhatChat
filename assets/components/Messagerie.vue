<template>
  <div class="messenger">
    <div class="el-asider" style="width:404px">
      <!-- v-loading="loading" -->
      <div class="header-user">
        <div class="logo-container">
          <a href="" class="logo-icon" >
            <img class="svg-icon" :src="user.image" />
          </a>
        </div>
        <div class="options-tools">
            <ul class="options">
              <li>
                <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                    <svg id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#727A7E" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
                </router-link>
              </li>
              <li>
                <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                </router-link>
              </li>
              <li>
                <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </router-link>
              </li>


            </ul>
        </div>
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
      <div class="header-profile">

      </div>
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

  import {Socket} from 'phoenix'
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
      let socket = new Socket("/socket", { params: { token: window.userToken } })
      socket.connect()
      let channel = socket.channel('room:lobby', {})
      channel.join()
        .receive('ok', resp => { console.log('Joined successfully', resp) })
        .receive('error', resp => { console.log('Unable to join', resp) })

      this.$store.dispatch('loadConversations')
    }

  };
</script>


<style lang="sass" scoped>


  ul.options {
      list-style: none;
      padding: 0;
      position: absolute;
      top: 5px;
      right: 15px;

      li {
        display: inline-block;
        padding-left: 12px;
      	zoom: 1;

        .opt-link {
          display: block;
          font-size: 1.4em;
          margin: 0 5px;
          text-decoration: none
        }

      }
  }
  .messenger{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;

    /* Asider */
    .el-asider {
      background: #EEEEEE;
      border-right: 1px solid #DED6CE;
      height: 100%;
      overflow: hidden;
      flex: 404px;

      .header-user{
        display: flex;
        width: 100%;
        flex-direction: row;
        position: relative;

      }

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

  .options-tools{
    flex: 80%;
  }
  .logo-container{
    padding: 5px;
    background: #EEEEEE;
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

    /* Body Message*/
    .header-profile {
      background-color: #EEEEEE;
      color: #000000;

      border-bottom: 1px solid #DED6CE;
      width: 100%;
      height: 60px;
      line-height: 10px;
    }
</style>
