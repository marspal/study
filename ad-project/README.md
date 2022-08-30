## 广告营销平台 2-6

### 第二章

2.1 完成前端工程初始化

`概述:` 基于 webpack5 + react 完成开发与生产环境配置

`packages:` babel7 相关、webpack5 相关、loader（文件预处理）相关、React 相关

![babel](./docs/babel.png) babel-core: 将新版的 JS 语法转换为 AST; plugin-transform-runtime: 新的 API polyfill, 解决大量重复 polyfill, helper; 从一个统一的地方引用 解决大量的变量污染问题; preset-env: 转化 ES 最新的语法，preset-react:转化 react jsx 语法

![webpack](./docs/webpack.png)

![loader](./docs/loader.png)

![react](./docs//react.png)

> 实战操作

1. package.json 配置
2. webpack 配置
3. 本地开发环境启动与打包验证

FAQ:

1. 使用 webpack5 时出现打包出错怎么办?

检查当前版本的配置规则是否正确, 调整某个依赖包的版本

2.2 eslint 相关配置

> 安装 Eslint 相关的包

eslint@7.13.0 eslint-config-airbnb@18.2.1 eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.21.5 eslint-plugin-react-hooks@4.2.0

> 编辑 Eslint 配置文件.eslintrc.json

2.3 ts 配置

1. 安装 ts 相关 npm 包
   typescript@4.0.5 @types/react @types/react-dom

@typescript-eslint/eslint-plugin @typescript-eslint/parser

2. 编辑 ts 配置文件 tsconfig.json

tsc --init

2.4 React Router 配置

![beforehash](./docs/before_hash.png)

1. 安装相关的包

react-router@5.2.0 react-router-config@5.1.1 @types/react-router-config@5.0.3 react-router-dom@5.2.0

npm install eslint-import-resolver-alias --save-dev 解决 eslintimport/no-unresolved (webpack、eslintrc aligns 不一致问题)

2.5 安装 antd

第三章

3.1 js css 文件的打包分离

1. 优点
   a: 减少单个文件的体积, 进而提升加载速度
   b: 相互独立修改，互补影响
   c: css 文件房在 index.html 文档顶部，让浏览器优先解析 css

2. 实战操作

a: 安装并配置 mini-css-extract-plugin
b: js 与 css 文件打包分离验证

3.2 面向 webpack 的本地 mock 方案

1. webpack-api-mocker
2. webpack-mock-server
3. 手写一个 mock 插件/中间件

核心原理: 启动 devServer -> 在 devServer 的 before 调用 mock 中间件 -> 执行 mock 中间件 -> 返回 mock 接口数据 -> 接口请求 -> 回到(执行 mock 中间件 )

mock 中间件的核心原理

执行 mock 中间件 -> 读取特定目录下用于 mock 数据的本地 json 文件 -> 解析 json 文件 -> 通过接口 response 返回上述 json 数据

```json
// json格式
{
  "code": 0,
  "msg": "success",
  "data": {
    "gray": true
  }
}
```

实现 mock 中间件、验证返回
