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
	$('.mainNavigationSectionProjects a.linkColorChange').on({
		mouseenter: function () {
			$(this).animate({color:'#b8ec79'},500);
		},
		mouseleave: function () {
			$(this).animate({color:'#9fda58'},500);
		} 
	});
	$('.projectsIndexContainer a').on({
		mouseenter: function () {
			$(this).animate({color:'#b8ec79'},500);
		},
		mouseleave: function () {
			$(this).animate({color:'#9fda58'},500);
		} 
	});	
	
	/*NAVIAGATION DROPDOWN ALWAYS AT TOP FIXER*/
	$("body").on('scroll', fix_scroll).trigger('scroll');
	//REFERENCES PAGE COLOR HOVER ANIMATION
	$('.mainNavigationSectionReferences a').on({
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
function fix_scroll() {
	console.log("scroll event triggered");
	var index = $("body").scrollTop();
	var container = $("body").scrollTop();
	console.log("container = " + container);
	var halfWidth = $(window).width() / 2;
	halfWidth = halfWidth - 55;
	console.log("halfWidth = " + halfWidth);
	index = index + 50;
	console.log("index = " + index);
	var fixedIndex = $('.projectsIndexTab');
	var fixedMenu = $('.projectsIndexContainer');
	var fixedButton = $('.projectBackToTopButton');
	fixedIndex.css('top',index + 'px');
	fixedMenu.css('top',container + 'px');
	fixedButton.css('bottom','-' + container + 'px');
	fixedButton.css('left',halfWidth + 'px');
	fixedButton.css('right',halfWidth + 'px');
}

//PROJECT PAGE TEMPLATE MODAL SHOW
function projectTemplateModal(tempImg){
	var screenWidth = $(window).width()-40;
	var screenHeight = $(window).height()-20;
	$("#"+tempImg ).dialog({'modal':'true', 'title':'','width':screenWidth, height:screenHeight, 'dialogClass' : tempImg});
}
