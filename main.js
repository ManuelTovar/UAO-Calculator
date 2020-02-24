function Operations() {

  var operation = document.getElementById("operation").value;
  console.log(operation);

  var numNumber1 = document.getElementById("nuNumber1").value;
  var numNumber2 = document.getElementById("nuNumber2").value;

  if (operation == "Sum") {
    console.log("Entro a suma");
    var nuResult = parseFloat(numNumber1) + parseFloat(numNumber2);
  } else if (operation == "Substraction") {
    console.log("Entro a resta");
    var nuResult = parseFloat(numNumber1) - parseFloat(numNumber2);
  } else if (operation == "Multiplication") {
    console.log("Entro a multiplicacion");
    var nuResult = parseFloat(numNumber1) * parseFloat(numNumber2);
  } else if (operation == "Division") {
    console.log("Entro a division");
    var nuResult = parseFloat(numNumber1) / parseFloat(numNumber2);
  } 

  console.log(nuResult.toFixed(2));

  document.getElementById("result").innerHTML = nuResult.toFixed(2);

}

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if ((charCode >= 48 && charCode <= 57 || charCode == 46 || charCode == 44))
    return true;

  return false;
}
