<template>
  <div class="overflow white-page" id="about">
      <p class="fancy3D">ABOUT</p>
      <div class="inner-flex">
          <div class="long buffer box">
              <p class="center paragraph"><i>About Me</i></p>
              <p class="justify paragraph">
                    Hello, and welcome to my website! My name is Ethan Perry, and I am a computer science student from
                    Colorado School of Mines. Curious, driven, and passionate are three words which describe me best.
                    <br><br>
                    In my free time, I love to hike, bicycle, go camping, go backpacking, or do just about anything else outdoors. 
                    I am an active member of the Club Triathlon Team at Mines and do several triathlons across the country with the team each semester. 
                    In addition, I love playing and listening to music—I try to play or compose whenever I can.
                    <br><br>
                    Of course, I am all things computer science—not only coding, but learning and investigating new technologies, research, and projects
                    that are continually bombarding the public.
                    <br><br>
                    Computer ethics and policy surrounding technological development are the topics I am most interested in. I hope to learn more about them through the projects I am involved in, which one can see in the 'projects' section of my site.
              </p>
              <photobox url="me.jpg" type="static"></photobox>
          </div>
          <div class="long buffer box">
              <p class="center paragraph"><i>About this Site</i></p>
              <p class="justify paragraph">
                  This site was developed for the Thorson Honors Program final portfolio project.
                  It details my cumulative experience from both the program, and the entire school year.
                  This year at Mines has been life-changing for me in more than a number of ways, and I feel 
                  as though I have grown considerably as both a student and as a person. I am grateful for 
                  my experience in the Thorson Honors Program, as it has forced me to get outside of my 
                  comfort zone on a number of occasions. Whether this was exploring RiNo, investigating the human
                  brain in M2 and M4, or being inspired by nature with our conclusion to class, I have learned more 
                  new material than almost any other class--and not just academic material, but the kind of learning
                  that changes your perspective and outlook on life.
                  <br><br>
                  I hope that this website exemplifies not only my reflection and contemplation of the previous year,
                  but also what I am looking forward to in future years. I hope to continue bettering myself as a 
                  student and member of society as I continue my journey at Mines and beyond.
                  <br><br>
                  Once again, please enjoy, and thanks for visiting my site!
              </p>
              <photobox url="ideas.png" type="static"></photobox>
        </div>
      </div>
    </div>
</template>
<script>
import Photobox from '../elements/Photobox.vue'

export default {
    components: {
        Photobox
    }
}
</script>

<style scoped>

</style>