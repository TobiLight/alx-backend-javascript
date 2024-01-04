export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateName(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateLength(value);
  }

  get students() {
    return this._students;
  }

  set students(studentsArr) {
    this._students = this._validateStudents(studentsArr);
  }

  _validateName(name) {
    if (typeof name === 'string') {
      return name;
    }
    return this.name;
  }

  _validateLength(length) {
    if (typeof length === 'number') {
      return length;
    }
    return this.length;
  }

  _validateStudents(studentsArr) {
    if (Array.isArray(studentsArr) && studentsArr.every((student) => typeof student === 'string')) {
      return studentsArr;
    }
    return this.students;
  }
}
