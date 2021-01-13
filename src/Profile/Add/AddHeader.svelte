<script>
  import { link } from "svelte-spa-router";
</script>

<style>
  i {
    color: #fff;
    font-size: 1.5em;
  }

  .hero {
    color: white;
    background: linear-gradient(
      90deg,
      rgba(111, 177, 127, 1) 0%,
      rgba(154, 173, 89, 1) 100%
    );
    padding: 2em;
  }

  .hero-info {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
</style>

<header class="hero">
  <a href="/" use:link><i class="fas fa-chevron-circle-left back-btn" /></a>

  <div class="hero-info">
    <h1 class="name">Add a Contact</h1>
  </div>
</header>
