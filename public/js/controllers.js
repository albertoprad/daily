var appControllers = angular.module('appControllers', []);


function TeamCtrl ($scope, $http, teamPromise) {
	console.log('TeamCtrl', teamPromise.data);
	$scope.team = teamPromise.data;

	$http.get('/members.json').success(function (data) {
		console.log('members...');
		$scope.members = data;
	});
};

appControllers.controller('TeamCtrl', TeamCtrl);