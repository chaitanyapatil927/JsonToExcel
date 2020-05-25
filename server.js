var json2xls = require('json2xls');
const fs = require("fs")//npm install fs
var rawFile = fs.readFileSync("./datas.json")//dir of your json file as param
var raw = JSON.parse(rawFile)
console.log(rawFile)
console.log(raw)
var xls = json2xls(raw,{
    fields : {
        styleNumber:'Number',
        images:{
            main:'string',
            white:'string',
            yellow:'string',
            rose:'string'
        },
        diamondWeight:'Number',
        diamondCount:'Number',
        goldWeight:'Number',
        designDetails:{
            new:Boolean,
            featured:Boolean,
            highestSelling:Boolean,
            fancyDiamond:Boolean
        },
        company:'string',
        favouriteCount:'Number'}
 });

fs.writeFileSync('data.xlsx', xls, 'binary');
