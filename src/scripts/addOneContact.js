import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    const data = JSON.parse(buffer.toString());
    data.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
