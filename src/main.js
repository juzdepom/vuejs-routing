import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  // no longer shows the hashtag in the url
  mode: 'history',
  //this controls where the page scrolls to when first loaded
  scrollBehavior(to, from, savedPosition){
    //this is if the user navigates back from a previous page. We want it to be scrolled where we left off.
    if(savedPosition){
      return savedPosition;
    }
    // see UserDetail.vue link data property. There is a hash value of '#data'
    if(to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
