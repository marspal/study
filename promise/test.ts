import Promise from "./index";

let promise = new Promise((resolve, reject) => {
  // resolve("成功了");
  // reject("失败了");
  setTimeout(() => {
    resolve("成功了");
  }, 5);
});

// promise.then((value) => { 
//   console.log("thenSuess", value);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("asdas");
//     }, 5);
//   });
//   // return "OKKKK";
// }, (error) => {
//   console.log("thenSuess", error);
//   return error;
// }).then((value) => { 
//   console.log("thenSuess1", value);
//   return "OKKKK";
// }, (error) => {
//   console.log("thenError1", error);
//   return error;
// });

// console.log("end");

const promise1 = new Promise((resolve, reject) => {
  console.log("第一个Promise的同步区域");
  setTimeout(() => {
    resolve("setTimeout第1个Promise");
  });
});

const promise2 = new Promise((resolve, reject) => {
  console.log("第二个Promise的同步区域");
  setTimeout(() => {
    resolve("setTimeout第2个Promise");
  });
});

const promise3 = new Promise((resolve, reject) => {
  console.log("第三个Promise的同步区域");
  setTimeout(() => {
    resolve("setTimeout第3个Pro mise");
  });
});

Promise.all([promise1, promise2, promise3]).then(val => {
  console.log(val);
}, (err) => {
  console.log(err);
});

