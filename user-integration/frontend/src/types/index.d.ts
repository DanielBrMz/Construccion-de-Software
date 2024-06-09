export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  maritalStatus: string;
  ocupation: string;
  educationLevel: string;
  previousDiagnosis: string;
  medication: string;
};

export type Description = {
  id: number;
  description: string;
  date: string;
  user_id: number;
};
