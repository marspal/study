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

3.3 远程 mock

数据多人共享、接口可视化管理、接口可维护性好、代码维护成本低

实战操作

1. 本地安装 YApi (一款开源接口管理服务系统)
2. 基于 YApi 完成 mock 接口验证

3.4 前端工程性能优化

原因: 业务逻辑多样 -> 代码文件增多 -> 打包速度慢 -> 开发效率低;

how:

1. 找到影响性能的问题点(如何找)

a: 安装工程性能检测工具: speed-measure-webpack5-plugin
b: 使用工程性能检测工具完成性能(打包速度)检测
c: 对影响性能的关键点进行优化

2. 针对关键问题点制定合理的解决方案
3. 全面的回归验证

3.5 前端工程开发代码库的配置

更合适: 打包速度快、上手成本低、功能实现便捷

第四章

1.1 页面布局与组件设计原则

1. 一个页面应该做到合理的组件拆分, 避免在一个页面组件中实现所有样式与逻辑
2. 页面内部的各个业务组件应当做到低耦合、高内聚
3. 组件间的通信与状态管理有清晰的线路

组件分类与层级

页面组件 -> 业务组件 -> 基础组件

实战操作

1. 完成页面组件的布局

2. 完成业务组件的创建
