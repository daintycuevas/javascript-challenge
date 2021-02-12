// from data.js
var ufoData = data;

// YOUR CODE HERE!

// Create variable for ufo-table
var ufoTable = d3.select("#ufo-table");

console.log(data);

// Create function to populate values into HTML
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = ufoTable.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// Create variable for button
var button = d3.select("#button");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
}

// Create function to populate values into HTML
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = ufoTable.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
// console.log(people);

//   var filteredData = people.filter(person => person.bloodType === inputValue);

//   console.log(filteredData);