import Vue from 'vue';
import App from './App.vue';
import '@/assets/global.css';
import router from './router';
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 0.25,
  distance: '15px',
  mobile: false
});

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
