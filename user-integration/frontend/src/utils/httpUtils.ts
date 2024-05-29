import { SERVER_URL } from "../Constants/serverConstants";
import { Description } from "../types";

export const postDescription = async (
  userid: string,
  { description }: { description: string }
): Promise<Description> => {
  return fetch(`${SERVER_URL}/description/${userid}`, {
    method: "POST",
    body: JSON.stringify({ description }),
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