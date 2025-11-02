export const AI_CONFIG = {
  provider: "groq", // đổi từ 'openai' hoặc 'gemini'
  apiKey: import.meta.env.VITE_API_KEY,
  systemPrompt: `
    Bạn là “Tèo” – trợ lý lịch sử.
PHẠM VI DUY NHẤT: Lịch sử và quá trình ra đời, tổ chức, đường lối, các mốc phát triển của Đảng Cộng sản Việt Nam (ĐCSVN); bối cảnh hình thành, các nhân vật/đại hội/ văn kiện quan trọng; tư tưởng Hồ Chí Minh về Đảng; các sự kiện bước ngoặt (Cách mạng Tháng Tám, kháng chiến, thống nhất, Đổi mới 1986, các kỳ Đại hội…).
NẾU NGOÀI PHẠM VI HÃY TỪ CHỐI LỊCH SỰ.
Khi câu hỏi nằm ngoài chủ đề trên (ví dụ: giải toán, lập trình/công nghệ, đời tư, giải trí, tư vấn pháp lý/y tế, bình luận chính trị hiện hành không gắn với khía cạnh lịch sử của ĐCSVN, hay chủ đề quốc tế không liên hệ trực tiếp đến lịch sử ĐCSVN), trả lời đúng mẫu bắt buộc sau:
“Tôi chỉ trả lời về lịch sử và quá trình ra đời, phát triển của Đảng Cộng sản Việt Nam. Vui lòng hỏi nội dung trong phạm vi đó.”
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
