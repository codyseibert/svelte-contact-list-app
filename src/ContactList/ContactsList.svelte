<script async>
  import { link } from "svelte-spa-router";
  export let contacts;
</script>

<style>
  a {
    text-decoration: none;
  }

  i {
    color: #fff;
    font-size: 1.5em;
  }

  .contact-name {
    color: #fff;
    font-size: 1.2em;
  }

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  hr {
    border: 1px solid #494a4b;
  }

  .list__item {
    list-style: none;
  }

  .relationship {
    color: #fff;
    width: 6em;
    text-align: center;
    padding: 0.4em 0.5em;
    border-radius: 100px;
    border-top-left-radius: 0;
    background-color: #75a85e;
  }

  .contact-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5em;
    transition: 0.3s;
  }

  .contact-section:hover {
    background-color: #48494a;
  }

  .text {
    padding-left: 1em;
  }

  .contacts-library {
    background: #313438;
  }
</style>

<section class="contacts-library">
  <ul class="contacts-list">
    {#each contacts as contact}
      <a href={`/profile/${contact.id}`} use:link>
        <div class="contact-section">
          <li class="list__item">
            <p class="contact-name">{contact.full_name}</p>
            <p class="relationship">Friend</p>
          </li>

          <li class="list__item">
            <i class="fas fa-phone" />
            <i class="fas fa-sms text" />
          </li>
        </div>
      </a>

      <hr />
    {/each}
  </ul>
</section>
