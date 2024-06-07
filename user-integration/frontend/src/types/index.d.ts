export type User = {
  age: number | null;
  educationlevel: string | null;
  email: string | null;
  gender: string | null;
  id?: number;
  maritalstatus: string | null;
  name: string | null;
  occupation: string | null;
  phone: string | null;
  previousdiagnosis: string | null;
};

export type Treatment = {
  id: number;
  description: string;
  prescription: string;
  date: string;
  user_id: number;
};
