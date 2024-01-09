function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrades = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: matchingGrades ? matchingGrades.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
