<template>
    <article>
        <div class="container-fluid home-container">
            <div class="row">
                <div class="col-md-12 col-sm-6">
                    <div class="row top-nav">
                        <div class="col-md-10 welcome">
                            <h3 class="payment-text-muted">Payments</h3>
                        </div>
                        <div class="col-md-2 notifications">
                            <div class="centre-img">
                                <img src="./icons/005-bell.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="row outer-row">
                        <div class="col-md-12 col-sm-6 avail-pending">
                            <div class="col-md-6 available">
                                <div class="row inner-available">
                                    <div class="col-md-1 icon-green">
                                        <i class="lar la-credit-card"></i>
                                    </div>
                                    <div class="col-md-9">
                                        <h4 class="inner-title">Available</h4>
                                    </div>
                                    <div class="col-md-1">
                                        <span class="badge rounded-pill bg-success">2.0%</span>
                                    </div>

                                </div>
                                <h3 class="inner-available-amount">SSP 2000.00</h3>
                                <a href="#" class="view-transaction">View Transaction</a>
                            </div>
                            <div class="col-md-6 pending">
                                <div class="row inner-pending">
                                    <div class="col-md-1 icon-red">
                                        <i class="lar la-credit-card"></i>
                                    </div>
                                    <div class="col-md-9">
                                        <h4 class="inner-title">Pending</h4>
                                    </div>
                                    <div class="col-md-1">
                                        <span class="badge rounded-pill bg-danger">2.0%</span>
                                    </div>

                                </div>
                                <h3 class="inner-pending-amount">SSP 2000.00</h3>
                                <a href="#" class="view-transaction">View Transaction</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-6">
                    <h3 class="table-head">Cash In Transaction</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"><i class="lar la-credit-card"></i></th>
                                <th scope="col">Type</th>
                                <th scope="col">Date</th>
                                <th scope="col">Transaction ID</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Service</th>
                                <th scope="col">Applicant Name</th>
                                <th scope="col">Building Ref No.</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><i class="lar la-credit-card"></i></th>
                                <td></td>
                                <td>00-00-0000</td>
                                <td>KAWRR3R24</td>
                                <td>Block</td>
                                <td>Inspection</td>
                                <td>Applicant Name</td>
                                <td>Building Ref.No</td>
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
    border-color: #000000;
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
</style>