var instance = $('#login-form').parsley();

function login() {
    instance.validate();
    if (instance.isValid()) {
        console.log("Hello World")
    } else {
        return false;
    }
}