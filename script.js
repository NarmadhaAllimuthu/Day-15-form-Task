document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender");
    var selectedGender = gender.options[gender.selectedIndex].value;
    
 
    var foodSelect = document.getElementById("food");
var selectedFood = "";
for (var i = 0; i < foodSelect.options.length; i++) {
    if (foodSelect.options[i].selected) {
        selectedFood += foodSelect.options[i].value + ", ";
    }
}


selectedFood = selectedFood.slice(0, -2);
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    var cells = [];
    for (var i = 0; i < 8; i++) {
        cells[i] = newRow.insertCell(i);
    }
    cells[0].innerHTML = fname;
    cells[1].innerHTML = lname;
    cells[2].innerHTML = address;
    cells[3].innerHTML = pincode;
    cells[4].innerHTML = gender;
    cells[5].innerHTML = selectedFood;
    cells[6].innerHTML = state;
    cells[7].innerHTML = country;

    document.getElementById("myForm").reset();
});


