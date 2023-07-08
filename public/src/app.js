const blockElements = document.getElementsByClassName('block');
let gpa = document.getElementById('gpa');

document.getElementsByClassName('outer-box')[0].addEventListener('change', () => {
  // Update GPA
  gpa.textContent = getTotal() == 'NaN' ? 'GPA' : getTotal();
});

function addForm() {
  const lastBlockElement = blockElements[blockElements.length - 1];
  const clonedBlockElement = lastBlockElement.cloneNode(true); // Clone the last block element
  const clonedInputs = clonedBlockElement.querySelectorAll('input, select');

  clonedInputs.forEach(input => {
    input.value = ''; // Reset the value to the default
  });

  document.getElementsByClassName('inner-box')[0].appendChild(clonedBlockElement); // Append the cloned block element
}

function removeForm(button) {
  const blockElement = button.parentNode; // Get the parent block element
  if (blockElements.length === 1) return; // Check if there's only one block element left
  blockElement.remove(); // Remove the block element
  // Update GPA
  gpa.textContent = getTotal() == 'NaN' ? 'GPA' : getTotal();
}

function getTotal() {
  const units = document.getElementsByClassName('units');
  const grades = document.getElementsByClassName('grade-select');
  let gradeTotal = 0;
  let sum = 0;
  // Calculate GPA
  for (let i = 0; i < units.length; i++) {
    let unit = parseFloat(units[i].value || 0);
    let grade = parseFloat(grades[i].value || 0);
    if (!isNaN(unit) && !isNaN(grade)) {
      gradeTotal += unit;
      sum += grade * unit;
    }
  }

  return (sum / gradeTotal).toFixed(2);
}