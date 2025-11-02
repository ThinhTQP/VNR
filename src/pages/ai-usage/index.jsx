import "./styles.css";

const AiUsagePage = () => {
  return (
    <div
      id="ai_usage_page"
      className="w-full flex flex-col items-center gap-10 overflow-y-auto px-20 md:px-4 pt-30"
    >
      <h1 className="font-bungee text-[36px]">AI Usage</h1>
      {/* ChatGPT */}
      <div className="w-full flex flex-col gap-6 px-10">
        <h2 className="font-bungee text-[28px]">1. ChatGPT</h2>
        <p className="font-grenze text-[24px]">Mục Đích</p>
        <p>
          • Sử dụng để recap lại các nội dung, kiến thức từ các nguồn tài liệu.
        </p>
        <p>• Sử dụng để gợi ý thiết kế cấu trúc website.</p>
        <p>
          • Sử dụng để tìm nguồn trích dẫn các câu nói của các nhân vật nổi
          tiếng về Tư Tưởng Hồ Chí Minh.
        </p>
        <p className="font-grenze text-[24px]">Hình Ảnh Quá Trình Sử Dụng</p>
        <div className="w-full flex flex-col items-center gap-4">
          <img
            src="/images/ai-usage/1.jpg"
            alt="chatgpt1"
            className="w-1/2 rounded-lg"
          />
          <img
            src="/images/ai-usage/2.jpg"
            alt="chatgpt2"
            className="w-1/2 rounded-lg"
          />
          <img
            src="/images/ai-usage/3.jpg"
            alt="chatgpt3"
            className="w-1/2 rounded-lg"
          />
          <img
            src="/images/ai-usage/4.jpg"
            alt="chatgpt4"
            className="w-1/2 rounded-lg"
          />
          <img
            src="/images/ai-usage/5.jpg"
            alt="chatgpt5"
            className="w-1/2 rounded-lg"
          />
        </div>
      </div>

      {/* NoteGPT */}
      <div className="w-full flex flex-col gap-6 px-10">
        <h2 className="font-bungee text-[28px]">2. NoteGPT.io</h2>
        <p className="font-grenze text-[24px]">Mục Đích</p>
        <p>
          • Sử dụng để transcript các nội dung từ video, từ đó có được tài liệu.
        </p>
        <p className="font-grenze text-[24px]">Hình Ảnh Quá Trình Sử Dụng</p>
        <div className="w-full flex flex-col items-center gap-4">
          <img
            src="/images/ai-usage/6.jpg"
            alt="noteGPT1"
            className="w-1/2 rounded-lg"
          />
        </div>
      </div>

      {/* v0.dev */}
      <div className="w-full flex flex-col gap-6 px-10">
        <h2 className="font-bungee text-[28px]">3. v0.dev</h2>
        <p className="font-grenze text-[24px]">Mục Đích</p>
        <p>• AI giúp hỗ trợ và xây dựng UI/UX cho website.</p>

        <p className="font-grenze text-[24px]">Hình Ảnh Quá Trình Sử Dụng</p>
        <div className="w-full flex flex-col items-center gap-4">
          <img
            src="/images/ai-usage/8.jpg"
            alt="v0.dev"
            className="w-1/2 rounded-lg"
          />
        </div>
      </div>

      {/* groq */}
      <div className="w-full flex flex-col gap-6 px-10">
        <h2 className="font-bungee text-[28px]">4. groq</h2>
        <p className="font-grenze text-[24px]">Mục Đích</p>
        <p>• Generate API Keys phục vụ cho AI-Chatbot.</p>

        <p className="font-grenze text-[24px]">Hình Ảnh Quá Trình Sử Dụng</p>
        <div className="w-full flex flex-col items-center gap-4">
          <img
            src="/images/ai-usage/9.jpg"
            alt="groq"
            className="w-1/2 rounded-lg"
          />
        </div>
      </div>

      <div className="w-full mb-50 flex flex-col items-center mt-50">
        <p className="font-grenze text-[36px] font-bold">
          Cam kết sử dụng AI thông minh
        </p>

        <div className="w-8/12 bg-white/30 rounded-lg p-6 mt-6">
          <p className="font-grenze text-[20] text-justify font-light">
            Nhóm chúng tôi cam kết sử dụng trí tuệ nhân tạo (AI) một cách thông
            minh, có tư duy phản biện và có trách nhiệm. AI được xem như một
            công cụ hỗ trợ tra cứu, tổng hợp và gợi ý thông tin, giúp nhóm tiết
            kiệm thời gian trong quá trình nghiên cứu và thiết kế nội dung. Tuy
            nhiên, mọi dữ liệu và thông tin được trích xuất từ AI đều được kiểm
            chứng, đối chiếu với các nguồn chính thống — đặc biệt là các bài
            báo, cổng thông tin và tài liệu được công bố bởi Chính phủ Việt Nam,
            Báo Nhân Dân, Báo điện tử Chính phủ, và Thông tấn xã Việt Nam. Nhóm
            tuyệt đối không sử dụng AI để tạo ra thông tin chưa được xác thực
            hoặc xuyên tạc giá trị lịch sử, mà chỉ vận dụng AI như một người
            đồng hành học thuật, góp phần lan tỏa tri thức, tôn trọng sự thật và
            giữ vững tính chính xác, khoa học trong từng nội dung sản phẩm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiUsagePage;
