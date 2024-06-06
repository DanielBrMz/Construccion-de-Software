import supabase from '../config/db';

const getAllUsers = async () => {
  const { data } = await supabase.from('users').select()
  return data;
}

const getUserById = async (id: string) => {
  const { data } = await supabase.from('users').select().eq('id', id)
  return data;
}

export default { getAllUsers, getUserById };