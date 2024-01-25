import { Schema, model, models } from "mongoose"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 30,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
)

export const User = models.User || model("User", userSchema)
