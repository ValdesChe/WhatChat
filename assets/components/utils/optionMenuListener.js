export default {
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