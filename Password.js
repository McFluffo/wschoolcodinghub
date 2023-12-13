   function checkPassword() {
            var enteredPassword = document.getElementById("password").value;
            // Replace 'yourpassword' with your chosen password
            if (enteredPassword === "yourpassword") {
                // Redirect to the desired page
                window.location.href = "granted_access_page.html";
            } else {
                // Show an error message
                alert("Incorrect password. Access denied!");
            }
        }
