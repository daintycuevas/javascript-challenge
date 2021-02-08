var ufodata = data;

var ufotable = d3.select("ufo-table");

console.log(ufodata);

ufodata.forEach(function(ufoReport) {
  console.log(ufoReport);
});

ufodata.append('imagefile', file);

