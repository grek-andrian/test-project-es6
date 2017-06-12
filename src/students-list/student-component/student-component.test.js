import StudentController  from './student-controller.js';
let expect = chai.expect;

describe('StudentController', () => {

    let ctrl, $MockFirebaseArray, studentsList, $MockModal;

        beforeEach(() => {

            $MockFirebaseArray = () => {
                return studentsList;
            };
            studentsList =  [1,2,3,4,5,6];

            ctrl = new StudentController(
                $MockFirebaseArray, $MockModal
                )
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

        // it('should add new student to studentList', () => {
        //     let newStudent = {"firstname": "Ivan", "lastname": "Franko"}
        //     ctrl.saveStudent(newStudent);
        //     expect(ctrl.groupsList).to.include(newStudent);
        // });


        // it('should open modal after click button New student', () => {
        //     ctrl.newStudent();
        //     expect(ctrl.myModal).to.have.an('object');
        // });

});

