import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    await writeContacts(1);
};

addOneContact();
