import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are an expert interior designer for "Qiwuji" (栖物集), a brand specializing in student dormitory makeovers. 
        Your tone is warm, encouraging, and budget-conscious. 
        Keep advice practical for small dorm spaces (approx 10-15 sqm). 
        Suggest items like lighting, storage solutions, bedding, and wall decor that are easy to install and remove.
        Mention our services briefly if relevant: 
        1. Online Blueprint Design (10 CNY)
        2. Door-to-Door Decoration (60 CNY).
        Keep the response concise (under 150 words).`,
      },
    });
    
    return response.text || "I'm having trouble visualizing that right now. Please try asking again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our design AI is currently taking a coffee break. Please try again later.";
  }
};