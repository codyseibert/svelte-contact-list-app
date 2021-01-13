<script>
  import EditProfile from "./EditProfile.svelte";
  import ProfileHeader from "../ProfileHeader.svelte";
  import { getContact } from "../../services/contactService";

  export let params = {};

  const contactRequest = getContact(params.contactId);
</script>

<style>
</style>

{#await contactRequest then contact}
  <ProfileHeader {contact} />
  <EditProfile {contact} />
{/await}
