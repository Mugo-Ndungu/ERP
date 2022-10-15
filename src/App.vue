<script setup>
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
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <SideBar />
    </div>
  </header>

  <main>
    <router-view />
  </main>
</template>
<script>
console.log('Clicked')
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
