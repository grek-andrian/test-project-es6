class GroupController {
    constructor($firebaseArray, $alert) {
        this.ref = firebase.database().ref().child("groups");
        this.$firebaseArray =  $firebaseArray;
        this.groupsList = [];
        this.getGroupList();
        this.$alert = $alert;
    }

    getGroupList() {
        this.groupsList = this.$firebaseArray(this.ref);

    }

    selectGroup(group) {
        this.clickedGroup = group;
    }

    updateGroup() {
        let record = this.groupsList.$getRecord(this.clickedGroup.$id);
        this.groupsList.$save(record);
        let myAlert = this.$alert({title: 'Success!',
            content: 'The group successfully updated',
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true});
        //this.message = "The group successfully updated";
    }

    deleteGroup() {
        this.groupsList.$remove(this.clickedGroup);
        let myAlert = this.$alert({title: 'Success!',
            content: 'The group successfully deleted',
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true});
        //this.message = "The group successfully deleted";
    }

    saveGroup() {
        this.groupsList.$add({
            name: this.newGroup.name
        });
        this.newGroup = {};
        let myAlert = this.$alert({title: 'Success!',
            content: 'The new group successfully added.',
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true});
        //this.message = "The new group successfully added";
    }
}

export default GroupController;
