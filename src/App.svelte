<script>
	import Router from "svelte-spa-router";
	import AddContactPage from "./AddContact/AddContactPage.svelte";
	import ContactPage from "./Contact/ContactPage.svelte";
	import ContactsListPage from "./ContactsList/ContactsListPage.svelte";
	import DeleteContactPage from "./DeleteContact/DeleteContactPage.svelte";
	import EditContactPage from "./EditContact/EditContactPage.svelte";

	const routes = {
		"/": ContactsListPage,
		"/add-contact": AddContactPage,
		"/contacts/:contactId": ContactPage,
		"/contacts/:contactId/edit": EditContactPage,
		"/contacts/:contactId/delete": DeleteContactPage,
	};
</script>

<style>
	:global(body) {
		margin: 0;
		font-family: "Inter", sans-serif;
		background: #313438;
	}
</style>

<Router {routes} />
