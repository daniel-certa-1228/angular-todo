"use strict";
// console.log( "control-add-task.js" );
/*
    provide the data and functionality to handle the creation of new tasks
    using todoFactory to write to the database
 */

app.controller("addTaskCtrl", function($scope, todoFactory, $location, userFactory){

	$scope.title = "New Task";
	$scope.submitButtonText = "Add New Task";
	let user = userFactory.getCurrentUser();

	$scope.task = {
		assignedTo: "",
		dependecies: "",
		dueDate: "",
		urgency: "",
		task: "",
		isCompleted: false,
		location: "",
		uid: user
	};

    $scope.submitTask = function(){
    	todoFactory.addTask($scope.task)
    	.then((data) => {
    		$location.url("/item-list");
    	});
    };

});