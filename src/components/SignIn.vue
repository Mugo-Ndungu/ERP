<template>
    <div class="container-fluid main">
        <div class="row">
            <div class="col-md-6 rectangle1">
                <div class="rectangle21"></div>
                <div class="skewed">
                    <div class="rectangle2"></div>
                    <div class="rectangle3"></div>
                    <div class="rectangle4"></div>
                </div>
                <h2 class="head_title">Republic of South Sudan</h2>
                <p class="body_text">Ministry of Interior <br><br>National Civil Defence Services - G/HQs <br><br>Safety and
                    Fire Prevention</p>
                <div class="rectangle5"></div>
                <div class="rectangle6"></div>
                <div class="rectangle7"></div>
                <div class="rectangle8"></div>
                <div class="bottom">
                    <div class="rectangle15"></div>
                    <div class="rectangle17"></div>
                    <div class="rectangle16"></div>
                </div>
            </div>
            <div class="col-md-6 right">
                <h3 class="form_title">Login</h3>
                <div>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                placeholder="Password">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="rememberPassword">
                            <label class="form-check-label" for="rememberPassword">Remember Password</label>
                        </div>
                        <button type="submit" class="btn submit btn-primary btn-block">Submit</button>
                        <p class="form-text already">Don't have an account? <a href="">Contact Us</a> </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Sign Up */
div .btn_google {
    left: 850px;
}

small {
    position: relative;
}

.btn_google button {
    width: 551px;
    height: 49px;
    border: 1px solid #D9D9D9;
    border-radius: 11px;

}

.separator {
    left: 850px;
    margin-top: 250px;
    display: flex;
    margin-bottom: 20px;
}

.new1 {
    width: 255px;
    position: relative;
    margin: 15px;
    border-bottom: 16px dotted #a4c639;
    left: 852;
    border: 1px solid #000000;
}

.already a {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 135% */

    letter-spacing: -0.015em;

    color: #2F53EB;
}

.already {
    margin-top: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 135% */

    letter-spacing: -0.015em;

    color: #000000;
}

.form-group {
    margin-bottom: 30px;
}

.form_title {
    position: absolute;
    width: 122px;
    height: 18px;
    left: 850px;
    top: 174px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 18px;
    /* identical to box height, or 55% */

    letter-spacing: -0.015em;

    color: #000000;

}

.submit {
    width: 552px;
    height: 49px;
    background: #2F53EB;
    border-radius: 11px;
}

form {
    left: 850px;
    top: 210px;
}

.form-check label {
    margin-bottom: 30px;
    width: 137px;
    height: 18px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 135% */

    letter-spacing: -0.015em;

    color: #000000;
}

.form-group input {
    width: 552px;
    height: 49px;
}

label {
    width: 97px;
    height: 18px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 125% */

    letter-spacing: -0.015em;

    color: #000000;
}

.body_text {
    position: absolute;
    width: 323px;
    height: 55px;
    left: 83px;
    top: 235px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    /* or 159% */

    letter-spacing: -0.015em;

    color: rgba(255, 255, 255, 0.8);

}

.rectangle5 {
    /* Rectangle 5 */


    position: absolute;
    width: 7px;
    height: 7px;
    left: 89px;
    top: 370px;

    background: #D9D9D9;
    border-radius: 25px;
}

.rectangle6 {
    /* Rectangle 6 */


    position: absolute;
    width: 20px;
    height: 7px;
    left: 101px;
    top: 370px;

    background: #D9D9D9;
    border-radius: 25px;
}

.rectangle7 {
    /* Rectangle 7 */


    position: absolute;
    width: 7px;
    height: 7px;
    left: 126px;
    top: 370px;

    background: #D9D9D9;
    border-radius: 25px;
}

.rectangle8 {
    /* Rectangle 8 */


    position: absolute;
    width: 7px;
    height: 7px;
    left: 138px;
    top: 370px;

    background: #D9D9D9;
    border-radius: 25px;

}

.rectangle2 {
    /* Rectangle 2 */


    position: absolute;
    width: 143.5px;
    height: 348px;
    left: 267px;
    top: -70px;
    transform: skew(-50deg);

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.26) 0%, rgba(217, 217, 217, 0) 100%);
}

.rectangle3 {
    position: absolute;
    width: 143.5px;
    height: 348px;
    left: 67px;
    top: 220px;
    transform: skew(-50deg);

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(217, 217, 217, 0) 100%);
}

.rectangle4 {
    /* Rectangle 4 */
    position: absolute;
    height: 103.5px;
    width: 348px;
    left: 170px;
    top: 310px;
    /* transform: skew(56deg); */
    rotate: 25deg;

    background: linear-gradient(97.03deg, rgba(255, 255, 255, 0.17) 7.23%, rgba(255, 255, 255, 0) 98.58%);
}


.head_title {
    position: absolute;
    width: 293px;
    height: 17px;
    left: 83px;
    top: 203px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 18px;
    /* or 73% */

    letter-spacing: -0.015em;

    color: #FFFFFF;

}

.main {
    position: relative;
    width: 1512px;
    height: 982px;
    background: #F5FBFF;
}

.rectangle1 {
    /* Rectangle 1 */
    position: absolute;
    width: 731px;
    height: 982px;
    left: 0px;
    top: 0px;
    background: #2F53EB;
}

.rectangle21 {
    /* Rectangle 21 */


    position: absolute;
    width: 5px;
    height: 529px;
    left: 0px;
    top: 0px;

    background: rgba(255, 126, 7, 0.7);
}

/* .bottom {
    width: 100%;
    padding: 2rem;
} */

.rectangle15 {
    /* Rectangle 15 */
    position: absolute;
    width: 149px;
    height: 500px;
    left: 47px;
    top: 482px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 217, 217, 0) 100%);
}

.rectangle17 {
    /* Rectangle 17 */


    position: absolute;
    width: 149px;
    height: 500px;
    left: 531px;
    top: 482px;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 217, 217, 0) 100%);
}

.rectangle16 {
    /* Rectangle 16 */
    position: absolute;
    width: 149px;
    height: 500px;
    left: 289px;
    top: 482px;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(217, 217, 217, 0) 100%);
}
</style>