import { connectToDB } from "./db"
import { User } from "./models"

export const fetchUsers = async () => {
  try {
    await connectToDB()
    const users = await User.find()
    return users
  } catch (error) {
    throw new Error("could not fetch users!")
  }
}
