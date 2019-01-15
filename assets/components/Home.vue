
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

  import addEvent from './utils/resizeCapture'
  import Messagerie from "./Messagerie.vue"

  export default {
    name:"Home",
    components: {
      Messagerie
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    mounted: function() {
      window.addEventListener('load', () => {
        document.querySelector(".messagerie").style.height =  window.innerHeight + "px"
        document.querySelector(".my-app").style.height =  window.innerHeight + "px"

        document.querySelector(".el-asider").style.height =  window.innerHeight  + "px"
      })
      

      addEvent(window, "resize", function(event) {
        console.log("Sod");
        
        document.querySelector(".messagerie").style.height =  window.innerHeight + "px"
        document.querySelector(".my-app").style.height =  window.innerHeight + "px"
        document.querySelector(".el-asider").style.height =  window.innerHeight + "px"
      });
      
    }

  };
</script>
