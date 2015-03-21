// Sealify Script 2.010
// GPL
// by: Marcus Stratton
// Displays a site verification seal 

var vURL = "//www.toppromwebsites.com/validator/";
var Validator = 
{
	verification_parameters: "",
	id_parameter_name:       "id",
	url_parameter_name:      "rurl",
	seal_image_file:         ( vURL + "images/black-seal-small.png"),
	seal_width:              "120",
	seal_height:             "75",
	seal_alt_text:           "Click for authenticity",
	display_url:             "http://www.toppromwebsites.com/",
	text_color:              "black",
	text_size:               "10px",
	line_spacing:            "13px",
	new_window_height:       "450",
	new_window_width:        "500",
	current_url:             "",
	display_location:        false,
	no_click:                false,
	debug:                   false
};

var current_date = new Date();
var month = current_date.getMonth() + 1;
var day = current_date.getDate();
var year = current_date.getFullYear();

document.writeln( '<style type="text/css">' );
document.writeln( 'div.Seal{text-align:center;margin:0;padding:0;width:' + Validator.seal_width + 'px;font:normal ' + Validator.text_size + ' arial,helvetica,san-serif;line-height:' + Validator.line_spacing + '; cursor:pointer;}' );
document.writeln( 'div.Seal a{text-decoration:none;color:#ccc;margin:0;padding:0;background-color:none;border:0;font-weight:normal;text-align:center;font-size:11px;cursor:default; float:none !important;}' );
document.writeln( 'div.Seal a:visited{color:#ccc;}' );
document.writeln( 'div.Seal a:active{color:#ccc;}' );
document.writeln( 'div.Seal a:hover{text-decoration:none;color:#ccc;margin:0;padding:0;background-color:none;border:0;font-weight:normal;text-align:center;}' );
document.writeln( 'div.Seal a img{border:0px;margin:0px;text-decoration:none;}' );
document.writeln( 'div.Spacer {text-align:center;width:' + Validator.seal_width + 'px;height:auto;}' );
document.writeln( 'div.footlink {height:13px;color:#666666 !important; font-size:11px;font-style:italic;text-align:center;padding-top:1px;}' );
document.writeln( '</style>' );

if( window.customer_id )
{
	
	Validator.verification_parameters = '?' + Validator.id_parameter_name + '=' + escape( customer_id );
	if( window.location.href )
	{
		Validator.current_url = window.location.href;
	}
	else if( document.URL )
	{
		Validator.current_url = document.URL;
	}

	if( Validator.current_url )
	{
		Validator.verification_parameters += '&' + Validator.url_parameter_name + '=' + escape( Validator.current_url );
	}

	if( !Validator.no_click )
	{		
		document.writeln( '<div class="Seal">' );
		
		document.write( '<div ' );
		
		if( !Validator.debug )
		{
			document.write( 'onMouseOver="window.status=\'' + Validator.display_url + '\'; return true;" ' );
			document.write( 'onMouseOut="window.status=\'\'; return true;" ' );
			document.write( 'onClick="window.open(\'' + vURL + Validator.verification_parameters + '\',\'Verified\',\'' );
			document.write( 'width=' + Validator.new_window_width );
			document.write( ',height=' + Validator.new_window_height );
			document.write( ',resizable=no,scrollbars=yes' );
			document.write( ',location=no,menubar=no,toolbar=no,status=no,directories=no' );
			if( Validator.display_location )
			{
				document.write( ',location=yes' );
			}
			document.write( '\'); return false;" ' );
		}
		document.writeln( '>' );
	}
		
	document.writeln( '<div class="Spacer"><img src="' + Validator.seal_image_file + '" height="' + Validator.seal_height + '" width="' + Validator.seal_width + '"></div>' );
	
	
	document.writeln( '</div>' );
	
 	document.writeln( '<div class="footlink"><a href="//www.toppromwebsites.com" target="_blank">Click seal to verify</a></div>' ); 

	if( !Validator.no_click )
	{
		document.writeln( '</div>' );
	}
}
