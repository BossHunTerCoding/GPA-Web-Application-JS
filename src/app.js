document.getElementsByClassName('btn')[0].addEventListener('click', () => {
  const blockElements = document.getElementsByClassName('block');
  const lastBlockElement = blockElements[blockElements.length - 1];
  const clonedBlockElement = lastBlockElement.cloneNode(true); // Add subject
  const clonedInputs = clonedBlockElement.querySelectorAll('input, select');

  clonedInputs.forEach(input => {
    input.value = ''; // Reset the value to the default
  });

  document.getElementsByClassName('inner-box')[0].appendChild(clonedBlockElement);
});

document.getElementsByClassName('outer-box')[0].addEventListener('change', () => {
  document.getElementById('gpa').textContent = getTotal() == 'NaN' ? 'GPA' : getTotal();
});

function getTotal() {
  const units = document.getElementsByClassName('units');
  const grades = document.getElementsByClassName('grade-select');
  var gradeTotal = 0;
  var sum = 0;
  //Calculate GPA
  for (var i = 0; i < units.length; i++) {
    var unit = parseFloat(units[i].value || 0);
    var grade = parseFloat(grades[i].value || 0);
    if (!isNaN(unit) && !isNaN(grade)) {
      gradeTotal += unit;
      sum += grade * unit;
    }
  }

  return (sum / gradeTotal).toFixed(2);
}