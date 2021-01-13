<script>
	import Router from "svelte-spa-router";

	import ContactListPage from "./ContactList/ContactListPage.svelte";
	import ProfilePage from "./Profile/ProfilePage.svelte";
	import EditProfilePage from "./Profile/Edit/EditProfilePage.svelte";
	import AddProfilePage from "./Profile/Add/AddProfilePage.svelte";

	const routes = {
		"/": ContactListPage,
		"/profile/add": AddProfilePage,
		"/profile/:contactId": ProfilePage,
		"/profile/:contactId/edit": EditProfilePage,
		"*": ContactListPage,
	};
</script>

<style>
	:global(body) {
		margin: 0;
		font-family: "Inter", sans-serif;
		background-color: #313438;
		height: 100%;
	}

	.container {
		max-width: 428px;
		margin: 0 auto;
		background-color: #313438;
		height: 100%;
	}
</style>

<div class="container">
	<Router {routes} />
</div>
