import { OpenAI } from "openai";
import { openai } from "../utils/openai";
import { nearbyy } from "../utils/nearbyy";

async function getRagContext(
  prompt: string,
  rag: boolean
): Promise<OpenAI.ChatCompletionMessageParam[]> {
  if (!rag)
    return [
      {
        role: "system",
        content:
          "[SYSTEM]: No context from the database was provided for this query",
      },
    ];

  const searchTermAI = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `[SYSTEM]: You are an AI that will be given 
        a prompt and generate a search term that will be sent to
        an external system to retrieve information that may be
        relevant to answering or addressing the user's query. This
        external system uses semantic search to find relevant information.
        Generate a detailed search term based on the user's prompt.`,
      },
      { role: "user", content: prompt },
    ],
  });

  const searchTerm = searchTermAI.choices[0].message.content!;

  const ctx = await nearbyy.semanticSearch({
    limit: 5,
    query: searchTerm,
  });

  if (!ctx.success) {
    return [
      {
        role: "system",
        content:
          "[SYSTEM]: No context from the database was provided for this query",
      },
    ];
  }

  const ctxMessage = ctx.data.items
    .map((chunk) => `ChunkId: ${chunk.chunkId} - ${chunk.text}`)
    .join("\n\n");

  return [
    {
      role: "system",
      content: `[SYSTEM]: Context from the database: ${ctxMessage}`,
    },
  ];
}

export default { getRagContext, openai, nearbyy };