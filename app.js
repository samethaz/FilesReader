/**
 *Dosya icisindeki veriler consol ekranina yazdirilacaktir. 
 */
const fs = require('fs');
var data = fs.readFileSync('OrnekDosya.txt', 'utf-8');
console.log(data);
