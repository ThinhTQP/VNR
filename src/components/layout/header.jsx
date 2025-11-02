import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
 useEffect(() => {
  fetch("https://v2.jasoncameron.dev/abacus/hit/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      project: "tuthuonghochiminh-local",
      event: "visit",
      meta: {
        path: window.location.pathname
      }
    })
  });
}, [location.pathname]);

  const navItems = [
    { href: "/trang-chu", label: "Trang chủ" },
    {
      href: "/qua-trinh-ra-doi",
      label: "Bối Cảnh Và Chiến Lược",
    },
    { href: "/van-dung", label: "Vận Dụng Tư Tưởng Hồ Chí Minh" },
    {
      href: "/ai-chatbot",
      label: "Trò Chuyện Cùng AI",
    },
    {
      href: "/ai-usage",
      label: "AI Usage",
    },
    {
      href: "/informations",
      label: "Thông tin chung về dự án",
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
      </nav>
    </header>
  );
}
