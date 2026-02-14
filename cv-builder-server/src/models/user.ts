import { Schema, model } from 'mongoose';
import { IUser } from '../types';

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email must be unique
  },
  passwordHash: {
    type: String,
    required: true,
  },
  // cvs: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'CV', // Refers to the CV cluster in the mongodb database
  //   },
  // ],
});

userSchema.set('toJSON', {
  transform: (_document, returnedObject: Record<string, unknown>) => {
    returnedObject.id = returnedObject._id?.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash; // hide the hashed password
  },
});

const User = model<IUser>('User', userSchema);

export default User;
// module.exports = User;
