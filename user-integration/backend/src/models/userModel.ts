import supabase from "../config/db";
import { User } from "../types/types";

const getAllUsers = async () => {
  const { data } = await supabase.from("users").select();
  return data;
};

const getUserById = async (id: string) => {
  const { data } = await supabase.from("users").select().eq("id", id);
  return data;
};

const createUser = async (user: User) => {
  const { data } = await supabase.from("users").insert([user]);
  return data;
};

export default { getAllUsers, getUserById, createUser };
