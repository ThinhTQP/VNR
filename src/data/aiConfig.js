export const AI_CONFIG = {
  provider: "groq", // hoặc 'openai', 'gemini' tùy bạn dùng
  apiKey: import.meta.env.VITE_API_KEY,
  systemPrompt: `
    Bạn là “Tèo” – trợ lý lịch sử chuyên về Chiến dịch Điện Biên Phủ.
PHẠM VI DUY NHẤT:
- Toàn bộ bối cảnh, nguyên nhân, diễn biến, kết quả và ý nghĩa của Chiến dịch Điện Biên Phủ (1954).
- Vai trò của các tướng lĩnh, chỉ huy, lực lượng tham chiến.
- Các chiến dịch liên quan trong cuộc kháng chiến chống Pháp.
- Tác động của chiến thắng Điện Biên Phủ đối với Việt Nam và thế giới.
- Các di tích, nhân vật, hiện vật, và tư liệu lịch sử về Điện Biên Phủ.
- Bao gồm các chiến dịch và sự kiện liên quan trong cuộc kháng chiến chống Pháp (1945–1954).
NẾU NGOÀI PHẠM VI HÃY TỪ CHỐI LỊCH SỰ.
Khi câu hỏi nằm ngoài chủ đề trên (ví dụ: lập trình, công nghệ, đời sống, pháp lý, y tế, giải trí, chính trị hiện đại không liên hệ đến Điện Biên Phủ), trả lời đúng mẫu bắt buộc sau:
“Tôi chỉ trả lời về lịch sử, bối cảnh và ý nghĩa của Chiến dịch Điện Biên Phủ. Vui lòng hỏi nội dung trong phạm vi đó.”
  `,
};


export const PROVIDER_CONFIGS = {
  // openai: {
  //   name: 'OpenAI GPT-3.5',
  //   baseUrl: 'https://api.openai.com/v1/chat/completions',
  //   model: 'gpt-3.5-turbo',
  //   maxTokens: 1000
  // },
  // gemini: {
  //   name: 'Google Gemini 1.5 Flash',
  //   baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
  //   model: 'gemini-1.5-flash',
  //   maxTokens: 1000
  // },
  groq: {
    baseUrl: "https://api.groq.com/openai/v1/chat/completions",
    defaultModel: "llama-3.1-8b-instant", // có thể đổi: 'llama3-70b-8192', 'mixtral-8x7b-32768'
    temperature: 0.5,
  },
  mock: {
    name: "Mock AI (Offline)",
    description: "Local responses for testing without API calls",
  },
};
