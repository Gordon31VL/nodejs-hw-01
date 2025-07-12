import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from './createFakeContact.js';
import fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (numberOfContacts) => {
    try {
        const dataContacts = await readContacts();
        const newContacts = [];
        for (let i = 0; i < numberOfContacts; i++) {
            newContacts.push(createFakeContact());
        }
        
        let allContacts;
        if (!dataContacts) {
            allContacts = newContacts;
        } else {
            allContacts = [...dataContacts, ...newContacts];
        }
        
        const contactsJSON = JSON.stringify(allContacts, null, 2);
        await fs.writeFile(PATH_DB, contactsJSON, 'utf8');
        
        return true;
    }
    catch (error) {
        console.error(`Помилка: ${error}`);
        return false;
    }
};