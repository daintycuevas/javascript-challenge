var ufodata = data;

var ufotable = d3.select("#ufo-table");

console.log(data);

data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = ufotable.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});



