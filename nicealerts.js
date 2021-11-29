var ALERT_TITLE = "Netter Versuch!";
var ALERT_TITLE_WEBSITE = "Externer Link";
var ALERT_BUTTON_TEXT = "Ok";
var ALERT_BUTTON_BACK = "Zurück";
var ALERT_BUTTON_WEBSITE = "Zur Website";

function drawAlert(txt, back){
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";
	if(back == "NO" || back == "back")
	{
		h1 = alertObj.appendChild(d.createElement("h1"));
		h1.appendChild(d.createTextNode(ALERT_TITLE));
	}
	else{
		h1 = alertObj.appendChild(d.createElement("h1"));
		h1.appendChild(d.createTextNode(ALERT_TITLE_WEBSITE));
	}
	msg = alertObj.appendChild(d.createElement("p"));
	msg.innerHTML = txt;

	if(back == "NO")
	{
		btn = alertObj.appendChild(d.createElement("a"));
		btn.id = "closeBtn";
		btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
		btn.href = "#";
		btn.focus();
		btn.onclick = function() { removeCustomAlert();return false; }
	}
	else if(back =="back")
	{
		btn = alertObj.appendChild(d.createElement("a"));
		btn.id = "closeBtn";
		btn.appendChild(d.createTextNode(ALERT_BUTTON_BACK));
		btn.href = "#";
		btn.focus();
		btn.onclick = function() { window.history.back(); }
	}
	else{
		btn = alertObj.appendChild(d.createElement("a"));
		btn.id = "closeBtn";
		btn.appendChild(d.createTextNode(ALERT_BUTTON_WEBSITE));
		btn.href = "#";
		btn.focus();
		btn.onclick = function() {document.location.href = back; }
	}

	alertObj.style.display = "block";
	
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}