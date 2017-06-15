import StudentController  from './student-controller.js';
let expect = chai.expect;

describe('StudentController', () => {

    let ctrl, $MockFirebaseArray, $alert, $modal;

        beforeEach(() => {

            $MockFirebaseArray = () => {
                return studentsList;
            };

            let studentsList =  [1,2,3,4,5,6];

            $alert = () => {};
            $modal = () => {};
            $modal = {
                hide: () => {}
            };
          //ctrl.$modal.hide = () => { };

            ctrl = new StudentController(
                $MockFirebaseArray, $alert, $modal
            );
        });

        it('Loads data correctly', function() {
            expect(ctrl).to.not.be.undefined;
        });

        it('should return the correct number student per page', () => {
            expect(ctrl.itemsPerPage).to.be.equal(5);
        });

        it('should be studentsList an array', () => {
            expect(ctrl.filteredStudents).to.be.an('array');
        });

        it('should be groupsList an array', () => {
            expect(ctrl.groupsList).to.be.an('array');
        });

        it('should array filtered students have length equal itemsPerPage', () => {
            expect(ctrl.filteredStudents.length).to.be.equal(ctrl.itemsPerPage);
        });

        it('should add new student to studentList', () => {
            ctrl.myModal = ctrl.$modal;
            ctrl.studentsList.$add = (student) => {
                ctrl.studentsList.push(student);
                return {
                    then: (success) => success({
                        studentsList: 'studentsList'
                    })
                };
            };
            let student = "newstudent";
            ctrl.saveStudent(student);
            expect(ctrl.studentsList).to.include(student);
        });

        it('should update student in studentList', () => {

        });

        it('should delete student from studentList', () => {

        });

});

