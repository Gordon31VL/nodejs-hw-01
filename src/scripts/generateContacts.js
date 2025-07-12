import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    await writeContacts(number);
};

generateContacts(3);
