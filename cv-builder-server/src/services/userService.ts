import users from '../data/users';

import { User, NewUserEntry } from '../types';
import { v1 as uuid } from 'uuid';

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
const addUser = (entry: NewUserEntry): User => {
  const newUserEntry = {
    id: uuid(),
    ...entry,
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
