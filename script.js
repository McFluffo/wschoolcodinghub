function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    // List of correct passwords
    var correctPasswords = ["ArizonaRoster$", "StinkyMonkey$", "PerritoPachon","ConsumerFood$"];

    var passwordMatch = false;

    // Check if the entered password matches any of the correct passwords
    for (var i = 0; i < correctPasswords.length; i++) {
        if (enteredPassword === correctPasswords[i]) {
            passwordMatch = true;
            // Set a cookie indicating successful authentication
            document.cookie = "authenticated=true;path=/";
            // Redirect to the 'activitylist' URL upon correct password entry
            window.location.href = "activitylist.html";
            break;
        }
    }

    if (!passwordMatch && document.cookie.indexOf("authenticated=true") === -1) {
        // Show an error message for incorrect password if the cookie is absent
        alert("Invalid Code");
    }
}
