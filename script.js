function compute() {
  // This section gets all of the elements from the html
  var principal = document.getElementById("principal").value;
  // This logic validates that the principal amount is a rational number, and resets the window focus if it isn't
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
  }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  var result = document.getElementById("result");

  // This section applies the retrieved and calculated values to the output location
  result.innerHTML = `<br>\
    If you deposit <span style="background-color: #ffff00">${principal}</span>,<br>\
    at an interest rate of <span style="background-color: #ffff00">${rate}</span>.<br>\
    You will receive an amount of <span style="background-color: #ffff00">${interest}</span>,<br>\
    in the year <span style="background-color: #ffff00">${year}</span><br>`;

  // Returns true on success
  return true;
}

function updateRate() {
  // This function gets the rate value and updates the span directly after it every time it gets changed
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
