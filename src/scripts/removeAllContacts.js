import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]', 'utf8');
        console.log('Всі контакти успішно видалено');
        return true;
    } catch (error) {
        console.error(`Помилка при видаленні контактів: ${error}`);
        return false;
    }
};

removeAllContacts();