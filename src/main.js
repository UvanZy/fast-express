import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/main.css'
import App from './App.vue';
import HomeView from './components/home.vue';
import About from './components/about.vue'
import Career from './components/career.vue'








const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,

    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/career',
      component: Career
    }  

    // Другие маршруты...
  ]
});

createApp(App).use(router).mount('#app');






/**  {
    path: '/blog',
    component: Blog
  } 
  import Blog from './components/blog.vue'
import Header from './Header.vue'
  */