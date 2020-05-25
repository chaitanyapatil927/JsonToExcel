var jsonexport = require('jsonexport');
const fs = require("fs")//npm install fs
var rawFile = fs.readFileSync("./datas.json")
var raw = JSON.parse(rawFile)
console.log(rawFile)
console.log(raw)




jsonexport(raw, {rowDelimiter: '\t'}, function(err, csv){
    if(err) return console.log(err);
    console.log(csv);
    fs.writeFileSync('data.xls', csv, 'binary');
})

