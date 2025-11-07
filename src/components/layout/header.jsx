import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [views, setViews] = useState(null);

  useEffect(() => {
    // Lấy path hiện tại, ví dụ: /trang-chu
    const pagePath = window.location.pathname.replace(/\//g, "") || "home";

    // Gọi API Abacus — bạn có thể thay domain thành tên web thật sau này
    const url = `https://abacus.jasoncameron.dev/hit/localhost/${pagePath}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch((err) => {
        console.error("❌ Error fetching view count:", err);
        setViews(0);
      });
  }, []);

  const navItems = [
    { href: "/trang-chu", label: "Trang chủ" },
    {
      href: "/ai-chatbot",
      label: "Trò Chuyện Cùng AI",
    },

  ];

  const handleNavigate = (href) => {
    navigate(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 px-6">
      <nav className="flex justify-around items-center gap-4 max-w-7xl mx-auto">
        {navItems.map((item) => {
          let isActive = location.pathname === item.href;
          if (location.pathname === "/" && item.href === "/trang-chu") {
            isActive = true;
          }
          return (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className="flex-1 px-4 py-3 rounded-full font-grenze text-sm md:text-base transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "#5D0404",
                color: isActive ? "#F4B82A" : "white",
              }}
            >
              <span className="block truncate">{item.label}</span>
            </button>
          );
        })}
        <div
          className="flex-1 px-4 py-3 rounded-full font-grenze text-sm md:text-base transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "#5D0404",
            color: "white",
          }}
        >
          <span className="block truncate text-center">👁️ Lượt truy cập :{" "}
      {views === null ? "Đang tải..." : views.toLocaleString()}</span>
        </div>
      </nav>

    </header>
  );
}
