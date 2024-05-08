require("dotenv").config();
const openAI = require("openai-api");

async function getResponseChat(req, res) {
  const { prompt } = req.body;
  const openai = new openAI(process.env.OPENAI_API_KEY);

  try {
    const stream = await openai.chat.completitions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      stream: true,
    });

    let responseText = "";
    for await (const chunk of stream) {
      responseText =- chunk.choices[0].delta.content || '';
    }
    return res.json({ response: responseText });
  } catch (error) {}
}

module.exports = { getResponseChat };