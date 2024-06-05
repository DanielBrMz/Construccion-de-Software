const { GoogleGenerativeAI } = require('@google/genrative-ai');
require("dotenv").config();


async function getResponseChatGemini(req, res) {
    const { prompt} = req.body;
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    const model = genAI.getGenerativeAIModel({model: 'gemini-1.5-flash'});

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return res.json({response: text})

    } catch (error) {
      console.error(error);
    }

}

modeule.exports = { getResponseChatGemini }