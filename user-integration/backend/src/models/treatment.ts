import supabase from "../config/db";

const getTreatmentByid = async (id: number) => {
  const { data, error } = await supabase
    .from("treatment")
    .select("*")
    .eq("user_id", id);
  if (error) {
    throw new Error(`Treatment could not be retrieved because of: ${error}`);
  }
  return data;
};

const createTreatment = async (description: string, prescription: string,  user_id: number) => {
  const { data, error } = await supabase
    .from("treatment")
    .insert([{ description, prescription, user_id }]);
  if (error) {
    throw new Error(`Treatment could not be created because of: ${error}`);
  }
  return data;
}


export default { getTreatmentByid, createTreatment };