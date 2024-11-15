const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("registerUsername").value;
        const password = document.getElementById("registerPassword").value;

        if (username && password) {
            localStorage.setItem(username, password);
            alert("Registration successful! You can now login.");
            registerForm.reset();

            // Switch to the login form after registration
            loginToggle();
        } else {
            alert("Please fill in both fields.");
        }
    });
}

function registerToggle() {
    // Hide the login form and show the register form
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
}

function loginToggle() {
    // Hide the register form and show the login form
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        const storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            alert("Login successful!");
            localStorage.setItem("loggedInUser", username);
            window.location.href = "secured.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
}

if (window.location.href.includes("secured.html")) {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("You need to log in first!");
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out!");
            window.location.href = "index.html";
        });
    }
}
