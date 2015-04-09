/**
* Controls all other Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");

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