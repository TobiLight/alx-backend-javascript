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
    this._validateName(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._validateLength(value);
  }

  get students() {
    return this._students;
  }

  set students(studentsArr) {
    this._validateStudents(studentsArr);
  }

  _validateName(name) {
    if (typeof name === 'string') {
      this._name = name;
      return this._name;
    }
    throw new TypeError('Name must be a string');
  }

  _validateLength(length) {
    if (typeof length === 'number') {
      this._length = length;
      return this._length;
    }
    throw new TypeError('Length must be a number');
  }

  _validateStudents(studentsArr) {
    if (Array.isArray(studentsArr) && studentsArr.every((student) => typeof student === 'string')) {
      this._students = studentsArr;
      return this._students;
    }
    throw new TypeError('Students must be an array');
  }
}
