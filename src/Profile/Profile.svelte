<script>
  import { link } from "svelte-spa-router";
  export let contact;
</script>

<style>
  .contact-info {
    padding: 3em 1.5em;
  }

  .info-line {
    display: flex;
    color: #fff;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    padding: 1em 2em;
    margin-top: 2em;
    border-radius: 20px;
    box-shadow: 6px 6px 12px #2d2f33, -6px -6px 12px #35393d;
  }

  p {
    margin: 0;
    padding-left: 2em;
  }

  .icon-gradient {
    background: linear-gradient(
      90deg,
      rgba(111, 177, 127, 1) 0%,
      rgba(154, 173, 89, 1) 100%
    );
    border-radius: 100px;
    font-size: 1.5em;
    padding: 0.5em;
  }

  #location {
    padding: 0.5em 0.6em;
  }

  .edit-contact {
    background-color: #313438;
    padding: 2.5em 3.5em;
    text-align: center;
    color: #fff;
  }
</style>

<section class="contact-info">
  <div class="info-line">
    <i class="fas fa-phone icon-gradient" />
    <p class="phone-number">{contact.phone_number}</p>
  </div>

  <div class="info-line">
    <i class="fas fa-sms icon-gradient" />
    <p class="sms">Send Message</p>
  </div>

  <div class="info-line">
    <i class="fas fa-envelope icon-gradient" />
    <p class="email">{contact.email}</p>
  </div>

  <div class="info-line">
    <i id="location" class="fas fa-map-marker-alt icon-gradient" />
    <p class="address">{contact.address}</p>
  </div>
</section>

<a href={`/profile/${contact.id}/edit`} use:link>
  <section class="edit-contact">
    <div class="edit-button"><i class="fas fa-cog icon-gradient" /></div>
  </section>
</a>
