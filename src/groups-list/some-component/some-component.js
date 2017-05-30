export default class SomeComponent {



    increment() {
        this.counter++;
    }

    constructor($firebaseArray) {
        var ref = firebase.database().ref().child("groups");
        this.groupsList = $firebaseArray(ref);
    }


}


/*
angular.module('groupsList').controller('groupsController', function groupsController($firebaseArray) {
        var ref = firebase.database().ref().child("groups");
        this.groupsList = $firebaseArray(ref);

        this.clickedGroup = {};

        this.message = "";

        this.clearMessage = function() {
            this.message = "";
        };

        this.selectGroup = function (group) {
            this.clickedGroup = group;
        };

        this.updateGroup = function() {
            var record = this.groupsList.$getRecord(this.clickedGroup.$id);
            this.groupsList.$save(record).then(function (ref) {
                console.log("edited record with id " + ref.key);
            });
            this.message = "The group successfully updated";
        };

        this.deleteGroup = function() {
            this.groupsList.$remove(this.clickedGroup);
            this.message = "The group successfully deleted";
        };

        this.saveGroup = function() {
            this.groupsList.$add({
                name: this.newGroup.name
            }).then(function (ref) {
                console.log("added record with id " + ref.key);
            });
            this.newGroup = {};
            this.message = "The new group successfully added";
        }
    }
);
*/
