import getListStudentIds from './1-get_list_student_ids';

function getStudentIdsSum(studentsArr) {
  const ids = getListStudentIds(studentsArr);
  return ids.reduce((accumulator, id) => accumulator + id);
}

export default getStudentIdsSum;
