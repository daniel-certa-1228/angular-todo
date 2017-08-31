"use strict";
// console.log( "factory-todo.js" );
/*
    provide the basic crud interactions with firebase
*/

app.factory("todoFactory", function($q, $http, FBCreds){

    const getAllTasks = function(){
        let tasks = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/items.json`)
            .then((itemObject) => {
                let itemCollection = itemObject.data;
                console.log( "itemCollection", itemCollection );
                Object.keys(itemCollection).forEach((key) => {
                    itemCollection[key].id = key;
                    tasks.push(itemCollection[key]);
                });
                resolve(tasks);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addTask = function(){

    };

    const editTask = function() {

    };

    const deleteTask = function(){

    };

    const getSingleTask = function(){

    };
    return{getAllTasks, addTask, editTask, deleteTask, getSingleTask};
});