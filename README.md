<div align="center">
	<h3>vue-markdown-menu-bar</h3>
	<p align="center">
	    <a href="https://vuejs.org/" target="_blank">
	        <img src="https://img.shields.io/badge/vue.js-vue3.x-green" alt="vue">
	    </a>
		<a href="https://www.tslang.cn/" target="_blank">
	        <img src="https://img.shields.io/badge/typescript-%3E4.0.0-blue" alt="typescript">
	    </a>
    <a href="https://github.com/Acmenlei/vue-markdown-menu-bar.git" target="_blank">
	        <img src="https://img.shields.io/badge/markdown-menu-yellow" alt="markdown-menu">
	    </a>
	</p>
	<p>&nbsp;</p>
</div>

## 介绍
基于`Vue3 + ts`的动态生成侧边栏导航组件，开箱即用，需要注意的是，本插件暂不提供`markdown`解析功能(后续可能会添加)，需要您进行解析后将`html`所在的容器传递给我，详情请见`VueMarkdownMenuBar`组件`Props`说明。

## 安装
```shell
npm install vue-markdown-menu-bar
```
or
```shell
yarn add vue-markdown-menu-bar
```
or
```shell
pnpm install vue-markdown-menu-bar
```

## 使用：
1.全局注册(main.ts)
```ts
import VueMarkdownMenuBar from "vue-markdown-menu-bar"
createApp(App).use(VueMarkdownMenuBar).mount('#app')
```

2.vue文件中单独引入(xxx.vue)：

```html
<script setup lang="ts">
  import { VueMarkdownMenuBar } from "vue-markdown-menu-bar"
</script>
```
3.在模板中使用
- 我们需要给`VueMarkdownMenuBar`组件传入一个需要解析的容器，它会自动将我们的标题元素解析出来，并自动生成导航栏，开箱即用
```html
<template>
  <div class="body">
    <h1>我是h1标题</h1>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    ...
    <p>17</p>
    <p>18</p>
    <p>22</p>
    <p>23</p>
    <p>24</p>
    <h2>我是h2标题</h2>
    <p>25</p>
    <p>26</p>
  </div>
  <VueMarkdownMenuBar body=".body" width="200px"/>
</template>
```
## VueMarkdownMenuBar组件Props：

| property name | type             | default value | meaning                                                      |
| ------------- | ---------------- | ------------- | ------------------------------------------------------------ |
| body          | String           | 必须传递      | 需要解析的HTML容器，请传递 class 或 id                       |
| width         | String ｜ Number | 必须传递      | 设置整个VueMarkdownMenuBar容器的宽度，可以为百分比，也可为数值 |

## VueMarkdownMenuBar组件Events：

| event Name    | parmas                                                       | meaning                                     |
| ------------- | ------------------------------------------------------------ | ------------------------------------------- |
| @MenuBarClick | 该钩子函数拥有一个对象参数，你可以获取到它们：当前点击的MenuBarItem | 点击导航栏之后你可以获取到点击的MenuBarItem |

## 可选主题色
- dark
- lightgreen
> 只需引入styles文件夹中的样式文件，如下：
```js
import "vue-markdown-menu-bar/styles/dark.css";
```
## 自定义主题色
你也可以根据类名来自定主题色，可以去参考对应样式文件中的写法，以下提供几个容器类名供样式修改
```css
<!--这是包裹整个menuBar的外层容器 -->
.o_navigator_menu {
  background-color: #111!important;
  color: #ccc!important;
}
<!--这是menuBar容器的标题 -->
.o_menu-bar_title{
  color: #ccc!important;
}
<!--这是menuBar容器的内部导航项的hover效果 -->
.o_menu-bar_title span:hover {
  background: #333!important;
}
<!--对当前活跃的导航项设置样式 -->
.o_active {
  color: deeppink!important;
}
<!--对当前活跃的导航项左侧指示器设置样式 -->
.o_active::after {
  background-color: deeppink!important;
}
```
## 后续

对该组件有需求的可以给我提PR，也可以一起来维护这个组件，联系方式`wechat：x972761675`