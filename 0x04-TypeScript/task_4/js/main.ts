export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
	experienceTeachingC: 10,
	firstName: "John",
	lastName: "Doe"
};

console.log('C++');
cpp.setTeacher = cTeacher;
cpp.getRequirements();
cpp.getAvailableTeacher();

console.log('Java');
java.setTeacher = cTeacher;
java.getRequirements();
java.getAvailableTeacher();

console.log('React');
react.setTeacher = cTeacher;
react.getRequirements();
react.getAvailableTeacher();