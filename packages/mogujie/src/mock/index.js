import Mock from "mockjs";

Mock.setup({
  timeout: "300-600",
});

Mock.mock("/api/user", "get", getUser);

function getUser() {
  return Mock.mock({
    "data|30": [
      {
        name: "@cname",
        city: "@city",
        "age|2": "@integer(1,9)",
      },
    ],
    status: "200",
    msg: 请求成功,
  });
}

// 使用 Mock
// var Mock = require('mockjs')

// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// })
// // 输出结果
console.log(JSON.stringify(getUser(), null, 4));
