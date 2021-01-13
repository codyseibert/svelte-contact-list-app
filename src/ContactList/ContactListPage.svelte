<script>
  import ContactsList from "./ContactsList.svelte";
  import SearchHeader from "./SearchHeader.svelte";

  import {
    getContacts,
    searchContactsByName,
  } from "../services/contactService";

  let contactsRequest = getContacts();

  const searchByName = (event) => {
    contactsRequest = searchContactsByName(event.detail);
  };
</script>

<SearchHeader on:search={searchByName} />
{#await contactsRequest then contacts}
  <ContactsList {contacts} />
{/await}
