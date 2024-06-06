import supabase from "../config/db";

const getDescriptionByid = async (id: number) => {
  const { data, error } = await supabase
    .from("description")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error(`Description could not be retrieved because of: ${error}`);
  }
  return data;
};

const createDescription = async (description: string, user_id: string) => {
  const { data, error } = await supabase
    .from("description")
    .insert([{ description, user_id }]);
  if (error) {
    throw new Error(`Description could not be created because of: ${error}`);
  }
  return data;
}


export default { getDescriptionByid, createDescription };