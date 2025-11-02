import React from "react";

const points = [
  { name: "Điện Biên Phủ", top: "45%", left: "48%", desc: "Trung tâm tập đoàn cứ điểm của Pháp." },
  { name: "Him Lam", top: "35%", left: "52%", desc: "Cứ điểm tiền tiêu phía Đông Bắc." },
  { name: "Độc Lập", top: "40%", left: "42%", desc: "Cứ điểm án ngữ phía Bắc." },
  { name: "Mường Thanh", top: "50%", left: "50%", desc: "Sở chỉ huy của địch." },
  { name: "Hồng Cúm", top: "60%", left: "55%", desc: "Cứ điểm phía Nam, bảo vệ đường rút." },
];

export default function BattleMap() {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8">
      {/* ảnh nền bản đồ tĩnh (có thể thay link khác, ví dụ ảnh bản đồ Điện Biên Phủ thật) */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/25/Dien_Bien_Phu_map-fr.svg"
        alt="Bản đồ Chiến dịch Điện Biên Phủ"
        className="w-full rounded-xl shadow-md border"
      />

      {/* Các marker */}
      {points.map((p, i) => (
        <div
          key={i}
          className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ top: p.top, left: p.left }}
        >
          {/* Chấm đỏ */}
          <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md animate-pulse" />

          {/* Tooltip */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 bg-white text-gray-800 text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <strong>{p.name}</strong> — {p.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
