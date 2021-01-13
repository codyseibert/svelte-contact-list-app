<script>
  import { getContactById } from "../services/contactService";

  import ContactHeader from "../Contact/ContactHeader.svelte";
  import EditContact from "./EditContact.svelte";

  export let params;

  const contactPromise = getContactById(params.contactId);
</script>

{#await contactPromise then contact}
  <ContactHeader {contact} />
  <EditContact {contact} />
{/await}
