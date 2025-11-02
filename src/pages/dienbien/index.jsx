import React from "react";

const DIEN_BIEN_PHASES = [
  {
    phase: "ĐỢT 1",
    date: "13 - 17/3/1954",
    description: "Quân ta tiêu diệt gọn cứ điểm Him Lam và Độc Lập, bức hàng cứ điểm Bân Kéo, phá vỡ hệ thống phòng ngự trên hướng Bắc và Đông Bắc của tập đoàn cứ điểm Điện Biên Phủ; mở toang cánh cửa cho quân ta tiến xuống vùng lòng chảo và khu trung tâm.",
    detail: "Hai tiểu đoàn tinh nhuệ nhất của địch bị tiêu diệt, một tiểu đoàn khác và 3 đại đội ngụy Thái tan rã. Một số lượng lớn pháo của địch bị ta phá hủy hoàn toàn. Hầu hết các máy bay chiến đấu trong vùng lòng chảo đều bị ta tiêu diệt.",
    images: [
      "https://file3.qdnd.vn/data/images/0/2024/03/13/upload_2178/cu%20diem%20himlam.jpg?dpi=150&quality=100&w=870",
      "https://bcp.cdnchinhphu.vn/334894974524682240/2024/3/11/060517ha62-17101447894031642829051.jpg"
    ]
  },
  {
    phase: "ĐỢT 2", 
    date: "30/3 - 30/4/1954",
    description: "Quân ta đồng loạt tiến công các cứ điểm phía Đông phân khu trung tâm.",
    detail: "Ta tiêu diệt khoảng 5.000 tên địch; không chế phần lớn điểm cao phía đông, phát triển trận địa tới sát sân bay, thắt chặt vòng vây, chia cắt, không chế các khu vực còn lại trong tập đoàn cứ điểm Điện Biên Phủ; kiểm soát sân bay Mường Thanh, hạn chế tiếp vận của địch cho tập đoàn cứ điểm.",
    images: [
      "https://file3.qdnd.vn/data/images/0/2024/04/03/upload_1021/chien_thang_dien_bien_phu_751954_%20_752021_dinh_cao_choi_loi_trong_lich_su_dau_tranh_chong_ngoai_xam_cua_dan_toc_viet_nam_stand%201.jpg?dpi=150&quality=100&w=870"
    ]
  },
  {
    phase: "ĐỢT 3",
    date: "1 - 7/5/1954", 
    description: "Quân ta đánh chiếm các cứ điểm còn lại ở phía Đông, diệt một số cứ điểm phía Tây và mở đợt tổng công kích tiêu diệt toàn bộ tập đoàn cứ điểm Điện Biên Phủ.",
    detail: [
      "17 giờ ngày 6/5/1954, pháo binh và hỏa tiễn của ta bắn vào các cứ điểm địch, mở đường cho bộ binh tiến công. Tại khu đội A1, sau khi cho nổ 1 tấn bộc phá tiêu diệt hầm ngầm địch, bộ đội ta chia làm nhiều mũi, theo các đường hào đánh lên đỉnh đồi.",
      "17 giờ 30 phút ngày 7/5/1954, Tướng De Castries cùng toàn bộ Bộ Tham mưu của tập đoàn cứ điểm Điện Biên Phủ bị bắt sống. Ngay trong đêm đó, quân ta tiếp tục tiến công phân khu Nam, đánh dích tháo chạy về Thượng Lào. Đến 22 giờ, toàn bộ quân địch đã bị bắt làm tù binh."
    ],
    images: [
      "/images/dienbien/dot3_1.jpg",
      "/images/dienbien/dot3_2.jpg"
    ]
  }
];

export default function DienBienPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-800 via-red-700 to-red-900">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <h1 className="font-bungee text-6xl text-yellow-400 mb-4 drop-shadow-lg">
              DIỄN BIẾN CHIẾN DỊCH
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-xl text-red-100 max-w-3xl mx-auto font-brygada">
              56 ngày đêm kiên cường chiến đấu, từ 13/3 đến 7/5/1954
            </p>
          </header>

          {/* Main Content */}
          <div className="space-y-16">
            {DIEN_BIEN_PHASES.map((phase, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-16 items-start">
                
                {/* Left Column - Phase Info and Images */}
                <div className="space-y-6">
                  {/* Phase Header */}
                  <div className="flex items-center gap-6 pb-16">
                    <div className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg border-4 border-yellow-300 shadow-lg">
                      <h2 className="font-bungee text-2xl font-bold">{phase.phase}</h2>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-yellow-300 shadow-lg"></div>
                      <span className="font-bungee text-2xl text-yellow-400 drop-shadow-lg">
                        {phase.date}
                      </span>
                    </div>
                  </div>

                  {/* Diamond Images */}
                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                    {phase.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative">
                        <div className="w-48 h-48 transform rotate-45 overflow-hidden border-4 border-yellow-400 shadow-xl">
                          <div className="w-full h-full transform -rotate-45 scale-150">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
  <img 
    src={image} 
    alt={`${phase.phase} - Image ${imgIndex + 1}`} 
    className="w-full h-full object-cover" 
  />
</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Description */}
                <div className=" backdrop-blur-sm rounded-3xl p-8  shadow-2xl" 
                style={{background:'#5D0404'}}
                >
                  <div className="space-y-6">
                    <p className="text-white leading-relaxed text-lg font-grenze">
                      {phase.description}
                    </p>
                    
                    {Array.isArray(phase.detail) ? (
                      <div className="space-y-4">
                        {phase.detail.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-white text-lg leading-relaxed font-grenze text-base">
                            {detail}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-white leading-relaxed text-lg font-grenze text-base">
                        {phase.detail}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dotted Separator Line */}
          <div className="my-16">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Victory Section */}
          <div className="text-center py-16">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-12 shadow-2xl border-4 border-yellow-300">
              <h3 className="font-bungee text-4xl text-red-900 mb-6">
                CHIẾN THẮNG LỊCH SỬ
              </h3>
              <p className="text-xl text-red-800 max-w-4xl mx-auto font-brygada leading-relaxed">
                Chiến thắng Điện Biên Phủ đã làm nên một kỳ tích trong lịch sử chiến tranh giải phòng dân tộc của nhân dân ta, 
                góp phần quyết định vào thắng lợi của cuộc kháng chiến chống thực dân Pháp, 
                buộc thực dân Pháp phải ký Hiệp định Genève, chấm dứt chiến tranh ở Đông Dương.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
