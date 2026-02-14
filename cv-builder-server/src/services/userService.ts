import users from '../data/users';

import { IUser, NewUserEntry, UpdateUserEntry } from '../types';
// import { v1 as uuid } from 'uuid';
import User from '../models/user';

// Password Hashing
const bcrypt = require('bcrypt');

// Get all users
const getAllUsers = async (): Promise<IUser[] | undefined> => {
  // return users;
  const users = await User.find({});

  return users;
};

// Find user by id
const findById = async (id: string): Promise<IUser | null> => {
  // const user = users.find((user) => user.id === id);
  const user = await User.findById(id);
  return user;
};

// Add User
// const addUser = async (entry: NewUserEntry): Promise<User> => {
//   const { password, ...rest } = entry; // Single out the password from the entry
//   const saltRounds = Number(process.env.USER_SALT_ROUNDS); // Maybe place this in the .env file?
//   const passwordHash = await bcrypt.hash(password, saltRounds);

//   const newUserEntry = {
//     id: uuid(),
//     ...rest,
//     passwordHash, // Store the hashed password instead of the plain text
//     cvs: [],
//   };

//   users.push(newUserEntry);
//   return newUserEntry;
// };
const addUser = async (entry: NewUserEntry): Promise<IUser> => {
  const { password, ...rest } = entry; // Single out the password from the entry
  const saltRounds = Number(process.env.USER_SALT_ROUNDS); // Maybe place this in the .env file?
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUserEntry = new User({
    ...rest,
    passwordHash, // Store the hashed password instead of the plain text
    cvs: [],
  });

  const savedUser = await newUserEntry.save();

  users.push(savedUser);
  return savedUser;
};

// Update User
const updateUser = async (
  id: string,
  updatedFields: UpdateUserEntry,
): Promise<IUser | null> => {
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { $set: updatedFields },
    { new: true, runValidators: true },
  );

  return updatedUser;
};

// Delete User

const deleteUser = async (id: string): Promise<IUser | null> => {
  // TODO: Add authorization logic eg. JWT AUTHENTICATION BEFORE DELETING
  const deletedUser = await User.findByIdAndDelete(id);
  return deletedUser;
};

export default {
  getAllUsers,
  findById,
  addUser,
  deleteUser,
  updateUser,
};
