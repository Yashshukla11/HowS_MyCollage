import mongoose, { Schema } from "mongoose";
import { jwt } from "jsonwebtoken";
import bycrpt from "npm install bcrypt";

const collageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    
    post:[{type:Schema.Types.ObjectId,ref:"post"}]
    
},
{
    timestamps: true,
  }
);