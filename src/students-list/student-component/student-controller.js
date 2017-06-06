class StudentController {
    constructor($firebaseArray, $alert, $modal, $timeout) {
        this.ref = firebase.database().ref();
        this.$timeout = $timeout;
        this.$firebaseArray = $firebaseArray;
        this.studentsList = [];
        this.getStudentList();
        this.groupsList = [];
        this.getGroupsList();
        this.$alert = $alert;
        this.$modal = $modal;
        this.itemsPerPage = 5;
        this.currentPage = 1;
        this.filteredStudents = [];
        this.studentsToDisplay();
    }

    studentsToDisplay() {
      let begin = ((this.currentPage - 1) * this.itemsPerPage);
      let end = begin + this.itemsPerPage;
      this.filteredStudents = this.studentsList.slice(begin, end);
        if (!this.filteredStudents.length) {
            this.$timeout(()=>{
                this.studentsToDisplay();
            })
        }
    }

    pageChanged() {
      this.studentsToDisplay();
    }

    getStudentList() {
       this.studentsList = this.$firebaseArray(this.ref.child("students"));
    }

    getGroupsList(){
        this.groupsList = this.$firebaseArray(this.ref.child("groups"));
    }

    openMyModal(controller, template){
        return this.$modal({
            controller: controller,
            controllerAs: "ctrl",
            templateUrl: template,
            placement: 'center',
            container: 'body',
            show: true
        })
    }

    openMyAlert(content){
        return this.$alert({
            title: 'Success!',
            content: content,
            duration: 5,
            container:'.alert-strap',
            placement: 'top',
            type: 'info',
            show: true
        })
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
        this.template = '/src/students-list/student-component/modal.edit.tpl.html';
        this.myModal = this.openMyModal(controller, this.template);
    }

    updateStudent() {
        let record = this.studentsList.$getRecord(this.clickedStudent.$id);
        this.studentsList.$save(record);
        this.myModal.hide();
        this.myAlert = this.openMyAlert('The student info successfully updated');
    }

    getStudent(student) {

        this.clickedStudent = student;
        let self = this;
        let controller = function () {
            this.clickedStudent = student;
            this.studentsToDisplay = self.studentsToDisplay();
            this.deleteStudent = () => {
                self.deleteStudent();
            }
        };
        this.template = '/src/students-list/student-component/modal.delete.tpl.html';
        this.myModal = this.openMyModal(controller, this.template);
    }

    deleteStudent() {
        this.studentsList.$remove(this.clickedStudent).then(()=>{
                this.studentsToDisplay();
            },
            function(error){console.log(error);});
        this.myModal.hide();
        this.myAlert = this.openMyAlert('The student successfully deleted');
    }

    newStudent(){
        this.newStudentMy ={};
        let self = this;
        let controller = function () {
            this.studentsList = self.studentsList;
            this.groupsList = self.groupsList;
            this.newStudentMy = self.newStudentMy;
            this.studentsToDisplay = self.studentsToDisplay();
            this.saveStudent = (obj) => {
                self.saveStudent(obj);
            }
        };
        this.template = '/src/students-list/student-component/modal.new.tpl.html';
        this.myModal = this.openMyModal(controller, this.template);
    }

    saveStudent(obj) {
        this.studentsList.$add(obj).then(()=>{
                this.studentsToDisplay();
                },
            function(error){console.log(error);});
        this.myModal.hide();
        this.myAlert = this.openMyAlert('The new student successfully added');
    }
}

export default StudentController;
