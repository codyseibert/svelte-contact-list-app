<script>
  import { createEventDispatcher } from "svelte";
  import { link } from "svelte-spa-router";

  export const dispatch = createEventDispatcher();

  let name = "";

  const search = (e) => {
    e.preventDefault();
    dispatch("search", name);
  };
</script>

<style>
  .header {
    display: flex;
    justify-content: space-evenly;
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(111, 177, 127, 1) 0%,
      rgba(154, 173, 89, 1) 100%
    );
    padding: 2em 0;
    align-items: center;
  }

  input {
    border-radius: 10px;
    color: gray;
  }

  .add {
    color: #fff;
    font-size: 1.5em;
  }

  .contact-search {
    font-size: 1.2em;
    padding: 0.3em 0.3em;
    border-radius: 100px;
    border: 1px solid white;
    outline: none;
  }
</style>

<header class="header">
  <form class="search-bar" on:submit={search}>
    <input
      bind:value={name}
      type="search-name"
      class="contact-search"
      name="search-area"
      placeholder="Search" />
  </form>

  <a href="/profile/add" use:link><i class="fas fa-plus-circle add" /></a>
</header>
