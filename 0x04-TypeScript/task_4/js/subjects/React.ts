namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}
	export class React extends Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for React';
		}

		getAvailableTeacher() {
			if (!this.teacher || this.teacher.experienceTeachingReact <= 0)
				return `No available teacher`;
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}