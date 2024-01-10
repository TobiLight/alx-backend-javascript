interface Student {
	firstName: string
	lastName: string
	age: number
	location: string
}

const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 29,
	location: 'Ikeja'
}

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 29,
	location: 'Magodo'
}

const studentsList = [student1, student2];

const table = document.createElement('table')
// Create thead element
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

// Create header cells
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "FirstName";
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);

thead.appendChild(headerRow);
table.appendChild(thead);

// Create tbody element
const tbody = document.createElement("tbody");
tbody.setAttribute("id", "studentTableBody");

studentsList.forEach(student => {
	// Create a new row
	const newRow = document.createElement("tr");

	// Create and append cells for first name and location
	const firstNameCell = document.createElement("td");
	firstNameCell.textContent = student.firstName;

	const locationCell = document.createElement("td");
	locationCell.textContent = student.location;

	newRow.appendChild(firstNameCell);
	newRow.appendChild(locationCell);

	// Append the new row to the tbody
	tbody.appendChild(newRow);
});

// Append tbody to the table
table.appendChild(tbody);

// Append the table to the body of the document
document.body.appendChild(table);