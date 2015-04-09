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

//PROJECT PAGE POSITION FIXED ELEMENTS WORKAROUND
function fix_scroll() {
	//console.log("scroll event triggered");
	var index = $("body").scrollTop();
	var container = $("body").scrollTop();
	//console.log("container = " + container);
	var halfWidth = $(window).width() / 2;
	halfWidth = halfWidth - 55;
	//console.log("halfWidth = " + halfWidth);
	index = index + 50;
	//console.log("index = " + index);
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
