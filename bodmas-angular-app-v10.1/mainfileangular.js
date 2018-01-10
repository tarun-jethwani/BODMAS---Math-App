var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider

	.when('/splash',{
		templateUrl:'modules/splash/loader.html',
		controller:'loader'
	})
	.when('/levels',{
		templateUrl:'modules/level.html'

	})
	.when('/easy',{
		templateUrl:'modules/easy/quizeasy.html',
		controller:'easyLevel'
	})
	.when('/medium',{
		templateUrl:'modules/medium/quizmid.html',
		controller:'medLevel'
	})
	.when('/hard',{
		templateUrl:'modules/hard/quizhard.html',
		controller:'hardLevel'
	})
	.when('/scores',{
		templateUrl:'modules/scores/score.html',
    controller:'scoreCtrl'
	})
	.otherwise({redirectTo:"/splash"});
});


app.service("scoreService",function(){
	 this.cscore='';
});
