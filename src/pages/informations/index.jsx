import "./styles.css";

const maleAvatar = "/images/user/male.png";
const femaleAvatar = "/images/user/female.png";

const member = [
  {
    name: "Nguyễn Đức Cường",
    studentCode: "HE173301",
    role: "leader",
    gender: "male",
    task: [
      "Tìm kiếm thông tin",
      "Chia task",
      "Quản lý tiến độ",
      "Tổng hợp nội dung",
    ],
  },
  {
    name: "Hoàng Minh Lộc",
    studentCode: "SE182366",
    role: "member",
    gender: "male",
    task: ["Tạo Website", "Config AI Chatbot"],
  },
  {
    name: "Nguyễn Hoàng Anh",
    studentCode: "SE160378",
    role: "member",
    gender: "female",
    task: ["Tìm kiếm thông tin", "Hỗ trợ tìm kiếm hình ảnh"],
  },
  {
    name: "Hoàng Dương Thế Sơn",
    studentCode: "SE171281",
    role: "member",
    gender: "male",
    task: [
      "Tìm kiếm thông tin",
      "Hỗ trợ tìm kiếm các bài báo",
      "Tìm và tổng hợp các vận dụng",
    ],
  },
];

const references = [
  {
    title: "Video quá trình ra đời đảng Cộng Sản Việt Nam",
    type: "video",
    link: "https://www.youtube.com/watch?v=q15uNbkClAY",
  },
  {
    title: "Giáo trình Tư tưởng Hồ Chí Minh",
    type: "document",
    link: "https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2729/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20T%C6%B0%20t%C6%B0%E1%BB%9Fng%20HCM%20(K)%20Tr69%20-Tr141.pdf",
  },
  {
    title:
      "Bài báo Vận dụng tư tưởng Hồ Chí Minh về vai trò lãnh đạo của Đảng Cộng sản đối với cách mạng Việt Nam trong tình hình mới",
    type: "article",
    link: "https://tcnn.vn/news/detail/53602/Van-dung-tu-tuong-Ho-Chi-Minh-ve-vaitro-lanh-dao-cua-Dang-Cong-san-doi-voi-cach-mang-Viet-Nam-trong-tinh-hinhmoi.html",
  },
];

export default function InformationsPage() {
  return (
    <div
      id="informations_page"
      className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 md:px-8 lg:px-16 pt-30"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Thông tin chung về dự án
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dự án nghiên cứu lịch sử Đảng Cộng Sản Việt Nam và ứng dụng công
            nghệ AI trong giáo dục
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Thành viên nhóm
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {member.map((m, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                {/* Header with Avatar and Basic Info */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 ring-4 ring-blue-50">
                      <img
                        src={m.gender === "male" ? maleAvatar : femaleAvatar}
                        alt={m.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 break-words">
                      {m.name}
                    </h3>
                    <p className="text-gray-600 font-mono text-sm mb-3">
                      {m.studentCode}
                    </p>
                    <span
                      className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${
                        m.role === "leader"
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {m.role === "leader" ? "👑 Trưởng nhóm" : "Thành viên"}
                    </span>
                  </div>
                </div>

                {/* Tasks Section */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Nhiệm vụ
                  </h4>
                  <ul className="space-y-2">
                    {m.task.map((t, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* References Section */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Tài liệu tham khảo
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <a
              key={index}
              href={ref.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                    ref.type === "video"
                      ? "bg-red-50 text-red-600"
                      : ref.type === "document"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {ref.type === "video"
                    ? "🎥"
                    : ref.type === "document"
                    ? "📄"
                    : "📰"}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {ref.title}
                  </h3>
                  <span className="inline-flex items-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                    Xem chi tiết
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto mt-20 text-center">
        <p className="text-gray-500 text-sm">
          Dự án được thực hiện bởi sinh viên FPT University
        </p>
      </div>
    </div>
  );
}
