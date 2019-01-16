<template>
  <div class="conversation-container">
       <div class="header-profile">
            <div class="logo-container">
                <router-link :to="{ name: 'home'}"  href="" class="logo-icon" >
                    <img class="user" :src="end_user.image" />
                </router-link>
                <div class="info-conv-user">
                    <span class="conv-username"> {{end_user.username}} </span>
                    <span class="conv-last-seen"> last seen today 21:0{{end_user.id}} </span>
                </div>
            </div>
            <div class="options-tools">
                <ul class="options">
                    <li>
                        <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g fill="#8a9093"><path d="M84,18.66667c-35.97205,0 -65.33333,29.36128 -65.33333,65.33333c0,35.97206 29.36128,65.33333 65.33333,65.33333c16.31465,0 31.22008,-6.08511 42.69271,-16.04167l3.97396,3.97396v12.06771l56,56l18.66667,-18.66667l-56,-56h-12.06771l-3.97396,-3.97396c9.95656,-11.47263 16.04167,-26.37806 16.04167,-42.69271c0,-35.97205 -29.36128,-65.33333 -65.33333,-65.33333zM84,37.33333c25.88383,0 46.66667,20.78283 46.66667,46.66667c0,25.88383 -20.78283,46.66667 -46.66667,46.66667c-25.88384,0 -46.66667,-20.78283 -46.66667,-46.66667c0,-25.88384 20.78283,-46.66667 46.66667,-46.66667z"></path></g></g></svg>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224" style=" fill:#8A9093;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g fill="#000000"><g id="surface1"><path d="M51.91667,0c-13.30729,0 -26.65104,5.06771 -36.75,15.16667c-20.19792,20.19792 -20.19792,53.30209 0,73.5l34.125,34.125c3.60938,3.71875 9.55209,3.75521 13.27083,0.14583c3.71875,-3.60938 3.75521,-9.55208 0.14583,-13.27083l-34.41667,-34.41667c-13.05208,-13.05208 -13.05208,-33.90625 0,-46.95833c13.05209,-13.05208 33.90625,-13.05208 46.95833,0l45.79167,45.79167c13.05209,13.05209 13.05209,33.90625 0,46.95833c-1.53125,1.53125 -3.24479,2.625 -4.95833,3.79167c-4.26562,2.91667 -5.39583,8.71354 -2.47917,12.97917c2.91667,4.26562 8.71354,5.39583 12.97917,2.47917c2.66146,-1.82291 5.25,-3.79167 7.58333,-6.125c20.19792,-20.19791 20.19792,-53.30208 0,-73.5l-45.5,-45.5c-10.09896,-10.09896 -23.44271,-15.16667 -36.75,-15.16667zM100.625,82.83333c-0.40104,0.07292 -0.80208,0.18229 -1.16667,0.29167c-1.38541,0.29167 -2.66146,0.875 -3.79167,1.75c-1.96875,1.49479 -4.01041,3.13542 -5.83333,4.95833c-20.19791,20.19792 -20.19791,53.30209 0,73.5l45.5,45.5c20.19792,20.19792 53.30209,20.19792 73.5,0c20.19792,-20.19791 20.19792,-53.30208 0,-73.5l-34.125,-33.83333c-2.26041,-2.77083 -5.86979,-4.04688 -9.36979,-3.24479c-3.46354,0.80208 -6.19792,3.53646 -7,7c-0.80209,3.5 0.47396,7.10938 3.24479,9.36979l34.125,34.125c13.05209,13.05209 13.05209,33.90625 0,46.95833c-13.05208,13.05209 -33.90625,13.05209 -46.95833,0l-45.79167,-45.79167c-13.05208,-13.05208 -13.05208,-33.90625 0,-46.95833c1.13021,-1.16667 2.51562,-1.96875 3.79167,-2.91667c3.75521,-2.29688 5.39583,-6.92708 3.90104,-11.08333c-1.45833,-4.15625 -5.65104,-6.70833 -10.02604,-6.125z"></path></g></g></g></svg>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g fill="#8f9598"><g id="surface1"><path d="M112,42c-7.73828,0 -14,6.26172 -14,14c0,7.73828 6.26172,14 14,14c7.73828,0 14,-6.26172 14,-14c0,-7.73828 -6.26172,-14 -14,-14zM112,98c-7.73828,0 -14,6.26172 -14,14c0,7.73828 6.26172,14 14,14c7.73828,0 14,-6.26172 14,-14c0,-7.73828 -6.26172,-14 -14,-14zM112,154c-7.73828,0 -14,6.26172 -14,14c0,7.73828 6.26172,14 14,14c7.73828,0 14,-6.26172 14,-14c0,-7.73828 -6.26172,-14 -14,-14z"></path></g></g></g></svg>
                        </router-link>
                    </li>


                </ul>
            </div>
       </div>

       <div class="messages-history">
           <div class="overlay"></div>
            <div class="messages-container">
                <div class="one-message-container one-message-container--left ">
                    <div class="msg--content message--left">
                        <div class="message-info">
                            <p>
                               Hello !
                            </p>
                            <span class="message--time">13:30</span>
                        </div>
                        <div class="msg--menu"></div>

                    </div>
                    <span class="iconic-left"></span>
                    
                </div>
                <div class="one-message-container one-message-container--left">
                    <div class="msg--content message--left">
                        <div class="message-info">
                            <p>
                                Comment tu vas mon grand ??
                            </p>
                            <span class="message--time">13:30</span>
                        </div>
                        <div class="msg--menu"></div>

                    </div>
                    
                </div>
                <div class="one-message-container one-message-container--right">
                    <div class="msg--content message--right">
                        <div class="message-info">
                            <p>
                                Yo patron ! Je vais bien merci . Et toi mêmê ça dose ??
                            </p>
                            <span class="message--time right-side">13:31</span>
                            <span class="message--readStatus readed"></span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>

                    <span class="iconic-right"></span>
                </div>

                <div class="one-message-container one-message-container--left">
                    <div class="msg--content message--left">
                       <div class="message-info">
                            <p>
                                Ça fait longtemps hein ....
                            </p>
                            <span class="message--time">13:31</span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>
                    <span class="iconic-left"></span>
                </div>
                <div class="one-message-container one-message-container--left">
                    <div class="msg--content message--left">
                       <div class="message-info">
                            <p>
                                En tout cas ça va bien aussi de mon coté hmdlh
                            </p>
                            <span class="message--time">13:31</span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>
                </div>
                <div class="one-message-container one-message-container--left"> 
                    <div class="msg--content message--left">
                       <div class="message-info">
                            <p>
                               Sinon tu do quoi now ?? J espere que je te derange pas ahaahha 
                            </p>
                            <span class="message--time">13:31</span>
                        </div>
                        <div class="msg--menu "></div>
                    </div>
                </div>


                 <div class="one-message-container one-message-container--right">
                    <div class="msg--content message--right">
                        <div class="message-info">
                            <p>
                                Non non t'inquiète boss je suis là au calme à la maison. 
                                Je m'ennuis même. Tu n'as pas un way por moi.
                            </p>
                            <span class="message--time right-side">13:30</span>
                            <span class="message--readStatus readed"></span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>

                    <span class="iconic-right right-side"></span>
                </div>


                <div class="one-message-container one-message-container--left">
                    <div class="msg--content message--left">
                       <div class="message-info">
                            <p>
                                Ça fait longtemps hein ....
                            </p>
                            <span class="message--time">13:31</span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>
                    <span class="iconic-left"></span>
                </div>
                <div class="one-message-container one-message-container--left">
                    <div class="msg--content message--left">
                       <div class="message-info">
                            <p>
                                En tout cas ça va bien aussi de mon coté hmdlh
                            </p>
                            <span class="message--time">13:31</span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>
                </div>
                <div class="one-message-container one-message-container--left"> 
                    <div class="msg--content message--left">
                       <div class="message-info">
                            <p>
                               Sinon tu do quoi now ?? J espere que je te derange pas ahaahha 
                            </p>
                            <span class="message--time">13:31</span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>
                </div>


                 <div class="one-message-container one-message-container--right">
                    <div class="msg--content message--right">
                        <div class="message-info">
                            <p>
                                Non non t'inquiète boss je suis là au calme à la maison. 
                                Je m'ennuis même. Tu n'as pas un way por moi.
                            </p>
                            <span class="message--time right-side">13:30</span>
                            <span class="message--readStatus readed"></span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>

                    <span class="iconic-right"></span>
                </div>

                 <div class="one-message-container one-message-container--right">
                    <div class="msg--content message--right">
                        <div class="message-info">
                            <p>
                                Non non t'inquiète boss je suis là au calme à la maison. 
                                Je m'ennuis même. Tu n'as pas un way por moi.
                            </p>
                            <span class="message--time right-side">13:30</span>
                            <span class="message--readStatus"></span>
                        </div>
                        <div class="msg--menu"></div>
                    </div>
                </div>



            </div>
       </div>


        <div class="messages-sending">
            <div class="emoji-zone">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 368 368" style="enable-background:new 0 0 368 368;" fill="#949A9C" xml:space="preserve" width="24px" height="24px">
                    <g>
                        <g>
                        <g>
                            <path d="M184,0C82.544,0,0,82.544,0,184s82.544,184,184,184s184-82.544,184-184S285.456,0,184,0z M184,352     c-92.64,0-168-75.36-168-168S91.36,16,184,16s168,75.36,168,168S276.64,352,184,352z" fill="#949A9C"/>
                            <path d="M144,152c0-13.232-10.768-24-24-24s-24,10.768-24,24s10.768,24,24,24S144,165.232,144,152z M112,152c0-4.408,3.592-8,8-8     s8,3.592,8,8s-3.592,8-8,8S112,156.408,112,152z" fill="#949A9C"/>
                            <path d="M248,128c-13.232,0-24,10.768-24,24s10.768,24,24,24s24-10.768,24-24S261.232,128,248,128z M248,160     c-4.408,0-8-3.592-8-8s3.592-8,8-8c4.408,0,8,3.592,8,8S252.408,160,248,160z" fill="#949A9C"/>
                            <path d="M261.336,226.04c-3.296-2.952-8.36-2.664-11.296,0.624C233.352,245.312,209.288,256,184,256     c-25.28,0-49.352-10.688-66.04-29.336c-2.952-3.288-8-3.576-11.296-0.624c-3.296,2.944-3.568,8-0.624,11.296     C125.76,259.368,154.176,272,184,272c29.832,0,58.248-12.64,77.96-34.664C264.904,234.04,264.624,228.984,261.336,226.04z" fill="#949A9C"/>
                        </g>
                        </g>
                    </g>
                    
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                
                </svg>
            </div>
            <div class="typing-zone">
                <input type="text" name="message-input" placeholder="Type a message" id="message-input">
            </div>
            <div class="voice-zone">
                <svg version="1.1" id="Capa_1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 58 58" width="24px" height="24px" style="enable-background:new 0 0 58 58;" fill="#949A9C" xml:space="preserve">
                    <g>
                        <path d="M44,28c-0.552,0-1,0.447-1,1v6c0,7.72-6.28,14-14,14s-14-6.28-14-14v-6c0-0.553-0.448-1-1-1s-1,0.447-1,1v6
                        c0,8.485,6.644,15.429,15,15.949V56h-5c-0.552,0-1,0.447-1,1s0.448,1,1,1h12c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5v-5.051
                        c8.356-0.52,15-7.465,15-15.949v-6C45,28.447,44.552,28,44,28z"/>
                        <path d="M29,46c6.065,0,11-4.935,11-11V11c0-6.065-4.935-11-11-11S18,4.935,18,11v24C18,41.065,22.935,46,29,46z"/>
                    </g>
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            </div>
        </div>


      
      
  </div>
     
</template>

<script>

  import addEvent from './utils/resizeCapture'
  import {mapGetters} from 'vuex'
  export default {
        data() {
            return {
                end_user : {}        
            }  
        },
        computed: {
            // un accesseur (getter) calculé
            ...mapGetters(['getConversationWith'])
        },
        mounted: function () {
            // this.id_user = this.$route.params.id

            
            
            //msg_history.style.backgroundImage =  "url(\" https://web.whatsapp.com/img/8a055527b27b887521a9f084497d8879.png \")"
            //msg_history.style.opacity =  0.2
            // msg_history.style.backgroundImage =  "url(\"<%= Routes.static_path(@conn , \"/static/images/bg_tchat.png\") %> \")"
            //msg_history.style.backgroundImage =  "<%= Routes.static_path(@con , \"/images/bg_tchat.png\") %>"
            
            
            this.end_user = this.getConversationWith(this.$route.params.id)
            
            if(this.$route.params.id == null || this.end_user === null ){                
                this.$router.push({ name: 'home' })
                return
            }
            window.addEventListener('load', () => {
                console.log("Loaded Conversation")
                document.querySelector(".messenger").style.height =  window.innerHeight + "px"
                document.querySelector(".messages-history").style.height =  window.innerHeight - 110 + "px"
                document.querySelector(".my-app").style.height =  window.innerHeight + "px"
                document.querySelector(".el-asider").style.height =  window.innerHeight  + "px"
                document.querySelector(".list-conversation").style.height =  window.innerHeight- 115  + "px"
            });

            addEvent(window, "resize", function(event) {
                document.querySelector(".messages-history").style.height =  window.innerHeight - 110 + "px"
                // document.querySelector(".el-asider").style.height =  window.innerHeight  + "px"

                // document.querySelector(".list-conversation").style.height =  window.innerHeight- 115  + "px"
            
            });

            document.querySelector(".messages-history").style.height =  window.innerHeight - 110 + "px"
                
          
          
        }
    }
</script>

<style lang="sass" scoped>
    .conversation-container{
        display:flex;
        flex-direction:column;

        /* Body Message */
        .header-profile {
            background-color: #EEEEEE;
            color: #000000;
            width: 100%;
            height: 60px;
            line-height: 10px;
        }

        .logo-container{

            .info-conv-user{
                padding:10px 0 0 15px;
                display:flex;
                flex-direction: column;

                .conv-username{
                    font-weight:bold;
                }

                .conv-last-seen{
                    padding-top:12px;
                    color:#686F7E;
                    font-weight: normal;
                    font-size:0.8em;
                }
            }

        }


        .messages-history{
            width:100%;
            overflow:scroll;
            .messages-container{
                position:relative;
                padding:5px;
                display:flex;
                flex-direction:column;
                z-index:1000;
            }

            .one-message-container--left  + .one-message-container--right  , 
            .one-message-container--right  + .one-message-container--left {
                margin-top:10px;
            }


            .one-message-container:first-child{
                margin-top:10px;
            }

            .one-message-container:last-child{
                margin-bottom:10px;
            }


            .one-message-container{
                display:block;
                position:relative;
                width:100%;
                margin-top:2px;

                .msg--content{
                    position:relative;
                    border-radius:5px;
                    padding:0px 5px 0px 5px;

                    text-align:left;
                   
                    -webkit-box-shadow: 0px 6px 11px -3px rgba(0,0,0,0.45);
                    -moz-box-shadow: 0px 6px 11px -3px rgba(0,0,0,0.45);
                    box-shadow: 0px 6px 11px -3px rgba(0,0,0,0.45);
                    max-width:500px;
                    min-width:200px;

                    .message-info{
                        p{
                            font-size:0.9em;
                            font-weight:normal;
                            margin-top: 7px;
                            margin-left: 7px;
                            margin-bottom:7px;
                            padding-bottom:7px;

                            color:black;
                        }

                        span.message--time{
                            position:absolute;
                            bottom: 3px;
                            right:7px;
                            font-size:0.7em;
                            font-weight:normal;
                            padding-top:7px;
                            
                            float:right;
                            color:#978F97;

                            &.right-side{
                                right: 28px !important;
                            }
                            
                        }
                        

                        span.message--readStatus{
                          /*   position:absolute;
                            bottom: 3px;
                            right:7px;
                            width: 5px;
                            height: 10px;
                            border: solid grey;
                            border-width: 0 1px 1px 0;
                            -webkit-transform: rotate(40deg);
                            -ms-transform: rotate(40deg);
                            transform: rotate(40deg);
 */
                            &:before,&:after{
                                content:' ';
                                position:absolute;
                                bottom: 6px;
                                height: 10px;
                                border: solid grey;
                                border-width: 0 1px 1px 0;
                                -webkit-transform: rotate(40deg);
                                -ms-transform: rotate(40deg);
                                transform: rotate(40deg);
                            }
                            &:before{
                                bottom: 5px;
                                right:10px;
                                width: 2px;
                            }

                            &:after{
                                right:15px;
                                width: 5px;
                            }

                            &.readed{
                                &:before,&:after{
                                    border-bottom:1px solid #4FC3F7;
                                    border-right:1px solid #4FC3F7;
                                }
                            }
                        }
                    }

                    & > .msg--menu{
                        display: none;
                        position:absolute;
                        
                        cursor:pointer;

                        top: 5px;
                        right: 10px;
                        width: 20px;
                        height: 20px;
                    }

                    .msg--menu::after{
                        content:' ';
                        position: absolute;
                        right: 5px;
                        top: 3px;
                        width: 7px;
                        height: 7px;
                        border: solid #8A9093;
                        border-width: 0 3px 3px 0;
                        -webkit-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }

                    &:hover{
                        & > .msg--menu{
                            display:block;
                        }

                    }
                }

                .message--right{
                    background:#DCF8C6;
                    float: right;
                    
                    padding-right: 10px;
                    margin-right: 30px;
                    & > .msg--menu{
                        background:rgba(220, 248, 198, 0.8);
                    }
                }

                .message--left{
                    background:#FFFFFF;
                    float: left;

                    padding-left: 10px;
                    padding-right: 10px;
                    margin-left: 30px;

                    & > .msg--menu{
                        background:rgba(255, 255, 255, 0.8);
                    }
                }


                span.iconic-left{
                    content:' ';
                    position: absolute;
                    top:0;
                    bottom:0;
                    left: 20px;
                    width:1px;
                    height:1px;

                    transform: rotate(90deg);
               
                    /* border-left: 25px solid rgb(54, 157, 242); */
                    border-left: 12px solid #FFFFFF;
                    border-top: 0px solid transparent;
                    border-bottom: 12px solid transparent;
                    z-index:1;
                }


                span.iconic-right{
                    content:' ';
                    position: absolute;
                    top:0;
                    bottom:0;
                    right: 20px;
                    width:1px;
                    height:1px;

                    transform: rotate(-90deg);
               
                    /* border-left: 25px solid rgb(54, 157, 242); */
                    border-right: 12px solid #DCF8C6;
                    border-top: 0px solid transparent;
                    border-bottom: 12px solid transparent;
                    z-index:1;
                }
            }
          
        }

        .messages-history::after {
            content: "";
            background: url(https://web.whatsapp.com/img/8a055527b27b887521a9f084497d8879.png);
            opacity: 0.1;

            top: 60px;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: 3;   
        }

        .messages-history .overlay::after {
            content: "";
            background: #E5DDD5;
            opacity: 0.7;

            top: 60px;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: 2;   
        }

        .messages-sending{
            height:62px;
            width:100%;
            
            padding-top:4px;
            position:absolute;
            bottom:0;
            rigth:0;
            background-color:#EFEFEF;

            display:flex;
            flex-direction:row;
            z-index:1000;

            .emoji-zone{
               
                width:50px;
                padding-left: 5px;
                svg{
                    width:50px;
                    height:50px;
                    padding:10px;
                    position:relative;
                    
                }
            }

            .typing-zone{
                width:60%;
                input{
                    
                    font-weigth:bold;
                    font-family:"bree", Sans-serif;
    
                    padding:5px;
                    height:43px;
                    width:100%;

                    background-color: #ffffff;

                    border-color: #fff;
                    border-radius: 21px;
                    border-style: solid;
                    border-width: 1px;
                    padding: 9px 12px 11px 12px;
                    margin: 5px 10px;
                }
            }

            .voice-zone{
                
                width:50px;
                padding-left: 20px;
                svg{
                    width:50px;
                    height:50px;
                    padding:10px;
                    position:relative;
                    
                }
            }

        }
    }

    

</style>

