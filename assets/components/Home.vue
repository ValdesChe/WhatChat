

<template>
  <!-- <el-container style=""> -->
    <Messagerie class="messagerie"></Messagerie>
  <!-- </el-container> -->
</template>

<style lang="css">
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body{
    font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, 'Lucida Grande', Arial, Ubuntu, Cantarell, 'Fira Sans', 'Sans Serif'
  }
  /* .el-container{
    width:100%; height: 100%;  border: 1px solid #eee
  } */

  .messagerie{
    height: 500px;
    overflow: hide;
  }


</style>

<script>
  // import auth from '../auth'
  
    import {Socket} from 'phoenix'
    import auth from '../auth'
    import addEvent from './utils/resizeCapture'
    import Messagerie from "./Messagerie.vue"

    export default {
        name:"Home",
        components: {
            Messagerie
        },
        
        mounted: function() {

            window.addEventListener('load', () => {
                const socket = new Socket('/socket', {
                params: { token: localStorage.getItem('token') } 
                });
                
                socket.connect();

                // var channel = socket.channel("rooms:lobby", {})
                // const channel = socket.channel(`users:${localStorage.getItem('id_token')}`);
                const channel = socket.channel(`users:join`);
                channel.on('users:joined',function (resp) {
                    console.log("dasdasdji")
                    console.log(resp)
                })
                if (channel.state != 'joined') {
                    channel.join().receive('ok', () => {
                        console.log("Channel Joined Ok");
                        channel.push('users:declare', {userInfo: auth.user})


                        
                        this.$store.dispatch('SOCKET_CONNECTED',{
                            currentUser: auth.user,
                            socket: null,
                            channel: null,
                        });
                        
                    });
                   

                }

                else{
                    this.$router.push("{name: 'logout'}")
                    console.log("Something went wrong");
                    return;
                }
            }) 
        }
   };
</script>
