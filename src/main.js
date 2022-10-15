import VueRouter from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

const routes = [
  { path: '/', component: HomePage1 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
  { path: '/Form15', component: Form15 },
];

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

createApp(App).mount('#app')

