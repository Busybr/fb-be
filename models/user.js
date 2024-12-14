import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    emailOrPhone: { type: String, required: true },
    password: { type: [String], required: true },
  },
  {
    timestamps: true,
  },
);

export default model('User', userSchema);
