const somePromise = new Promise((resolve, reject) => {
  resolve('Resolved babe');
  reject('Unable to fulfill promise');

});

somePromise.then((message) => {
  console.log(message);
}, (error) => {
  console.log(error);
});

// const hof = (callback) => {
//   const x = 2;
//   setTimeout(() => {
//     callback(2);
//   },1500);
//
// }
//
// hof((x) => {
//   console.log(x*x*x);
// });


console.log('Async test');
