namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}
	export class Java extends Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for React';
		}

		getAvailableTeacher() {
			if (!this.teacher || this.teacher.experienceTeachingJava <= 0)
				return `No available teacher`;
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}