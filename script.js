document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const tableBody = document.getElementById('student-table-body');
  const searchInput = document.getElementById('search');

  let students = [];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('student-id').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;

    const student = { id: studentId, name, course, year };
    students.push(student);
    renderTable(students);
    form.reset();
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.course.toLowerCase().includes(query)
    );
    renderTable(filteredStudents);
  });

  function renderTable(data) {
    tableBody.innerHTML = '';
    data.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>${student.year}</td>
        <td>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
});
