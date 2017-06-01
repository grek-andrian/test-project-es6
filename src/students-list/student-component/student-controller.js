class StudentController {
    constructor($firebaseArray, $alert, $modal) {
        this.ref = firebase.database().ref();
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
        let self = this;
        let controller = function () {
            this.clickedStudent = student;
            this.studentsList = self.studentsList;
            this.groupsList = self.groupsList;
            this.updateStudent = () => {
                self.updateStudent();
            }
            };

        this.myModal = this.$modal({
            controller: controller,
            controllerAs: "ctrl",
            templateUrl: '/src/students-list/student-component/modal.edit.tpl.html',
            placement: 'center',
            container: 'body',
            show: true
        });
    }

    updateStudent() {
        let record = this.studentsList.$getRecord(this.clickedStudent.$id);
        this.studentsList.$save(record);
        this.myModal.hide();
        let myAlert = this.$alert({title: 'Success!',
            content: 'The student info successfully updated',
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true});
    }

    getStudent(student) {
        this.clickedStudent = student;
        let self = this;
        let controller = function () {
            this.clickedStudent = student;
            this.deleteStudent = () => {
                self.deleteStudent();
            }
        };

        this.myModal = this.$modal({
            controller: controller,
            controllerAs: "ctrl",
            templateUrl: '/src/students-list/student-component/modal.delete.tpl.html',
            placement: 'center',
            container: 'body',
            show: true
        });
        console.log(this.clickedStudent);
    }

    deleteStudent() {
        console.log(this.myModal);
        this.studentsList.$remove(this.clickedStudent).then(function(){
            console.log ("Deleted");
        }, function(error){
            console.log(error);
        });
        this.myModal.hide();
        let myAlert = this.$alert({title: 'Success!',
            content: 'The student successfully deleted',
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true});
    }

    newStudent(){
        this.myModal = this.$modal({
            controller: StudentController,
            controllerAs: 'students',
            templateUrl: '/src/students-list/student-component/modal.new.tpl.html',
            placement: 'center',
            container: 'body',
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
        console.log(this.myModal);
        this.myModal.hide();
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
