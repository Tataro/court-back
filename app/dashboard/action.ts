"use server";

import dbConnect from "../../lib/mongoose";
import { User } from "../../models/User";

export const getUsers = async () => {
  await dbConnect();

  try {
    const users = await User.find({}, { password: 0 })
      .limit(10)
      .lean();
    const usersData = users.map((user) => {
      user._id = user._id.toString();
      // user.createdAt = user.createdAt.toISOString();
      // user.updatedAt = user.updatedAt.toISOString();
      return user;
    });

    console.log("usersData", usersData);
    return { users: usersData, error: null };
  } catch (error: any) {
    return { users: [], error: error.message };
  }
};
