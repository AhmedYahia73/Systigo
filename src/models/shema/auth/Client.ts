import { model, Schema, Types } from "mongoose";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';


 const ClientSchema = new Schema(
  {
    
    company_name: { type: String, },
    email: { type: String, unique: true },
    password: { type: String},
    status: {type: String},
    package_id: { type: Types.ObjectId, ref: 'Package' },
  },
  { timestamps: true, }
);

ClientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
export const ClientModel = mongoose.model('Client', ClientSchema);

