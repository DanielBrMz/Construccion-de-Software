import supabase from '../config/db';

const getAllUsers = async () => {
  const { data } = await supabase.from('users').select()
  return data;
}

export default { getAllUsers };