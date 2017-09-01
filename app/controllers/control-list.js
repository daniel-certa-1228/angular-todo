"use strict";
// console.log( "control-list.js" );
/*
    handle data and functionality needed in list.html
    using todoFactory and userFactory to interact with the database
 */
app.controller("listCtrl", function($scope, todoFactory, userFactory) {

	$scope.tasks = [];

    const showAllTasks = function(){
    	todoFactory.getAllTasks()
    	.then((tasks) => {
    		console.log( "showAllTasks from promise", tasks );
    		$scope.tasks = tasks;
    	});
    };

    
    const deleteTask = function(){

    };

    
    $scope.toggleDoneTask = function(obj){
    	console.log( "toggle", obj );
    	//ternary is backwards because angular is changing the DOM before the the database call
    	let status = obj.isCompleted ? true : false;
    	let tempObj = {isCompleted:status};
    	todoFactory.editTask(obj.id, tempObj)
    	.then(() => {
    		console.log( "then is updated" );
    		showAllTasks();
    	});
    };

    showAllTasks();
});