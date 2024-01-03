export default function createIteratorObject(report) {
  let currDepartmentIndex = 0;
  let currEmployeeIndex = 0;
  const reportKeys = Object.keys(report);
  const departments = report[reportKeys[currDepartmentIndex]];

  return {
    next() {
      if (currDepartmentIndex < Object.values(departments).length) {
        const employees = Object.values(departments);
        if (currEmployeeIndex < [...employees[currDepartmentIndex]].length) {
          const employee = [...employees[currDepartmentIndex]][currEmployeeIndex];
          const result = { value: employee, done: false };
          currEmployeeIndex += 1;
          return result;
        }
        currDepartmentIndex += 1;
        currEmployeeIndex = 0;
        return this.next();
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
