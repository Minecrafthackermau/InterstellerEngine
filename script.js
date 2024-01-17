function checkPassword() {
	var password = document.getElementById("password").value;

    	if (password == "281209") {
		window.location.href = "https://wirygoodnaturedfields.supportrkn.repl.co/";
	} else {
		document.getElementById("message").innerHTML = "To Login With The Guest Password Use Password 281209";
	}
}
