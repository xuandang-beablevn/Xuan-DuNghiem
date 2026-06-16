import { useState } from "react";
import { Link } from "react-router";
import { Menu, Globe, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "VI" ? "EN" : "VI");
  };

  // Cấu trúc danh sách các trang, đổi trang "Lịch sử" thành "Giới thiệu"
  const menuItems = [
    { path: "/", vi: "Trang chủ", en: "Home" },
    { path: "/gioi-thieu", vi: "Giới thiệu", en: "About" },
    { path: "/khong-gian", vi: "Không gian", en: "Space" },
    { path: "/hanh-trinh", vi: "Hành trình", en: "Journey" },
    { path: "/san-pham", vi: "Sản phẩm", en: "Products" },
    { path: "/blog", vi: "Nhật ký", en: "Diary" },
    { path: "/map", vi: "Bản đồ", en: "Map" },
  ];

  return (
    <nav className="bg-[var(--dark-slate)] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] lg:h-16">
          
          {/* Khu vực thương hiệu: Logo lấy từ /images/1.png */}
          <Link to="/" className="flex items-center space-x-2.5 group shrink-0 py-2">
            <img 
              src="/images/1.png" 
              alt="Logo Du Nghiệm" 
              className="h-9 w-9 sm:h-10 sm:w-10 object-cover rounded-md border border-white/10 bg-white/5 p-0.5 shadow-xs"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="text-lg font-bold tracking-tight truncate max-w-[140px] sm:max-w-none">
              {t("Du Nghiệm", "Du Nghiệm")}
            </span>
          </Link>

          {/* Điều hướng trên Máy tính (Desktop - hiển thị từ màn hình lg trở lên) */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-[var(--vermilion)] transition-colors font-medium text-sm whitespace-nowrap py-2"
              >
                {t(item.vi, item.en)}
              </Link>
            ))}
            
            {/* Nút dịch ngôn ngữ trên Desktop */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-sm font-semibold transition-all border border-white/10 cursor-pointer whitespace-nowrap select-none min-h-[36px]"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "VI" ? "English" : "Tiếng Việt"}</span>
            </button>
          </div>

          {/* Khu vực điều khiển thu gọn trên Điện thoại (Mobile Controls) */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Nút đổi ngôn ngữ thu gọn dạng VI/EN */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full text-xs font-bold transition-all border border-white/10 cursor-pointer select-none min-h-[40px]"
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </button>
            
            {/* Nút Hamburger bật/tắt menu (Tối ưu vùng chạm min 40px) */}
            <button
              className="p-2 rounded-md hover:bg-white/10 transition-colors cursor-pointer select-none min-h-[40px] min-w-[40px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu thả xuống khi bấm trên Điện thoại */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[var(--dark-slate)] border-t border-white/5 px-4 py-3 space-y-1 shadow-inner animate-in fade-in slide-in-from-top-2 duration-200">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-3 px-3 rounded-lg hover:bg-white/5 hover:text-[var(--vermilion)] transition-all text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.vi, item.en)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}