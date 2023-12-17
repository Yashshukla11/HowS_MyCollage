import mongoose, { Schema } from "mongoose";
import { jwt } from "jsonwebtoken";
import bycrpt from "bycrpt";

const postSchema = new Schema(
  {
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
      },
    title:{
      type: String,
      required: true
    },
    description:{
      type: String,
    },
    url:{
      type: String,
      required: true
    },
    
  },
  {
    timestamps: true,
  }
);