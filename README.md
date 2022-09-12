# 基于Vue3的markdown动态生成侧边栏导航组件
使用方式：
1.全局注册
```ts
import VueMarkdownMenuBar from "vue-markdown-menu-bar"

createApp(App).use(VueMarkdownMenuBar).mount('#app')
```

2.vue文件中单独引入：
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
  <VueMarkdownMenuBar body=".body" />
</template>
```

## 后续
有需求的可以给我提Pr，也可以一起来维护这个组件，联系方式wx：x972761675