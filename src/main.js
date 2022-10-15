import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import('./components/HomePage1.vue')
  }
  ,
  {
    path: '/users',
    name: "Users",
    component: () => import('./components/Users.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

const app = new Vue({
  router
}).$mount('#app')