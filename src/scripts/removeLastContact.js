import { readContacts } from "../utils/readContacts.js";
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        
        if (!contacts || contacts.length === 0) {
            console.log('Немає контактів для видалення');
            return false;
        }
        
        contacts.pop();
        
        const contactsJSON = JSON.stringify(contacts, null, 2);
        await fs.writeFile(PATH_DB, contactsJSON, 'utf8');
        
        console.log('Останній контакт успішно видалено');
        return true;
        
    } catch (error) {
        console.error(`Помилка при видаленні останнього контакту: ${error}`);
        return false;
    }
};

removeLastContact();
