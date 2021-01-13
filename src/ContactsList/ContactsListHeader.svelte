<script>
  import { createEventDispatcher } from "svelte";
  import { link } from "svelte-spa-router";

  let search = "";

  const dispatch = createEventDispatcher();

  const submit = (e) => {
    e.preventDefault();
    dispatch("search", search);
  };
</script>

<style>
  a {
    text-decoration: none;
  }

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

  .contact-search {
    font-size: 1.2em;
    padding: 0.3em 0.3em;
    border-radius: 100px;
    border: 1px solid white;
    outline: none;
  }

  .add {
    color: #fff;
    font-size: 1.5em;
  }

  i {
    color: #fff;
    font-size: 1.5em;
  }
</style>

<header class="header">
  <form on:submit={submit} class="search-bar">
    <input
      bind:value={search}
      type="search-name"
      class="contact-search"
      name="search-area"
      placeholder="Search" />
  </form>

  <a href="/add-contact" use:link><i class="fas fa-plus-circle add" /></a>
</header>
