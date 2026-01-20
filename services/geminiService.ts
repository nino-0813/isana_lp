
import { GoogleGenAI, Type } from "@google/genai";
import { UserInput, ReadingResult } from "../types";

export const getNumerologyReading = async (input: UserInput): Promise<ReadingResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `あなたは世界最高峰の神秘数秘術師であり、心理カウンセラーでもあります。以下の情報を元に、鑑定を行ってください。

名前: ${input.name}
生年月日: ${input.birthDate}

鑑定のガイドライン:
1. 生年月日から「ライフパスナンバー（誕生数）」を算出してください（1-9, 11, 22, 33）。
2. 結果は、単なる性格診断ではなく「魂の使命」「潜在能力」「人生の転機」を深く掘り下げてください。
3. ユーザーが自分を肯定し、明日から前向きになれるような、温かくも深みのある神秘的なトーンで記述してください。
4. 言葉選びは美しく、詩的な表現を心がけてください。
5. 日本語で回答してください。`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          lifePathNumber: { type: Type.NUMBER },
          reading: { type: Type.STRING, description: "Deep and mystical personality/destiny reading (approx 400-600 chars)" },
          advice: { type: Type.STRING, description: "A powerful one-sentence advice for the soul" },
          keywords: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "3-5 mystical power keywords"
          }
        },
        required: ["lifePathNumber", "reading", "advice", "keywords"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("鑑定結果が空です");
  
  const result = JSON.parse(text);
  return result as ReadingResult;
};
