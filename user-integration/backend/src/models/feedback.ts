import supabase from "../config/db";

const getFeedbackById = async (id: number) => {
  const { data, error } = await supabase
    .from("feedback")
    .select("*")
    .eq("user_id", id);
  if (error) {
    throw new Error(`Feedback could not be retrieved because of: ${error}`);
  }
  return data;
};

const createFeedback = async (feedback: string, user_id: number) => {
  const { data, error } = await supabase
    .from("feedback")
    .insert([{ feedback, user_id }]);
  if (error) {
    throw new Error(`Feedback could not be created because of: ${error}`);
  }
  return data;
};

export default { getFeedbackById, createFeedback };
