// catch all the elements by id
const signinBtn=document.getElementById("signin-btn");
const emailInput=document.getElementById("email");
const passInput=document.getElementById("password");
const emailError=document.getElementById("email-error");

// add event listener for sign in button
signinBtn.addEventListener("click" , function(){
    const enteredEmail=emailInput.value;
    const enteredPass=passInput.value;
    // store mail and password
    const storeEmail=localStorage.getItem("email");
    const storePass=localStorage.getItem("password");

    // check if the mail matches
    if(enteredEmail===storeEmail && enteredPass===storePass){
        // then redirect to the main page
        window.location.href="main.html" //add main page here
    }
    else{
        // show an error
        emailError.textContent="Invalid Credentials. Please try again!"
    }
})