var ps41p3sid = "NEeBpGOMdHkw";
// safe-textlink@gecko.js

var ps41p3iso;
try {
	ps41p3iso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.ps41p3wid != null);
} catch(e) {
	ps41p3iso = false;
}
if (ps41p3iso) {
	window.ps41p3wid = opener.ps41p3wid + 1;
	ps41p3sid = ps41p3sid + "_" + window.ps41p3wid;
} else {
	window.ps41p3wid = 1;
}
function ps41p3n() {
	return (new Date()).getTime();
}
var ps41p3s = ps41p3n();
function ps41p3st(f, t) {
	if ((ps41p3n() - ps41p3s) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var ps41p3ol = false;
function ps41p3ow() {
	if (ps41p3ol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + ps41p3n();
		var url = "http://messenger.providesupport.com/messenger/1rj9nh21p5xso04swicqmmfdv0.html?ps_l=" + escape(document.location) + "";
		window.open(url, pswn, pswo);
	} else if (1 == 2) {
		document.location = "http://";
	}
}
var ps41p3il;
var ps41p3it;
function ps41p3pi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (271 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (191 / 2);
	if ((il != ps41p3il) || (it != ps41p3it)) {
		ps41p3il = il;
		ps41p3it = it;
		var d = document.getElementById('ci41p3');
		if (d != null) {
			d.style.left  = Math.round(ps41p3il) + "px";
			d.style.top  = Math.round(ps41p3it) + "px";
		}
	}
	setTimeout("ps41p3pi()", 100);
}
var ps41p3lc = 0;
function ps41p3si(t) {
	window.onscroll = ps41p3pi;
	window.onresize = ps41p3pi;
	ps41p3pi();
	ps41p3lc = 0;
	var url = "http://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/1rj9nh21p5xso04swicqmmfdv0.html?ps_t=" + ps41p3n() + "";
	var d = document.getElementById('ci41p3');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="ps41p3ld()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function ps41p3ld() {
	if (ps41p3lc == 1) {
		var d = document.getElementById('ci41p3');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	ps41p3lc++;
}
if (false) {
	ps41p3si(1);
}
var ps41p3d = document.getElementById('sc41p3');
if (ps41p3d != null) {
	if (ps41p3ol || (1 == 1) || (1 == 2)) {
		if (false) {
			ps41p3d.innerHTML = '<table style="display:inline;border:0px;border-collapse:collapse;border-spacing:0;"><tr><td style="padding:0px;text-align:center;border:0px"><a href="#" onclick="ps41p3ow(); return false;"><span id="ps41p3l">' + 'Chat With A Stylist' + '</span></a></td></tr><tr><td style="padding:0px;text-align:center;border:0px"><a href="http://www.providesupport.com/pb/1rj9nh21p5xso04swicqmmfdv0" target="_blank"><img src="http://image.providesupport.com/lcbpsh.gif" width="140" height="17" style="border:0;display:block;margin:auto"></a></td></tr></table>';
		} else {
			ps41p3d.innerHTML = '<a href="#" onclick="ps41p3ow(); return false;"><span id="ps41p3l">' + 'Chat With A Stylist' + '</span></a>';
		}
	} else {
		ps41p3d.innerHTML = '';
	}
}
var ps41p3op = false;
function ps41p3co() {
	var w1 = ps41p3ci.width - 1;
	ps41p3ol = (w1 & 1) != 0;
	ps41p3sl(ps41p3ol ? "Chat With A Stylist" : "Chat With A Stylist");
	ps41p3scf((w1 & 2) != 0);
	var h = ps41p3ci.height;

	if (h == 1) {
		ps41p3op = false;
	
	} else if ((h == 2) && (!ps41p3op)) {
		ps41p3op = true;
		ps41p3si(1);

	} else if ((h == 3) && (!ps41p3op)) {
		ps41p3op = true;
		ps41p3si(2);
	}
}
var ps41p3ci = new Image();
ps41p3ci.onload = ps41p3co;
var ps41p3pm = false;
var ps41p3cp = ps41p3pm ? 30 : 60;
var ps41p3ct = null;
function ps41p3scf(p) {
	if (ps41p3pm != p) {
		ps41p3pm = p;
		ps41p3cp = ps41p3pm ? 30 : 60;
		if (ps41p3ct != null) {
			clearTimeout(ps41p3ct);
			ps41p3ct = null;
		}
		ps41p3ct = ps41p3st("ps41p3rc()", ps41p3cp);
	}
}
function ps41p3rc() {
	ps41p3ct = ps41p3st("ps41p3rc()", ps41p3cp);
	try {
		ps41p3ci.src = "http://image.providesupport.com/cmd/1rj9nh21p5xso04swicqmmfdv0?" + "ps_t=" + ps41p3n() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + ps41p3sid + "" + "";
	} catch(e) {
	}
}
ps41p3rc();
var ps41p3cl = "Chat With A Stylist";
function ps41p3sl(l) {
	if (ps41p3cl != l) {
		var d = document.getElementById('ps41p3l');
		if (d != null) {
			d.innerHTML = l;
		}
		ps41p3cl = l;
	}
}

