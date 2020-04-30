<template>
    <div id='main'>
        <!-- Other effects to be used elsewhere on the site -->
        <!-- <div class="parallax"></div> -->
        <!-- <div id="cf">
            <img class="bottom" src="@/assets/man2.png" />
            <img class="top" src="@/assets/man1.png" />
        </div> -->

        <!-- <div class="parallax"></div> -->

        <!-- Give some space, then display main title. -->
        <div v-scroll-reveal class="halfway white-background">
            <p class="fancy3D">WELCOME TO</p>
            <br>
            
            <!-- Draw IDEAS svg. -->
            <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="80%">IDEAS</text>
                </symbol>

                <g class = "g-ants">
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                </g>
            </svg>

            <!-- Centered router link to the projects section. -->
            <div class="center">
              <router-link class="fancy3D no-space link hvr-shutter-out-horizontal" to="tour" >Please, explore and enjoy.</router-link>
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'main',
  components: {
  },
}


</script>

<style scoped>

.white-background {
  background-color: #ffffff;
  padding: 20px;
  padding-top: 0;
  border-radius: 2vh;
}


html, body{
  height: 100%;
  font-weight: 800;
}

body{
  background: #030321;
  font-family: Arial;
}

svg {
    display: block;
    font: 18em 'Montserrat';
    width: 960px;
    height: 300px;
    margin: 0 auto;
}

.center {
    text-align: center;
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 7% 28%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 7s infinite linear;
}

.text-copy:nth-child(1){
	stroke: var(--color-light);
	animation-delay: -1;
}

.text-copy:nth-child(2){
	stroke: var(--color-one);
	animation-delay: -2s;
}

.text-copy:nth-child(3){
	stroke: rgb(0, 0, 0);
	animation-delay: -3s;
}

.text-copy:nth-child(4){
	stroke: var(--color-three);
	animation-delay: -4s;
}

.text-copy:nth-child(5){
	stroke: var(--color-two);
	animation-delay: -5s;
}

@keyframes stroke-offset{
	100% {stroke-dashoffset: -35%;}
}

/* Other unused animation. */
/* body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
}

p {
  position: relative;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 6s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
} */

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
</style>