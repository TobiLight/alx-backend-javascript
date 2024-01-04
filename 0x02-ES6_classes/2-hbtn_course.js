export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
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
    throw new TypeError('Name must be a string');
  }

  _validateLength(length) {
    if (typeof length === 'number') {
      return length;
    }
    throw new TypeError('Length must be a number');
  }

  _validateStudents(studentsArr) {
    if (Array.isArray(studentsArr) && studentsArr.every((student) => typeof student === 'string')) {
      return studentsArr;
    }
    throw new TypeError('Students must be an array');
  }
}
