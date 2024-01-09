function getStudentsByLocation(studentsArr, city) {
  return studentsArr.filter((student) => student.location === city);
}

export default getStudentsByLocation;
