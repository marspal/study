import Mock from "mockjs";

export function getUser() {
  return Mock.mock({
    "data|30": [
      {
        name: "@cname",
        city: "@city",
        "age|2": "@integer(1,9)",
      },
    ],
    status: "200",
    msg: "请求成功",
  });
}

export default {
  getUser,
};
