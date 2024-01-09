import getStudentsByLocation from './2-get_students_by_loc';

function updateStudentGradeByCity(studentList, city, newGrades) {
  const students = getStudentsByLocation(studentList, city);

  return students.map((student) => {
    const matchingGrades = newGrades.find((stud) => stud.studentId === student.id);
    return {
      ...student,
      grade: matchingGrades ? matchingGrades.grade : 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
