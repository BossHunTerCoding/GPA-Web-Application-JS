const blockElements = document.getElementsByClassName('block');
const gpa = document.getElementById('gpa');

document.getElementById('outer-box').addEventListener('change', () => {
  // Update GPA
  gpa.textContent = calGPA() == 'NaN' ? 'GPA' : calGPA();
});

function addForm() {
  const lastBlockElement = blockElements[blockElements.length - 1];
  const clonedBlockElement = lastBlockElement.cloneNode(true); // Clone the last block element
  const clonedInputs = clonedBlockElement.querySelectorAll('input, select');

  clonedInputs.forEach(input => {
    input.value = ''; // Reset the value to the default
  });

  document.getElementById('inner-box').appendChild(clonedBlockElement); // Append the cloned block element
}

function removeForm(button) {
  const blockElement = button.parentNode; // Get the parent block element
  if (blockElements.length === 1) return; // Check if there's only one block element left
  blockElement.remove(); // Remove the block element
  // Update GPA
  gpa.textContent = calGPA() == 'NaN' ? 'GPA' : calGPA();
}

function calGPA() {
  const units = document.getElementsByClassName('units');
  const grades = document.getElementsByClassName('grade-select');
  let gradeTotal = 0;
  let sum = 0;
  // Calculate grade
  for (let i = 0; i < units.length; i++) {
    let unit = parseFloat(units[i].value || 0);
    let grade = parseFloat(grades[i].value || 0);
    if (!isNaN(unit) && !isNaN(grade)) {
      gradeTotal += grade * unit;
      sum += unit;
    }
  }

  return (gradeTotal / sum).toFixed(2);
}