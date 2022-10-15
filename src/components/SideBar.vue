<template>
    <div class="main">
        <div class="rectangle20">
            <div class="rectangle21"></div>
            <a href="#" class="circle">
                <img height="59" width="59" src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=59"
                    alt="Cloud Chen">
            </a>
            <h3 class="hello"><b>Hello</b></h3>
            <h2 class="user_name"><b>Deng Chan</b></h2>
            <div class="sidenav">
                <a href="/">
                    <i class="fa fa-table-columns"></i>
                    Dashboard
                </a>
                <a href="#" class="active">
                    <i class="lar la-credit-card"></i>
                    Payments
                </a>
                <button class="dropdown-btn">
                    <i class="lar la-credit-card"></i>
                    Onborading
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <a href="#">Applicants</a>
                    <a href="#">Properties</a>
                </div>
                <button class="dropdown-btn">
                    <i class="lar la-credit-card"></i>
                    Applications
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <a href="#">Start to build</a>
                    <a href="#">Apply for inspection</a>
                    <a href="#">Insurance</a>
                    <a href="#">Annual Service fee</a>
                    <a href="#">Quotations</a>
                    <a href="#">Fire Brigades Start to build Approval</a>
                    <a href="#">Fire Brigades Inspection Approvals</a>
                </div>
                <button class="dropdown-btn">
                    <i class="lar la-credit-card"></i>
                    Permit, Certificate, Licences
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <a href="#">Inspection</a>
                    <a href="#">Occupancy</a>
                    <a href="#">Insurance</a>
                    <a href="#">Annual Service fee</a>
                    <a href="#">Quotations</a>
                </div>
                <a href="#">
                    <i class="lar la-credit-card"></i>
                    Insurance
                </a>
                <button class="dropdown-btn">
                    <i class="lar la-credit-card"></i>
                    Billing
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <a href="#">Service fee</a>
                    <a href="#">Demand Note</a>
                    <a href="#">Form 15</a>
                </div>
                <a href="#">
                    <i class="lar la-credit-card"></i>
                    Fines and Violations
                </a>
                <a href="#">
                    <i class="lar la-credit-card"></i>
                    Reports
                </a>

                <a href="#">
                    <i class="lar la-credit-card"></i>
                    Statistics
                </a>
            </div>

            <a class="settnings" href="#">
                <i class="fa fa-gear"></i>
                Settings
            </a>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,500&display=swap');
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

/* Style the sidenav links and the dropdown button */
.sidenav a,
.dropdown-btn {
    padding: 6px 8px 6px 16px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 13px;
    color: #FFFFFF;
    display: block;
    border: none;
    background: none;
    width: 230px;
    text-align: left;
    cursor: pointer;
    outline: none;
}

/* On mouse-over */
.sidenav a:hover,
.dropdown-btn:hover {
    color: #FFFFFF;
}

/* Main content */
.main {
    margin-left: 200px;
    /* Same as the width of the sidenav */
    font-size: 20px;
    /* Increased text to enable scrolling */
    padding: 0px 10px;
}

/* Add an active class to the active dropdown button */
.active {
    background-color: green;
    color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
    display: none;
    padding-left: 8px;
}

.dropdown-container a {
    font-size: 13px !important;
    margin-bottom: 0;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
    float: right;
    padding-right: 8px;
    color: #FFFFFF;
}


/* SideBar */
.settnings {
    top: 96.9%;
    position: absolute;
    left: 14%;
    font-family: 'Montserrat';
    font-style: normal;
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 125% */

    letter-spacing: -0.015em;

    color: #FFFFFF;
    text-align: left;
    cursor: pointer;
    outline: none;
}

.sidenav {
    position: absolute;
    left: 8.08%;
    right: 73.68%;
    top: 35.74%;
    bottom: 62.02%;
    list-style: none;
    /* background: #FFFFFF; */
}

.sidenav a {
    font-family: 'Montserrat';
    font-style: normal;
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 125% */

    letter-spacing: -0.015em;

    color: #FFFFFF;
    text-align: left;
    cursor: pointer;
    outline: none;
}

/* On mouse-over */
.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav li {
    margin-bottom: 30px;
    width: 180px;
}

/* Main content */
.main {
    margin-left: 0;
    /* Same as the width of the sidenav */
    font-size: 20px;
    /* Increased text to enable scrolling */
    padding: 0px 10px;
}

/* Add an active class to the active dropdown button */
.active {
    background: rgba(246, 246, 246, 0.2);
    color: white;
}


/* Some media queries for responsiveness */
@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

.hello {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    left: 58px;
    font-size: 18px;
    line-height: 18px;
    top: 186px;
    /* identical to box height, or 135% */

    letter-spacing: -0.015em;

    color: #FFFFFF;
}

.user_name {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    left: 58px;
    line-height: 18px;
    top: 190px;
    /* identical to box height, or 109% */

    letter-spacing: -0.015em;

    color: #FFFFFF;
}

/* Circle Avatar Styles */

.circle {
    display: inline-block;
    /* circle wraps image */
    margin: 5px;
    transition: linear 0.25s;
    width: 59px;
    height: 59px;
    left: 49px;
    top: 167px;
}

.circle img {
    border-radius: 50%;
    /* relative value for adjustable image size */
}

.circle:hover {
    transition: ease-out 0.2s;
    /* border: 4px solid rgba(0, 0, 0, 0.2); */
    -webkit-transition: ease-out 0.2s;
}

a.circle {
    color: transparent;
}

/* IE fix: removes blue border */
.rectangle21 {
    /* Rectangle 21 */


    position: absolute;
    width: 5px;
    height: 529px;
    left: 0px;
    top: 0px;

    background: rgba(255, 126, 7, 0.7);
}

.rectangle20 {
    /* Rectangle 1 */
    position: absolute;
    width: 304px;
    height: 982px;
    left: 0px;
    top: 0px;
    background: #2F53EB;
}

/* Main Wrapper */
.main {
    position: relative;
    /* width: 1512px; */
    height: 982px;
    background: #F5FBFF;
}
</style>