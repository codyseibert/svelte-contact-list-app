const BASE_URL = "https://django-react-contacts.herokuapp.com/api";

export const getContacts = () => {
  return fetch(`${BASE_URL}/contacts`).then((response) => response.json());
};

export const getContactById = (id) => {
  return fetch(`${BASE_URL}/contacts/${id}`).then((response) =>
    response.json()
  );
};

export const deleteContactById = (id) => {
  return fetch(`${BASE_URL}/contacts/delete/${id}/`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export const getContactsByName = (name) => {
  return fetch(`${BASE_URL}/contacts?search=${name}`).then((response) =>
    response.json()
  );
};

export const createContact = (contact) => {
  const formData = new FormData();

  for (const name in contact) {
    formData.append(name, contact[name]);
  }

  return fetch(`${BASE_URL}/contacts/add/`, {
    method: "POST",
    body: formData,
  }).then((response) => response.json());
};

export const saveContact = (contact) => {
  const formData = new FormData();

  for (const name in contact) {
    formData.append(name, contact[name]);
  }

  return fetch(`${BASE_URL}/contacts/update/${contact.id}/`, {
    method: "PUT",
    body: formData,
  }).then((response) => response.json());
};
