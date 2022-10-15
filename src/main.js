import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import HomePage1 from './components/HomePage1.vue'
import SideBar from './components/SideBar.vue'
import Payments from './components/Payments.vue'
import Insurance from './components/Insurance.vue'
import PaymentServiceFee from './components/PaymentServiceFee.vue'
import ApplicantIndividual from './components/ApplicantIndividual.vue'
import Applicant from './components/Applicant.vue'
import Reports from './components/Reports.vue'
import PropertyReg from './components/PropertyReg.vue'
import DescriptionFacility from './components/DescriptionFacility.vue'
import Users from './components/Users.vue'
import NewUser from './components/NewUser.vue'
import RolePermission from './components/RolePermission.vue'
import NewRolePermission from './components/NewRolePermission.vue'
import BuildApproval from './components/BuildApproval.vue'
import NewBuildingApproval from './components/NewBuildingApproval.vue'
import InspectionApproval from './components/InspectionApproval.vue'
import NewInspectionApproval from './components/NewInspectionApproval.vue'
import Form15 from './components/Form15.vue'
import DemandNote from './components/DemandNote.vue'
import NewDemandNote from './components/NewDemandNote.vue'
import Fine from './components/Fine.vue'

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
    path: '/HomePage1',
    name: "HomePage1",
    component: () => import('./components/HomePage1.vue')
  }
  ,
  {
    path: '/Applicant',
    name: "Applicant",
    component: () => import('./components/Applicant.vue')
  }
  ,
  {
    path: '/Insurance',
    name: "Insurance",
    component: () => import('./components/Insurance.vue')
  }
  ,
  {
    path: '/Reports',
    name: "Reports",
    component: () => import('./components/Reports.vue')
  }
  ,
  {
    path: '/Payments',
    name: "Payments",
    component: () => import('./components/Payments.vue')
  }
  ,
  {
    path: '/DemandNote',
    name: "DemandNote",
    component: () => import('./components/DemandNote.vue')
  }
  ,
  {
    path: '/Form15',
    name: "Form15",
    component: () => import('./components/Form15.vue')
  }
  ,
  {
    path: '/PaymentServiceFee',
    name: "PaymentServiceFee",
    component: () => import('./components/PaymentServiceFee.vue')
  }
  ,
  {
    path: '/InspectionApproval',
    name: "InspectionApproval",
    component: () => import('./components/InspectionApproval.vue')
  }
  ,
  {
    path: '/BuildApproval',
    name: "BuildApproval",
    component: () => import('./components/BuildApproval.vue')
  }
  ,
  {
    path: '/DescriptionFacility',
    name: "DescriptionFacility",
    component: () => import('./components/DescriptionFacility.vue')
  }
  ,
  {
    path: '/NewDemandNote',
    name: "NewDemandNote",
    component: () => import('./components/NewDemandNote.vue')
  }
  ,
  {
    path: '/ApplicantIndividual',
    name: "ApplicantIndividual",
    component: () => import('./components/ApplicantIndividual.vue')
  }
  ,
  {
    path: '/NewBuildingApproval',
    name: "NewBuildingApproval",
    component: () => import('./components/NewBuildingApproval.vue')
  }
  ,
  {
    path: '/NewInspectionApproval',
    name: "NewInspectionApproval",
    component: () => import('./components/NewInspectionApproval.vue')
  }
  ,
  {
    path: '/Fine',
    name: "Fine",
    component: () => import('./components/Fine.vue')
  }
  ,
  {
    path: '/',
    name: "SignUp",
    component: () => import('./components/SignUp.vue')
  }
  ,
  {
    path: '/SignIn',
    name: "SignIn",
    component: () => import('./components/SignIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
createApp(App).use(router).mount('#app')