<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function printParams() {
    dispatch("printParams", "13288888888");
  }
</script>

<button on:click={printParams}>输出传递数据</button>
