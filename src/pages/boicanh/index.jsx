import React from "react";

// ContextSection.jsx
// React component (Tailwind) showing the "Bối cảnh" section for the Điện Biên Phủ website.
// Usage: import ContextSection from './ContextSection'; <ContextSection />

const TIMELINE = [
  {
    year: "1945",
    title: "Cách mạng Tháng Tám & Hồ Chí Minh",
    description:
      "Cách mạng Tháng Tám thành công, nước Việt Nam Dân chủ Cộng hòa ra đời; nhân dân đoàn kết dưới sự lãnh đạo của Đảng.",
  },
  {
    year: "1947",
    title: "Chiến dịch Việt Bắc (Thu–Đông)",
    description:
      "Ta tổ chức kháng chiến, đánh bại các chiến dịch của Pháp, củng cố căn cứ Việt Bắc.",
  },
  {
    year: "1950",
    title: "Chiến dịch Biên Giới",
    description:
      "Thắng lợi tạo bước ngoặt: mở thông biên giới, nhận viện trợ, chuyển sang thế chủ động chiến lược.",
  },
  {
    year: "1951–1953",
    title: "Hòa Bình, Tây Bắc, Thượng Lào",
    description:
      "Chuỗi chiến thắng mở rộng vùng giải phóng và củng cố hậu phương cho chiến dịch lớn hơn.",
  },
];

export default function ContextSection({ className = "" }) {
  return (
    <section className={`py-16 bg-white ${className}`} aria-label="Bối cảnh lịch sử">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="font-bungee text-5xl text-[#5D0404] mb-6">Bối Cảnh Lịch Sử</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-brygada">
            Tóm tắt bối cảnh quốc tế và trong nước dẫn tới Chiến dịch Điện Biên Phủ (1954)
          </p>
        </header>

        {/* Tổng Quan - ở trên đầu */}
        <article className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-3xl p-8 shadow-xl border border-red-100 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-3 h-8 bg-[#5D0404] rounded-full mr-4"></div>
            <h3 className="text-2xl font-bold text-[#5D0404] font-brygada">Tổng Quan</h3>
          </div>
          <p className="text-gray-800 leading-relaxed mb-8 font-grenze text-lg">
            Sau Cách mạng Tháng Tám 1945, nước ta bước vào cuộc kháng chiến chống thực dân Pháp.
            Qua các chiến dịch Việt Bắc (1947), Biên Giới (1950), Hòa Bình (1951–1952), Tây
            Bắc (1952) và Thượng Lào (1953), lực lượng ta trưởng thành, vùng giải phóng mở
            rộng, tạo điều kiện cho một trận quyết chiến chiến lược tại Điện Biên Phủ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-70 rounded-2xl p-4">
              <dt className="font-bold text-[#5D0404] mb-2 font-brygada">Mấu chốt:</dt>
              <dd className="text-gray-700 font-grenze">Pháp lập "Kế hoạch Navarre" (1953) và tập trung ở Điện Biên Phủ.</dd>
            </div>
            <div className="bg-white bg-opacity-70 rounded-2xl p-4">
              <dt className="font-bold text-[#5D0404] mb-2 font-brygada">Mục tiêu của ta:</dt>
              <dd className="text-gray-700 font-grenze">Tiêu diệt tập đoàn cứ điểm, phá kế hoạch Navarre, giành ưu thế trước Geneva.</dd>
            </div>
          </div>
        </article>

        {/* Main Content - chia 2 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cột trái: Kế hoạch Navarre, Kế hoạch Đông-Xuân, và ảnh Tướng */}
          <div className="space-y-8">
            {/* Kế hoạch Navarre */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold">🇫🇷</span>
                </div>
                <h4 className="text-2xl font-bold font-brygada">Kế Hoạch Navarre</h4>
              </div>
              <p className="text-red-100 leading-relaxed font-grenze text-lg">
                Năm 1953, Tướng Henri Navarre được giao chỉ huy và đề ra kế hoạch 18 tháng nhằm
                tập trung lực lượng cơ động, lập tập đoàn cứ điểm ở Điện Biên Phủ để tiêu diệt
                lực lượng chủ lực của ta trước khi tiến hành đàm phán quốc tế.
              </p>
            </div>

            {/* Kế hoạch Đông-Xuân */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold">🇻🇳</span>
                </div>
                <h4 className="text-2xl font-bold font-brygada">Kế Hoạch Đông–Xuân</h4>
              </div>
              <p className="text-yellow-100 leading-relaxed font-grenze text-lg">
                Phía ta xây dựng kế hoạch Đông–Xuân 1953–1954 với phương châm "tích cực, chủ động,
                cơ động, linh hoạt" để phân tán lực lượng địch, khai thác sơ hở và chọn điểm quyết
                chiến thuận lợi — dẫn tới chiến dịch Điện Biên Phủ.
              </p>
            </div>

            {/* Ảnh Tướng Navarre */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-gray-600 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-800 font-brygada">Tướng Navarre</h3>
              </div>
              
              <img
                src="https://baotanglichsu.vn/DataFiles/Uploaded/image/dienbienphuI-A.gif"
                alt="Tướng Henri Navarre"
                className="w-full max-h-72 object-cover rounded-2xl shadow-md mb-4"
              />

              <div className="space-y-4">
                <div className="bg-white bg-opacity-70 rounded-2xl p-4">
                  <h5 className="font-bold text-gray-800 mb-2 font-brygada text-sm">Henri Navarre</h5>
                  <p className="text-gray-600 text-sm font-grenze">Tổng chỉ huy quân đội Pháp tại Đông Dương (1953-1954)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-3 h-8 bg-gradient-to-b from-red-600 to-yellow-500 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-[#5D0404] font-brygada">Mặt Trận Quân Sự</h3>
            </div>
            <ol className="relative border-l-4 border-red-600">
              {TIMELINE.map((item, idx) => (
                <li key={idx} className="mb-12 ml-8 group">
                  <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 text-xs">
                    {item.year}
                  </span>
                  <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-6 ml-4 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl font-bold text-[#5D0404] mb-3 font-brygada">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed font-grenze text-lg">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        

      </div>
    </section>
  );
}