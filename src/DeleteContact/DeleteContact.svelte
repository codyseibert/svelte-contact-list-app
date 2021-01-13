<script>
  import { deleteContactById } from "../services/contactService";
  import { push } from "svelte-spa-router";

  export let contact;

  const deleteContact = () => {
    deleteContactById(contact.id).then(() => {
      push("/");
    });
  };
</script>

<style>
  .delete-container {
    background-color: #313438;
    color: #fff;
    text-align: center;
  }

  p {
    padding-bottom: 2em;
    color: #fff;
  }

  .delete-container {
    padding: 2em 3.5em;
  }

  .delete-contact {
    display: flex;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    padding: 1em 2em;
    border-radius: 20px;
    box-shadow: 6px 6px 12px #2d2f33, -6px -6px 12px #35393d;
  }

  .delete-button {
    background-color: #313438;
    border: none;
    color: #fff;
    font-size: 1.3em;
    padding-left: 1.5em;
    cursor: pointer;
  }

  .delete-icon {
    background: linear-gradient(
      90deg,
      rgba(111, 177, 127, 1) 0%,
      rgba(154, 173, 89, 1) 100%
    );
    border-radius: 100px;
    font-size: 1.5em;
    padding: 0.5em;
    cursor: pointer;
  }
</style>

<section class="delete-container">
  <p>Are you sure you want to delete this contact?</p>
  <div class="delete-contact">
    <i class="fas fa-trash delete-icon" />
    <button on:click={deleteContact} class="delete-button">Delete Contact</button>
  </div>
</section>
