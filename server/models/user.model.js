import mongoose, { Schema } from "mongoose";
import { jwt } from "jsonwebtoken";
import bycrpt from "bycrpt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      // always lowercase
      lowercase: true,
      // makes unique
      unique: true,
      // trims whitespace
      trim: true,
      // this is made true if you want to make any field searchable more easily
      index: true,
    },
    password: {
      type: String,
      required: [true, "Passoword is required"],
    },

    // collage e-mail id(orgization mail_id)
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    user_photo: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
      trim: true,
    },

    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    collagename: {
      type: String,
      required: true,
      trim: true,
    },
    college: [{ type: Schema.Types.ObjectId, ref: "college" }],
    post: [{ type: Schema.Types.ObjectId, ref: "post" }]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
