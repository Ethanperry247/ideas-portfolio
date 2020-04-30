import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/pages/Main.vue';
import Projects from './components/pages/Projects.vue';
import VirtualTour from './components/pages/VirtualTour.vue';
import Project from './components/pages/Project.vue';
import About from './components/pages/About.vue';
import MindMap from './components/pages/MindMap.vue';
import Introduction from './components/pages/Introduction.vue';
import Conclusion from './components/pages/Conclusion.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    }, 
    {
      path: '/photos',
      name: 'photos',
      component: Projects,
    }, 
    {
      path: '/tour',
      name: 'virtual-tour',
      component: VirtualTour,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/project/:id',
      name: 'project',
      component: Project
    },
    {
      path: '/map',
      name: 'mindmap',
      component: MindMap
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/conclusion',
      name: 'conclusion',
      component: Conclusion
    },
  ],
});
