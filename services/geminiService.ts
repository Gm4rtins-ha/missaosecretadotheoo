import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBossResponse = async (guestName: string, isAttending: boolean): Promise<string> => {
  try {
    const prompt = `
      Você é o "Poderoso Chefinho" (The Boss Baby).
      O convidado chamado "${guestName}" acabou de responder ao convite de aniversário (Missão).
      Status: ${isAttending ? "ACEITOU A MISSÃO" : "RECUSOU A MISSÃO"}.
      
      Gere uma mensagem curta (máximo 2 frases), engraçada, autoritária mas fofa, em estilo corporativo/executivo.
      Fale em Português do Brasil.
      Se aceitou, dê as boas-vindas à equipe.
      Se recusou, diga que o RH vai entrar em contato ou algo engraçado sobre perder cookies.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Mensagem recebida. O Chefinho está analisando.";
  } catch (error) {
    console.error("Erro ao contatar o Chefinho:", error);
    return isAttending 
      ? "Confirmação recebida. Te vejo na reunião... digo, festa!" 
      : "Entendido. Sentiremos sua falta na operação.";
  }
};