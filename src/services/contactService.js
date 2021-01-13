const BASE_URL = "https://django-react-contacts.herokuapp.com";

export const getContacts = () => {
  return fetch(`${BASE_URL}/api/contacts`).then((response) => response.json());
};

export const searchContactsByName = (name) => {
  return fetch(`${BASE_URL}/api/contacts?search=${name}`).then((response) =>
    response.json()
  );
};

export const getContact = (contactId) => {
  return fetch(`${BASE_URL}/api/contacts/${contactId}`).then((response) =>
    response.json()
  );
};

export const deleteContact = (contactId) => {
  return fetch(`${BASE_URL}/api/contacts/delete/${contactId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export const createContact = (contact) => {
  const formData = new FormData();

  for (const name in contact) {
    formData.append(name, contact[name]);
  }

  return fetch(`${BASE_URL}/api/contacts/add/`, {
    method: "POST",
    body: formData,
  }).then((response) => response.json());
};

export const updateContact = (contact) => {
  const formData = new FormData();

  for (const name in contact) {
    formData.append(name, contact[name]);
  }

  return fetch(`${BASE_URL}/api/contacts/update/${contact.id}/`, {
    method: "PUT",
    body: formData,
  }).then((response) => response.json());
};
