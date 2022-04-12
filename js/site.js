// Get Information - Step One
function getMessage() {

    let msg = document.getElementById("txtMessage").value;

    // Validate if the "msg" is not equal to an empty string.
    if (msg == "") {
        alert("You must enter a string!");

    } else {
        // Changing output to "lowercase" regardless of input.
        msg = msg.toLowerCase();
        let revMessage = reverseMessageB(msg);
        displayMessage(revMessage);
    }

}

function reverseMessageA(msg) {
    let revMessage = "";

    // Decrimenting loop
    for (let index = msg.length - 1; index >= 0; index--) {
        let char = msg[index];
        revMessage += char;

    }

    return revMessage;
}

function reverseMessageB(msg) {

    // Add multiple "split" and "join" methods
    let revMessage = "";
    revMessage = msg.split("").reverse().join("");
    
    return revMessage;

}

// Final Step - View
function displayMessage(message) {

    element = document.getElementById("results");
    element.innerHTML = message;

}