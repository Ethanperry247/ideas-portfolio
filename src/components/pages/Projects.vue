<template>
    <div>
        <modal v-show="isModalVisible" @close="closeModal"
                title="Welcome to the Photo Gallery" 
                body="Hover over images to expand them and click to get a full screen view.
                        You may get back to this page through the 'Photo
                        Galley' link at the top of any page."></modal>
        <p class="fancy3D">PHOTOGRAPHY</p>
        <div class="row gap">
            <div v-scroll-reveal class="column">
                <photobox url="mountain1.jpg" type="dynamic"></photobox>
                <photobox url="outdoor2.jpg" type="dynamic"></photobox>
                <photobox url="outdoor3.jpg" type="dynamic"></photobox>
                <photobox url="rino2.jpg" type="dynamic"></photobox>
                <photobox url="sun2.jpg" type="dynamic"></photobox>
                <photobox url="night2.jpg" type="dynamic"></photobox>
            </div>
            <div v-scroll-reveal class="column">
                <photobox url="rail1.jpeg" type="dynamic"></photobox>
                <photobox url="river1.jpg" type="dynamic"></photobox>
                <photobox url="outdoor7.jpg" type="dynamic"></photobox>
                <photobox url="sun3.jpg" type="dynamic"></photobox>
                <photobox url="campus1.jpg" type="dynamic"></photobox>
            </div>
            <div v-scroll-reveal class="column">
                <photobox url="sun1.jpg" type="dynamic"></photobox>
                <photobox url="rubber1.jpg" type="dynamic"></photobox>
                <photobox url="rino1.jpg" type="dynamic"></photobox>
                <photobox url="sun4.jpg" type="dynamic"></photobox>
                <photobox url="campus2.jpg" type="dynamic"></photobox>
            </div>
            <div v-scroll-reveal  class="column">
                <photobox url="outdoor5.jpg" type="dynamic"></photobox>
                <photobox url="night1.jpg" type="dynamic"></photobox>
                <photobox url="outdoor4.jpg" type="dynamic"></photobox>
                <photobox url="mountain2.jpg" type="dynamic"></photobox>
                <photobox url="sun5.jpg" type="dynamic"></photobox>
                <photobox url="outdoor6.jpg" type="dynamic"></photobox>
            </div>
        </div>
    </div>
</template>

<script>
import Photobox from '../elements/Photobox.vue';
import Modal from '../elements/Modal.vue';

export default {
    name: 'projects',
    components: {
        Photobox,
        Modal
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
        }
    }, 
    mounted() {
        setTimeout(this.showModal, 750);
    }, 
}


</script>

<style scoped>

.gap {
    margin-bottom: 10vh;
}

</style>