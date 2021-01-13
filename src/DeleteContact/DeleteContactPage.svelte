<script>
  import { getContactById } from "../services/contactService";

  import ContactHeader from "../Contact/ContactHeader.svelte";
  import DeleteContact from "./DeleteContact.svelte";

  export let params;

  const contactPromise = getContactById(params.contactId);
</script>

{#await contactPromise then contact}
  <ContactHeader {contact} />
  <DeleteContact {contact} />
{/await}
