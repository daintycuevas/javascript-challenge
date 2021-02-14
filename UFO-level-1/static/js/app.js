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
var button = d3.select("#filter-btn");
var form = d3.select("#data-form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  var filteredDate = ufoData.filter(date => date.datetime === inputValue)

  console.log(filteredDate);
};
  