// from data.js
var ufoData = data;

// YOUR CODE HERE!

// Create variable for ufo-table
var ufoTable = d3.select("#ufo-table");

console.log(data);

// Create function to populate values into HTML
function updateData() {
  data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = ufoTable.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

updateData(ufoData);

// Create variable for button
var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);

form.on("submit", runEnter);

// document.getElementById("form").addEventListener("submit", runEnter);

// Create event handlers 
function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#text");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(ufoData);

  var ufoSpotting = ufoData.filter(ufoSpot => ufoSpot.datetime === inputValue);
  console.log(ufoSpotting);
  
  var ufoTable = d3.select("#ufo-table");

  ufoTable.html("");

  ufoSpotting.forEach(function(ufoDate) {
    console.log(ufoDate);
    var row = ufoTable.append("tr");
    Object.entries(ufoDate).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
}






  
  