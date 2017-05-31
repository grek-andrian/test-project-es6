class SomeController {
    constructor($firebaseArray) {
        this.ref = firebase.database().ref().child("groups");
        this.$firebaseArray =  $firebaseArray;
        this.groupsList = [];
        this.getGroupList();
    }

    getGroupList() {
        this.groupsList = this.$firebaseArray(this.ref);

    }

    clearMessage() {
        this.message = "";
    }

    selectGroup(group) {
        this.clickedGroup = group;
    }

    updateGroup() {
        let record = this.groupsList.$getRecord(this.clickedGroup.$id);
        this.groupsList.$save(record).then(function (ref) {
            console.log("edited record with id " + ref.key);
        });
        this.message = "The group successfully updated";
    }

    deleteGroup() {
        this.groupsList.$remove(this.clickedGroup);
        this.message = "The group successfully deleted";
    }

    saveGroup() {
        this.groupsList.$add({
            name: this.newGroup.name
        }).then(function (ref) {
            console.log("added record with id " + ref.key);
        });
        this.newGroup = {};
        this.message = "The new group successfully added";
    }
}


export default SomeController;
