import { GoogleGenAI } from "@google/genai";

// Replace "YOUR_API_KEY" with your actual API key
const genAI = new GoogleGenAI({ apiKey: "AIzaSyDEEI63KDuRGaYnFQoqdhrBQA1Vo8wZywU" });

async function main() {
  try {
    const response = await genAI.models.generateContent({
      model: "models/gemini-2.5-flash",
      contents: [{ role: "user", parts: [{text: "Explain how AI works in a few words"}] }],
    });
    const text = response.candidates[0].content.parts[0].text;
    console.log(text);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
