<script>
  import { count, changeCount } from "@/stores/user.js";
  import { get } from "svelte/store";
  let name = "测试页面";
  let count_value = "";
  // let countByGet = get(count);
  console.log(count);

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
    subscribe方式获取： {count_value}
  </div>
  <!-- <div>
    get方式获取：{countByGet}
  </div> -->
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

<style>
  .test {
    color: red;
  }
</style>
