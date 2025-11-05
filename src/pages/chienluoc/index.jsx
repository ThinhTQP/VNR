import { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

// ============================================================================
// Constants - Timeline Data
// ============================================================================

const CAMPAIGN_TIMELINE = [
  {
    id: 1,
    period: "12/1951 - 2/1952",
    title: "Chiến dịch Hòa Bình",
    objectives: [
      "Đánh bại kế hoạch Đờ Lát Đờ Tátxinhi",
      "Tiêu diệt sinh lực Pháp",
      "Bảo vệ Liên khu 3-4",
    ],
    category: "Quân sự",
  },
  {
    id: 2,
    period: "9-12/1952",
    title: "Chiến dịch Tây Bắc Thu Đông",
    objectives: [
      "Giải phóng Sơn La, Lai Châu",
      "Phá âm mưu lập 'Xứ Thái tự trị' của Pháp",
    ],
    category: "Quân sự",
  },
  {
    id: 3,
    period: "4/1953",
    title: "Chiến dịch Thượng Lào",
    objectives: [
      "Giải phóng Hủa Phăn, Xiêng Khoảng",
      "Mở rộng căn cứ địa liên minh Việt-Lào",
    ],
    category: "Quân sự",
  },
  {
    id: 4,
    period: "8/5/1952",
    title: "Tập kích Phú Thọ",
    objectives: [
      "Đốt 5 triệu lít xăng",
      "Phá 1.000 quả bom",
      "Tiêu diệt 1 đại đội Pháp",
    ],
    category: "Quân sự",
  },
];

const STRATEGY_DECISION_TIMELINE = [
  {
    id: 1,
    date: "4/1952",
    event: "Hội nghị TW 3",
    title: "Chỉnh Đảng, Chỉnh Quân",
    tasks: [
      "Chủ trương cải cách Đảng và quân đội",
      "Đây là nhiệm vụ trọng tâm giai đoạn 1952-1953",
    ],
    category: "Chính Trị",
    isHighlight: false,
  },
  {
    id: 2,
    date: "9/1953",
    event: "Bộ Chính trị họp",
    title: "Nghiên cứu kế hoạch",
    tasks: ["Chỉ đạo nghiên cứu kế hoạch tác chiến mới"],
    category: "Chính Trị",
    isHighlight: false,
  },
  {
    id: 3,
    date: "Cuối 9/1953",
    event: "Bộ Chính trị thông qua",
    title: "Chủ trương Tiến Công",
    tasks: [
      "Thông qua chủ trương tiến công Đông Xuân 1953-1954",
      "Xác định ba mục tiêu chiến lược",
    ],
    category: "Chính Trị",
    isHighlight: false,
  },
  {
    id: 4,
    date: "12/1953",
    event: "Bộ Tổng Tham mưu",
    title: "Hoàn chỉnh kế hoạch",
    tasks: ["Chuẩn bị chi tiết cho chiến dịch"],
    category: "Chính Trị",
    isHighlight: false,
  },
  {
    id: 5,
    date: "6/12/1953",
    event: "QUYẾT ĐỊNH LỊCH SỬ",
    title: "Mở Chiến dịch Điện Biên Phủ",
    tasks: [
      "Đại tướng Võ Nguyên Giáp - Tư lệnh chiến dịch",
      "Đại tướng Võ Nguyên Giáp - Bí thư Đảng ủy chiến dịch",
    ],
    category: "Chính Trị",
    isHighlight: true,
  },
];

const LAND_REFORM_TIMELINE = [
  {
    id: 1,
    date: "1/1953",
    event: "Hội nghị TW 4",
    content: "Kiểm điểm chính sách ruộng đất",
    category: "Cải Cách",
  },
  {
    id: 2,
    date: "11/1953",
    event: "Hội nghị TW 5",
    content: "Thông qua Cương lĩnh ruộng đất (23 điều)",
    category: "Cải Cách",
  },
  {
    id: 3,
    date: "4/12/1953",
    event: "Quốc hội khóa I",
    content: "Ban hành Luật Cải cách Ruộng đất",
    category: "Cải Cách",
  },
  {
    id: 4,
    date: "19/12/1953",
    event: "Chủ tịch Hồ Chí Minh",
    content: "Ký Sắc lệnh thực thi Luật",
    category: "Cải Cách",
  },
];

const SUPPORT_TIMELINE = [
  {
    id: 1,
    period: "12/1953 - 1/1954",
    region: "Các chiến trường chiến lược",
    operations: [
      "Lai Châu",
      "Trung Lào",
      "Hạ Lào",
      "Đông Bắc Campuchia",
      "Tây Nguyên",
      "Thượng Lào",
    ],
    category: "Chi Viện",
  },
  {
    id: 2,
    period: "Liên tục",
    region: "Các mặt trận khác",
    operations: [
      "Bình Trị Thiên, Nam Trung Bộ, Nam Bộ",
      "Phá tề, trừ gian, phá hủy giao thông",
      "Chiến tranh du kích",
    ],
    category: "Chi Viện",
  },
];

// ============================================================================
// Components
// ============================================================================

const TimelineCard = ({ item, index, type = "campaign" }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getColorScheme = () => {
    switch (type) {
      case "campaign":
        return { bg: "bg-red-50", border: "border-red-500", text: "text-red-600", dot: "bg-red-600" };
      case "strategy":
        return item.isHighlight
          ? { bg: "bg-gradient-to-r from-red-600 to-red-700", border: "border-yellow-500", text: "text-white", dot: "bg-yellow-400" }
          : { bg: "bg-blue-50", border: "border-blue-500", text: "text-blue-600", dot: "bg-blue-600" };
      case "reform":
        return { bg: "bg-green-50", border: "border-green-500", text: "text-green-600", dot: "bg-green-600" };
      case "support":
        return { bg: "bg-orange-50", border: "border-orange-500", text: "text-orange-600", dot: "bg-orange-600" };
      default:
        return { bg: "bg-gray-50", border: "border-gray-500", text: "text-gray-600", dot: "bg-gray-600" };
    }
  };

  const colors = getColorScheme();

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`flex items-center ${index % 2 === 0 ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"} mb-8`}
    >
      <div className="md:w-1/2 w-full px-4">
        <div
          className={`${colors.bg} rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 border-l-4 ${colors.border}`}
        >
          <div className="mb-2">
            {item.period && (
              <div className="flex items-center mb-1">
                <FaCalendarAlt className={`mr-2 ${colors.text} text-sm`} />
                <span className={`font-bold ${colors.text} text-sm`}>{item.period}</span>
              </div>
            )}
            {item.date && (
              <div className="flex items-center mb-1">
                <FaCalendarAlt className={`mr-2 ${colors.text} text-sm`} />
                <span className={`font-bold ${colors.text} text-sm`}>{item.date}</span>
              </div>
            )}

            {item.event && (
              <h4
                className={`text-sm font-bold px-2 py-0.5 rounded-full mb-1 inline-block ${
                  item.isHighlight
                    ? "bg-yellow-300 text-red-700"
                    : type === "campaign"
                    ? "bg-red-100 text-red-600"
                    : type === "strategy"
                    ? "bg-blue-100 text-blue-600"
                    : type === "reform"
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {item.event}
              </h4>
            )}
          </div>

          <h3 className={`text-base font-bold ${item.isHighlight ? "text-white" : "text-gray-900"} mb-2`}>
            {item.title}
          </h3>

          {/* Objectives / Tasks */}
          {item.objectives && (
            <div className="space-y-1 mb-2">
              {item.objectives.map((obj, i) => (
                <div key={i} className="flex items-start">
                  <span className={`${colors.text} mr-2 mt-0.5 text-sm`}>▸</span>
                  <p className={`text-sm ${item.isHighlight ? "text-red-50" : "text-gray-700"}`}>{obj}</p>
                </div>
              ))}
            </div>
          )}

          {item.tasks && (
            <div className="space-y-1 mb-2">
              {item.tasks.map((task, i) => (
                <div key={i} className="flex items-start">
                  <span className={`${item.isHighlight ? "text-yellow-300" : colors.text} mr-2 mt-0.5 text-sm`}>▪</span>
                  <p className={`text-sm ${item.isHighlight ? "text-red-50" : "text-gray-700"}`}>{task}</p>
                </div>
              ))}
            </div>
          )}

          {item.content && <p className={`text-sm ${item.isHighlight ? "text-red-50" : "text-gray-600"}`}>{item.content}</p>}

          {item.operations && (
            <ul className="space-y-1">
              {item.operations.map((op, i) => (
                <li key={i} className="flex items-start">
                  <span className={`${colors.text} mr-2 text-sm`}>▸</span>
                  <span className="text-gray-700 text-sm">{op}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Timeline Dot - Hidden on mobile */}
      <div className="md:w-10 md:flex hidden justify-center relative">
        <div
          className={`w-5 h-5 rounded-full border-4 border-white shadow-lg ${colors.dot} absolute top-0`}
        />
      </div>

      <div className="md:w-1/2 hidden md:block" />
    </motion.div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

export default function StrategySection({ className = "" }) {
  return (
    <section className={`min-h-screen bg-white py-16 ${className}`} aria-label="Chuẩn bị chiến lược">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========== HEADER ========== */}
        <header className="mb-20 text-center">
          <h1 className="font-bungee text-5xl text-[#5D0404] mb-4">Chuẩn Bị Chiến Lược (1951-1954)</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-6" />
          <p className="text-lg text-gray-700 max-w-4xl mx-auto font-brygada leading-relaxed mb-8">
            Quá trình chuẩn bị toàn diện: Tích lũy kinh nghiệm quân sự, Chỉnh Đảng chỉnh quân, Cải cách ruộng đất, Chi viện tiền tuyến
          </p>

          {/* Video */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/oQH-viC-Q1c"
                title="Chuẩn Bị Chiến Lược"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </header>

        {/* ========== PHẦN I: CHIẾN DỊCH TIỀN ĐỀ ========== */}
        <section className="mb-24">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold text-[#5D0404] font-brygada">I. Chiến Dịch Tiền Đề - Tích Lũy Kinh Nghiệm</h2>
          </div>

          <p className="text-gray-700 font-grenze text-base leading-relaxed mb-12">
            <strong className="text-[#5D0404] text-3xl font-bold">Mục đích chung: Tiêu diệt sinh lực địch, tạo điều kiện phát triển chiến tranh du kích, rèn luyện quân đội, tích lũy kinh nghiệm chiến đấu</strong> 
          </p>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-red-400" />
            <div className="space-y-8">
              {CAMPAIGN_TIMELINE.map((campaign, index) => (
                <TimelineCard key={campaign.id} item={campaign} index={index} type="campaign" />
              ))}
            </div>
          </div>
        </section>

        {/* ========== PHẦN II: CHỈNH ĐẢNG CHỈNH QUÂN ========== */}
        <section className="mb-24">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold text-[#5D0404] font-brygada">II. Chỉnh Đảng, Chỉnh Quân</h2>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-600 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-bold text-yellow-800 mb-2 font-brygada text-lg">Hội nghị TW 3 (4/1952)</h4>
                <p className="text-gray-700 text-base font-grenze">Nhiệm vụ trọng tâm giai đoạn 1952-1953</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-800 mb-2 font-brygada text-lg">Mục đích</h4>
                <ul className="text-gray-700 text-base font-grenze space-y-1">
                  <li>• Củng cố tổ chức Đảng</li>
                  <li>• Nâng cao năng lực lãnh đạo</li>
                  <li>• Tăng sức chiến đấu quân đội</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-yellow-800 mb-2 font-brygada text-lg">Kết quả</h4>
                <p className="text-gray-700 text-base font-grenze">
                  Tăng cường Đảng - Chính phủ - Nhân dân, mở rộng mặt trận đoàn kết dân tộc
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PHẦN III: QUYẾT ĐỊNH CHIẾN LƯỢC ========== */}
        <section className="mb-24">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold text-[#5D0404] font-brygada">III. Quyết Định Chiến Lược Đông Xuân 1953-1954</h2>
          </div>

          {/* Ba mục tiêu chiến lược */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12 border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-900 mb-6 text-xl font-brygada">Ba Mục Tiêu Chiến Lược:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-3">1</div>
                <p className="text-gray-700 font-grenze font-semibold text-base">Tiêu diệt sinh lực địch</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-3">2</div>
                <p className="text-gray-700 font-grenze font-semibold text-base">Bồi dưỡng lực lượng ta</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-3">3</div>
                <p className="text-gray-700 font-grenze font-semibold text-base">Giữ thế chủ động, buộc địch phân tán</p>
              </motion.div>
            </div>
          </div>

          {/* Timeline quyết định */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-red-600" />
            <div className="space-y-8">
              {STRATEGY_DECISION_TIMELINE.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} type="strategy" />
              ))}
            </div>
          </div>

          {/* Lời căn dặn */}
          <motion.div
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-gray-900 rounded-2xl p-8 text-white border-2 border-yellow-500 transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="text-5xl">⭐</span>
              <div>
                <h4 className="font-bold text-yellow-400 mb-3 font-brygada text-lg">Lời Căn Dặn của Chủ Tịch Hồ Chí Minh</h4>
                <blockquote className="italic text-gray-100 font-grenze leading-relaxed text-base">
                  "Chiến dịch này là một chiến dịch rất quan trọng, không những về quân sự mà cả về chính trị, không những đối với trong nước mà đối với quốc tế. Toàn Đảng, toàn dân, toàn quân phải tập trung hoàn thành cho kỳ được."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========== PHẦN IV: CẢI CÁCH RUỘNG ĐẤT ========== */}
        <section className="mb-24">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold text-[#5D0404] font-brygada">IV. Cải Cách Ruộng Đất</h2>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 mb-12 border-l-4 border-green-600">
            <h3 className="font-bold text-green-900 mb-4 font-brygada text-xl">Mục tiêu: "Người cày có ruộng"</h3>
            <p className="text-gray-700 font-grenze text-lg">
              Phát động giảm tô, giảm tức; tiến tới cải cách ruộng đất toàn diện
            </p>
          </div>

          {/* Trình tự thực hiện - Danh sách đơn giản */}
          <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600 mb-12">
            <h3 className="font-bold text-green-900 mb-4 font-brygada text-xl">Trình Tự Thực Hiện:</h3>
            <ul className="space-y-3">
              {LAND_REFORM_TIMELINE.map((item, index) => (
                <li key={item.id} className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-lg">{index + 1}.</span>
                  <div className="flex-1">
                    <p className="font-bold text-green-800 font-brygada text-base">{item.event} <span className="text-xs text-gray-600 font-grenze italic">({item.date})</span></p>
                    <p className="text-gray-700 text-base font-grenze">{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Kết quả & Ý nghĩa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-yellow-900 mb-3 font-brygada text-xl">Kết quả Thực Hiện</h3>
              <ul className="space-y-2 text-gray-700 font-grenze text-lg">
                <li>▪ Gần 180.000 héc ta ruộng đất tạm cấp</li>
                <li>▪ Hàng nghìn héc ta chia chính thức cho nông dân</li>
                <li>▪ Trâu bò, nông cụ chia cho nông dân nghèo</li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-900 mb-3 font-brygada text-xl">Ý Nghĩa Sâu Sắc</h3>
              <ul className="space-y-2 text-gray-700 font-grenze text-lg">
                <li>▪ Nức lòng bộ đội tiền tuyến</li>
                <li>▪ Tăng quyết tâm tiêu diệt giặc</li>
                <li>▪ Động viên chi viện Điện Biên Phủ</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ========== PHẦN V: CHI VIỆN TIỀN TUYẾN ========== */}
        <section className="mb-24">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold text-[#5D0404] font-brygada">V. Chi Viện Tiền Tuyến</h2>
          </div>

          <motion.div
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-orange-50 rounded-2xl p-8 mb-12 border-l-4 border-orange-600 transition-shadow"
          >
            <h3 className="text-center font-bold text-3xl text-orange-900 mb-6 font-brygada">
              "Tất Cả Cho Tiền Tuyến, Tất Cả Để Chiến Thắng"
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-2 font-brygada text-lg">Hệ Thống Tổ Chức</h4>
                <ul className="space-y-1 text-gray-700 font-grenze text-base">
                  <li>• Ủy ban chi viện tiền tuyến</li>
                  <li>• Hội đồng cung cấp Trung ương</li>
                  <li>• Hội đồng cung cấp địa phương</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-2 font-brygada text-lg">Phát Triển Kinh Tế</h4>
                <ul className="space-y-1 text-gray-700 font-grenze text-base">
                  <li>• Tăng gia sản xuất</li>
                  <li>• Cải cách tài chính</li>
                  <li>• Tự túc lương thực</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-2 font-brygada text-lg">Quy Mô Chi Viện</h4>
                <ul className="space-y-1 text-gray-700 font-grenze text-base">
                  <li>• Hàng vạn ngày công lao động</li>
                  <li>• Hàng vạn tấn lương thực</li>
                  <li>• Hàng vạn tấn đạn dược</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Hoạt động chi viện - Danh sách */}
          <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-600 mb-12">
            <h3 className="font-bold text-orange-900 mb-6 font-brygada text-xl">Hoạt Động Chi Viện:</h3>
            <div className="space-y-6">
              {SUPPORT_TIMELINE.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-start mb-3">
                    <span className="text-orange-600 font-bold text-lg mr-3">{index + 1}.</span>
                    <div>
                      <p className="font-bold text-orange-900 font-brygada text-base">{item.region} <span className="text-base text-orange-700 font-grenze italic">{item.period}</span></p>
                    </div>
                  </div>
                  <ul className="ml-8 space-y-2 mb-3">
                    {item.operations.map((op, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-orange-600 mr-2">▪</span>
                        <span className="text-gray-700 text-base font-grenze">{op}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Kết quả */}
          <motion.div
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white transition-shadow"
          >
            <h3 className="font-bold text-2xl mb-4 font-brygada text-center">Kết Quả</h3>
            <p className="text-center font-grenze leading-relaxed text-lg">
              Nhân dân cả nước đồng lòng, vượt núi rừng hiểm trở, cung cấp lương thực, đạn dược, phương tiện vận chuyển... "Tất cả vì tiền tuyến, tất cả để chiến thắng"
            </p>
          </motion.div>
        </section>

        {/* ========== TỔNG KẾT ========== */}
        <motion.section
          whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 border-2 border-red-600 transition-shadow"
        >
          <h2 className="text-3xl font-bold text-[#5D0404] mb-8 font-brygada text-center">
            Kết Luận: Chuẩn Bị Toàn Diện Cho Chiến Dịch Điện Biên Phủ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div whileHover={{ y: -10 }} className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">🎯</div>
              <p className="font-bold text-[#5D0404] mb-1 font-brygada text-lg">Quân Sự</p>
              <p className="text-gray-700 text-base font-grenze">Tích lũy kinh nghiệm qua các chiến dịch</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">⚙️</div>
              <p className="font-bold text-[#5D0404] mb-1 font-brygada text-lg">Chính Trị</p>
              <p className="text-gray-700 text-base font-grenze">Chỉnh Đảng, cải cách ruộng đất</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">🌾</div>
              <p className="font-bold text-[#5D0404] mb-1 font-brygada text-lg">Hậu Phương</p>
              <p className="text-gray-700 text-base font-grenze">Phát triển kinh tế, vững mạnh hậu phương</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">🚚</div>
              <p className="font-bold text-[#5D0404] mb-1 font-brygada text-lg">Chi Viện</p>
              <p className="text-gray-700 text-base font-grenze">Toàn dân chi viện tiền tuyến</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}