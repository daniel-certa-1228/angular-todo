"use strict";
// console.log( "control-user.js" );
app.controller("userCtrl", function ($scope, $window, userFactory, $location) {
	console.log( "Yo userCtrl is loaded" );

	$scope.account = {
		email: "",
		password: ""
	};

	$scope.register = () => {
		console.log( "you clicked register" );
		userFactory.register({
			email: $scope.account.email,
			password: $scope.account.password
		})
		.then((userData) => {
			console.log( "User Data new user", userData );
			$scope.logIn();
		}, (error) => {
			console.log( "error", error );
		});
	};

	$scope.logIn = () => {
		userFactory.logIn($scope.account)
		.then( () => {
			$window.location.href="#!/task-list";
		});
	};

	$scope.loginGoogle = () => {
		console.log( "you clicked on google" );

		userFactory.authWithProvider()
		.then((result) => {
			let user = result.user.uid;
			$location.path("/task-list");
			$scope.$apply();
		}).catch((error) => {
			console.log( "error with google" );
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log( "error", errorCode, errorMessage );
		});
	};


});