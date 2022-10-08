<script>
  import Router, { link, push, replace } from "svelte-spa-router";
  import routes from "@/router/index.js";
</script>

<main>
  <Router {routes} />
</main>

<style>
</style>
