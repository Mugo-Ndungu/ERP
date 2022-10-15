<template>
    <article>
        <div class="container-fluid home-container">
            <div class="row">
                <div class="col-md-8">
                    <div class="row top-nav">
                        <div class="col-md-10 welcome">
                            <h3 class="text-muted">Welcome</h3>
                            <h1 class="text-black">Patrick Skic</h1>
                        </div>
                        <div class="col-md-2 notifications">
                            <div class="centre-img">
                                <img src="./icons/005-bell.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="row dash">
                        <div class="col-md-2 payments">
                            <img src="./icons/003-credit-card.png" alt="">
                            <p class="menu-text">Payments</p>
                        </div>
                        <div class="col-md-2 applications">
                            <h6>12</h6>
                            <p class="menu-text">Applications</p>
                        </div>
                        <div class="col-md-7 grad">
                            <p class="grad-p1">This Months Payment</p>
                            <p class="grad-p2">SSP 4000.00</p>
                        </div>
                    </div>
                    <h3 class="service-head">Services</h3>
                    <div class="row">
                        <div class="col-md-1.5 services">
                            <img src="./icons/004-construction.png" alt="">
                            <h6 class="service-text">Start to Build <br> Application</h6>
                        </div>
                        <div class="col-md-1.5 services">
                            <img src="./icons/003-licensing.png" alt="">
                            <h6 class="service-text">Licenses and Permits</h6>

                        </div>
                        <div class="col-md-1.5 services">
                            <img src="./icons/005-inspection.png" alt="">
                            <h6 class="service-text">Inspections</h6>

                        </div>
                        <div class="col-md-1.5 services">
                            <img src="./icons/006-insurance.png" alt="">
                            <h6 class="service-text">Insurance</h6>

                        </div>
                        <div class="col-md-1.5 services">
                            <img src="./icons/002-coding.png" alt="">
                            <h6 class="service-text">Annual Service fee</h6>

                        </div>
                        <div class="col-md-1.5 services">
                            <img src="./icons/001-quote.png" alt="">
                            <h6 class="service-text">Get Quotation</h6>

                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="last-transaction">
                        <img src="./icons/003-credit-card.png" alt="">
                        <h3 class="transaction-title">Last Transaction</h3>
                        <p class="transaction-amount">SSP 2000.00</p>
                        <p class="transaction-date">Jul 22 at 8:34 AM</p>

                    </div>
                    <div class="pending-payments">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 class="title-pending">Pending Payments</h3>
                            </div>
                            <div class="col-md-6">
                                <h3 class="amount-pending">SSP 2000.00</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-6">
                    <h3 class="table-head">Your Applications</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"><i class="lar la-credit-card"></i></th>
                                <th scope="col">Ref No.</th>
                                <th scope="col">Applicant</th>
                                <th scope="col">Building Type</th>
                                <th scope="col">Block</th>
                                <th scope="col">Dimension</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">Estimated Completion Date</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><i class="lar la-credit-card"></i></th>
                                <td>001</td>
                                <td>Patrick Skic</td>
                                <td>Building Type</td>
                                <td>Block</td>
                                <td>Dimension</td>
                                <td>Start Date</td>
                                <td>Estimated Completion Date</td>
                                <td>Status</td>
                                <td>Mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:ital,wght@0,300;0,400;0,500;1,500&display=swap');

.table {
    border-color: #000000;
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
    margin-top: 50px;
    width: 60px;
    height: auto;
    margin: 0 auto;
    background: #E5E6EB;
    padding: 18px;
    border-radius: 50%;
    position: relative;
}

.title-pending {
    margin-top: 30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height, or 104% */

    text-align: center;
    letter-spacing: 0.01em;

    color: #000000;
}

.amount-pending {
    margin-top: 30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 12px;
    /* identical to box height, or 83% */

    text-align: center;
    letter-spacing: 0.01em;

    color: #DC0D2A;
}

.pending-payments {
    position: absolute;
    width: 297px;
    height: 64px;
    top: 345px;
    background: #E2E2E2;
    border-radius: 7px;
}

.last-transaction img {
    margin-top: 60px;
}

.transaction-date {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 12px;
    /* identical to box height, or 83% */

    text-align: center;
    letter-spacing: 0.01em;

    color: #878787;
}

.transaction-amount {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    margin-top: 25px;
    /* margin-bottom: 50px; */
    line-height: 12px;
    /* identical to box height, or 42% */

    text-align: center;
    letter-spacing: 0.01em;

    color: #000000;
}

.transaction-title {
    font-family: 'Inter';
    font-style: normal;
    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 18px;
    line-height: 12px;
    /* identical to box height, or 69% */
    text-align: center;
    letter-spacing: 0.01em;

    color: #000000;

}

.last-transaction {
    position: absolute;
    width: 297px;
    height: 240px;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    top: 56px;

    background: rgba(255, 126, 7, 0.16);
    border-radius: 8px;
}

.home-container {
    position: relative;
    width: 1212px;
    height: 982px;
    left: 200px;

    background: #F5FBFF;
}

.top-nav {
    margin-top: 20px;
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

.payments {
    text-align: center;
    padding: 15px;
    border: solid 3px black;
    height: 87px;
    width: 100px;
    border-radius: 10px;
}

.applications {
    text-align: center;
    padding: 15px;
    border: solid 3px black;
    height: 87px;
    width: 100px;
    border-radius: 10px;
    margin-left: 16px;
}

.grad {
    background: linear-gradient(90deg, #212C3D 45.63%, #1976D2 75.69%, #A32F03 100%);
    border-radius: 11px;
    margin-left: 15px;
}

.menu-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    /* identical to box height, or 175% */

    letter-spacing: -0.015em;

    color: #220000;

}

.inter {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 12px;
    /* identical to box height, or 69% */

    text-align: center;
    letter-spacing: 0.01em;

    color: #000000;

}

.grad-p1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 12px;
    /* identical to box height, or 69% */
    margin-top: 20px;

    text-align: left;
    letter-spacing: 0.01em;

    color: #FFFFFF;
}

.grad-p2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 12px;
    /* identical to box height, or 69% */

    text-align: left;
    letter-spacing: 0.01em;

    color: #FFFFFF;
}

.service-head {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 18px;
    margin-left: 20px;
    /* identical to box height, or 76% */

    letter-spacing: -0.015em;

    color: #000000;
}

.services {
    text-align: center;
    padding-top: 20px;
    width: 100px;
    height: 105px;
    left: 16px;
    margin-top: 15px;
    margin-left: 23px;
    background: #E8F3FB;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}

.service-text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
    font-size: 10px;
    line-height: 15px;
    /* or 0% */

    /* text-align: center; */
    letter-spacing: 0.01em;

    color: #000000;

}
</style>