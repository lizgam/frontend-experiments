    function validate(forma) {
        x = document.forms["myForm"].getElementsByTagName("span");
        for (var i=x.length-1; i>=0; i--) {
            x[i].parentNode.removeChild(x[i]);
        }
		
	var email = isCorrectMail(forma.mail);
	var passw = isCorrectPass(forma.pass);
	
	return email && passw;
}	
	function isCorrectPass(text) {
        text.style.backgroundColor = "white";
        var newPass = text.value;
		var minNumb = 6;
        if (newPass.length < minNumb) {
			var item = document.createElement("span");
			item.innerHTML = "* The field must be at least 6 symbols";
			text.parentNode.appendChild(item);
			text.style.backgroundColor = "#FFF5F5";
			return false;
		}
    // проверка наличия пробела с помощью indexOf
        if (newPass.indexOf(' ') >= 0) {
            var item = document.createElement("span");
			item.innerHTML = "* The field should not contain white spaces";
			text.parentNode.appendChild(item);
			text.style.backgroundColor = "#FFF5F5";
			return false;
            
        } 
		return true;
	}	
    // проверка корректного ввода почты с помощью РВ
    function isCorrectMail(text){
        var newMail = text.value;
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        text.style.backgroundColor = "white";
		if (!re.test(newMail)){ 
			var item = document.createElement("span");
			item.innerHTML = "* Incorrect e-mail (eg:UserName@example.com)";
			text.style.backgroundColor = "#FFF5F5";
            text.parentNode.appendChild(item);
			return false;
		}
		return true;
	}
    
        