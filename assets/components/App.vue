
<template>
  <div class="my-app">
    <router-view> </router-view>
    <div class="loading-container noselect">
      <div class="whatchat-loader">
        <div class="wc-1-it letter-bar"></div>
        <div class="wc-2-it letter-bar"></div>
        <div class="wc-3-it letter-bar"></div>
        <div class="wc-4-it letter-bar"></div>
      </div>
    </div>    
  </div>
</template>

<script>
  import addEvent from './utils/resizeCapture'
	import { mapState } from "vuex";
  export default {
    name:"App",
    data() {
      return {
        message: ""
      }
		},
		computed: {
      current(){
        return this.$store.state.currentUser
      }
		},
   

  }
</script>

<style lang="scss">
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
	$primary-color: #02D1A4;

	*{
		box-sizing: border-box;
		margin: 0;
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
  .my-app{
    height: 100%;
    overflow: hidden;
  }

	.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Opera and Firefox */
	}
	.loading-container{
		display: none;
		visibility: hidden;
    background: hsla(240, 85%, 3%, 0.925);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1000;

		.whatchat-loader{
			z-index: 7000;
			position: absolute;
			display: block;
			width: 125px;
			height: 120px;
			padding:30px 30px 30px 30px;
			top: 40%;
			left: 45%;
			border-radius: 5px;
			background: $primary-color;
		}
	}


	.whatchat-loader::before, .whatchat-loader::after{
    content: '';
    position: absolute;
    width: 40px;
    height: 5px;
    padding: 2px;
    top: 55px;
    border-radius: 5px;
    background: $primary-color;
	}

	.whatchat-loader::before{
    left: -40px;
	}

	.whatchat-loader::after{
    right: -40px;
	}


	.loading {
		.whatchat-loader{
			display: block;
			visibility: visible;
		}

		.loading-container{
			display: block;
			visibility: visible;
		}
	}

	.whatchat-loader .letter-bar{
    display: inline-block;
    width: 5px;
    height: 60px;
    background: black;

  	-webkit-animation: loader-w 2s infinite linear both;
  	animation: loader-w 2s infinite linear both;
	}


	.whatchat-loader .wc-1-it {
    transform: rotate(-15deg);


  	-webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
	}

	.whatchat-loader .wc-2-it {
    height: 35px;
    transform: rotate(30deg);
    margin-left: 10px;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
	}

	.whatchat-loader .wc-3-it {
    height: 35px;
    transform: rotate(-30deg);
    margin-left: 7px;
    -webkit-animation-delay: 1.0s;
    animation-delay: 1.0s;
	}

	.whatchat-loader .wc-4-it {
    transform: rotate(15deg);
    margin-left: 10px;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
	}



	@keyframes loader-w{
    0%, 10% {
      opacity: 0; 
    } 
    25%, 75% {
      opacity: 1; 
    } 90%, 100% {
      opacity: 0; 
    } 
	}


</style>
