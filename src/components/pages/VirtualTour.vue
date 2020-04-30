<template>
  <div>
    <div class="white">
        <!-- Page Modal -->
        <modal v-show="isModalVisible" @close="closeModal"
                title="You are Now Entering the Tour" 
                body="Be prepared to see pop-up messages like this one which will guide
                        you through the tour and give you information about each project."/>

        <p class="fancy3D">VIRTUAL TOUR</p>
        <div class="virtual-container">
            <p class="center paragraph"><i>Welcome to the virtual tour.</i></p>
            <p class="justify paragraph">Follow the links at the bottom of each page. They will naviagte
                you from page to page. The virtual tour encompasses my experience throughout this 
                school year, including projects and research from both IDEAS and outside of class.
                I hope you enjoy!
            </p>
        <photobox url="wordcloud1.png" type="static"></photobox>
        </div>
        <br>
    </div>
    <div class="center-on-page spacer">
        <!-- The old router link went directly to the page of interest. -->
        <!-- <router-link to="/project/0" class="align-center fancy3D no-space link">Start the Tour...</router-link> -->
        <a @click="showModal" class="align-center fancy3D no-space link hvr-shutter-out-horizontal">Start the Tour...</a>
    </div>
  </div>
</template>

<script>
import Modal from '../elements/Modal.vue';
import Photobox from '../elements/Photobox.vue';

export default {
  name: 'virtual-tour',
  components: {
      Modal,
      Photobox
  },
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
        this.$router.push('/introduction'); 
      }
    }, 
}

</script>

<style scoped>

.spacer {
    margin-top: 20px;
}

a {
    cursor:pointer;
}

.white {
  background-color: white;
  margin-left: 30%;
  margin-right: 30%;
  padding: 5px;
  border-radius: 2vh;
  margin-bottom: 70px;
}

.virtual-container {
    margin: auto;
    width: 90%;
    padding: 1px;
    border-radius: 10px;
}

</style>