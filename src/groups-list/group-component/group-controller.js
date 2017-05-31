class GroupController {
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
        this.groupsList.$save(record);
        this.message = "The group successfully updated";
    }

    deleteGroup() {
        this.groupsList.$remove(this.clickedGroup);
        this.message = "The group successfully deleted";
    }

    saveGroup() {
        this.groupsList.$add({
            name: this.newGroup.name
        });
        this.newGroup = {};
        this.message = "The new group successfully added";
    }
}


export default GroupController;
