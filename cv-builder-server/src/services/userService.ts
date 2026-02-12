import users from '../data/users';

import { User, NewUserEntry } from '../types';
import { v1 as uuid } from 'uuid';

// Password Hashing
const bcrypt = require('bcrypt');

// Get all users
const getAllUsers = (): User[] => {
  return users;
};

// Find user by id
const findById = (id: string): User | undefined => {
  const user = users.find((user) => user.id === id);
  return user;
};

// Add User
const addUser = async (entry: NewUserEntry): Promise<User> => {
  const saltRounds = Number(process.env.USER_SALT_ROUNDS); // Maybe place this in the .env file?
  const passwordHash = await bcrypt.hash(entry.password, saltRounds);

  const newUserEntry = {
    id: uuid(),
    ...entry,
    password: passwordHash,
    cvs: [],
  };

  users.push(newUserEntry);
  return newUserEntry;
};

export default {
  getAllUsers,
  findById,
  addUser,
};
