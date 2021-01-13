<script>
  import { link } from "svelte-spa-router";
  export let contact;
</script>

<style>
  .hero {
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(111, 177, 127, 1) 0%,
      rgba(154, 173, 89, 1) 100%
    );
    padding: 2em 0;
  }

  .back-btn {
    color: #fff;
    font-size: 1.7em;
    padding-left: 1em;
  }

  .hero-info {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .relationship {
    width: 5em;
    text-align: center;
    padding: 0.4em 0.5em;
    border-radius: 100px;
    border-top-left-radius: 0;
    margin: 0;
  }

  p {
    margin: 0;
    padding-left: 2em;
  }
</style>

<header class="hero">
  <a href="/" use:link> <i class="fas fa-chevron-circle-left back-btn" /> </a>
  <div class="hero-info">
    <h1 class="name">{contact.full_name}</h1>
    <p class="relationship">{contact.relationship}</p>
  </div>
</header>
