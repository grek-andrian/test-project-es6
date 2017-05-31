class StudentController {
    constructor($firebaseArray, $alert, $modal) {
        this.ref = firebase.database().ref();
        //this.groupsList = $firebaseArray(firebase.database().ref().child("groups"));
        this.$firebaseArray =  $firebaseArray;
        this.studentsList = [];
        this.getStudentList();
        this.groupsList = [];
        this.getGroupsList();
        this.$alert = $alert;
        this.$modal = $modal;
    }


    getStudentList() {
        this.studentsList = this.$firebaseArray(this.ref.child("students"));
    }

    getGroupsList(){
        this.groupsList = this.$firebaseArray(this.ref.child("groups"));
    }

    selectStudent(student) {
        this.clickedStudent = student;
    }

    updateStudent() {
        let record = this.studentsList.$getRecord(this.clickedStudent.$id);
        this.studentsList.$save(record);
        let myAlert = this.$alert({title: 'Success!',
            content: 'The student info successfully updated',
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true});
    }

    deleteStudent() {
        this.studentsList.$remove(this.clickedStudent);
        let myAlert = this.$alert({title: 'Success!',
            content: 'The student successfully deleted',
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true});
    }

    newStudent(){
      let myModal = this.$modal({
      templateUrl: 'modal.new.tpl.html',
      placement: 'center',
      container: '.container',
      show: true
    })
    }

    saveStudent() {
        this.studentsList.$add({
            firstname: this.newStudent.firstname,
            lastname: this.newStudent.lastname,
            email: this.newStudent.email,
            group: this.newStudent.group
        });
        this.newStudent = {};
        let myAlert = this.$alert({title: 'Success!',
            content: 'The new student successfully added',
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true});
    }
}

export default StudentController;
