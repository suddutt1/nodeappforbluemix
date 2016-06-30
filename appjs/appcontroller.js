var app = angular.module("serviceTester", ['ngRoute','ui.bootstrap']);

app.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider)
{

	$routeProvider.
			when('/home',
				{
						templateUrl: 'partials/landing.html',
        				controller: 'serviceController'
				}).
			otherwise({

				redirectTo : '/home'
			});


}).controller('serviceController',function($scope,$http){

});