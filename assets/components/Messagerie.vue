<template>
  <div class="messenger">
    <div class="el-asider" style="width:404px">
      <!-- v-loading="loading" -->
      <div class="header-user">
        <div class="logo-container">
          <router-link :to="{ name: 'home'}"  href="" class="logo-icon" >
            <img class="user" :src="getCurrentUser ? getCurrentUser.image:''" />
          </router-link>
        </div>
        <div class="options-tools">
            <ul class="options">
              <li>
                <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                  <svg id="live-status" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#727A7E" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
                </router-link>
              </li>
              <li>
                <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                  <svg id="new_message" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                </router-link>
              </li>
              <li>
                <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
                {{getCurrentUser ? getCurrentUser.name:''}}
              </li>
              <li>
                <div class="opt-link inline-dropdown-menu">
                  <div class="btn-actor">
                    <svg class="" style="top:-3px; fill:#000000;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224" ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g fill="#8f9598"><g id="surface1"><path d="M112,42c-7.73828,0 -14,6.26172 -14,14c0,7.73828 6.26172,14 14,14c7.73828,0 14,-6.26172 14,-14c0,-7.73828 -6.26172,-14 -14,-14zM112,98c-7.73828,0 -14,6.26172 -14,14c0,7.73828 6.26172,14 14,14c7.73828,0 14,-6.26172 14,-14c0,-7.73828 -6.26172,-14 -14,-14zM112,154c-7.73828,0 -14,6.26172 -14,14c0,7.73828 6.26172,14 14,14c7.73828,0 14,-6.26172 14,-14c0,-7.73828 -6.26172,-14 -14,-14z"></path></g></g></g></svg>
                  </div>
                  <div class="menu--options" style="top:35px;right:5px;">
                    <ul>
                      <li><a href="">New group</a></li>
                      <li><a href="">Profile</a></li>
                      <li><a href="">Archived</a></li> 
                      <li><a href="">Starred</a></li>
                      <li><a href="">Settings</a></li>
                      <li><a href="">Log out</a></li>
                    </ul>
                  </div>
                </div>
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
        <div v-for="conversation in conversations" @click="ContactSelected(conversation)" class="one-contact"  :key="conversation.id" >
          <el-collapse-transition v-if="conversation.id != 1">
          <router-link class="convervation" :to="{ name: 'conversation', params: { id: conversation.id}}">
            <div class="conversation-image" >
              <img class="user" :src="conversation.image" :alt="conversation.id" />
              <!-- <a href="" class="logo-icon" >
                <img class="svg-icon" :src="conversation.image" :alt="conversation.id" />
              </svg> -->
            </div>
            <div class="conversation-details">
              <div class="first-row">
                  <div class="conversation--username">
                    <span>  {{ conversation.username }} </span>
                  </div>
                  <div class="conversation--date">
                    <span style="float: right; text-align: right;" class="span--datespan--date">13:45</span>
                  </div>
                  <div class="inline-dropdown-menu">
                    <span class="iconic-right btn-actor"  @click.prevent="ShowConvMenu($event)"></span>
                    <div class="menu--options">
                      <ul>
                        <li><a href="">Archive Tchat</a></li>
                        <li><a href="">Mute</a></li>
                        <li><a href="">Delete chat</a></li> 
                        <li><a href="">Pin chat</a></li>
                        <li><a href="">Mark as unread</a></li>
                      </ul>
                    </div>
                  </div>
              </div>
              <div class="second-row">
                <div class="lastmessage">
                  <span>  {{ conversation.email }} </span>
                </div>
                <div class="ismessage" v-if="conversation.id == 3 || conversation.id == 5 || conversation.id == 8" >
                    <span value="3" class="badge-icon">9</span>
                </div>

              </div>

            </div>
          </router-link>

        </el-collapse-transition>

        </div>
      </div>
    </div>
    <router-view :key="this.$route.fullPath"  default="{name: 'Welcome'}" class="el-body">
    </router-view>
  </div>
</template>
<script>

  import {Socket , Presence} from 'phoenix'
  import auth from "../auth"
  import {mapGetters} from 'vuex'
  import optionListener from './utils/optionMenuListener';
  
  window.Presence = Presence

  const syncPresentUsers = (context, socket , presences) => {
    const participants = [];
    Presence.list(presences).map( p => {
      const participant = p.metas[0]
      if(auth.user.id != participant.id){
        
        participants.push(participant)
      }
    })
    context.$store.dispatch('addParticipants', participants);
  }
  
  export default {
    name:"Messagerie",
    data() {

      return {
        seach_input: '',
      }
    },
    computed:{
      conversations () {
        return this.$store.getters.getParticipants('all')
      },  
      ...mapGetters(
        ['getCurrentUser']
      )
    },
    watch: {
      /* 'conversations': function(val, oldVal) {
        console.log("Conversations List has been updated")
        this.$nextTick(function() {
          console.log(this.$el);
          
          // scrollTop = this.$el.scrollHeight;
        });
      } */
    },
    updated: function() {
       optionListener.menuListener()
    },
    methods: {
      ContactSelected(convSelect){
        this.$store.dispatch("setOpenedConv", convSelect)
      },
      ShowConvMenu(does){
        // optionListener.menuListener()
      },
      

    },
    mounted() {
      this.$store.dispatch('SOCKET_CONNECTED', {
        currentUser: auth.user,
        socket: null,
        channel: null,
      });
      let presences = {};
      window.addEventListener('load', () => {

        optionListener.menuListener() 
        document.querySelector(".messenger").style.height =  window.innerHeight + "px"
        document.querySelector(".my-app").style.height =  window.innerHeight + "px"
        document.querySelector(".el-asider").style.height =  window.innerHeight  + "px"
        const listContact = document.querySelector(".list-conversation")
        listContact.style.height =  window.innerHeight- 115  + "px"

        const socket = new Socket('/socket', {
          params: {
            token: localStorage.getItem('token')
          }
        });

        socket.connect();

        // var channel = socket.channel("rooms:lobby", {})
        // const channel = socket.channel(`users:${localStorage.getItem('id_token')}`);
        const channel = socket.channel(`users:join`);
        /* channel.on('users:joined', (resp) => {
            // If it's not me
          if(resp.NewUserInfo.id != auth.user.id){
            this.$store.dispatch('addParticipant', {participant: resp.NewUserInfo});
          }
              
        }) */

        channel.on("presence_diff", (response) => {
          presences = Presence.syncDiff(presences, response);
          console.log("Diff Called");
          console.log(presences);
          syncPresentUsers(this, socket , presences);
        })

        channel.on("presence_state", (response) => {
          console.log("State Called");
          presences = Presence.syncState(presences, response);
          // console.log(presences);
          
          syncPresentUsers(this, socket , presences);
          optionListener.menuListener()
        })

        channel.on("user:joined", (response) => {
          console.log("User Joined Received")
          console.log(response);
          syncPresentUsers(this.$store.dispatch, presences);
        }) 
        if (channel.state != 'joined') {
          channel.join().receive('ok', () => {
            // console.log("Channel Joined Ok");
            channel.push('users:declare', {
              userInfo: auth.user
            })
          });

        } else {
          this.$router.push("{name: 'logout'}")
          console.log("Something went wrong");
          return;
        }

        
      })
      // this.$store.dispatch('loadConversations')
    }

  };
</script>


<style lang="sass" >


  a {
    text-decoration:none;
    border:none;
    outline: 0;
  }

  .inline-dropdown-menu{
    position:absolute;
    top:0px;
    right:5px;
    display:block;
   
    .iconic-right{
      position:absolute;
      display:block;                 
      cursor:pointer;

      top: 25px;
      right: 10px;
      width: 30px;
      height: 30px;
      z-index:1300;

      &.actived {
        display: block !important;

      }

     
      &:after{
        content:' ';
        position: absolute;
        right: 5px;
        top: 3px;
        width: 10px;
        height: 10px;
        border: solid #989A9A;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    .iconic-right{
      display:none !important; 
       &.active{
        display: block;
      }
      
    }

    .menu--options{
      display:block;
      position:absolute;
      top: 45px;
      right: 10px;
      min-width:100px;
      max-width:300px;
      min-height:100px;
      max-height:300px;
      z-index:2500;
      white-space: nowrap;

      margin: auto;

      font-size: 14px;
      text-align: left;
      background-color: #fff;
      border: 1px solid #ccc;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 4px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.175);
      background-clip: padding-box;
        -webkit-transition: all 0.2s ease;
        opacity:0;
        -webkit-transform-origin: right top 0px; 
        -webkit-transform: scale(0); 
      
      & ul {
        min-width: 100px;
        padding: 5px 0;
        margin: 2px 0 0;
        list-style: none;
        position:relative;
        color:black;
      }

      &.active {
        opacity:1;
        -webkit-transform-origin: right top 0px; 
        -webkit-transform: scale(1); 
      }

      & li {
        list-style: none;
        opacity: 0; 
        will-change: transform, opacity;
        transform: translateY(0);
        list-style: none;
        padding: 1em 2em 1em 1.5em;
        transition: all 0.5s;
        
        a{
          width:100%;
          display: inline-block;
          text-decoration: none;
          font-size: 1.1em;
          color: #444444;
        }
        
        &:hover {
          background: #F7F9FA;
          
          a {
            text-decoration: none;
          }
        }
      }
      &  li {
        -webkit-transition: all 0.3s ease;
        transform: translateY(-30%);
      }

      & li{
        -webkit-transition-delay: (random(11) + 4) * 50 + "ms";
        -moz-transition-delay: (random(11) + 4) * 50 + "ms";
        -o-transition-delay: (random(11) + 4) * 50 + "ms";
        transition-delay: (random(11) + 4) * 50 + "ms";
      }
      &.active li {
        opacity: 1; 
        transform: translateY(0px);
      }
    }
    
  }

  ul.options {
      list-style: none;
      padding: 0;
      position: absolute;
      top: 17px;
      right: 15px;

      > li {
        display: inline-block;
        padding-left: 10px;
      	zoom: 1;
        .btn-actor{
          display:block;
          position:absolute;
          cursor: pointer;
          top: -7px;
          right:7px;

          padding: 6px 7px 6px 7px;
          border-radius:50%;
          &.actived{
            background: #D6D6D6;
          }
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

      flex-direction: column;
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
      flex-direction: column;
      flex: 70%;
      height: 100%;

    }
  }
  .item {
      margin-top: 10px;
      margin-right: 40px;

  }

  .logo-container{
    padding: 5px;
    background: #EEEEEE;
    position: relative;
    display:flex;
    flex-direction:row;

    .logo-icon{
      width: 3em;
      height: 3em;
      display: flex;
      align-items: center;
      justify-content: center;
      /*display: block;*/
      margin-left: 15px;
      position: relative;
      border-radius: 50%;
      background: #FFFFFF;

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


      .user {
        position:relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        
        -webkit-box-shadow: -1px 0px 4px -1px rgba(0,0,0,0.25);
        -moz-box-shadow: -1px 0px 4px -1px rgba(0,0,0,0.25);
        box-shadow: -1px 0px 4px -1px rgba(0,0,0,0.25);

        object-fit: cover;
      }


  .list-conversation{
    display: block;
    height: 500px;
    position: relative;        
    overflow: hidden;
    overflow-y: scroll;        
    background:white;
    z-index:1000;

    a {
      text-decoration: none;
    }

  /*
  Applied only when there are more than 6 contact
    .one-contact:nth-last-child(-n+5) {
      .menu--options{ 
        top: -185px !important;
      } 
    }
    */

    /* The link */
    .convervation{
      display: flex;
      width: 400px;
      background: white;
      flex-direction: row;
      
    }
    
    .convervation:hover .ismessage{
      transform: translateX(-15px) !important;
    }

    .convervation:hover .iconic-right{
      display:block !important; 
    }

    .conversation-image{
     
      padding: 5px;
      position: relative;
      flex: 18%;
      margin-left:10px;
      > img {
        width: 3.2em;
        height: 3.2em;
      }
      *{

        box-sizing:border-box;
      }
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
        width: 2em;
        height: 2em;
        position: absolute;
        top: auto;
        bottom: auto;

        margin: 0 auto ;
      }

    }
    .conversation-details{
      position:relative;
      flex: 80%;
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
      border-width: thin;
      border-bottom: thin solid #F2F2F2;
      &:hover .iconic-right{
        display:block;
      }
    
      .first-row {
        -webkit-align-items: center;
        align-items: center;
        line-height: normal;
        display: -webkit-flex;
        display: flex;

       
          .conversation--username{
            text-align: left;
            color: black;


            font-size: 16px;
            line-height: 19px;


          }
          .conversation--date{
            text-align: right;
            color: #8E9090;
            font-size: 0.8em;
            padding-right: 10px;
            position: absolute;
            right: 10px;
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
            font-size: 14px;
            line-height: 19px;
          }

          .ismessage{
            text-align: right;
            color: #8E9090;
            font-size: 0.7em;
            padding-right: 7px;
            position: absolute;
            right: 20px;
            transition:all 0.2s ease-out;
            -webkit-transition: all 0.2s ease-out;

            .badge-icon{
              width:10px;
              height:10px;
              padding:2px 6px 2px 6px;
              background:#1CD56D;
              border-radius:50%;
              color:white;
            }

            
          }

      }

    }
  }

  

    .list-conversation .convervation[data-v-07d4c07c]{
      width: auto;
    }

    .list-conversation{
      height: 100%;
    }

  .list-conversation .router-link-active{
    background :#EEEEEE;
    .conversation--username{
      font-weight:bold;
    }
  }
</style>
