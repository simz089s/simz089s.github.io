var welcometext = document.getElementById("welcometext");
var welcometexth3 = welcometext.getElementsByTagName("h3")[0];

function writeWelcomeText() {
	welcometexth3.innerHTML = "Welcome to my page!";
	welcometexth3.style.margin = "10px auto";
	welcometexth3.style.textAlign = "center";
	welcometexth3.style.width = "auto";
	welcometexth3.style.display = "inline-block";
}

writeWelcomeText();

var exMark = 1;
welcometexth3.onclick = function () {
	welcometexth3.innerHTML += "!"
	exMark++;
	if (exMark === 12) { // I like the number 12
		// window.location.href = "http://grammar.yourdictionary.com/punctuation/when/when-to-use-exclamation-marks.html";
		window.open("http://grammar.yourdictionary.com/punctuation/when/when-to-use-exclamation-marks.html");
	}
};

var flexbox = document.getElementById("flexbox");
var flexboxitems = flexbox.getElementsByClassName("flex-item");

function makeSureFlexItemAppear() {
	for (let item of flexboxitems) {
		item.style.opacity = "1";
	}
}

// var welcometextitem = flexboxitems[0];
welcometext.addEventListener("webkitAnimationEnd", makeSureFlexItemAppear, false);
welcometext.addEventListener("animationend", makeSureFlexItemAppear, false);
welcometext.addEventListener("oanimationend", makeSureFlexItemAppear, false);
welcometext.addEventListener("MSAnimationEnd", makeSureFlexItemAppear, false);
welcometext.addEventListener("mozAnimationend", makeSureFlexItemAppear, false);
