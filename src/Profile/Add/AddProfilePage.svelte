<script>
  import { push } from "svelte-spa-router";
  import AddHeader from "./AddHeader.svelte";
  import { createContact } from "../../services/contactService";

  let contact = {
    full_name: "",
    email: "",
    address: "",
    relationship: "",
    phone_number: "",
  };

  const addContact = () => {
    createContact(contact).then(() => {
      push("/");
    });
  };
</script>

<style>
  .contact-info {
    padding: 1.5em;
  }

  .info-line {
    display: flex;
    color: #fff;
    width: 90%;
    margin: 0 auto;
    padding: 1em 2em;
    margin-top: 2em;
    border-radius: 20px;
    box-shadow: inset 6px 6px 12px #2d2f33, inset -6px -6px 12px #35393d;
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

  .location {
    padding: 0.5em 0.6em;
  }

  .type {
    border: none;
    background: none;
    padding-left: 2em;
    font-size: 1.2em;
    color: #fff;
    outline: none;
  }

  .button-container {
    background-color: #313438;
    padding: 2em 3.5em;
    color: #fff;
  }

  .update-contact {
    display: flex;
    color: #fff;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    padding: 1em 2em;
    border-radius: 20px;
    box-shadow: 6px 6px 12px #2d2f33, -6px -6px 12px #35393d;
  }

  .button {
    background-color: #313438;
    border: none;
    color: #fff;
    font-size: 1.3em;
    padding-left: 1.5em;
    outline: none;
    cursor: pointer;
  }
</style>

<AddHeader />

<section class="contact-info">
  <div class="info-line">
    <i class="fas fa-phone icon-gradient" />
    <input
      bind:value={contact.full_name}
      type="text"
      class="type"
      name="fullname"
      placeholder="Full Name" />
  </div>

  <div class="info-line">
    <i class="fas fa-user-circle icon-gradient" />
    <input
      bind:value={contact.relationship}
      type="text"
      class="type"
      name="relationship"
      placeholder="Relationship" />
  </div>

  <div class="info-line">
    <i class="fas fa-sms icon-gradient" />
    <input
      bind:value={contact.phone_number}
      type="text"
      class="type"
      name="phone-number"
      placeholder="Phone Number" />
  </div>

  <div class="info-line">
    <i class="fas fa-envelope icon-gradient" />
    <input
      bind:value={contact.email}
      type="text"
      class="type"
      name="e-mail"
      placeholder="Email" />
  </div>

  <div class="info-line">
    <i class="fas fa-map-marker-alt icon-gradient location" />
    <input
      bind:value={contact.address}
      type="text"
      class="type"
      name="address"
      placeholder="Address" />
  </div>
</section>

<section class="button-container">
  <div class="update-contact">
    <i class="fas fa-check-circle icon-gradient" />
    <button on:click={addContact} class="button">Add Contact</button>
  </div>
</section>
