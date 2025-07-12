import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const dataContacts = await fs.readFile(PATH_DB);
        const contacts = JSON.parse(dataContacts);
        return contacts;
    } catch (error) {
        console.log(`Помилка: ${error}`);
    }
};
