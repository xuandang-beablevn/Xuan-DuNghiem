import { Link } from "react-router";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Hàm thực hiện chuyển đổi ngôn ngữ qua lại
  const toggleLanguage = () => {
    setLanguage(language === "VI" ? "EN" : "VI");
  };

  return (
    <nav className="bg-[var(--dark-slate)] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Tên tiêu đề di sản */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-base sm:text-lg font-semibold truncate max-w-[220px] sm:max-w-none">
              {t("Lò gốm Lái Thiêu - Vườn Nhà Gốm", "Lò Gốm Lái Thiêu - Vườn Nhà Gốm")}
            </span>
          </Link>

          {/* Desktop Navigation (Hiển thị từ màn hình md trở lên) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-[var(--vermilion)] transition-colors font-medium">
              {t("Trang chủ", "Home")}
            </Link>
            <Link to="/map" className="hover:text-[var(--vermilion)] transition-colors font-medium">
              {t("Bản đồ", "Map")}
            </Link>
            
            {/* Nút chuyển đổi giao diện song ngữ trên Máy tính */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-sm font-medium transition-all border border-white/10 backdrop-blur-sm"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "VI" ? "English" : "Tiếng Việt"}</span>
            </button>
          </div>

          {/* Mobile Controls (Hiển thị nút điều khiển thu gọn trên thiết bị di động) */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Nút ngôn ngữ thu gọn dạng VI/EN cho màn hình nhỏ giúp tiết kiệm không gian */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full text-xs font-semibold transition-all border border-white/10"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language}</span>
            </button>
            
            {/* Nút mở Menu các liên kết */}
            <button
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-3 space-y-1 border-t border-white/10 animate-fade-in">
            <Link
              to="/"
              className="block py-2.5 px-2 hover:bg-white/5 rounded-md hover:text-[var(--vermilion)] transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Trang chủ", "Home")}
            </Link>
            <Link
              to="/map"
              className="block py-2.5 px-2 hover:bg-white/5 rounded-md hover:text-[var(--vermilion)] transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Bản đồ", "Map")}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}