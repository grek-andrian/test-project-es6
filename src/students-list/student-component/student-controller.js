class StudentController {
    constructor($firebaseArray) {
        this.ref = firebase.database().ref().child("students");
        this.groupsList = $firebaseArray(firebase.database().ref().child("groups"));
        this.$firebaseArray =  $firebaseArray;
        this.studentsList = [];
        this.getStudentList();
    }

    getStudentList() {
        this.studentsList = this.$firebaseArray(this.ref);

    }

    clearMessage() {
        this.message = "";
    }

    selectStudent(student) {
        this.clickedStudent = student;
    }

    updateStudent() {
        let record = this.studentsList.$getRecord(this.clickedStudent.$id);
        this.studentsList.$save(record).then(function (ref) {
            console.log("edited record with id " + ref.key);
        });
        this.message = "The student info successfully updated";
    }

    deleteStudent() {
        this.studentsList.$remove(this.clickedStudent);
        this.message = "The student successfully deleted";
    }

    saveStudent() {
        this.studentsList.$add({
            firstname: this.newStudent.firstname,
            lastname: this.newStudent.lastname,
            email: this.newStudent.email,
            group: this.newStudent.group
        }).then(function (ref) {
            console.log("added record with id " + ref.key);
        })
        this.newStudent = {};
        this.message = "The new student successfully added";
    }
}

export default StudentController;
