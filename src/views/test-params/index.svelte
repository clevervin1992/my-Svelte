<script>
  import Router, { link, push, replace, querystring } from "svelte-spa-router";
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
