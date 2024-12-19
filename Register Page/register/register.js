// Add event listener for the Continue button
document.getElementById("continue-btn").addEventListener("click", function() {
    // Getting values from the input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("email-error");

    if (name && email && password) {
        // Simple email validation using regex
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailPattern.test(email)) {
            // If email is valid, save to localStorage and show success message
            localStorage.setItem('email', email);  // Store email
            localStorage.setItem('password', password);  // Store password to localStorage
            emailError.textContent = "";
            alert("Registration Successful!");

            window.location.href = "signin/signin.html"; // it will edirect to signin page
        } 
        else {
            // If email is invalid, show error message
            emailError.textContent = "Please enter a valid email address!";
        }
    } else {
        // Show error if any field is empty
        emailError.textContent = "Please fill all fields.";
    }
});
