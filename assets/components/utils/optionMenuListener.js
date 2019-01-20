export default {
    overlayListener: ()=>{ 
        document.querySelector(".messenger").style.height =  window.innerHeight + "px"
        document.querySelector(".my-app").style.height =  window.innerHeight + "px"
        document.querySelector(".el-asider").style.height =  window.innerHeight  + "px"
        const listContact = document.querySelectorAll(".list-conversation")
        
        listContact.forEach(list => {
          const parent = list.parentNode
          
          if(parent.classList.contains("overlay_box")){
            list.style.height = window.innerHeight - list.offsetTop  + "px"
          }
          else{
            list.style.height =  window.innerHeight- 115  + "px"
          }
          
        })


        // const overlay_box = document.querySelector(".overlay_box")
        const back_btn = document.querySelector(".back-btn")
        const overlayOpeners = document.querySelectorAll(".overlayOpener")

      /*   back_btn.addEventListener("click", function () {
          overlay_box.classList.remove("activated")
        })
         */
        overlayOpeners.forEach(opener => {
          opener.addEventListener("click", function () {
            // eg: targetedOverlay = "#elt" || ".box" 
            const targetedOverlay = this.getAttribute("targetedoverlay")
           
            if(targetedOverlay != null){
              const overlay_box = document.querySelector(targetedOverlay)

              if (overlay_box) {
                const backBtn = overlay_box.querySelector(".back-btn")
                if (backBtn) {
                  backBtn.addEventListener("click", function () {
                    overlay_box.classList.remove("activated")
                  })
                  
                  overlay_box.classList.add("activated")
                } else {
                  console.warn("The target overlay element didn't have close ");
                }
               
              } else {
                console.warn("The target overlay element not found");
              }
            }
            else{
              console.warn("Missing target element attribute on the listener !");
              console.log(this);
            }
            
          })
        });


    },

    menuListener: ()=>{
        const menu = document.querySelectorAll(".inline-dropdown-menu .menu--options");
        document.querySelector("html").addEventListener("click" , function () {
            menu.forEach(element => {
              const btnActor = element.previousElementSibling
              if(btnActor.classList.contains("actived")){
                btnActor.classList.remove("actived")
              }

              if(btnActor.parentNode.parentNode.parentNode.querySelector(".ismessage") != null)
                  btnActor.parentNode.parentNode.parentNode.querySelector(".ismessage").style.transform = "translateX(0)"
                
              element.classList.remove("active");
            });
          })

          const ddmToogler = document.querySelectorAll(".inline-dropdown-menu .btn-actor");
          ddmToogler.forEach(elementBtn => {  
          elementBtn.addEventListener("click", function (event) {
              
              /* menu.forEach(elementMenu => {
                const btnActor = elementMenu.previousElementSibling
                if(btnActor.classList.contains("actived")){
                  btnActor.classList.remove("actived")
                }

                if(btnActor.parentNode.parentNode.parentNode.querySelector(".ismessage") != null)
                  btnActor.parentNode.parentNode.parentNode.querySelector(".ismessage").style.transform = "translateX(0)"
                
                elementMenu.classList.remove("active");
              });
              */
          document.querySelector("html").click();
          event.stopPropagation();
          this.classList.add("actived")
          if(this.parentNode.parentNode.parentNode.querySelector(".ismessage") != null)
            this.parentNode.parentNode.parentNode.querySelector(".ismessage").style.transform = "translateX(-15px)"
              
            elementBtn.nextElementSibling.classList.add("active");              
          });
        });
    }
}