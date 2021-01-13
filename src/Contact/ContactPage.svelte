<script>
  import { getContactById } from "../services/contactService";

  import Contact from "./Contact.svelte";
  import ContactHeader from "./ContactHeader.svelte";

  export let params;

  const contactPromise = getContactById(params.contactId);
</script>

{#await contactPromise then contact}
  <ContactHeader {contact} />
  <Contact {contact} />
{/await}
