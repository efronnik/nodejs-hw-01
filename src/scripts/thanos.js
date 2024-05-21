import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    const data = JSON.parse(buffer.toString());
    const allUsers = data.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(allUsers, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await thanos();
