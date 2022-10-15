<template>
    <article>
        <div class="container-fluid home-container">
            <div class="row">
                <div class="col-md-12 col-sm-6">
                    <div class="row top-nav">
                        <div class="col-md-10 welcome">
                            <h3 class="payment-text-muted">New User role and permission</h3>
                        </div>
                        <div class="col-md-2 notifications">
                            <div class="centre-img">
                                <img src="./icons/005-bell.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="row outer-row">
                        <div class="col-md-6 search">
                            <!-- <div class="search">
                                <input id="search" placeholder="Search">
                                <span class="fa fa-search"> | </span>
                            </div> -->
                        </div>
                        <div class="col-md-6">
                            <button type="button" class="apply">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 flowchart col-sm-6">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="template-wrap">
                                <article class="col oneline">
                                    <div class="circle-in">
                                        <p>1</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h3 class="general-details">User Role</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="template-wrap">
                                <article class="col2 oneline2">
                                    <div class="circle-in">
                                        <p>2</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h3 class="date-text">User Permission</h3>
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="container">

                        <h5 align="left">User Role</h5>
                        <br>
                        <div class="progress" style="height: 3px; top: -20px;">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 20%; height: 3px;"
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <form class="form">
                            <div class="row">
                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        <label class="form-lbl">User role</label>
                                        <input type="text" class="form-control" id="" placeholder="">
                                    </fieldset>
                                </div>
                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        <label class="form-lbl">Description</label>
                                        <input type="text" class="form-control" id="" placeholder="">
                                    </fieldset>
                                </div>
                            </div>
                            <div class="row form-row">
                                <div class="col-md-6">
                                    <fieldset class="form-group">
                                        <label class="form-lbl">Status</label>
                                        <input type="text" class="form-control" id="" placeholder="">
                                    </fieldset>
                                </div>
                            </div>
                            <h5 align="left" class="form-row">User Permission</h5>
                            <br>
                            <div class="progress" style="height: 3px; top: -20px;">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 50%; height: 3px;"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
                            </div>
                            <div class="row form row">
                                <div class="col-md-12">
                                    <table class="table table-striped">
                                        <thead class="hedaer">
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">View</th>
                                                <th scope="col">Add</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Dashbord</th>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Onboarding</th>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Application</th>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Permit, Cetificate, Licences</th>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Insurances</th>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Billing</th>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Fines and Violation</th>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                                <td><input type="checkbox"
                                                        aria-label="Checkbox for following text input"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </article>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:ital,wght@0,300;0,400;0,500;1,500&display=swap');
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

.text-danger {
    margin-top: 20px;
    text-align: center;
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
    font-size: 10px;
    line-height: 18px;
    /* identical to box height, or 175% */

    letter-spacing: -0.015em;

    color: #DC0D2A;
}

.form-lbl {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
    /* identical to box height, or 125% */

    letter-spacing: -0.015em;

    color: #000000;
}

.form-row {
    margin-top: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    margin-bottom: 0;
    font-size: 20px;
    line-height: 18px;
    /* identical to box height, or 88% */

    letter-spacing: -0.015em;

    color: #000000;
}

.col-9 {

    background: #F1F9FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 50px;
}

.date-text {
    top: 50px;
    left: -90px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 125% */

    letter-spacing: -0.015em;

    color: #878787;
}

.payments-text {
    top: 60px;
    left: -90px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 125% */

    letter-spacing: -0.015em;

    color: #878787;
}

.general-details {
    top: 30px;
    left: -90px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 125% */

    letter-spacing: -0.015em;

    color: #FF7E07;
}

.flowchart {
    left: 50px;
}

.col {
    width: 100%;
    padding: 5%;
    left: -50px;
    /* background-color: red; */
    margin-bottom: 5%;
    /* border-top: 5px solid red; */
}

.col2 {
    width: 100%;
    padding: 5%;
    left: -50px;
    /* background-color: red; */
    top: -150px;
    margin-bottom: 5%;
    /* border-top: 5px solid red; */
}

.col3 {
    width: 100%;
    padding: 5%;
    left: -50px;
    /* background-color: red; */
    top: -300px;
    margin-bottom: 5%;
    /* border-top: 5px solid red; */
}

.oneline:after {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: #FF7E07;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.oneline:hover:after {
    background-color: goldenrod;
}

.oneline div {
    float: left;
    width: 100%;
    padding-top: 50%;
    line-height: 1em;
    margin-top: -.3em;
    text-align: center;
    color: white;
}

.oneline p {
    text-align: center;
    font-size: 1.7em;
    z-index: 20;
}


.oneline2:after {
    top: 170px;
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: #000000;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.oneline2:hover:after {
    background-color: goldenrod;
}

.oneline2 div {
    float: left;
    width: 100%;
    padding-top: 50%;
    line-height: 1em;
    margin-top: -.3em;
    text-align: center;
    color: white;
}

.oneline2 p {
    text-align: center;
    font-size: 1.7em;
    top: 170px;
    z-index: 20;
}

.oneline3:after {
    top: 330px;
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: #FFFFFF;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.oneline3:hover:after {
    background-color: goldenrod;
}

.oneline3 div {
    float: left;
    width: 100%;
    padding-top: 50%;
    line-height: 1em;
    margin-top: -.3em;
    text-align: center;
    color: white;
}

.oneline3 p {
    text-align: center;
    font-size: 1.7em;
    top: 330px;
    z-index: 20;
}

.oneline4:after {
    top: 330px;
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: rgba(140, 129, 129, 0.3);
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.oneline4:hover:after {
    background-color: goldenrod;
}

.oneline4 div {
    float: left;
    width: 100%;
    padding-top: 50%;
    line-height: 1em;
    margin-top: -.3em;
    text-align: center;
    color: white;
}

.oneline4 p {
    text-align: center;
    font-size: 1.7em;
    top: 330px;
    z-index: 20;
}

.oneline5:after {
    top: 330px;
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: #3775CD82;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.oneline5:hover:after {
    background-color: goldenrod;
}

.oneline5 div {
    float: left;
    width: 100%;
    padding-top: 50%;
    line-height: 1em;
    margin-top: -.3em;
    text-align: center;
    color: white;
}

.oneline5 p {
    text-align: center;
    font-size: 1.7em;
    top: 330px;
    z-index: 20;
}

.oneline6:after {
    top: 330px;
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: rgba(209, 81, 22, 0.2);
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.oneline6:hover:after {
    background-color: goldenrod;
}

.oneline6 div {
    float: left;
    width: 100%;
    padding-top: 50%;
    line-height: 1em;
    margin-top: -.3em;
    text-align: center;
    color: white;
}

.oneline6 p {
    text-align: center;
    font-size: 1.7em;
    top: 330px;
    z-index: 20;
}

.oneline7:after {
    top: 330px;
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: rgba(41, 181, 232, 0.46);
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.oneline7:hover:after {
    background-color: goldenrod;
}

.oneline7 div {
    float: left;
    width: 100%;
    padding-top: 50%;
    line-height: 1em;
    margin-top: -.3em;
    text-align: center;
    color: white;
}

.oneline7 p {
    text-align: center;
    font-size: 1.7em;
    top: 330px;
    z-index: 20;
}

.template-wrap {
    width: 80px;
    height: 100%;
    /* border: 1px solid #767676; */
    margin: 0 auto;
    padding: 0.5em;
}

.template-wrap figure {
    margin: 1em auto;
}

.search {
    position: relative;
    color: #aaa;
    font-size: 16px;
}

.search {
    display: inline-block;
    width: 364px;
    height: 31px;

    /* background: #FFFFFF; */
    border-radius: 4px;
}

.search input {
    width: 250px;
    height: 32px;

    background: #fcfcfc;
    /* border: 1px solid #aaa; */
    border-radius: 5px;
    /* box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb; */
}

.search input {
    text-indent: 32px;
}

.search .fa-search {
    position: absolute;
    top: 10px;
    left: 10px;
}

.search .fa-search {
    left: 10px;
}

.apply {
    width: 181px;
    height: 31px;
    left: 570px;
    border: 0;
    color: #CFEBFF;

    background: #3457EB;
    /* box-shadow: 0px 2px 10px #3775CD; */
    border-radius: 3px;
}

.inner-pending-amount {
    font-family: 'Inter';
    margin-top: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 12px;
    /* identical to box height, or 42% */

    left: 80px;
    letter-spacing: 0.01em;

    color: #000000;
}

.inner-available-amount {
    font-family: 'Inter';
    margin-top: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 12px;
    /* identical to box height, or 42% */

    left: 70px;
    letter-spacing: 0.01em;

    color: #000000;
}

.view-transaction {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 300;
    font-size: 10px;
    line-height: 18px;
    left: 80px;
    /* identical to box height, or 175% */

    letter-spacing: 0.02em;
    text-decoration-line: underline;

    color: #2A7905;
}

.badge {
    float: right;
    top: 25px;
    left: 30px;
    width: 69px;
    height: 18px;
    font-family: 'Montserrat';
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    /* identical to box height, or 175% */

    letter-spacing: 0.02em;

    color: #FFFFFF;
}


.inner-title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height, or 117% */
    letter-spacing: 0.02em;
    top: 32px;
    left: 20px;

    color: #000000;
}

.icon-red {
    /* position: absolute; */
    width: 52px;
    height: 48px;
    left: 12px;
    top: 15px;
    text-align: center;
    background: #A00303;
    border-radius: 15px;
}

.icon-red i {
    vertical-align: middle;
    color: #F5FBFF;
    /* left: 2px; */
    top: 12px;
    font-size: 26px;
}

.icon-green {
    /* position: absolute; */
    width: 52px;
    height: 48px;
    left: 12px;
    top: 15px;
    text-align: center;
    background: #2A7905;
    border-radius: 15px;
}

.icon-green i {
    vertical-align: middle;
    color: #F5FBFF;
    /* left: 2px; */
    top: 12px;
    font-size: 26px;
}

.inner-pending {
    padding: 10px;
    display: flex;
}

.inner-available {
    padding: 10px;
    display: flex;
}

.available {
    width: 520px;
    height: 171px;
    float: left;
    background: #F1F9FF;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    border-radius: 37px;
}

.pending {
    width: 520px;
    height: 171px;
    float: right;
    background: #F1F9FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 37px;
}

.table {
    border: 1px solid #C2B7B7;
}

thead {
    background: rgba(133, 182, 255, 0.28);
}

table th {
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
}

.hedaer th {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #000000;
}

.outer-row {
    padding: 30px;
}

.table-head {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 18px;
    padding: 30px;
    /* identical to box height, or 76% */

    letter-spacing: -0.015em;

    color: #000000;
}

.avail-pending {
    width: 1098px;
    height: 195px;
    top: 21px;
    background: rgba(236, 247, 255, 0.49);
    box-shadow: inset 0px 0px 4px #CFEBFF;
    border-radius: 30px;
    padding: 10px;
}

td,
th {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    /* or 125% */

    text-align: center;
    letter-spacing: 0.01em;

    color: #000000;
}

.centre-img {
    float: right;
    margin-top: 50px;
    width: 50px;
    height: auto;
    margin: 0 auto;
    background: #E5E6EB;
    padding: 12px;
    border-radius: 50%;
    position: relative;
}

.home-container {
    position: relative;
    width: 1212px;
    height: 982px;
    left: 200px;

    background: #F5FBFF;
}

.top-nav {
    margin-top: 0;
    padding: 15px;
    background: hsla(229, 82%, 56%, 0.07);
}

.welcome h1 {
    width: 400px;
}

.notification {
    margin-left: 50px;
    margin-top: 50px;
}

.dash {
    padding: 30px;
}
</style>