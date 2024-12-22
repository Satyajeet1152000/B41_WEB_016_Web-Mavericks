import { createUser } from "../../Scripts/API/post.js";

document
    .getElementById("continue-btn")
    .addEventListener("click", async function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const emailError = document.getElementById("email-error");
        const emailSuccess = document.getElementById("email-success");

        if (name && email && password) {
            const emailPattern =
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailPattern.test(email)) {
                const userData = {
                    name: name,
                    email: email,
                    password: password,
                };

                try {
                    console.log(userData);
                    await createUser(userData);
                } catch (error) {
                    if (error.message === "Email already exists") {
                        emailError.textContent =
                            "This email is already registered";
                        return;
                    }
                    emailError.textContent =
                        "Registration failed. Please try again.";
                    return;
                }

                emailSuccess.textContent = "Registration Successful!";
                await new Promise((resolve) => setTimeout(resolve, 1000));

                window.location.href = "./signin.html";
            } else {
                emailError.textContent = "Please enter a valid email address!";
            }
        } else {
            emailError.textContent = "Please fill all fields.";
        }
    });
