let selectRow = null;
// Function for submit and read the data filled by user in the particular forms-------------------
function onFormSubmit() {
  let formData = readFormData();
  if (selectRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}
// Function for Getting value from User------------------------------------------------------------
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["city"] = document.getElementById("city").value;
  formData["empid"] = document.getElementById("empid").value;
  formData["designation"] = document.getElementById("designation").value;
  return formData;
}

// Function for Inserting & Showing Record in Another Table------------------------------------------
function insertNewRecord(data) {
  let table = document
    .getElementById("empList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.city;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.empid;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.designation;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
}

// Function for Reseting the employee details forms------------------------------------------------
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("city").value = "";
  document.getElementById("empid").value = "";
  document.getElementById("designation").value = "";
  selectRow = null;
}
// Function for Editing the employee details record -----------------------------------------------

function onEdit(td) {
  selectRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectRow.cells[0].innerHTML;
  document.getElementById("city").value = selectRow.cells[1].innerHTML;
  document.getElementById("empid").value = selectRow.cells[2].innerHTML;
  document.getElementById("designation").value = selectRow.cells[3].innerHTML;
}

// Function for Update the employee details record-------------------------------------------------
function updateRecord(formData) {
  selectRow.cells[0].innerHTML = formData.name;
  selectRow.cells[1].innerHTML = formData.city;
  selectRow.cells[2].innerHTML = formData.empid;
  selectRow.cells[3].innerHTML = formData.designation;
}

// Function for Deleting the employee details record------------------------------------------------
function onDelete(td) {
  if (confirm("Are you want to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("empList").deleteRow(row.rowIndex);
    resetForm();
  }
}
