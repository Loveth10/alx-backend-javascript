interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student: Student = {
  firstName: 'loveth',
  lastName: 'okebe',
  age: 26,
  location: 'Lagos',
};
const student1 = {
  firstName: 'Adah',
  lastName: 'salome',
  age: 24,
  location: 'kaduna',
};
const studentsList: Student[] = [];
studentsList[0] = student;
studentsList[1] = student1;
let table = document.createElement('table');

for (const student of studentsList) {
  const row = document.createElement('tr');
  const tdFirstName = document.createElement('td');
  const tdLocation = document.createElement('td');
  tdFirstName.textContent = student.firstName;
  tdLocation.textContent = student.location;
  row.appendChild(tdFirstName);
  row.appendChild(tdLocation);
  table.append(row);
}
document.querySelector('body').append(table);
