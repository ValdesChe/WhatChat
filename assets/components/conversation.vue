<template>
  <div class="conversation-container">
      <div class="logo-container">
          <router-link :to="{ name: 'home'}"  href="" class="logo-icon" >
            <img class="svg-icon" src="user.image" />
          </router-link>
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
     
</template>

<style lang="sass" scoped>
    .conversation-container{
        background:red;
        display:flex;
        flex-direction:column;

        /* Body Message */
        .header-profile {
            background-color: #EEEEEE;
            color: #000000;

            border-bottom: 1px solid #DED6CE;
            width: 100%;
            height: 60px;
            line-height: 10px;
        }
    }
    

</style>


<script>
  export default {
        data() {
            return {
                id_user :0        
            }  
        },
        computed: {
            // un accesseur (getter) calculé
            
        },
        mounted: function () {
            console.log(this.$route.params.id)
            this.id_user = this.$route.params.id
      }
    }
</script>
<style lang="css" >
</style>
