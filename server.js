var json2xls = require('json2xls');
const fs = require("fs")//npm install fs
var rawFile = fs.readFileSync("./datas.json")//dir of your json file as param
var raw = JSON.parse(rawFile)
console.log(raw)
var xls = json2xls(raw);

fs.writeFileSync('data.xlsx', xls, 'binary');
