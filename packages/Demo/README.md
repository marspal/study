# mogujie

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Vue3 全家桶 (Vue3, Vuex, Vue-Rounter, Axios)

### 本地 MockJS RAP2、Easy-Mock

### OOCSS

> OO: 面向对象

1. 容器与内容分离
2. 结构(基础对象)与皮肤分离
3. 面向设计开发

应用: Grid 栅格系统、布局组件等

### BEM

块(Block)、元素(Element\_\_)、修饰符(Modifier)不单独存在

作用: 命名规范、让页面结构清晰
进阶版的 OOCSS

```html
<div class="menu menu--style1">
  <div class="menu__tab menu__tab--style1">tab1</div>
  <div class="menu__tab menu__tab--style1">tab1</div>
  <div class="menu__tab menu__tab--style1">tab1</div>
  <div class="menu__tab menu__tab--style1">tab1</div>
</div>

<div class="menu">
  <div class="menu__tab menu__tab--style2">tab1</div>
  <div class="menu__tab menu__tab--style2">tab1</div>
  <div class="menu__tab menu__tab--style3">tab1</div>
  <div class="menu__tab menu__tab--style4">tab1</div>
</div>
```

### SMACSS

分类: Base(normalize.css)、Layout、Modules、State、Theme
好处: 易维护、易复用、易扩展
命名规范: .l-header、.is-hidden、.theme-nav

### IT CSS

                                                                            modules

分层: 七层 Settings -> Tools -> Generic(normalize.css) -> Base(a.css) -> Objects -> Components -> Trumps(高权重 !important)
与 SMACSS 区别: 层次分得更细

### ACSS

一个样式属性就是一个类

example

```css
.float-right {
  float: right;
}
```

好处: 极强的复用性、维护成本低
坏处: 破坏了 CSS 命名的语义化

### CSS 架构方案

- 由 ITCSS、BEM、ACSS 去打造一套 CSS 架构方案

- settings

公共变量: 颜色、边框、字体大小、阴影、层级

- Tools 层
  引入 SassMagic 工具库 提供了常见的 mixin function

- Base 层代码实现

1. Generic: 引入 normalize.css 重置浏览器默认样式 (npm i normalize.css); 并在 main 中引入
2. Base 对各类样式基础进行补充

- Components 层代码实现

1. OOCSS -> BEM(进阶版 OOCSS)
2. 经典组件: 栅格 Row Col、布局 Layout、Header、Main、footer、aside
3. 自定义组件

- ACSS 层代码实现

1. 让样式极限复用
2. 解决 Acss 无语义化缺点: 属性选择器
3. Settings 与 Acss 关系

```css
.fl {
  float: left;
}
.fr {
  float: right;
}


<div fl p-4></div>
<style>
  [fl] {
    float: left;
  }
  [p-4] {
    padding: 8px;
  }
  [fz12] { // 存在多次的时候 才有理由做成acss属性
    font-size: 12px;
  }
  [color333] {
    color: #333;
  }
</style>
```

关系: 可以来源于 setting 下的变量

- theme 层相关

  `实现: `只要加一个属性选择器就可以了; 属性提升到 html 标签

### 本地 mockJS

- 几种方式

1. Rap 编写接口文档(淘宝), Mock 数据，后端维护
2. Swagger 注解生成文档, Mock 数据， 后端维护
3. 本地 MockJS, 前端维护

- MockJs 搭建 (Restful 接口)

### 响应式布局

- 方案: REM、VW、REM + VW

// todo: 3-4

流程中心待做:

1. 编辑器 1.0
2. 业务组件完善
3. 监控 rrweb
4. form-sdk pc 端 h5 端
5. 动态表单接入 SDK
6. 流程自动化测试
