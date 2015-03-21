/* **************************************************************

   Copyright 2011 Zoovy, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

************************************************************** */

/*
Adds AddThis social sharing code to the product page.

For AddThis API docs, go here: http://support.addthis.com/customer/portal/articles/381263-addthis-client-api




in index.html, set the following vars for this to work properly:

addthis_id =  #####;

*/


//Global object that will be updated before addThis code is rendered.
var addthis_share = {
	url : "",
	title : ""
};

var partner_addthis = function() {
	var r= {
		vars : {
			selector : ".socialLinks"
		},

		callbacks : {
			init : {
				onSuccess : function(){
					var scriptPath = (document.location.protocol == 'https:' ? 'https:' : 'http:')+'//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4fa4616858ff587b';
					/*if(typeof addthis_id !== 'undefined'){
						scriptPath+= '#pubid=ra-4fa4616858ff587b';
					}*/
					//setTimeout used to test asynchronous loading and dependency checks
					//setTimeout(function(){app.u.loadScript(scriptPath);},3000);
					app.u.loadScript(scriptPath);
					app.rq.push(['templateFunction','productTemplate','onCompletes',function(infoObj){
						app.ext.partner_addthis.u.buildSocialLinksProductPage(infoObj);
						}]);
					app.rq.push(['templateFunction','productTemplate','onDeparts',function(infoObj){
						app.ext.partner_addthis.u.destroySocialLinks(infoObj);
						}]);
					return true;
				},
				onError : function() {
					app.u.dump('BEGIN app.ext.partner_addthis.callbacks.init.onError');
				}
			}
		},

	u : {
		buildSocialLinksProductPage : function(infoObj, attempts){
			attempts = attempts || 0;
			//app.u.dump("-> Addthis attempt: "+attempts);
			if(typeof addthis !== "undefined"){
				//Adds the addthis code to the container specified
				//To Customize the look and feel of the share icons, see here: http://support.addthis.com/customer/portal/articles/381238-addthis-toolbox
				//Note: this also includes using custom share icons.
				var $context = $(app.u.jqSelector('#',infoObj.parentID));

				$(app.ext.partner_addthis.vars.selector, $context).append(
						'<div id="socialLinks" class="addthis_default_style addthis_toolbox">'
					+		'<a class="addthis_button_facebook_like" fb:like:layout="button_count"></a>'
					+		'<a class="addthis_button_tweet"></a>'
					+		'<a class="addthis_button_pinterest_pinit"></a>'
					+		'<a class="addthis_counter addthis_pill_style addthis_nonzero"></a>'
					+	'</div>');

				//Set URL+title for most sharing code
				var url = zGlobals.appSettings.http_app_url+"product/"+infoObj.pid+"/";
				addthis_share.url = url;
				addthis_share.title = app.data[infoObj.datapointer]['%attribs']['zoovy:prod_name'];

				//Set URL+title for Facebook
				$('#ogURL').attr('content',url);
				$('#ogTitle').attr('content',app.data[infoObj.datapointer]['%attribs']['zoovy:prod_name']);
				$('#ogImage').attr('content',app.u.makeImage({"name":app.data[infoObj.datapointer]['%attribs']['zoovy:prod_image1'],"w":150,"h":150,"b":"FFFFFF","tag":0}));
				$('#ogDescription, #metaDescription').attr('content',app.data[infoObj.datapointer]['%attribs']['zoovy:prod_desc']);

				//Hooks everything in
				//app.u.dump("-> Calling addthis.toolbox...");
				addthis.toolbox('#socialLinks');
				}
			else {
				//app.u.dump("-> Addthis is not defined...");
				var n = 60;
				if(attempts > n){
					app.u.dump("Failed to build social links after "+(n/4)+" seconds.  infoObj follows: "); app.u.dump(infoObj);
					}
				else{
					setTimeout(function(){app.ext.partner_addthis.u.buildSocialLinksProductPage(infoObj, attempts+1);}, 250);
					}
				}
			},
		destroySocialLinks : function(infoObj){
			var $context = $(app.u.jqSelector('#',infoObj.parentID));
			$(app.ext.partner_addthis.vars.selector, $context).empty();
			}
		}
	}
	return r;
}