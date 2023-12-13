function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    // List of correct passwords
    var correctPasswords = ["ArizonaRoster$", "StinkyMonkey$"];

    var passwordMatch = false;

    // Check if the entered password matches any of the correct passwords
    for (var i = 0; i < correctPasswords.length; i++) {
        if (enteredPassword === correctPasswords[i]) {
            passwordMatch = true;
            // Redirect to the 'activitylist' URL upon correct password entry
            window.location.href = "activitylist";
            break;
        }
    }

    if (!passwordMatch) {
        // Show an error message for incorrect password
        alert("Invalid Code");
    }
}
