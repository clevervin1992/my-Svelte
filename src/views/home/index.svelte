<script>
  import svelteLogo from "../../assets/svelte.svg";
  import { get, post } from "@/utils/request.js";
  import Counter from "@/components/Counter.svelte";
  import Children from "@/components/Children.svelte";
  import Card from "@/components/Card.svelte";
  import Router, { link, push, replace } from "svelte-spa-router";

  let params = { content: "form home params" };

  function print(data) {
    alert(`params: ${data.detail}`);
  }

  function sendApi() {
    get("/api/user").then((res) => {
      console.log(res);
    });
  }
  sendApi();
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>
  <div>
    <Children number="12345678" />
  </div>
  <div>
    <Card on:printParams={print} />
  </div>
  <div class="card">
    <!-- <a href="javascript;" use:link={"/test"}>To Test</a> -->
    <button
      on:click={() => {
        push("/test");
      }}>To Test</button
    >
  </div>
  <div class="card">
    <!-- <button
        on:click={() => {
        push(`/testParams/${JSON.stringify(params)}`);
      }}>To TestParams</button
    >  -->
    <button
      on:click={() => {
        push(`/testParams/66?${JSON.stringify(params)}`);
      }}>To TestParams</button
    >
  </div>
  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
