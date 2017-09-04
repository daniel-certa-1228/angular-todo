"use strict";
// console.log( "factory-user.js" ); 

/*
    provide the basic auth functionality for firebase
 */

app.factory("userFactory", function($q, $http){

    let currentUser = null;

    const isAuthenticated = function (){
        console.log("userFactory: isAuthenticated");
        return new Promise ( (resolve, reject) => {
            firebase.auth().onAuthStateChanged( (user) => {
                if (user){
                    currentUser = user.uid;
                    console.log("user", user.uid);
                    resolve(true);
                }else {
                    resolve(false);
                }
            });
        });
    };

    const getCurrentUser = function(){
        return currentUser;
    };


    const logIn = function(userObj){
        return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
        .catch( function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log( "error", errorCode, errorMessage );
        });
    };


    const logOut = function(){
        console.log( "logout user" );
        return firebase.auth().signOut();
    };


    const register = function(userObj){
        return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
        .catch( function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log( "error", errorCode, errorMessage );
        });

    };

    // const isAuthenticated = function(){

    // };

    let provider = new firebase.auth.GoogleAuthProvider();

    let authWithProvider= function(){
        return firebase.auth().signInWithPopup(provider);
    };

    return {getCurrentUser, logIn, logOut, register, isAuthenticated, authWithProvider};
});