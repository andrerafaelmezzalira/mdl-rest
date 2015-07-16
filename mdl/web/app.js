angular.module('app', [ 'ngRoute' ]).config(
		function($routeProvider) {
			$routeProvider.when(
					'/',
					{
						controller : 'ExampleController as exampleController',
						templateUrl : 'partials/index.html',
						resolve : {
							list : function($http) {
								return $http.get('/mdl/rest/example').then(
										function success(response) {
											console.log(response.data);
											return response.data;
										});
							}
						}
					}).when(
					'/peoples',
					{
						controller : 'PeopleController as peopleController',
						templateUrl : 'partials/people.html',
						resolve : {
							list : function($http) {
								return $http.get('/mdl/rest/example').then(
										function success(response) {
											console.log(response.data);
											return response.data;
										});
							}
						}
					}).otherwise({
				redirectTo : '/'
			});
		}).run(function($rootScope) {
	$rootScope.$on('$viewContentLoaded', function() {
		componentHandler.upgradeAllRegistered();
	});
}).controller('ExampleController', function(list) {
	var exampleController = this;
	exampleController.list = list;
}).controller('PeopleController', function(list) {
	var peopleController = this;
	peopleController.list = list;
});