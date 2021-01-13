<script>
  import ContactsList from "./ContactsList.svelte";
  import ContactsListHeader from "./ContactsListHeader.svelte";

  import { getContacts, getContactsByName } from "../services/contactService";

  let contactsPromise = getContacts();

  const search = (event) => {
    const searchInputValue = event.detail;
    contactsPromise = getContactsByName(searchInputValue);
  };
</script>

<ContactsListHeader on:search={search} />
{#await contactsPromise then contacts}
  <ContactsList {contacts} />
{/await}
