import { getContacts } from "../contacts";

export async function getContactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function getContactLoader({ params }) {
  const contact = await getContacts(params.contactId);
  return { contact };
}
