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
                <a class="opt-link overlayOpener" targetedoverlay=".boxed" href="#" >
                  <svg id="new_message" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                </a>
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
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
        <div v-if="conversations.length > 0" >
          <div  v-for="conversation in conversations"  class="one-contact"  @click.prevent="ConversationSelected(conversation.id)" :key="conversation.id" >
          <router-link  class="convervation" :to="{ name: 'conversation', params: { id: conversation.id}}">
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
                <div class="lastmessage" :title="conversation.latestMessage.content">
                  <span>  {{ conversation.latestMessage.content }} </span>
                </div>
                <div class="ismessage" v-if="conversation.id == 2 || conversation.id == 5 || conversation.id == 8" >
                    <span value="3" class="badge-icon">1</span>
                </div>

              </div>

            </div>
          </router-link>

        </div>
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
        <div  class="convervation one-contact frequently_contacted" style="position:relative;height:65px;">
          <div class="conversation-image" >
              
          </div>
          <div class="conversation-details">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <h1 style="position:absolute; top:25px; left: 40px; color:#00BFA5; font-weigth:bold; font-size:17px;">FREQUENTLY CONTACTED</h1>
        </div>
        <div class="convervation one-contact" v-for="conversation in allContacts" @click="createConversationWith(conversation.id)"  :key="conversation.id" :to="{ name: 'conversation', params: { id: conversation.id}}">
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
                <span style="float: right; text-align: right;" class="span--datespan--date"></span>
              </div> 
            </div>
            <div class="second-row">
              <div class="lastmessage">
                <span> Hey there ! I'm using WhatChat <i class="emoji_icon" style="color:red">❤️</i>  </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>

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
      }
    },
    computed:{
      
      allContacts(){
        return this.$store.getters.filteredAllContacts('ordered','asc')
      },
      ...mapGetters(
        ['getCurrentUser', 'conversations']
      )
    },
    watch: {
     
    },
    updated: function() {
      console.log("Update")
      optionListener.menuListener()
      optionListener.overlayListener()
    },
    methods: {
      ago(lastMessageDate){
        const diff1 = moment().diff(new Date(lastMessageDate.format('l')), 'days')
        if(diff1 < 7){
          if (diff1 == 0){
            return lastMessageDate.hours() + ':' + lastMessageDate.minutes()
          }
          else if(diff1 == 1){
            return 'Yesterday'
          }
          else{
            return moment().isoWeekday(lastMessageDate.weekday()-1)
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
      },
      ShowConvMenu(does){
        // optionListener.menuListener()
      },
      createConversationWith(user_id){
        this.$store.dispatch('createConversationWith', user_id )
      }
      
    },
    mounted() {

      // Setting the user and init the socket
      this.$store.dispatch('loadAllContacts')

      this.$store.dispatch('setCurrentUser', {
        currentUser: auth.user
      });

      // this.$store.dispatch('loadConversations')
    }

  };
</script>


<style lang="sass" >
  .emoji_icon{
    position: relative;
    padding-top: 5px;
    font-size: 19px;
    display: inline-block;
    
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
   // opacity: 0;
    
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
      a.convervation:hover{
        transition: all 0.5s ease-out;
        background: #EEEEEE;
      }
    }

  .list-conversation .router-link-active{
    background :#EEEEEE;
    .conversation--username{
      font-weight:bold;
    }
  }
</style>
