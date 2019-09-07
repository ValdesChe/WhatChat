<template>
  <div>
  <div class="messenger">
    <div class="el-asider" style="width:404px">
      <!-- v-loading="loading" -->
      <div class="header-user">
        <div class="logo-container">
          <a href="#" targetedoverlay=".profile_edition" style="height:2.5em !important; width:2.5em !important;"  class="logo-icon overlayOpener" >
            <img class="user"  :src="this.getCurrentUser ? this.getCurrentUser.image:''" />
          </a>
        </div>
        <div class="options-tools">
            <ul class="options">
              <li>
                <router-link class="opt-link" :to="{ name: 'conversation', params: { id: 1}}">
                 <!--  <svg id="live-status" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#727A7E" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path>
                    <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
                  </svg> -->
                                    
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 294 294" style="enable-background:new 0 0 294 294;" xml:space="preserve" width="24px" height="24px">
                    <path  opacity=".55" fill="#263238" d="M15,161.635c-8.284,0-15-6.716-15-15V146.5c0-17.618,3.255-34.857,9.347-51.237c2.889-7.765,11.608-11.715,19.371-8.831  c7.765,2.889,11.594,11.523,8.706,19.288C32.581,118.743,30,132.464,30,146.5v0.135C30,154.919,23.284,161.635,15,161.635z   M53.884,68.273c3.845,0,7.688-1.469,10.619-4.405c9.914-9.938,21.38-17.933,34.08-23.763c7.528-3.456,10.83-12.361,7.373-19.891  c-3.456-7.528-12.357-10.829-19.891-7.373C70.11,20.167,55.71,30.205,43.265,42.679c-5.851,5.865-5.84,15.362,0.024,21.214  C46.218,66.813,50.051,68.273,53.884,68.273z M147.13,30h0.203c14.016,0,27.718,2.198,40.725,7.028  c1.721,0.639,3.484,0.691,5.219,0.691c6.092,0,11.819-3.613,14.064-9.658c2.883-7.766-1.075-16.274-8.842-19.158  C182.14,2.83,164.925,0,147.333,0h-0.203c-8.284,0-15,6.716-15,15S138.846,30,147.13,30z M253.702,97.694  c2.527,5.498,7.959,8.738,13.639,8.738c2.096,0,4.227-0.442,6.256-1.375c7.526-3.46,10.823-12.367,7.363-19.895  c-7.334-15.952-17.38-30.347-29.859-42.784c-5.868-5.849-15.366-5.833-21.213,0.035c-5.849,5.868-5.832,15.365,0.035,21.213  C239.865,73.536,247.865,84.998,253.702,97.694z M230.079,229.217c-9.925,9.928-21.398,17.91-34.103,23.727  c-7.532,3.448-10.843,12.351-7.395,19.883c2.522,5.509,7.961,8.76,13.647,8.76c2.089,0,4.212-0.439,6.235-1.365  c15.962-7.308,30.372-17.332,42.831-29.793c5.856-5.858,5.855-15.356-0.003-21.214C245.434,223.358,235.938,223.357,230.079,229.217  z M40.914,195.196c-3.453-7.532-12.358-10.833-19.887-7.385c-7.53,3.452-10.837,12.355-7.385,19.887  c7.316,15.959,17.348,30.365,29.816,42.816c2.929,2.925,6.764,4.387,10.6,4.387c3.842,0,7.685-1.467,10.613-4.4  c5.854-5.861,5.848-15.359-0.014-21.213C54.726,219.368,46.736,207.898,40.914,195.196z M279,131.229c-8.284,0-15,6.716-15,15v0.271  c0,14.078-2.303,27.837-7.173,40.893c-2.896,7.763,1.132,16.401,8.894,19.297c1.729,0.645,3.541,0.95,5.283,0.95  c6.082,0,11.659-3.728,13.91-9.761C291.039,181.457,294,164.171,294,146.5v-0.271C294,137.944,287.284,131.229,279,131.229z   M147.333,263.531c-14.059,0-27.798-2.432-40.837-7.289c-7.764-2.889-16.4,1.119-19.293,8.883  c-2.892,7.763,1.058,16.525,8.82,19.418c16.4,6.109,33.663,9.457,51.31,9.457h0.067c8.284,0,14.967-6.95,14.967-15.234  S155.617,263.531,147.333,263.531z" />
                    <g>
                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                  </svg>

                
                </router-link>
              </li>
              <li>
                <a class="opt-link overlayOpener" targetedoverlay=".boxed" href="#" >
                  <img src="/../images/svg-icons/message.svg" id="new_message" />
                </a>
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
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
                      <li>
                        <router-link :to="{ name: 'logout'}">Logout</router-link>
                      </li>
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

        <div v-if="conversations.length > 0" >
          <router-link :to="{ name: 'conversation', params: { id: conversation.id}}" v-for="conversation in conversations"  class="convervation one-contact"  @click.native="ConversationSelected(conversation.id)" :key="conversation.id" >
          
            <div class="conversation-image" >
              <img class="user" :src="conversation.is_group ? conversation.profile : getToUserProfile(conversation.users).image " :alt="conversation.id" />
              <!-- <a href="" class="logo-icon" >
                <img class="svg-icon" :src="conversation.image" :alt="conversation.id" />
              </svg> -->
            </div>
            <div class="conversation-details">
              <div class="first-row">
                  <div class="conversation--username" :title="conversation.is_group ? conversation.name : getToUserProfile(conversation.users).username ">
                    <span>  {{ conversation.is_group ? conversation.name : getToUserProfile(conversation.users).username  }} </span>
                  </div>
                  <div class="conversation--date">
                    <span style="float: right; text-align: right;" class="span--datespan--date">{{ "" + ago(conversation.latestMessage.inserted_at).toString() }}</span>
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
                <transition name="fade">
                  <div v-if="!conversation.typing_user" class="lastmessage" :title="conversation.latestMessage.content">
                    <span :style="getCurrentUser.id ==  conversation.latestMessage.from_id && conversation.latestMessage.content !== '' ? 'margin-left: 20px;':'' ">  {{ splitMessageContent(conversation.latestMessage.content) }} </span>
                    <span  v-if='getCurrentUser.id ==  conversation.latestMessage.from_id && conversation.latestMessage.content !== ""' >
                      <span :class="conversation.latestMessage.count_readers === conversation.users.length ? 'message--readStatus message--readStatus--latest readed': 'message--readStatus message--readStatus--latest  '"></span>
                    </span>
                  </div>
                  <div v-else class="is_typing" :title="conversation.typing_user">
                    <span>{{conversation.typing_user}}</span>
                  </div>
                </transition>
                <transition name="fade">
                  <div class="ismessage" v-show="conversation.unread > 0" >
                      <span value="3" class="badge-icon">{{ conversation.unread }}</span>
                  </div>
                </transition>

              </div>
            </div>

            
          </router-link>
        </div>
        <div v-else class="no_contact">
          <a href="#"  class="start_btn overlayOpener" targetedoverlay=".search_conv_message" >Start a discussion</a>
        </div>
      </div>
    </div>
    <router-view :key="this.$route.fullPath"  default="{name: 'Welcome'}" class="el-body">
    </router-view>
    <div class="overlay_box right search_conv_message">
      <div class="header--box-search" >
          <span class="overlay_box--name">Search Messages</span>
          <span class="back-btn">
            <i></i>
            <i></i>
          </span>
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
        <router-link class="convervation one-contact"  :to="{ name: 'conversation', params: { id: 1}}">
          <div class="conversation-image" >
            <img class="user" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRUYyNjQ4OyIgZD0iTTE4Ny43MzMsMjA0Ljh2LTUxLjJjMC0xOC44NSwxNS4yODMtMzQuMTMzLDM0LjEzMy0zNC4xMzNsMCwwYzIxLjQ4NywxMC43NDMsNDYuNzgsMTAuNzQzLDY4LjI2NywwICBsMCwwYzE4Ljg1LDAsMzQuMTMzLDE1LjI4MywzNC4xMzMsMzQuMTMzdjUxLjJjMCw5LjQyOS03LjYzNywxNy4wNjctMTcuMDY3LDE3LjA2N0gyMDQuOCAgQzE5NS4zNzEsMjIxLjg2NywxODcuNzMzLDIxNC4yMjksMTg3LjczMywyMDQuOHoiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZENEIwOyIgY3g9IjI1NiIgY3k9IjUxLjIiIHI9IjQyLjY2NyIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkRDMTM7IiBkPSJNNTkuNzMzLDI2NC41MzNjLTQuNzEsMC04LjUzMy0zLjgyMy04LjUzMy04LjUzM2MtMC4wNzctODIuMTc2LDQ5LjAxNS0xNTYuNDE2LDEyNC42NTUtMTg4LjUyNyAgIGM0LjMzNS0xLjg0Myw5LjM1MywwLjE3MSwxMS4xOTYsNC41MDZjMS44NDMsNC4zMzUtMC4xNzEsOS4zNTMtNC41MDYsMTEuMTk2bDAsMEMxMTMuMjAzLDExMi42MDYsNjguMTk4LDE4MC42NjgsNjguMjY3LDI1NiAgIEM2OC4yNjcsMjYwLjcxLDY0LjQ0NCwyNjQuNTMzLDU5LjczMywyNjQuNTMzeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREMxMzsiIGQ9Ik00NTIuMjY3LDI2NC41MzNjLTQuNzEsMC04LjUzMy0zLjgyMy04LjUzMy04LjUzM2MwLjA2OC03NS4zMzItNDQuOTM3LTE0My4zOTQtMTE0LjI3OC0xNzIuODI2ICAgYy00LjMzNS0xLjg0My02LjM0OS02Ljg2MS00LjUwNi0xMS4xOTZzNi44NjEtNi4zNDksMTEuMTk2LTQuNTA2QzQxMS43ODUsOTkuNTg0LDQ2MC44NzcsMTczLjgyNCw0NjAuOCwyNTYgICBDNDYwLjgsMjYwLjcxLDQ1Ni45NzcsMjY0LjUzMyw0NTIuMjY3LDI2NC41MzN6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEQzEzOyIgZD0iTTI1Niw0NjAuOGMtMjcuNTM3LDAuMDUxLTU0LjgwMS01LjQ4Ny04MC4xNDUtMTYuMjczYy00LjMzNS0xLjg0My02LjM0OS02Ljg2MS00LjUwNi0xMS4xOTYgICBjMS44NDMtNC4zMzUsNi44NjEtNi4zNDksMTEuMTk2LTQuNTA2YzQ2Ljk3NiwxOS43OCw5OS45MzQsMTkuNzgsMTQ2LjkxLDBjNC4zMzUtMS44NDMsOS4zNTMsMC4xNzEsMTEuMTk2LDQuNTA2ICAgcy0wLjE3MSw5LjM1My00LjUwNiwxMS4xOTZDMzEwLjgwMSw0NTUuMzEzLDI4My41MzcsNDYwLjg1MSwyNTYsNDYwLjh6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEQzEzOyIgZD0iTTE5Ni4yNjcsNDc3Ljg2N2MtMy4xODMsMC4wMDktNi4xMDEtMS43NTgtNy41NzgtNC41ODJsLTE3LjA2Ny0zMi42NTcgICBjLTIuMTg1LTQuMTczLTAuNTYzLTkuMzM1LDMuNjEtMTEuNTExYzAuNDk1LTAuMjU2LDEuMDI0LTAuNDY5LDEuNTYyLTAuNjMxbDM0LjEzMy0xMC4wMWM0LjUyMy0xLjMyMyw5LjI2NywxLjI3MSwxMC41OSw1Ljc5NCAgIHMtMS4yNzEsOS4yNjctNS43OTQsMTAuNTlsLTI0LjE1OCw3LjA4M2wxMi4yNjIsMjMuNDQxYzIuMTg1LDQuMTgxLDAuNTYzLDkuMzM1LTMuNjEsMTEuNTExICAgQzE5OC45OTcsNDc3LjUzNCwxOTcuNjQxLDQ3Ny44NjcsMTk2LjI2Nyw0NzcuODY3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREMxMzsiIGQ9Ik00NTIuMjY3LDI2NC41MzNjLTIuMjYxLDAtNC40MzctMC44OTYtNi4wMzMtMi41bC0yNS42LTI1LjZjLTMuMjc3LTMuMzg4LTMuMTgzLTguNzg5LDAuMjEzLTEyLjA2NiAgIGMzLjMxMS0zLjE5MSw4LjU1LTMuMTkxLDExLjg1MywwbDE5LjU2NywxOS41NjdsMTkuNTY3LTE5LjU2N2MzLjM4OC0zLjI3Nyw4Ljc4OS0zLjE4MywxMi4wNjYsMC4yMTMgICBjMy4xOTEsMy4zMTEsMy4xOTEsOC41NSwwLDExLjg1M2wtMjUuNiwyNS42QzQ1Ni43MDQsMjYzLjYzNyw0NTQuNTI4LDI2NC41MzMsNDUyLjI2NywyNjQuNTMzeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREMxMzsiIGQ9Ik0xNjIuMTMzLDExOS40NjdjLTEuMjgsMC0yLjUzNC0wLjI5LTMuNjg2LTAuODUzYy00LjI0MS0yLjAzOS02LjAzMy03LjEzNC0zLjk5NC0xMS4zODMgICBsMTMuMzAzLTI3Ljc2N2wtMjYuMjIzLTExLjk0N2MtNC4yMDctMi4xMjUtNS44OTctNy4yNTMtMy43OC0xMS40NmMyLjAwNS0zLjk3Nyw2Ljc0MS01Ljc0MywxMC44NjMtNC4wNTNsMzQuMTMzLDE1LjU5ICAgYzQuMjg0LDEuOTcxLDYuMTUzLDcuMDQsNC4xODEsMTEuMzI0Yy0wLjAxNywwLjAzNC0wLjAzNCwwLjA2OC0wLjA1MSwwLjEwMmwtMTcuMDY3LDM1LjYxICAgQzE2OC4zOTcsMTE3LjU4MSwxNjUuNDEsMTE5LjQ1OCwxNjIuMTMzLDExOS40Njd6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0VEQzRBMjsiIGQ9Ik0yODEuNDk4LDE3LjE2OWMxNC4xODIsMTguNjk3LDEwLjUyMiw0NS4zNDYtOC4xNjYsNTkuNTI5Yy0xNS4xODEsMTEuNTItMzYuMTgxLDExLjUyLTUxLjM2MiwwICBjMTQuMDIsMTguODU5LDQwLjY3LDIyLjc4NCw1OS41MjksOC43NzJjMTguODU5LTE0LjAxMiwyMi43ODQtNDAuNjcsOC43NzItNTkuNTI5QzI4Ny43ODcsMjIuNjA1LDI4NC44MzQsMTkuNjQ0LDI4MS40OTgsMTcuMTY5eiIvPgo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkQ0QjA7IiBjeD0iNDM1LjIiIGN5PSIzMzIuOCIgcj0iNDIuNjY3Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNFREM0QTI7IiBkPSJNNDYwLjY5OCwyOTguNzY5YzE0LjE4MiwxOC42OTcsMTAuNTIyLDQ1LjM0Ni04LjE2Niw1OS41MjljLTE1LjE4MSwxMS41Mi0zNi4xODEsMTEuNTItNTEuMzYyLDAgIGMxNC4wMiwxOC44NTksNDAuNjcsMjIuNzg0LDU5LjUyOSw4Ljc3MmMxOC44NTktMTQuMDEyLDIyLjc4NC00MC42Nyw4Ljc3Mi01OS41MjlDNDY2Ljk4NywzMDQuMjA1LDQ2NC4wMzQsMzAxLjI0NCw0NjAuNjk4LDI5OC43NjkgIHoiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZENEIwOyIgY3g9Ijc2LjgiIGN5PSIzMzIuOCIgcj0iNDIuNjY3Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNFREM0QTI7IiBkPSJNMTAyLjI5OCwyOTguNzY5YzE0LjE4MiwxOC42OTcsMTAuNTIyLDQ1LjM0Ni04LjE2Niw1OS41MjljLTE1LjE4MSwxMS41Mi0zNi4xODEsMTEuNTItNTEuMzYyLDAgIGMxNC4wMiwxOC44NTksNDAuNjcsMjIuNzg0LDU5LjUyOSw4Ljc3MmMxOC44NTktMTQuMDIsMjIuNzg0LTQwLjY3LDguNzcyLTU5LjUyOUMxMDguNTg3LDMwNC4yMDUsMTA1LjYzNCwzMDEuMjQ0LDEwMi4yOTgsMjk4Ljc2OXogICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQjIwRDI0OyIgZD0iTTE4Ny43MzMsMjA0LjhjMCw5LjQyOSw3LjYzNywxNy4wNjcsMTcuMDY3LDE3LjA2N2gxMDIuNGM5LjQyOSwwLDE3LjA2Ny03LjYzNywxNy4wNjctMTcuMDY3di01MS4yICBjLTAuMDM0LTUuOTM5LTEuNjMtMTEuNzU5LTQuNjM0LTE2Ljg3OUMyODkuMjgsMTc5LjQzLDI0MC4xMjgsMjA0LjgsMTg3LjczMywyMDQuOHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQTUxMTsiIGQ9Ik04LjUzMyw0ODYuNHYtNTEuMmMwLTE4Ljg1LDE1LjI4My0zNC4xMzMsMzQuMTMzLTM0LjEzM2wwLDBjMjEuNDg3LDEwLjc0Myw0Ni43OCwxMC43NDMsNjguMjY3LDAgIGwwLDBjMTguODUsMCwzNC4xMzMsMTUuMjgzLDM0LjEzMywzNC4xMzN2NTEuMmMwLDkuNDI5LTcuNjM3LDE3LjA2Ny0xNy4wNjcsMTcuMDY3SDI1LjZDMTYuMTcxLDUwMy40NjcsOC41MzMsNDk1LjgyOSw4LjUzMyw0ODYuNHogICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjA4MDE1OyIgZD0iTTguNTMzLDQ4Ni40YzAsOS40MjksNy42MzcsMTcuMDY3LDE3LjA2NywxNy4wNjdIMTI4YzkuNDI5LDAsMTcuMDY3LTcuNjM3LDE3LjA2Ny0xNy4wNjd2LTUxLjIgIGMtMC4wMzQtNS45MzktMS42My0xMS43NTktNC42MzQtMTYuODc5QzExMC4wOCw0NjEuMDMsNjAuOTI4LDQ4Ni40LDguNTMzLDQ4Ni40eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNERCNUZGOyIgZD0iTTM2Ni45MzMsNDg2LjR2LTUxLjJjMC0xOC44NSwxNS4yODMtMzQuMTMzLDM0LjEzMy0zNC4xMzNsMCwwYzIxLjQ4NywxMC43NDMsNDYuNzgsMTAuNzQzLDY4LjI2NywwICBsMCwwYzE4Ljg1LDAsMzQuMTMzLDE1LjI4MywzNC4xMzMsMzQuMTMzdjUxLjJjMCw5LjQyOS03LjYzNywxNy4wNjctMTcuMDY3LDE3LjA2N0gzODQgIEMzNzQuNTcxLDUwMy40NjcsMzY2LjkzMyw0OTUuODI5LDM2Ni45MzMsNDg2LjR6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzNTk2RDg7IiBkPSJNMzY2LjkzMyw0ODYuNGMwLDkuNDI5LDcuNjM3LDE3LjA2NywxNy4wNjcsMTcuMDY3aDEwMi40YzkuNDI5LDAsMTcuMDY3LTcuNjM3LDE3LjA2Ny0xNy4wNjd2LTUxLjIgIGMtMC4wMzQtNS45MzktMS42My0xMS43NTktNC42MzQtMTYuODc5QzQ2OC40OCw0NjEuMDMsNDE5LjMyOCw0ODYuNCwzNjYuOTMzLDQ4Ni40eiIvPgo8cGF0aCBkPSJNMzA3LjIsNTEuMkMzMDcuMiwyMi45MjEsMjg0LjI3OSwwLDI1NiwwYy0yOC4yNzksMC01MS4yLDIyLjkyMS01MS4yLDUxLjJzMjIuOTIxLDUxLjIsNTEuMiw1MS4yICBDMjg0LjI2MiwxMDIuMzc0LDMwNy4xNzQsNzkuNDYyLDMwNy4yLDUxLjJ6IE0yMjEuODY3LDUxLjJjMC0xOC44NSwxNS4yODMtMzQuMTMzLDM0LjEzMy0zNC4xMzMgIGMxOC44NSwwLDM0LjEzMywxNS4yODMsMzQuMTMzLDM0LjEzM1MyNzQuODUsODUuMzMzLDI1Niw4NS4zMzNDMjM3LjE1LDg1LjMzMywyMjEuODY3LDcwLjA1LDIyMS44NjcsNTEuMnoiLz4KPHBhdGggZD0iTTE3OS4yLDE1My42djUxLjJjMCwxNC4xNCwxMS40NiwyNS42LDI1LjYsMjUuNmgxMDIuNGMxNC4xNCwwLDI1LjYtMTEuNDYsMjUuNi0yNS42di01MS4yICBjLTAuMDI2LTIzLjU1Mi0xOS4xMTUtNDIuNjQxLTQyLjY2Ny00Mi42NjdoLTIuMDE0bC0xLjgwMSwwLjg5NmMtMTkuMDk4LDkuNTA2LTQxLjU0LDkuNTA2LTYwLjYzOCwwbC0xLjgwMS0wLjg5NmgtMi4wMTQgIEMxOTguMzE1LDExMC45NTksMTc5LjIyNiwxMzAuMDQ4LDE3OS4yLDE1My42eiBNMTk2LjI2NywxNTMuNmMwLTEzLjQzMSwxMC4zODUtMjQuNTc2LDIzLjc4Mi0yNS41MzIgIGMyMi44MDEsMTAuNTgxLDQ5LjEwMSwxMC41ODEsNzEuOTAyLDBjMTMuMzk3LDAuOTU2LDIzLjc4MiwxMi4xLDIzLjc4MiwyNS41MzJ2NTEuMmMwLDQuNzEtMy44MjMsOC41MzMtOC41MzMsOC41MzNIMjA0LjggIGMtNC43MSwwLTguNTMzLTMuODIzLTguNTMzLTguNTMzVjE1My42eiIvPgo8cGF0aCBkPSJNNDM1LjIsMjgxLjZjLTI4LjI3OSwwLTUxLjIsMjIuOTIxLTUxLjIsNTEuMnMyMi45MjEsNTEuMiw1MS4yLDUxLjJjMjguMjc5LDAsNTEuMi0yMi45MjEsNTEuMi01MS4yICBDNDg2LjM3NCwzMDQuNTM4LDQ2My40NjIsMjgxLjYyNiw0MzUuMiwyODEuNnogTTQzNS4yLDM2Ni45MzNjLTE4Ljg1LDAtMzQuMTMzLTE1LjI4My0zNC4xMzMtMzQuMTMzczE1LjI4My0zNC4xMzMsMzQuMTMzLTM0LjEzMyAgczM0LjEzMywxNS4yODMsMzQuMTMzLDM0LjEzM1M0NTQuMDUsMzY2LjkzMyw0MzUuMiwzNjYuOTMzeiIvPgo8cGF0aCBkPSJNNDY5LjMzMywzOTIuNTMzaC0yLjAxNGwtMS44MDEsMC44NTNjLTE5LjA5OCw5LjUwNi00MS41NCw5LjUwNi02MC42MzgsMGwtMS44MDEtMC44NTNoLTIuMDE0ICBjLTIzLjU1MiwwLjAyNi00Mi42NDEsMTkuMTE1LTQyLjY2Nyw0Mi42Njd2NTEuMmMwLDE0LjE0LDExLjQ2LDI1LjYsMjUuNiwyNS42aDEwMi40YzE0LjE0LDAsMjUuNi0xMS40NiwyNS42LTI1LjZ2LTUxLjIgIEM1MTEuOTc0LDQxMS42NDgsNDkyLjg4NSwzOTIuNTU5LDQ2OS4zMzMsMzkyLjUzM3ogTTQ5NC45MzMsNDg2LjRjMCw0LjcxLTMuODIzLDguNTMzLTguNTMzLDguNTMzSDM4NCAgYy00LjcxLDAtOC41MzMtMy44MjMtOC41MzMtOC41MzN2LTUxLjJjMC0xMy40MzEsMTAuMzg1LTI0LjU3NiwyMy43ODItMjUuNTMyYzIyLjgwMSwxMC41ODEsNDkuMTAxLDEwLjU4MSw3MS45MDIsMCAgYzEzLjM5NywwLjk1NiwyMy43ODIsMTIuMSwyMy43ODIsMjUuNTMyVjQ4Ni40eiIvPgo8cGF0aCBkPSJNNzYuOCwyODEuNmMtMjguMjc5LDAtNTEuMiwyMi45MjEtNTEuMiw1MS4yUzQ4LjUyMSwzODQsNzYuOCwzODRzNTEuMi0yMi45MjEsNTEuMi01MS4yICBDMTI3Ljk3NCwzMDQuNTM4LDEwNS4wNjIsMjgxLjYyNiw3Ni44LDI4MS42eiBNNzYuOCwzNjYuOTMzYy0xOC44NSwwLTM0LjEzMy0xNS4yODMtMzQuMTMzLTM0LjEzM1M1Ny45NSwyOTguNjY3LDc2LjgsMjk4LjY2NyAgczM0LjEzMywxNS4yODMsMzQuMTMzLDM0LjEzM1M5NS42NSwzNjYuOTMzLDc2LjgsMzY2LjkzM3oiLz4KPHBhdGggZD0iTTI1LjYsNTEySDEyOGMxNC4xNCwwLDI1LjYtMTEuNDYsMjUuNi0yNS42di01MS4yYy0wLjAyNi0yMy41NTItMTkuMTE1LTQyLjY0MS00Mi42NjctNDIuNjY3aC0yLjAxNGwtMS44MDEsMC44NTMgIGMtMTkuMDk4LDkuNTA2LTQxLjU0LDkuNTA2LTYwLjYzOCwwbC0xLjgwMS0wLjg1M2gtMi4wMTRDMTkuMTE1LDM5Mi41NTksMC4wMjYsNDExLjY0OCwwLDQzNS4ydjUxLjJDMCw1MDAuNTQsMTEuNDYsNTEyLDI1LjYsNTEyeiAgIE0xNy4wNjcsNDM1LjJjMC0xMy40MzEsMTAuMzg1LTI0LjU3NiwyMy43ODItMjUuNTMyYzIyLjgwMSwxMC41ODEsNDkuMTAxLDEwLjU4MSw3MS45MDIsMGMxMy4zOTcsMC45NTYsMjMuNzgyLDEyLjEsMjMuNzgyLDI1LjUzMiAgdjUxLjJjMCw0LjcxLTMuODIzLDguNTMzLTguNTMzLDguNTMzSDI1LjZjLTQuNzEsMC04LjUzMy0zLjgyMy04LjUzMy04LjUzM1Y0MzUuMnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
          </div>
          <div class="conversation-details">
            <div class="first-row">
              <div class="conversation--username">
                <span style="position:absolute; top:25px; left: 0px;font-weigth:bold; font-size:17px;">New group </span>
              </div>
              <div class="conversation--date">
                
              </div> 
            </div>
            <div class="second-row">
              <div class="lastmessage">
                <span></span>
              </div>
            </div>
          </div>
        </router-link>
      </div>

    </div>
    <div class="overlay_box left boxed">
      <div class="header--box" >
          <span class="overlay_box--name">New chat</span>
          <span class="back-btn">
          </span>
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
        <router-link class="convervation one-contact"  :to="{ name: 'conversation', params: { id: 1}}">
          <div class="conversation-image" >
            <img class="user" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRUYyNjQ4OyIgZD0iTTE4Ny43MzMsMjA0Ljh2LTUxLjJjMC0xOC44NSwxNS4yODMtMzQuMTMzLDM0LjEzMy0zNC4xMzNsMCwwYzIxLjQ4NywxMC43NDMsNDYuNzgsMTAuNzQzLDY4LjI2NywwICBsMCwwYzE4Ljg1LDAsMzQuMTMzLDE1LjI4MywzNC4xMzMsMzQuMTMzdjUxLjJjMCw5LjQyOS03LjYzNywxNy4wNjctMTcuMDY3LDE3LjA2N0gyMDQuOCAgQzE5NS4zNzEsMjIxLjg2NywxODcuNzMzLDIxNC4yMjksMTg3LjczMywyMDQuOHoiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZENEIwOyIgY3g9IjI1NiIgY3k9IjUxLjIiIHI9IjQyLjY2NyIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkRDMTM7IiBkPSJNNTkuNzMzLDI2NC41MzNjLTQuNzEsMC04LjUzMy0zLjgyMy04LjUzMy04LjUzM2MtMC4wNzctODIuMTc2LDQ5LjAxNS0xNTYuNDE2LDEyNC42NTUtMTg4LjUyNyAgIGM0LjMzNS0xLjg0Myw5LjM1MywwLjE3MSwxMS4xOTYsNC41MDZjMS44NDMsNC4zMzUtMC4xNzEsOS4zNTMtNC41MDYsMTEuMTk2bDAsMEMxMTMuMjAzLDExMi42MDYsNjguMTk4LDE4MC42NjgsNjguMjY3LDI1NiAgIEM2OC4yNjcsMjYwLjcxLDY0LjQ0NCwyNjQuNTMzLDU5LjczMywyNjQuNTMzeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREMxMzsiIGQ9Ik00NTIuMjY3LDI2NC41MzNjLTQuNzEsMC04LjUzMy0zLjgyMy04LjUzMy04LjUzM2MwLjA2OC03NS4zMzItNDQuOTM3LTE0My4zOTQtMTE0LjI3OC0xNzIuODI2ICAgYy00LjMzNS0xLjg0My02LjM0OS02Ljg2MS00LjUwNi0xMS4xOTZzNi44NjEtNi4zNDksMTEuMTk2LTQuNTA2QzQxMS43ODUsOTkuNTg0LDQ2MC44NzcsMTczLjgyNCw0NjAuOCwyNTYgICBDNDYwLjgsMjYwLjcxLDQ1Ni45NzcsMjY0LjUzMyw0NTIuMjY3LDI2NC41MzN6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEQzEzOyIgZD0iTTI1Niw0NjAuOGMtMjcuNTM3LDAuMDUxLTU0LjgwMS01LjQ4Ny04MC4xNDUtMTYuMjczYy00LjMzNS0xLjg0My02LjM0OS02Ljg2MS00LjUwNi0xMS4xOTYgICBjMS44NDMtNC4zMzUsNi44NjEtNi4zNDksMTEuMTk2LTQuNTA2YzQ2Ljk3NiwxOS43OCw5OS45MzQsMTkuNzgsMTQ2LjkxLDBjNC4zMzUtMS44NDMsOS4zNTMsMC4xNzEsMTEuMTk2LDQuNTA2ICAgcy0wLjE3MSw5LjM1My00LjUwNiwxMS4xOTZDMzEwLjgwMSw0NTUuMzEzLDI4My41MzcsNDYwLjg1MSwyNTYsNDYwLjh6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZEQzEzOyIgZD0iTTE5Ni4yNjcsNDc3Ljg2N2MtMy4xODMsMC4wMDktNi4xMDEtMS43NTgtNy41NzgtNC41ODJsLTE3LjA2Ny0zMi42NTcgICBjLTIuMTg1LTQuMTczLTAuNTYzLTkuMzM1LDMuNjEtMTEuNTExYzAuNDk1LTAuMjU2LDEuMDI0LTAuNDY5LDEuNTYyLTAuNjMxbDM0LjEzMy0xMC4wMWM0LjUyMy0xLjMyMyw5LjI2NywxLjI3MSwxMC41OSw1Ljc5NCAgIHMtMS4yNzEsOS4yNjctNS43OTQsMTAuNTlsLTI0LjE1OCw3LjA4M2wxMi4yNjIsMjMuNDQxYzIuMTg1LDQuMTgxLDAuNTYzLDkuMzM1LTMuNjEsMTEuNTExICAgQzE5OC45OTcsNDc3LjUzNCwxOTcuNjQxLDQ3Ny44NjcsMTk2LjI2Nyw0NzcuODY3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREMxMzsiIGQ9Ik00NTIuMjY3LDI2NC41MzNjLTIuMjYxLDAtNC40MzctMC44OTYtNi4wMzMtMi41bC0yNS42LTI1LjZjLTMuMjc3LTMuMzg4LTMuMTgzLTguNzg5LDAuMjEzLTEyLjA2NiAgIGMzLjMxMS0zLjE5MSw4LjU1LTMuMTkxLDExLjg1MywwbDE5LjU2NywxOS41NjdsMTkuNTY3LTE5LjU2N2MzLjM4OC0zLjI3Nyw4Ljc4OS0zLjE4MywxMi4wNjYsMC4yMTMgICBjMy4xOTEsMy4zMTEsMy4xOTEsOC41NSwwLDExLjg1M2wtMjUuNiwyNS42QzQ1Ni43MDQsMjYzLjYzNyw0NTQuNTI4LDI2NC41MzMsNDUyLjI2NywyNjQuNTMzeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGREMxMzsiIGQ9Ik0xNjIuMTMzLDExOS40NjdjLTEuMjgsMC0yLjUzNC0wLjI5LTMuNjg2LTAuODUzYy00LjI0MS0yLjAzOS02LjAzMy03LjEzNC0zLjk5NC0xMS4zODMgICBsMTMuMzAzLTI3Ljc2N2wtMjYuMjIzLTExLjk0N2MtNC4yMDctMi4xMjUtNS44OTctNy4yNTMtMy43OC0xMS40NmMyLjAwNS0zLjk3Nyw2Ljc0MS01Ljc0MywxMC44NjMtNC4wNTNsMzQuMTMzLDE1LjU5ICAgYzQuMjg0LDEuOTcxLDYuMTUzLDcuMDQsNC4xODEsMTEuMzI0Yy0wLjAxNywwLjAzNC0wLjAzNCwwLjA2OC0wLjA1MSwwLjEwMmwtMTcuMDY3LDM1LjYxICAgQzE2OC4zOTcsMTE3LjU4MSwxNjUuNDEsMTE5LjQ1OCwxNjIuMTMzLDExOS40Njd6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0VEQzRBMjsiIGQ9Ik0yODEuNDk4LDE3LjE2OWMxNC4xODIsMTguNjk3LDEwLjUyMiw0NS4zNDYtOC4xNjYsNTkuNTI5Yy0xNS4xODEsMTEuNTItMzYuMTgxLDExLjUyLTUxLjM2MiwwICBjMTQuMDIsMTguODU5LDQwLjY3LDIyLjc4NCw1OS41MjksOC43NzJjMTguODU5LTE0LjAxMiwyMi43ODQtNDAuNjcsOC43NzItNTkuNTI5QzI4Ny43ODcsMjIuNjA1LDI4NC44MzQsMTkuNjQ0LDI4MS40OTgsMTcuMTY5eiIvPgo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkQ0QjA7IiBjeD0iNDM1LjIiIGN5PSIzMzIuOCIgcj0iNDIuNjY3Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNFREM0QTI7IiBkPSJNNDYwLjY5OCwyOTguNzY5YzE0LjE4MiwxOC42OTcsMTAuNTIyLDQ1LjM0Ni04LjE2Niw1OS41MjljLTE1LjE4MSwxMS41Mi0zNi4xODEsMTEuNTItNTEuMzYyLDAgIGMxNC4wMiwxOC44NTksNDAuNjcsMjIuNzg0LDU5LjUyOSw4Ljc3MmMxOC44NTktMTQuMDEyLDIyLjc4NC00MC42Nyw4Ljc3Mi01OS41MjlDNDY2Ljk4NywzMDQuMjA1LDQ2NC4wMzQsMzAxLjI0NCw0NjAuNjk4LDI5OC43NjkgIHoiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZENEIwOyIgY3g9Ijc2LjgiIGN5PSIzMzIuOCIgcj0iNDIuNjY3Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNFREM0QTI7IiBkPSJNMTAyLjI5OCwyOTguNzY5YzE0LjE4MiwxOC42OTcsMTAuNTIyLDQ1LjM0Ni04LjE2Niw1OS41MjljLTE1LjE4MSwxMS41Mi0zNi4xODEsMTEuNTItNTEuMzYyLDAgIGMxNC4wMiwxOC44NTksNDAuNjcsMjIuNzg0LDU5LjUyOSw4Ljc3MmMxOC44NTktMTQuMDIsMjIuNzg0LTQwLjY3LDguNzcyLTU5LjUyOUMxMDguNTg3LDMwNC4yMDUsMTA1LjYzNCwzMDEuMjQ0LDEwMi4yOTgsMjk4Ljc2OXogICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQjIwRDI0OyIgZD0iTTE4Ny43MzMsMjA0LjhjMCw5LjQyOSw3LjYzNywxNy4wNjcsMTcuMDY3LDE3LjA2N2gxMDIuNGM5LjQyOSwwLDE3LjA2Ny03LjYzNywxNy4wNjctMTcuMDY3di01MS4yICBjLTAuMDM0LTUuOTM5LTEuNjMtMTEuNzU5LTQuNjM0LTE2Ljg3OUMyODkuMjgsMTc5LjQzLDI0MC4xMjgsMjA0LjgsMTg3LjczMywyMDQuOHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQTUxMTsiIGQ9Ik04LjUzMyw0ODYuNHYtNTEuMmMwLTE4Ljg1LDE1LjI4My0zNC4xMzMsMzQuMTMzLTM0LjEzM2wwLDBjMjEuNDg3LDEwLjc0Myw0Ni43OCwxMC43NDMsNjguMjY3LDAgIGwwLDBjMTguODUsMCwzNC4xMzMsMTUuMjgzLDM0LjEzMywzNC4xMzN2NTEuMmMwLDkuNDI5LTcuNjM3LDE3LjA2Ny0xNy4wNjcsMTcuMDY3SDI1LjZDMTYuMTcxLDUwMy40NjcsOC41MzMsNDk1LjgyOSw4LjUzMyw0ODYuNHogICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjA4MDE1OyIgZD0iTTguNTMzLDQ4Ni40YzAsOS40MjksNy42MzcsMTcuMDY3LDE3LjA2NywxNy4wNjdIMTI4YzkuNDI5LDAsMTcuMDY3LTcuNjM3LDE3LjA2Ny0xNy4wNjd2LTUxLjIgIGMtMC4wMzQtNS45MzktMS42My0xMS43NTktNC42MzQtMTYuODc5QzExMC4wOCw0NjEuMDMsNjAuOTI4LDQ4Ni40LDguNTMzLDQ4Ni40eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNERCNUZGOyIgZD0iTTM2Ni45MzMsNDg2LjR2LTUxLjJjMC0xOC44NSwxNS4yODMtMzQuMTMzLDM0LjEzMy0zNC4xMzNsMCwwYzIxLjQ4NywxMC43NDMsNDYuNzgsMTAuNzQzLDY4LjI2NywwICBsMCwwYzE4Ljg1LDAsMzQuMTMzLDE1LjI4MywzNC4xMzMsMzQuMTMzdjUxLjJjMCw5LjQyOS03LjYzNywxNy4wNjctMTcuMDY3LDE3LjA2N0gzODQgIEMzNzQuNTcxLDUwMy40NjcsMzY2LjkzMyw0OTUuODI5LDM2Ni45MzMsNDg2LjR6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzNTk2RDg7IiBkPSJNMzY2LjkzMyw0ODYuNGMwLDkuNDI5LDcuNjM3LDE3LjA2NywxNy4wNjcsMTcuMDY3aDEwMi40YzkuNDI5LDAsMTcuMDY3LTcuNjM3LDE3LjA2Ny0xNy4wNjd2LTUxLjIgIGMtMC4wMzQtNS45MzktMS42My0xMS43NTktNC42MzQtMTYuODc5QzQ2OC40OCw0NjEuMDMsNDE5LjMyOCw0ODYuNCwzNjYuOTMzLDQ4Ni40eiIvPgo8cGF0aCBkPSJNMzA3LjIsNTEuMkMzMDcuMiwyMi45MjEsMjg0LjI3OSwwLDI1NiwwYy0yOC4yNzksMC01MS4yLDIyLjkyMS01MS4yLDUxLjJzMjIuOTIxLDUxLjIsNTEuMiw1MS4yICBDMjg0LjI2MiwxMDIuMzc0LDMwNy4xNzQsNzkuNDYyLDMwNy4yLDUxLjJ6IE0yMjEuODY3LDUxLjJjMC0xOC44NSwxNS4yODMtMzQuMTMzLDM0LjEzMy0zNC4xMzMgIGMxOC44NSwwLDM0LjEzMywxNS4yODMsMzQuMTMzLDM0LjEzM1MyNzQuODUsODUuMzMzLDI1Niw4NS4zMzNDMjM3LjE1LDg1LjMzMywyMjEuODY3LDcwLjA1LDIyMS44NjcsNTEuMnoiLz4KPHBhdGggZD0iTTE3OS4yLDE1My42djUxLjJjMCwxNC4xNCwxMS40NiwyNS42LDI1LjYsMjUuNmgxMDIuNGMxNC4xNCwwLDI1LjYtMTEuNDYsMjUuNi0yNS42di01MS4yICBjLTAuMDI2LTIzLjU1Mi0xOS4xMTUtNDIuNjQxLTQyLjY2Ny00Mi42NjdoLTIuMDE0bC0xLjgwMSwwLjg5NmMtMTkuMDk4LDkuNTA2LTQxLjU0LDkuNTA2LTYwLjYzOCwwbC0xLjgwMS0wLjg5NmgtMi4wMTQgIEMxOTguMzE1LDExMC45NTksMTc5LjIyNiwxMzAuMDQ4LDE3OS4yLDE1My42eiBNMTk2LjI2NywxNTMuNmMwLTEzLjQzMSwxMC4zODUtMjQuNTc2LDIzLjc4Mi0yNS41MzIgIGMyMi44MDEsMTAuNTgxLDQ5LjEwMSwxMC41ODEsNzEuOTAyLDBjMTMuMzk3LDAuOTU2LDIzLjc4MiwxMi4xLDIzLjc4MiwyNS41MzJ2NTEuMmMwLDQuNzEtMy44MjMsOC41MzMtOC41MzMsOC41MzNIMjA0LjggIGMtNC43MSwwLTguNTMzLTMuODIzLTguNTMzLTguNTMzVjE1My42eiIvPgo8cGF0aCBkPSJNNDM1LjIsMjgxLjZjLTI4LjI3OSwwLTUxLjIsMjIuOTIxLTUxLjIsNTEuMnMyMi45MjEsNTEuMiw1MS4yLDUxLjJjMjguMjc5LDAsNTEuMi0yMi45MjEsNTEuMi01MS4yICBDNDg2LjM3NCwzMDQuNTM4LDQ2My40NjIsMjgxLjYyNiw0MzUuMiwyODEuNnogTTQzNS4yLDM2Ni45MzNjLTE4Ljg1LDAtMzQuMTMzLTE1LjI4My0zNC4xMzMtMzQuMTMzczE1LjI4My0zNC4xMzMsMzQuMTMzLTM0LjEzMyAgczM0LjEzMywxNS4yODMsMzQuMTMzLDM0LjEzM1M0NTQuMDUsMzY2LjkzMyw0MzUuMiwzNjYuOTMzeiIvPgo8cGF0aCBkPSJNNDY5LjMzMywzOTIuNTMzaC0yLjAxNGwtMS44MDEsMC44NTNjLTE5LjA5OCw5LjUwNi00MS41NCw5LjUwNi02MC42MzgsMGwtMS44MDEtMC44NTNoLTIuMDE0ICBjLTIzLjU1MiwwLjAyNi00Mi42NDEsMTkuMTE1LTQyLjY2Nyw0Mi42Njd2NTEuMmMwLDE0LjE0LDExLjQ2LDI1LjYsMjUuNiwyNS42aDEwMi40YzE0LjE0LDAsMjUuNi0xMS40NiwyNS42LTI1LjZ2LTUxLjIgIEM1MTEuOTc0LDQxMS42NDgsNDkyLjg4NSwzOTIuNTU5LDQ2OS4zMzMsMzkyLjUzM3ogTTQ5NC45MzMsNDg2LjRjMCw0LjcxLTMuODIzLDguNTMzLTguNTMzLDguNTMzSDM4NCAgYy00LjcxLDAtOC41MzMtMy44MjMtOC41MzMtOC41MzN2LTUxLjJjMC0xMy40MzEsMTAuMzg1LTI0LjU3NiwyMy43ODItMjUuNTMyYzIyLjgwMSwxMC41ODEsNDkuMTAxLDEwLjU4MSw3MS45MDIsMCAgYzEzLjM5NywwLjk1NiwyMy43ODIsMTIuMSwyMy43ODIsMjUuNTMyVjQ4Ni40eiIvPgo8cGF0aCBkPSJNNzYuOCwyODEuNmMtMjguMjc5LDAtNTEuMiwyMi45MjEtNTEuMiw1MS4yUzQ4LjUyMSwzODQsNzYuOCwzODRzNTEuMi0yMi45MjEsNTEuMi01MS4yICBDMTI3Ljk3NCwzMDQuNTM4LDEwNS4wNjIsMjgxLjYyNiw3Ni44LDI4MS42eiBNNzYuOCwzNjYuOTMzYy0xOC44NSwwLTM0LjEzMy0xNS4yODMtMzQuMTMzLTM0LjEzM1M1Ny45NSwyOTguNjY3LDc2LjgsMjk4LjY2NyAgczM0LjEzMywxNS4yODMsMzQuMTMzLDM0LjEzM1M5NS42NSwzNjYuOTMzLDc2LjgsMzY2LjkzM3oiLz4KPHBhdGggZD0iTTI1LjYsNTEySDEyOGMxNC4xNCwwLDI1LjYtMTEuNDYsMjUuNi0yNS42di01MS4yYy0wLjAyNi0yMy41NTItMTkuMTE1LTQyLjY0MS00Mi42NjctNDIuNjY3aC0yLjAxNGwtMS44MDEsMC44NTMgIGMtMTkuMDk4LDkuNTA2LTQxLjU0LDkuNTA2LTYwLjYzOCwwbC0xLjgwMS0wLjg1M2gtMi4wMTRDMTkuMTE1LDM5Mi41NTksMC4wMjYsNDExLjY0OCwwLDQzNS4ydjUxLjJDMCw1MDAuNTQsMTEuNDYsNTEyLDI1LjYsNTEyeiAgIE0xNy4wNjcsNDM1LjJjMC0xMy40MzEsMTAuMzg1LTI0LjU3NiwyMy43ODItMjUuNTMyYzIyLjgwMSwxMC41ODEsNDkuMTAxLDEwLjU4MSw3MS45MDIsMGMxMy4zOTcsMC45NTYsMjMuNzgyLDEyLjEsMjMuNzgyLDI1LjUzMiAgdjUxLjJjMCw0LjcxLTMuODIzLDguNTMzLTguNTMzLDguNTMzSDI1LjZjLTQuNzEsMC04LjUzMy0zLjgyMy04LjUzMy04LjUzM1Y0MzUuMnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
          </div>
          <div class="conversation-details">
            <div class="first-row">
              <div class="conversation--username">
                <span style="position:absolute; top:25px; left: 0px;font-weigth:bold; font-size:17px;">New group </span>
              </div>
              <div class="conversation--date">
                
              </div> 
            </div>
            <div class="second-row">
              <div class="lastmessage">
                <span></span>
              </div>
            </div>
          </div>
        </router-link>
        <div v-if="!is_searching" class="convervation frequently_contacted" style="cursor:default;position:relative;height:65px;">
          <div class="conversation-image" >
              
          </div>
          <div class="conversation-details">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <h1 style="position:absolute; top:25px; left: 40px; color:#00BFA5; font-weigth:bold; font-size:17px;">FREQUENTLY CONTACTED</h1>
        </div>
        <div v-for="(conversation, index) in chats"  :key="conversation.id" :to="{ name: 'conversation', params: { id: conversation.id}}">
          
          <div v-if="!is_searching && index == 0" class="convervation  frequently_contacted" style="cursor:default;position:relative;height:65px;">
            <div class="conversation-image" >
                
            </div>
            <div class="conversation-details">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <h1 style="position:absolute; top:25px; left: 40px; color:#00BFA5; font-weigth:bold; font-size:17px;">
              {{ conversation.is_group ? conversation.name[0].toUpperCase() :
               getToUserProfile(chats[0].users).username[0].toUpperCase() }}
               </h1>
          </div>
          
          <div v-else-if="!is_searching && index !== 0 && index < chats.length 
          && chats[index].is_group ? 
           ( chats[index-1].is_group ? chats[index].name[0].toUpperCase() != chats[index - 1].name[0].toUpperCase() : false )
           : ( chats[index-1].is_group ? getToUserProfile(chats[index].users).username[0].toUpperCase() != chats[index-1].name[0].toUpperCase()
            : getToUserProfile(chats[index].users).username[0].toUpperCase() != getToUserProfile(chats[index-1].users).username[0].toUpperCase())" class="convervation frequently_contacted" style="cursor:default;position:relative;height:65px;border-top:0px;s">
            <div class="conversation-image" >
                
            </div>
            <div class="conversation-details">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <h1 style="position:absolute; top:25px; left: 40px; color:#00BFA5; font-weigth:bold; font-size:17px;">{{ conversation.is_group ? conversation.name[0].toUpperCase() : getToUserProfile(chats[index].users).username[0].toUpperCase()}}</h1>
          </div>

          <!-- -->
          <a  @click.prevent="ConversationSelected(conversation.id)" class="convervation one-contact" :key="conversation.id" >
           <div class="conversation-image" >
              <img class="user" :src="conversation.is_group ? conversation.profile : getToUserProfile(conversation.users).image " :alt="conversation.id" />
            </div>
            <div class="conversation-details">
              <div class="first-row">
                  <div class="conversation--username" :title="conversation.is_group ? conversation.name : getToUserProfile(conversation.users).username ">
                    <span>  {{ conversation.is_group ? conversation.name : getToUserProfile(conversation.users).username  }} </span>
                  </div>
                  <div class="conversation--date">
                    
                  </div>
                 
              </div>
              <div class="second-row">
                <div class="lastmessage">
                  <span> Hey there ! I'm using WhatChat <i class="emoji_icon" style="color:red">❤️</i>  </span>
                </div>
                
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </div>

    <!-- My profile editing zone -->
    <div class="overlay_box left profile_edition">
      <div class="header--box" >
        <span class="overlay_box--name">Profile</span>
        <span class="back-btn">
        </span>
      </div>
     
      <div class="container-box">
        <div class="profile--box">
          <div class="photo-special "> 
            <div class="profile" style="height:11em !important; width:11em !important;">
              <img :src="this.getCurrentUser ? this.getCurrentUser.image:''" id="profile_preview" class="user" alt="My profile image">
            </div>
            <div class="overlay-menu-profiler inline-dropdown-menu ">
              
              <svg class="btn-actor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve" width="55px" height="55px">
              <g>
                <g>
                  <path d="M472.413,105.566H424.11l-29.364-48.937c-0.029-0.048-0.063-0.091-0.092-0.138c-0.085-0.134-0.172-0.264-0.264-0.393    c-0.068-0.095-0.137-0.188-0.208-0.278c-0.082-0.105-0.168-0.208-0.256-0.309c-0.089-0.101-0.177-0.2-0.27-0.296    c-0.08-0.084-0.164-0.165-0.248-0.245c-0.103-0.098-0.207-0.195-0.315-0.287c-0.087-0.074-0.176-0.145-0.265-0.215    c-0.109-0.085-0.22-0.169-0.332-0.248c-0.103-0.072-0.208-0.139-0.313-0.206c-0.105-0.067-0.21-0.132-0.318-0.193    c-0.124-0.07-0.25-0.135-0.377-0.198c-0.095-0.048-0.191-0.095-0.288-0.138c-0.141-0.063-0.286-0.121-0.431-0.176    c-0.092-0.035-0.183-0.069-0.274-0.1c-0.148-0.05-0.299-0.094-0.452-0.136c-0.098-0.027-0.196-0.053-0.295-0.076    c-0.143-0.033-0.288-0.061-0.433-0.087c-0.117-0.021-0.236-0.039-0.355-0.055c-0.127-0.016-0.255-0.029-0.384-0.039    c-0.145-0.012-0.29-0.019-0.436-0.022c-0.061-0.002-0.122-0.009-0.183-0.009H229.611c-0.058,0-0.112,0.007-0.17,0.009    c-0.155,0.004-0.309,0.011-0.463,0.023c-0.119,0.009-0.238,0.022-0.357,0.036c-0.128,0.016-0.256,0.036-0.384,0.059    c-0.136,0.024-0.272,0.051-0.406,0.081c-0.107,0.025-0.214,0.053-0.322,0.082c-0.144,0.04-0.287,0.081-0.428,0.129    c-0.099,0.033-0.197,0.071-0.295,0.108c-0.139,0.053-0.276,0.108-0.411,0.168c-0.103,0.046-0.204,0.096-0.305,0.147    c-0.123,0.061-0.244,0.124-0.363,0.191c-0.111,0.063-0.219,0.13-0.326,0.198c-0.103,0.065-0.206,0.131-0.307,0.202    c-0.113,0.08-0.225,0.164-0.335,0.251c-0.09,0.07-0.178,0.14-0.264,0.213c-0.107,0.092-0.211,0.188-0.314,0.286    c-0.086,0.081-0.169,0.163-0.251,0.248c-0.091,0.095-0.179,0.193-0.266,0.293c-0.089,0.102-0.175,0.206-0.259,0.312    c-0.071,0.09-0.139,0.182-0.206,0.276c-0.092,0.128-0.18,0.26-0.265,0.394c-0.029,0.048-0.063,0.09-0.092,0.138l-29.364,48.937    h-72.055V81.815c0-4.373-3.544-7.917-7.917-7.917h-63.34c-4.373,0-7.917,3.545-7.917,7.917v23.751h-2.641    C17.759,105.566,0,123.325,0,145.153v274.474c0,21.829,17.759,39.587,39.587,39.587h432.825c21.829,0,39.587-17.759,39.587-39.587    V145.153C512,123.325,494.241,105.566,472.413,105.566z M58.063,89.732h47.505v15.834H58.063V89.732z M472.413,443.38h-351.01    V145.154c0-4.373-3.544-7.917-7.917-7.917c-4.373,0-7.917,3.545-7.917,7.917V443.38H39.587c-13.097,0-23.752-10.655-23.752-23.752    v-55.952h23.754c4.373,0,7.917-3.545,7.917-7.917c0-4.373-3.544-7.917-7.917-7.917H15.835v-26.128h23.754    c4.373,0,7.917-3.545,7.917-7.917c0-4.373-3.544-7.917-7.917-7.917H15.835v-26.13h23.754c4.373,0,7.917-3.545,7.917-7.917    c0-4.373-3.544-7.917-7.917-7.917H15.835v-26.128h23.754c4.373,0,7.917-3.545,7.917-7.917c0-4.373-3.544-7.917-7.917-7.917H15.835    v-76.799c0-13.097,10.656-23.752,23.752-23.752h158.331c0.005,0,0.01,0.001,0.015,0.001c0.018,0,0.034-0.003,0.051-0.003    c0.298-0.002,0.59-0.023,0.878-0.056c0.081-0.01,0.162-0.025,0.243-0.037c0.234-0.035,0.465-0.078,0.693-0.133    c0.079-0.02,0.159-0.04,0.238-0.062c0.244-0.067,0.482-0.145,0.716-0.234c0.056-0.021,0.111-0.038,0.165-0.06    c0.289-0.117,0.568-0.248,0.838-0.396c0.046-0.026,0.091-0.057,0.137-0.084c0.213-0.124,0.422-0.256,0.623-0.399    c0.088-0.062,0.172-0.127,0.258-0.193c0.168-0.13,0.33-0.267,0.487-0.41c0.072-0.065,0.146-0.128,0.217-0.197    c0.217-0.211,0.421-0.434,0.611-0.67c0.039-0.048,0.073-0.099,0.111-0.148c0.164-0.213,0.317-0.435,0.46-0.663    c0.022-0.035,0.048-0.065,0.07-0.1l29.364-48.937h149.382l29.364,48.937c0.022,0.036,0.048,0.065,0.069,0.1    c0.143,0.229,0.297,0.451,0.462,0.663c0.037,0.048,0.071,0.1,0.11,0.148c0.191,0.235,0.395,0.458,0.611,0.67    c0.07,0.069,0.144,0.131,0.216,0.197c0.157,0.143,0.319,0.28,0.487,0.41c0.086,0.066,0.17,0.131,0.258,0.193    c0.201,0.143,0.408,0.275,0.623,0.399c0.046,0.027,0.091,0.058,0.137,0.084c0.269,0.149,0.55,0.279,0.837,0.396    c0.055,0.022,0.111,0.04,0.166,0.06c0.234,0.089,0.472,0.167,0.716,0.234c0.079,0.022,0.159,0.042,0.238,0.062    c0.228,0.055,0.459,0.098,0.693,0.133c0.081,0.012,0.162,0.027,0.243,0.037c0.289,0.033,0.58,0.054,0.878,0.056    c0.016,0,0.033,0.003,0.05,0.003c0.005,0,0.01-0.001,0.016-0.001h52.762c13.097,0,23.752,10.655,23.752,23.752v274.473h0.002    C496.165,432.725,485.509,443.38,472.413,443.38z" fill="#91DC5A"/></g></g>
              <g>
                <g>
                  <path d="M308.771,179.462c-59.665,0-108.205,48.541-108.205,108.205s48.541,108.205,108.205,108.205    s108.205-48.541,108.205-108.205C416.976,228.002,368.435,179.462,308.771,179.462z M308.771,380.037    c-50.934,0-92.37-41.437-92.37-92.37s41.437-92.37,92.37-92.37c50.934,0,92.37,41.437,92.37,92.37    S359.704,380.037,308.771,380.037z" fill="#91DC5A"/></g></g>
              <g>
                <g class="heart_icon">
                  <path d="M353.722,250.866c-6.751-6.752-15.727-10.47-25.275-10.47c-7.102,0-13.889,2.058-19.677,5.89    c-5.791-3.832-12.576-5.89-19.678-5.89c-9.546,0-18.523,3.717-25.277,10.471c-13.931,13.939-13.931,36.617,0.002,50.554    l39.356,39.352c1.545,1.546,3.572,2.319,5.598,2.319s4.052-0.773,5.599-2.319l39.351-39.352    c6.753-6.752,10.474-15.73,10.474-25.278C364.195,266.594,360.474,257.617,353.722,250.866z M342.524,290.223l-33.753,33.754    l-33.758-33.753c-7.761-7.763-7.76-20.398-0.001-28.161c3.762-3.761,8.762-5.832,14.079-5.832c5.319,0,10.32,2.072,14.082,5.833    c3.091,3.091,8.103,3.09,11.196-0.002c3.76-3.76,8.759-5.831,14.077-5.831s10.317,2.071,14.078,5.832    c3.763,3.761,5.835,8.761,5.835,14.079C348.36,281.46,346.288,286.461,342.524,290.223z" fill="red"/>
                </g>
              </g>
              <g><g>
                  <path d="M384.754,110.543l-8.445-21.111c-0.007-0.017-0.016-0.031-0.022-0.048c-0.07-0.171-0.149-0.336-0.231-0.5    c-0.037-0.075-0.07-0.153-0.109-0.226c-0.071-0.135-0.152-0.263-0.231-0.393c-0.059-0.097-0.114-0.198-0.177-0.293    c-0.056-0.083-0.118-0.159-0.175-0.239c-0.096-0.132-0.19-0.266-0.293-0.39c-0.023-0.028-0.049-0.054-0.073-0.083    c-0.307-0.362-0.64-0.697-1.002-0.995c-0.031-0.026-0.065-0.048-0.097-0.073c-0.164-0.13-0.329-0.258-0.502-0.375    c-0.183-0.125-0.376-0.239-0.571-0.348c-0.023-0.013-0.045-0.029-0.068-0.042c-0.415-0.228-0.856-0.415-1.312-0.566    c-0.029-0.01-0.058-0.022-0.088-0.032c-0.158-0.05-0.322-0.089-0.483-0.129c-0.092-0.023-0.181-0.051-0.273-0.07    c-0.115-0.025-0.234-0.039-0.352-0.059c-0.145-0.024-0.29-0.051-0.436-0.067c-0.087-0.009-0.174-0.011-0.261-0.018    c-0.18-0.013-0.361-0.026-0.542-0.027c-0.018,0-0.035-0.003-0.053-0.003H248.612c-0.016,0-0.03,0.002-0.045,0.002    c-0.195,0.002-0.389,0.014-0.581,0.029c-0.074,0.006-0.148,0.008-0.222,0.015c-0.163,0.017-0.324,0.046-0.484,0.074    c-0.101,0.018-0.204,0.03-0.304,0.051c-0.111,0.024-0.221,0.056-0.33,0.085c-0.144,0.037-0.289,0.07-0.429,0.114    c-0.053,0.016-0.103,0.039-0.155,0.057c-0.192,0.065-0.381,0.132-0.567,0.211c-0.01,0.005-0.021,0.01-0.031,0.015    c-0.222,0.096-0.439,0.2-0.649,0.315c-0.052,0.028-0.099,0.062-0.149,0.091c-0.166,0.096-0.332,0.192-0.491,0.299    c-0.183,0.123-0.357,0.257-0.529,0.396c-0.023,0.019-0.048,0.035-0.071,0.053c-0.36,0.297-0.692,0.63-0.999,0.992    c-0.025,0.029-0.053,0.056-0.077,0.087c-0.102,0.124-0.195,0.256-0.289,0.387c-0.06,0.081-0.123,0.159-0.178,0.243    c-0.062,0.093-0.117,0.193-0.176,0.29c-0.079,0.131-0.161,0.26-0.233,0.395c-0.038,0.073-0.071,0.151-0.108,0.226    c-0.081,0.164-0.161,0.329-0.231,0.5c-0.006,0.017-0.014,0.032-0.022,0.048l-8.445,21.111c-1.625,4.061,0.349,8.668,4.409,10.293    c0.965,0.386,1.96,0.569,2.939,0.569c3.141,0,6.114-1.883,7.354-4.979l6.455-16.134h109.622l6.455,16.134    c1.239,3.096,4.211,4.979,7.354,4.979c0.979,0,1.974-0.183,2.939-0.569C384.404,119.211,386.378,114.603,384.754,110.543z" fill="yellow"/></g></g><g><g>
                  <path d="M456.582,137.237c-13.101,0-23.759,10.658-23.759,23.759c0,13.1,10.658,23.759,23.759,23.759s23.759-10.658,23.759-23.759    C480.34,147.895,469.683,137.237,456.582,137.237z M456.582,168.919c-4.369,0-7.924-3.555-7.924-7.924s3.555-7.924,7.924-7.924    c4.369,0,7.924,3.555,7.924,7.924S460.951,168.919,456.582,168.919z" fill="#91DC5A"/></g></g>
              <g>
                <g>
                  <path d="M444.432,253.561c-15.265-60.696-70.295-105.769-135.662-105.769c-77.127,0-139.875,62.748-139.875,139.875    s62.748,139.875,139.875,139.875c65.366,0,120.397-45.073,135.662-105.77c17.182-1.854,30.605-16.44,30.605-34.105    C475.037,270,461.615,255.414,444.432,253.561z M308.771,411.707c-68.396,0-124.04-55.644-124.04-124.04    s55.644-124.04,124.04-124.04c59.615,0,109.535,42.275,121.373,98.419c0.004,0.056,0.003,0.111,0.008,0.167    c0.06,0.587,0.188,1.15,0.365,1.689c1.5,7.694,2.294,15.638,2.294,23.765C432.811,356.063,377.167,411.707,308.771,411.707z     M447.595,304.803c0.689-5.617,1.05-11.335,1.05-17.136c0-5.801-0.362-11.519-1.052-17.136    c6.794,2.732,11.608,9.377,11.608,17.136C459.202,295.426,454.388,302.071,447.595,304.803z" fill="#91DC5A"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M176.826,158.351h-31.67c-4.373,0-7.917,3.545-7.917,7.917c0,4.373,3.544,7.917,7.917,7.917h31.67    c4.373,0,7.917-3.545,7.917-7.917C184.743,161.895,181.199,158.351,176.826,158.351z" fill="#91DC5A"/>
              </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
              </svg>
              
              <div class="menu--options" style="position:relative;top:105px;right:80px;">
                <ul>
                  <li><a href="#">View photo</a></li>
                  <li><a href="#" class="trigger-file-upload" @click="launchUpload" >Upload photo</a></li>
                  <li><a href="#" >Random photo</a></li>
                  <li><a href="#">Remove photo</a></li>
                </ul>
                <form enctype="multipart/form-data" action="/upload/image" style="display:none;" method="post">
                  <input id="profile-image-file" type="file" />
                </form>
              </div>


            </div>
             
          </div>
          <div  v-show="confirm_profile" class="confirm-photo">
              <button @click="changeProfilePicture" id="valid_profile">Confirm</button>
              <button  @click="IgnoreProfilePictureChanges" value="Annuler" id="cancel_profile">Cancel</button>
          </div>
        </div>
        <div class="bio--box">
          <h3>Your Name</h3>
          <input type="text" readonly="true" :value="this.getCurrentUser ? this.getCurrentUser.image:'username'" class="inline-input-text">
        </div> 
        <div class="remark--box">
          <h5>This is not your username or pin. This name will be visible to your WhatChat contacts.</h5>
        </div>
        <div class="about--box">
          <h3>About</h3>
          <input type="text" readonly="true" value="Hey there, I'm using WhatChat " class="inline-input-text">
        </div>

      </div>
    </div>
  </div>

  <!-- Preview box -->
  <div >

  </div>
  </div>
</template>
<script>

  import auth from "../auth"
  import {mapGetters} from 'vuex'
  import optionListener from './utils/optionMenuListener';
  
  import moment from 'moment'

  export default {
    name:"Messagerie",
    data() {

      return {
        seach_input: '',
        search_chat: '',

        confirm_prof: false
      }
    },
    computed:{
      
      confirm_profile(){
        return this.confirm_prof
      },
      allContacts(){
        return this.$store.getters.filteredAllContacts('ordered','asc')
      },
      is_searching(){
        return this.search_chat.split(" ").join("").length > 0
      },

      chats(){
        if(this.is_searching){
          return this.$store.getters.conversations('search_chats_groups', this.search_chat.toUpperCase() )
        }
        return this.$store.getters.conversations('chats')
      },

      conversations(){
        return this.$store.getters.conversations('atLeastOneMessage')
      },
      ...mapGetters(
        ['getCurrentUser']
      )
    },
    updated: function() {
      optionListener.menuListener()
      optionListener.overlayListener()
    },
    methods: {

      IgnoreProfilePictureChanges(){
        this.confirm_prof = false
      },
      changeProfilePicture(){ 
        
        this.confirm_prof = false
      },

      // Puts ... if the msg content is too long
      splitMessageContent(content){
        if(content.length > 31){
          return content.substring(0,31) + " ... "
        }
        else{
          return content
        }
      },
      ago(lastMessageDate){
        const diff1 = moment().diff(new Date(lastMessageDate.format('l')), 'days')
        
        if(diff1 < 7){
          if (diff1 == 0){
            // return lastMessageDate.hours() + ':' + lastMessageDate.minutes()
            return moment(lastMessageDate).format('HH:mm')
          }
          else if(diff1 == 1){
            return 'Yesterday'
          }
          else{
            const day = lastMessageDate.weekday()
            return moment().startOf('isoWeek')._locale._weekdays[day]
          }
        
        }
        else{
          return lastMessageDate.format("DD/MM/YYYY")
        }
      },
      getToUserProfile(users){
        
        return users.filter(us => {
          return us.id !== auth.user.id
        })[0]

      },
      ConversationSelected(conversation_id){
        console.log("Call Conversation setter");
        this.$store.dispatch("setOpenedConversation", conversation_id)
        this.$router.push({ name: 'conversation', params: { id: conversation_id}})
      },
      ShowConvMenu(does){
        // optionListener.menuListener()
      },
      createConversationWith(user_id){
        this.$store.dispatch('createConversationWith', user_id )
      },

      launchUpload(){
        let photo = document.querySelector("#profile-image-file");  // file from input
        photo.click()
        
      }
      
    },
    mounted() {

      // Setting the user and init the socket
      this.$store.dispatch('loadAllContacts').then( (resp) => {
         
        this.$store.dispatch('addAllContacts', { AllContacts: resp.data.users })
        },  (err) => {
          this.$router.push({name: 'logout'})
        })

      this.$store.dispatch('setCurrentUser', {
        currentUser: auth.user
      });

      window.addEventListener('load', () => {

        let fileInput = document.querySelector("#profile-image-file");  // file from input
        let profile_preview = document.querySelector("#profile_preview");  // file from input
        
        fileInput.addEventListener("change", () => {
          // var fileList = this.files; /* Vous pouvez maintenant manipuler la liste de fichiers */
          /* let req = new XMLHttpRequest();
          let formData = new FormData();

          formData.append("photo", photo);                                
          req.open("POST", '/upload/image');
          req.send(formData); */

          let file = fileInput.files && fileInput.files[0];
          if( file ) {
            var img = new Image();

            img.src = window.URL.createObjectURL( file );

            img.onload = () =>  {
                var width = img.naturalWidth,
                    height = img.naturalHeight;

                window.URL.revokeObjectURL( img.src );
                console.log(this);
                if( width >= 400 && height >= 400 ) {
                  optionListener.readURL(fileInput, profile_preview )
                  
                  
                  this.confirm_prof = true
                }
                else {
                    //fail
                  console.log("Error:");
                  this.confirm_prof = false
                  alert("Dimensions are not correct ... ")
                }
            };
          }
          else { //No file was input or browser doesn't support client side reading
              optionListener.readURL(fileInput, profile_preview )
              this.confirm_prof = true
          }
          
        
        }, false);

      });

      // this.$store.dispatch('loadConversations')
    }

  };
</script>


<style lang="sass" >
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .emoji_icon{
    position: relative;
    padding-top: 5px;
    font-size: 19px;
    display: inline-block;
    
  }
  // Message Status
  span.message--readStatus{
    /* position:absolute;
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
      -o-transform: rotate(40deg);
      -ms-transform: rotate(40deg);
      -moz-transform: rotate(40deg);
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

    &.message--readStatus--latest{
      
      &:before{
        bottom: 14px;
        left:10px;
      }
      &:after{
        bottom: 15px;
        left:1px;
      }
    }

    &.readed{
      &:before,&:after{
        border-bottom:1px solid #4FC3F7;
        border-right:0.1em solid #4FC3F7;
      }
    }
  }
 
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

  .container-box{
    width:100%;
    display:flex;
    flex-direction:column;

    background:#EEEEEE;

    .profile--box{
      position:relative;
      .photo-special{
        margin:0 auto;
        margin-top: 30px;
        margin-bottom: 30px;
        height: 12em;
        width: 12em;  
        padding:10px;
        position: relative;

        
        .profile, .overlay-menu-profiler{
          cursor: pointer;
        }

        .confirm-photo{
          display:inline-block;
          padding:4px;

        }

        .no-display{
          display:none;
        }

        
        .overlay-menu-profiler{
          width:11em;
          height:11em;
          position:absolute;
          top: 8px;
          left: 8px;
          background:rgba(0,0,1,0.5);
          transition: all 0.5s ease-in;
          transition-delay: 40ms; 
          border-radius: 50%;
          opacity:0;
          z-index:-500;
          svg , img{
            position:absolute;
            text-align:center;
            top: 60px;
            left: 60px;
            transform: scale(0.5);
            transition:all 0.5s ease-out;
          }
        }

        &:hover .overlay-menu-profiler{
          opacity:1;
          z-index:2000;
          svg{
            transform: scale(1);
          }          
        }

      }

    }

    .bio--box,  .about--box{
      height: 100px;
      background: white;
      padding: 15px 30px 15px 30px;
      h3{
        color:#229487;
        padding: 5px 0 5px 0;
      }
      input.inline-input-text{  
        padding: 5px 0 5px 0;
        width: 320px;
        
        border:2px;
        
      }
    }

    .remark--box{
      padding: 15px 30px 15px 30px;
      color: grey;
      font-size:0.8em;
    }





  }
    
  $width_menu: 410px;

  .overlay_box{
    display: block;
    width: $width_menu;
    height: 700px;
    position: absolute;

    top: 0;
    overflow: hidden;
             
    background:white;
    z-index:1000;
    -webkit-transition: all 0.3s ease-in;
    opacity: 0;
    
    -webkit-transition-delay: (random(11) + 4) * 50 + "ms";
    -moz-transition-delay: (random(11) + 4) * 50 + "ms";
    -o-transition-delay: (random(11) + 4) * 50 + "ms";
    transition-delay: (random(11) + 4) * 50 + "ms";
    


    &.right{
      right:0;
      transform: translateX($width_menu);
     
    }

    &.left{
      left:0;
      transform: translateX(-$width_menu);
    }

     &.activated{
      opacity:1;   
      transform: translateX(0);
    }

    .header--box-search{
      height: 58px;
      position:relative !important;
      background:#EEEEEE;

      
      .overlay_box--name {
        position:relative;
        font-size:1.2em;
        top: 20px !important;
        left: 60px !important;

        color:black;
        z-index:1000;
      }

      .back-btn{

        display:block;
        position:relative;
        
        top: 0px !important;
        left: 15px !important;


        i{
          display:inline-block;
          border: solid black;
          width:10px;
          height:10px;
          padding:0;
          margin:0;
          transform: rotate(-46deg);
          &:first-child{
            border-width: 0 2px 2px 0;
          }
          &:last-child{
            border-width: 2px 0 0 2px;
          }
        }

        cursor: pointer;

      }

    }
   

    .header--box{
      height: 108px;
      position:relative !important;
      background: #00BFA5;
      color:white;

      .overlay_box--name {
        position:relative;
        font-size:1.2em;
        
        top: 65px !important;
        left: 80px !important;
        z-index:1000;
      }

      .back-btn{
        display:block;
        position:relative;
        font-size:1.3em;
        
        top: 45px !important;
        left: 30px !important;

        width:20px;
        height:20px;

        
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(135deg);
        cursor: pointer;

      }
      .list-conversation{
        height: 500px;

        overflow: hidden;
        overflow-y: scroll !important;
      }
    }


  }

  .list-conversation{
    display: block;
    height: 500px;
    position: relative;
    overflow: hidden;
    overflow-y: scroll !important;        
    background:white;
    z-index:1000;

    .no_contact{
      background: white;
      position: relative;
      vertical-align:middle;
      text-align:center;
      // Start a new discussion
      .start_btn {
        opacity: 1; 
        will-change: transform, opacity;
        padding: 0.8em;
        transition: all 0.5s;
        position:relative;
        margin-top: 40px;

        border-radius:3px;

        /* background: #3DD191; */
        background: #009588;
        display: inline-block;
        font-size: 1em;
        color: #fff0f4;
        font-weight:bold;
        -webkit-box-shadow: -1px 0px 4px -1px rgba(0,0,0,0.8);
        -moz-box-shadow: -1px 0px 4px -1px rgba(0,0,0,0.8);
        box-shadow: -1px 0px 4px -1px rgba(0,0,0,0.8);
        
        &:hover {
          background: rgba(0, 149, 136, 0.8);
        }
      }
    }

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
      &:last-child{
        margin-bottom: 10px;
      }
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

          .is_typing{
            text-align: left;
            color: #1CD56D;

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
      .one-contact{
        cursor:pointer
      }
      .one-contact:hover{
        transition: all 0.5s ease-out;
        background: #EEEEEE;
      }
    }

  .list-conversation .router-link-active{
    background: #DCDEDE;
    &:hover{
      background: #DCDEDE !important;
    }
    .conversation--username{
      font-weight:bold;
    }
  }
</style>
