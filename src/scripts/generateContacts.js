import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    const data = JSON.parse(buffer.toString());
    const newUsers = Array.from({ length: number }, () => createFakeContact());
    const allUsers = [...data, ...newUsers];
    await fs.writeFile(PATH_DB, JSON.stringify(allUsers, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
