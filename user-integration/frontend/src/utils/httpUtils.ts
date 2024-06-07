import { SERVER_URL } from "../Constants/serverConstants";
import { Description, User } from "../types";

export const getUser = async (userid: string): Promise<User[]> => {
  return await fetch(`${SERVER_URL}/users/${userid}`).then((res) => res.json());
};

export const postUser = async (data: User): Promise<User> => {
  return fetch(`${SERVER_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      age: data.age ? data.age : undefined,
    }),
  }).then((res) => res.json());
};


export const getTreatment = async (
  userid: string
): Promise<(Description & User)[]> => {
  return await fetch(`${SERVER_URL}/treatment/${userid}`).then((res) => res.json());
};

export const postTreatment = async (
  userid: string,
  treatment: { description: string, prescription: string}
): Promise<Description> => {
  return fetch(`${SERVER_URL}/treatment/${userid}`, {
    method: "POST",
    body: JSON.stringify({ treatment }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const postChat = async (
  prompt: string,
  rag?: boolean
): Promise<{ answer: string }> => {
  return fetch(`${SERVER_URL}/chat/`, {
    method: "POST",
    body: rag ? JSON.stringify({ prompt, rag }) : JSON.stringify({ prompt }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
