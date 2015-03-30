$(document).ready(function() { 
	//HEADER NAV LINK ANIMATION
	$('.headerTopNavSection ul li a').on({
		mouseenter: function () {
			$(this).animate({color:'#b8ec79'},500);
		},
		mouseleave: function () {
			$(this).animate({color:'#FFFFFF'},500);
		} 
	});
	
	//BACK TO TOP BUTTON LINK ANIMATION
	$('.mainNavigationSection div.ui-state-default').on({
		mouseenter: function () {
			$(".mainNavigationSection span.back-to-top").animate({color:'#9fda58'},500);
		},
		mouseleave: function () {
			$(".mainNavigationSection span.back-to-top").animate({color:'#b8ec79'},500);
		} 
	});
	
	//FOOTER LINK TEXT COLOR ANIMATION
	$('.footerRightSection a').on({
		mouseenter: function () {
			$(this).animate({color:'#b8ec79'},500);
		},
		mouseleave: function () {
			$(this).animate({color:'#FFFFFF'},500);
		} 
	});
	$('.footerCenterSection a').on({
		mouseenter: function () {
			$(this).animate({color:'#9fda58'},500);
		},
		mouseleave: function () {
			$(this).animate({color:'#b8ec79'},500);
		} 
	});
	$('.footerCreditsSection a').on({
		mouseenter: function () {
			$(this).animate({color:'#9fda58'},500);
		},
		mouseleave: function () {
			$(this).animate({color:'#b8ec79'},500);
		} 
	});
	
	//ACCORDIAN FUNCTION
	$( ".accordion" ).accordion();
	
	//PROJECT PAGE COLOR HOVER ANIMATOR
	$('.mainNavigationSectionProjects a').on({
		mouseenter: function () {
			$(this).animate({color:'#b8ec79'},500);
		},
		mouseleave: function () {
			$(this).animate({color:'#9fda58'},500);
		} 
	});
	
});


/*FUNCTIONS*/
//PROJECT PAGE SEARCH TAB ANIMATION
function searchTabOpenClose(){
	if($(".projectsIndexContainer").css("display") == "none") { 
		$(".projectsIndexContainer").show('slide', {direction: 'right'}, 500);
		$(".projectsIndexTab").animate({"right":"283px"}, 500);
	}
	else if($(".projectsIndexContainer").css("display") == "block"){
		$(".projectsIndexContainer").hide('slide', {direction: 'right'}, 500);
		$(".projectsIndexTab").animate({"right":"-20px"}, 500);
	}
}
