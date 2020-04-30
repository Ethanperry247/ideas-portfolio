<template>
    <div id="project">
        <modal v-show="isModalVisible" @close="closeModal" 
            :title="project.data[id].modalTitle" :body="project.data[id].modalBody"></modal>
        <!-- For Quotes -->
        <div class="quote-box" v-show="project.data[id].isQuote">
            <div class="blockquote-wrapper">
                <div class="blockquote">
                    <h1>
                        {{ project.data[id].quoteBody }}
                    </h1>
                    <h4><i>&mdash; {{ project.data[id].quoteAuthor }}</i></h4>
                </div>
            </div>
        </div>
        
        <!-- For Content -->
        <div v-show="!project.data[id].isQuote">
            <br>
            <div class="white-background horizontal-flex">
                <div class="box">
                    <p class="fancy3D">{{ project.data[id].title }}</p>
                    <p class="center paragraph"><em>{{ project.data[id].subtitle }}</em></p>
                    <p class="justify paragraph">{{ project.data[id].body }}</p>
                    <a class="button-link" v-for="item in project.data[id].links" :key="item" :href="item.url" target="\blank">{{ item.name }}</a>
                </div>
                <div class="box">
                    <br>
                    <br>
                    <photobox v-for="link in project.data[id].url" :key="link" :url="link" type="static"></photobox>
                    <p class = "center paragraph caption"><em>{{ project.data[id].caption }}</em></p>
                </div>
            </div>
        </div>
        <div class="center-on-page spacer color">
            <router-link :to="url(this.id, this.project)" class="align-center fancy3D no-space link hvr-shutter-out-horizontal">Next Project...</router-link>
        </div>


    </div>
</template>

<script>
import json from '../../assets/json/projects.json';
import Photobox from '../elements/Photobox.vue';
import Modal from '../elements/Modal.vue';

export default {
    data() {
        return {
            id: this.$route.params.id,
            project: json, 
            isModalVisible: false,
        }
    }, components: {
        Photobox,
        Modal
    }, methods: {
        url(id, project) {
            if (id == project.data.length - 1) {
                return '/conclusion'
            } else {
                return '/project/' + (parseInt(this.id) + 1)
            }
        },
        showModal() {
        this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    }, 
    mounted() {
        if (this.project.data[this.id].hasModal) {
            setTimeout(this.showModal, 750);
        }
    }, 
}
</script>

<style scoped>

.white-background {
  background-color: white;
  padding: 20px;
  padding-top: 0;
  border-radius: 2vh;
  margin-bottom: 70px;
}

.button-link {
    font-family: 'Montserrat';
    color: white;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
    background-color: var(--color-one);
    transition: 0.3s;
    white-space: nowrap;
}

.button-link:hover {
    transition: 0.3s;
    background-color: var(--color-five);
}

/* center the blockquote in the page */
.blockquote-wrapper {
    display: flex;
    align-items: center;
}

/* Blockquote main style */
.blockquote {
    position: relative;
    font-family:'Times New Roman', Times, serif;
    font-weight: 800;
    color: #ffffff;
    padding: 30px 0;
    width: 100%;
    max-width: 500px;
    z-index: 1;
    margin: 80px auto;
    align-self: center;
    border-top: solid 1px;
    border-bottom: solid 1px;
}

/* Blockquote header */
.blockquote h1 {
    position: relative;
    color: #FFFFFF;
    font-size: 40px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
}

/* Blockquote right double quotes */
.blockquote:after {
    position: absolute;
    content: "”";
    color: rgba(255, 255, 255, 1);
    font-size: 10rem;
    line-height: 0;
    bottom: -43px;
    right: 30px;
}

/* increase header size after 600px */
@media all and (min-width: 600px) {
    .blockquote h1 {
        font-size: 60px;
    }

}

/* Blockquote subheader */
.blockquote h4 {
    position: relative;
    color: white;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    padding-top: 20px;
    z-index: 1;
}

</style>