<script>
  import Profile from "./Profile.svelte";
  import ProfileHeader from "./ProfileHeader.svelte";
  import { getContact } from "../services/contactService";

  export let params = {};

  const contactRequest = getContact(params.contactId);
</script>

{#await contactRequest then contact}
  <ProfileHeader {contact} />
  <Profile {contact} />
{/await}
