/**
 * Main AngularJS Web Application
 */



/***********************************************************************************************************************************************************************************************/
/******************************************************************************ROUTER***********************************************************************************************************/

var app = angular.module('clintPortfolio', [
  'ngRoute'
]);

/**
 * Routing
 */
 
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	// Home
	.when("/", {templateUrl: "Templates/home.html", controller: "PageCtrl"})
	// Pages
	.when("/projects", {templateUrl: "Templates/projects.html", controller: "PageCtrl"})
	.when("/references", {templateUrl: "Templates/references.html", controller: "PageCtrl"})
	/* etc… routes to other pages… */
	// Blog
	.when("/testimonials", {templateUrl: "Templates/testimonials.html", controller: "PageCtrl"})
	.when("/history", {templateUrl: "Templates/history.html", controller: "PageCtrl"})
	// else 404
	.otherwise("/404", {templateUrl: "Templates/404.html", controller: "PageCtrl"});
}]);








/***********************************************************************************************************************************************************************************************/
/******************************************************************************CONTROLLER*******************************************************************************************************/



/*Page Change Controller*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
	//console.log("Page Controller reporting for duty.");
});

