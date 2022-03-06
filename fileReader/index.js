var readLine = require("lei-stream").readLine;
const set = new Set();
let sum = 0;
const filename = "file1"
console.log(`${filename}文件读取中... `);
console.time('耗时');
readLine(`./${filename}.txt`).go(function (data, next){
  const arr = JSON.parse(data);
  sum += arr.length;
  for(let i = 0; i < arr.length; ++i){
    if(!!arr[i]) {
      set.add(arr[i])
    }
  }
  next();
}, function(){
  console.log('统计结束~~');
  console.log(`原始数据: ${sum} 条, 过滤后: ${Array.from(set).length} 条`);
  console.timeEnd('耗时')
});