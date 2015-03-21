var psLKQXsid = "NEeBpGOMdHkw";
// safe-standard@gecko.js

var psLKQXiso;
try {
	psLKQXiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.psLKQXwid != null);
} catch(e) {
	psLKQXiso = false;
}
if (psLKQXiso) {
	window.psLKQXwid = opener.psLKQXwid + 1;
	psLKQXsid = psLKQXsid + "_" + window.psLKQXwid;
} else {
	window.psLKQXwid = 1;
}
function psLKQXn() {
	return (new Date()).getTime();
}
var psLKQXs = psLKQXn();
function psLKQXst(f, t) {
	if ((psLKQXn() - psLKQXs) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var psLKQXol = true;
function psLKQXow() {
	if (psLKQXol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + psLKQXn();
		var url = "http://messenger.providesupport.com/messenger/1i767mafw092k12e0iz16ztfbo.html?ps_l=" + escape(document.location) + "";
		window.open(url, pswn, pswo);
	} else if (1 == 2) {
		document.location = "http://";
	}
}
var psLKQXil;
var psLKQXit;
function psLKQXpi() {
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
	if ((il != psLKQXil) || (it != psLKQXit)) {
		psLKQXil = il;
		psLKQXit = it;
		var d = document.getElementById('ciLKQX');
		if (d != null) {
			d.style.left  = Math.round(psLKQXil) + "px";
			d.style.top  = Math.round(psLKQXit) + "px";
		}
	}
	setTimeout("psLKQXpi()", 100);
}
var psLKQXlc = 0;
function psLKQXsi(t) {
	window.onscroll = psLKQXpi;
	window.onresize = psLKQXpi;
	psLKQXpi();
	psLKQXlc = 0;
	var url = "http://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/1i767mafw092k12e0iz16ztfbo.html?ps_t=" + psLKQXn() + "";
	var d = document.getElementById('ciLKQX');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="psLKQXld()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function psLKQXld() {
	if (psLKQXlc == 1) {
		var d = document.getElementById('ciLKQX');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	psLKQXlc++;
}
if (false) {
	psLKQXsi(1);
}
var psLKQXd = document.getElementById('scLKQX');
if (psLKQXd != null) {
	if (psLKQXol || (1 == 1) || (1 == 2)) {
		var ctt = "";
		if (ctt != "") {
			tt = 'alt="' + ctt + '" title="' + ctt + '"';
		} else {
			tt = '';
		}
		if (false) {
			var p1 = '<table style="display:inline;border:0px;border-collapse:collapse;border-spacing:0;"><tr><td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="#" onclick="psLKQXow(); return false;"><img name="psLKQXimage" src="http://image.providesupport.com/image/1i767mafw092k12e0iz16ztfbo/online-1493513129.gif" width="91" height="31" style="border:0;display:block;margin:auto"';
			var p2 = '<td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="http://www.providesupport.com/pb/1i767mafw092k12e0iz16ztfbo" target="_blank"><img src="http://image.providesupport.com/';
			var p3 = 'style="border:0;display:block;margin:auto"></a></td></tr></table>';
			if ((91 >= 140) || (91 >= 31)) {
				psLKQXd.innerHTML = p1+tt+'></a></td></tr><tr>'+p2+'lcbpsh.gif" width="140" height="17"'+p3;
			} else {
				psLKQXd.innerHTML = p1+tt+'></a></td>'+p2+'lcbpsv.gif" width="17" height="140"'+p3;
			}
		} else {
			psLKQXd.innerHTML = '<a href="#" onclick="psLKQXow(); return false;"><img name="psLKQXimage" src="http://image.providesupport.com/image/1i767mafw092k12e0iz16ztfbo/online-1493513129.gif" width="91" height="31" border="0"'+tt+'></a>';
		}
	} else {
		psLKQXd.innerHTML = '';
	}
}
var psLKQXop = false;
function psLKQXco() {
	var w1 = psLKQXci.width - 1;
	psLKQXol = (w1 & 1) != 0;
	psLKQXsb(psLKQXol ? "http://image.providesupport.com/image/1i767mafw092k12e0iz16ztfbo/online-1493513129.gif" : "http://image.providesupport.com/image/1i767mafw092k12e0iz16ztfbo/offline-237903847.gif");
	psLKQXscf((w1 & 2) != 0);
	var h = psLKQXci.height;

	if (h == 1) {
		psLKQXop = false;

	// manual invitation
	} else if ((h == 2) && (!psLKQXop)) {
		psLKQXop = true;
		psLKQXsi(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!psLKQXop)) {
		psLKQXop = true;
		psLKQXsi(2);
		//alert("Auto invitation in standard code");
	}
}
var psLKQXci = new Image();
psLKQXci.onload = psLKQXco;
var psLKQXpm = false;
var psLKQXcp = psLKQXpm ? 30 : 60;
var psLKQXct = null;
function psLKQXscf(p) {
	if (psLKQXpm != p) {
		psLKQXpm = p;
		psLKQXcp = psLKQXpm ? 30 : 60;
		if (psLKQXct != null) {
			clearTimeout(psLKQXct);
			psLKQXct = null;
		}
		psLKQXct = psLKQXst("psLKQXrc()", psLKQXcp);
	}
}
function psLKQXrc() {
	psLKQXct = psLKQXst("psLKQXrc()", psLKQXcp);
	try {
		psLKQXci.src = "http://image.providesupport.com/cmd/1i767mafw092k12e0iz16ztfbo?" + "ps_t=" + psLKQXn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + psLKQXsid + "" + "";
	} catch(e) {
	}
}
psLKQXrc();
var psLKQXcb = "http://image.providesupport.com/image/1i767mafw092k12e0iz16ztfbo/online-1493513129.gif";
function psLKQXsb(b) {
	if (psLKQXcb != b) {
		var i = document.images['psLKQXimage'];
		if (i != null) {
			i.src = b;
		}
		psLKQXcb = b;
	}
}

