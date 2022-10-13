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
                <h4 class="head_title">Aspernatur aut</h4>
                <p class="body_text">Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi
                    nesciunt.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </p>
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
                <h3 class="form_title">Sign Up</h3>
                <div>
                    <form>
                        <div class="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="email" class="form-control" id="fullName" aria-describedby="emailHelp"
                                placeholder="Your Full Name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="phoneNumber">Phone Number</label>
                            <input type="email" class="form-control" id="phoneNumber" aria-describedby="emailHelp"
                                placeholder="+211 45542...">
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
                        <p class="form-text already">Already have an account? <a href="">Sign In</a> </p>
                    </form>
                </div>
                <div class="separator">
                    <div class="new1 black"></div>
                    <div><small> or </small></div>
                    <div class="new1 black"></div>
                </div>
                <div class="btn_google">
                    <button class="btn"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16"
                            viewBox="0 0 48 48" style=" fill:#000000;">
                            <path fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                            </path>
                            <path fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                            </path>
                            <path fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                            </path>
                            <path fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                            </path>
                        </svg> Authorised with Google</button>

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
    font-size: 11px;
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
    top: 330px;

    background: #D9D9D9;
    border-radius: 25px;
}

.rectangle6 {
    /* Rectangle 6 */


    position: absolute;
    width: 20px;
    height: 7px;
    left: 101px;
    top: 330px;

    background: #D9D9D9;
    border-radius: 25px;
}

.rectangle7 {
    /* Rectangle 7 */


    position: absolute;
    width: 7px;
    height: 7px;
    left: 126px;
    top: 330px;

    background: #D9D9D9;
    border-radius: 25px;
}

.rectangle8 {
    /* Rectangle 8 */


    position: absolute;
    width: 7px;
    height: 7px;
    left: 138px;
    top: 330px;

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
    width: 111px;
    height: 17px;
    left: 83px;
    top: 203px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* or 117% */

    letter-spacing: -0.015em;

    color: rgba(255, 255, 255, 0.8);


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