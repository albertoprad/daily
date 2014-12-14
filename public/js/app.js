var app = angular.module('dailyApp', [
	'ngRoute',
	'appControllers'
]);

app.run(function ($rootScope) {
	$rootScope.$on('$routeChangeStart', function () {
		console.log('route change start');
	});

	$rootScope.$on('$routeChangeError', function () {
		console.log('route change error');
	});

	$rootScope.$on('$routeChangeSuccess', function () {
		console.log('route change success');
	});

	console.log('listo!');
});

app.config(['$routeProvider', function($routeProvider) {
		console.log('ruta team');
	$routeProvider.
		when('/team', {
			templateUrl: '/html/team.html',
			controller: 'TeamCtrl'
		});
}]);