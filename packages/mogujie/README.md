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
