## 一、Svelte 简介

### **1.基本介绍**

[官方文档](https://www.sveltejs.cn/tutorial/basics)

[实例演示](https://www.sveltejs.cn/examples#hello-world)

[代码演示](https://www.sveltejs.cn/repl/hello-world?version=3.50.1)

[UI 框架](https://sveltematerialui.com/)

> Svelte 是一个构建 web 应用程序的工具。
>
> 传统框架如 React 和 Vue 在浏览器中需要做大量的工作，而 Svelte 将这些工作放到构建应用程序的编译阶段来处理

开发者满意度

<img src="C:\Users\nana\AppData\Roaming\Typora\typora-user-images\image-20221009170014800.png" alt="image-20221009170014800" style="zoom:67%;" />

市场占有率

<img src="C:\Users\nana\AppData\Roaming\Typora\typora-user-images\image-20221009170141164.png" alt="image-20221009170141164" style="zoom: 67%;" />

### 2.优势与不足

优势：

- 打包体积更小

  ![02.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/095606905eed4f9d91f03b8b1793af01~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

- 响应更快

  > Svelte 在未使用虚拟 DOM 的情况下实现了响应式设计，Svelte 会监听顶层组件所有变量，一旦某个变量发生变化，就更新使用过该变量的组件,直接操作 DOM 很更快

- 性能强

- 内存优化

- 语法简单，可读性强

不足：

- Svelte 的生态不够丰富。由于是“新宠”，生态方面不如 Vue 和 React 。

适合交互简单的小型项目或者 H5 活动页

## 二、项目创建

> vite 支持 Svelte 项目模板搭建

```nginx
1.npm create vite@latest vite-svelte
2.选择svelte模板
3.选择语法类型（js/ts/SvelteKit）
4.cd vite-svelte
5.npm install
6.npm run dev
```

延伸：SvelteKit 类似于 Svelte 的脚手架，集成了路由处理逻辑，无需配置（路由地址即页面文件夹所在地址）

vscode 安装 Svelte for VS Code ，支持 Svelte 语法高亮

## 三、路由

使用[svelte-spa-router]([svelte-spa-router - npm (npmjs.com)](https://www.npmjs.com/package/svelte-spa-router))插件

### 1.路由配置

路由文件 router/index.js

```js
import Test from "@/views/test/index.svelte";
import Home from "@/views/home/index.svelte";

export default {
  "/": Home,
  "/test": Test,
  "/testParams/:id": TestParams,
};
```

主入口 App.svelte

```js
<script>
  import Router, { link, push, replace } from "svelte-spa-router";
  import routes from "@/router/index.js";
</script>

<main>
  <Router {routes} />
</main>

<style>
</style>
```

### 2.路由跳转

```html
import { link, push,querystring } from "svelte-spa-router"
<a href="javascript;" use:link={"/test"}>To Test</a>
<button on:click={() => {push("/test");}}>To Test</button>
```

### 3.路由参数传递与接收

```html
<button on:click={() => {push(`/testParams/66${JSON.stringify(params)}`);}}>To TestParams</button>
```

```vue
<script>
import Router, { querystring } from "svelte-spa-router";
export let params = {};
let name = "接收参数页面";
let query = JSON.parse(decodeURIComponent($querystring));
console.log(params);
console.log(query);
</script>

<div>
  <span class="test">{name}</span>
</div>
<div>
  <span>页面接收id：{params.id}</span>
  <br />
  <span>页面接收参数:{query.content}</span>
</div>

<style>
.test {
  color: red;
}
</style>
```

## 四、语法

### 1.基础模板语法

插值与事件绑定

```vue
<script>
let name = "hello world";

function handleClick() {
  name = "你好";
}
</script>

<div>{name}</div>
<button on:click="{handleClick}">change</button>
```

表达式

```vue
<script>
function sayHi() {
  return `${name} 世界！`;
}

let a = 1;
let b = 2;
</script>

<div>{sayHi()}</div>

<div>{a} + {b} = {a + b}</div>
```

属性绑定

```vue
<script>
let name = "你好";
</script>

<div title="{name}">Hello</div>
```

渲染 html 标签

```vue
<script>
let html = '<h1 style="color: pink;">hello</h1>';
</script>

<div>{@html html}</div>
```

### 2.样式绑定

style 样式

```vue
<script>
let color = "red";
</script>

<div style="color: {color}">你好</div>
```

class 绑定

```vue
<script>
let foo = true;
</script>

<div class:active="{foo}">你好</div>

<style>
.active {
  color: red;
}
</style>
```

### 3.条件渲染

```
{#if 条件判断}
...
{:else if 条件判断}(多种条件使用)
...
{/if}
```

单条件

```vue
<script>
let state = true;
</script>

{#if state}
<div>你好</div>
{/if}
```

两种条件

```vue
<script>
let state = true;
</script>

{#if state}
<div>hello</div>
{:else}
<div>你好</div>
{/if}
```

多种条件

```vue
<script>
let lang = "en";
</script>

{#if lang==='en'}
<div>hello</div>
{:else if lang==='zh'}
<div>你好</div>
{:else}
<div>鲁猴</div>
{/if}
```

### 4.列表渲染

```vue
<script>
let list = ["a", "b", "c", "d", "e", "f"];
</script>

<ul>
  {#each list as item,index}
  	<li>{item}-{index}</li>
  {/each}
</ul>
```

**解构写法**

```vue
<script>
let list = [{ name: "你好" }, { name: "hello" }];
</script>

<ul>
  {#each list as {name}}
  	<li>{name}</li>
  {/each}
</ul>
```

等同于

```vue
<script>
let list = [{ name: "你好" }, { name: "hello" }];
</script>

<ul>
  {#each list as item}
  	<li>{item.name}</li>
  {/each}
</ul>
```

**无数据场景**

配合{:else}使用

```vue
<script>
  let list = []
</script>

<div>
  {#each list as {name}}
  	<div>{name}</div>
  {:else}
  	<div>暂无数据</div>
  {/each}
</div>
```

### 5.数据绑定

input/textarea

```html
<input type="text" bind:value="{msg}" />
```

```vue
<script>
let msg = "hello";
</script>

<textarea type="text" bind:value="{msg}" />
<p>{msg}</p>
```

radio

```vue
<script>
let selected = "2";
</script>

<input type="radio" bind:group="{selected}" value="1" />
1
<input type="radio" bind:group="{selected}" value="2" />
2
<input type="radio" bind:group="{selected}" value="3" />
3
<p>{selected}</p>
```

checkbox

```vue
<script>
let roles = [];
</script>

<input type="checkbox" bind:group="{roles}" value="admin" />
管理员
<input type="checkbox" bind:group="{roles}" value="managerOne" />
项目经理
<input type="checkbox" bind:group="{roles}" value="managerTwo" />
开发经理
<input type="checkbox" bind:group="{roles}" value="managerThree" />
产品经理

<p>{roles}</p>
```

select

```vue
<script>
let selected = "a";
</script>

<select bind:value="{selected}">
	<option value='a'>a</option>
	<option value='b'>b</option>
	<option value='c'>c</option>
</select>

<span>{selected}</span>
```

### 6.reactivity 声明反应性

效果类似于 vue 的计算属性 computed

```vue
<script>
let count = 1;

$: doubled = count * 2;
$: quadrupled = doubled * 2;

function handleClick() {
  count += 1;
}
</script>

<button on:click="{handleClick}">
	Count: {count}
</button>

<p>{count} * 2 = {doubled}</p>
<p>{doubled} * 2 = {quadrupled}</p>
```

也具备监听的功能

```vue
<script>
let count = 0;

$: if (count >= 10) {
  alert(`count is dangerously high!`);
  count = 9;
}

function handleClick() {
  count += 1;
}
</script>

<button on:click="{handleClick}">
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

### 7.异步渲染 wait

```
{#await expression}
...
{:then name}
...
{:catch name}
...
{/await}
```

expression 必须是一个 Promise 对象，`:then` 代表成功结果，`:catch` 代表失败结果。

```vue
<script>
const api = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("请求成功，数据是xxxxx");
  }, 1000);
});
</script>

{#await api}
<span>Loading...</span>
{:then response}
<span>{response}</span>
{:catch error}
<span>{error}</span>
{/await}
```

## 五、组件通讯

### 1.父传子

父组件

```vue
<script>
import Children from "./children.svelte";
</script>

<div>子组件 children 的内容：</div>
<Children number="123456" />
```

子组件

```vue
<script>
export let number = "11111"; //类似vue的props
</script>

<div>电话：{number}</div>
```

### 2.子传父

父组件

```vue
<script>
import Card from "./Card.svelte";
function print(data) {
  console.log(`params: ${data}`);
}
</script>
<Card on:printParams="{print}" />
```

子组件

需要引入 createEventDispatcher 方法

```vue
<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

function printParams() {
  dispatch("printParams", "13288888888");
}
</script>

<button on:click="{printParams}">输出传递数据</button>
```

## 六、store 状态管理

[官方示例](https://www.sveltejs.cn/examples#writable-stores)

提供了 update、set 等方法进行状态值的更新，可放在组件文件中执行，不局限于在 store 文件中处理

stores/user.js

```js
import { writable } from "svelte/store";

export const count = writable(0);

export const changeCount = function () {
  count.update((n) => n + 1);
};
```

test.svelte

```vue
<script>
  import { count, changeCount } from "@/stores/user.js";
  import { get } from "svelte/store";
  let name = "测试页面";
  let count_value = "";
  console.log(count);//是个对象，不能直接使用，通过subscribe方法去赋值，并实现监听

  const subscribe = count.subscribe((value) => {
    count_value = value;
  });

  function addCount() {
    count.update((val) => val + 1);
  }

  function setCount() {
    count.set(88);
  }
</script>

<div>
  <span class="test">{name}</span>
  <div>
    {count_value}
  </div>
  <div>
    <button on:click={addCount}>addCount</button>
  </div>
  <div>
    <button on:click={changeCount}>changeCount</button>
  </div>
  <div>
    <button on:click={setCount}>set</button>
  </div>
</div>

```

简洁写法

[Custom stores • Svelte 实例 (sveltejs.cn)](https://www.sveltejs.cn/examples#custom-stores)

stores.js

```js
import { writable } from "svelte/store";

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
    reset: () => set(0),
  };
}

export const count = createCount();
```

test.svelte

```vue
<script>
import { count } from "./stores.js";
</script>

<h1>The count is {$count}</h1>

<button on:click="{count.increment}">+</button>
<button on:click="{count.decrement}">-</button>
<button on:click="{count.reset}">reset</button>
```

## 七、生命周期

Svelte 中主要有以下几个生命周期：

- `onMount`: 组件挂载时调用。
- `onDestroy`: 组件销毁时执行。
- `beforeUpdate`: 在数据更新前执行。
- `afterUpdate`: 在数据更新完成后执行。
- `tick`: DOM 元素更新完成后执行。

以上生命周期都是需要从 `svelte` 里引入的

```vue
<script>
import { onMount } from "svelte";
let title = "Hello world";

onMount(() => {
  console.log("onMount");
  setTimeout(() => (title = "你好"), 1000);
});
</script>

<h1>{title}</h1>
```
