let datafile = require('/Users/SmarakPattnaik/Documents/Videos.json');
console.log(datafile.data[0].name);

// const parseJsonAsyncFunc = jsonString => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(JSON.parse(jsonString));
//     });
//   });
// }

// let datafile = require('/Users/SmarakPattnaik/Documents/tags.json');
// parseJsonAsyncFunc(data).then(jsonData => console.log(jsonData.name));