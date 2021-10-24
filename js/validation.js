function validation() {

    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message").value;

    error_message.style.padding = "10px";

    if (name.length < 5) {
        text = "Please enter a valid name"
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please enter a valid subject";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please enter a valid phonenumber";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 10) {
        text = "Please enter a valid email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length == "") {
        text = "Please enter your message";
        error_message.innerHTML = text;
        return false;
    }
    return false;
}