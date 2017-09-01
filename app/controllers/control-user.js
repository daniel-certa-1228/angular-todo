"use strict";
// console.log( "control-user.js" );
app.controller("userCtrl", function ($scope, $window, userFactory, $location) {
	console.log( "Yo userCtrl is loaded" );

	$scope.loginGoogle = () => {
		console.log( "you clicked on google" );

		userFactory.authWithProvider()
		.then((result) => {
			let user = result.user.uid;
			$location.path("/task-list");
			$scope.apply();
		}).catch((error) => {
			console.log( "error with google" );
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log( "error", errorCode, errorMessage );
		});
	};


});