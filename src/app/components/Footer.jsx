import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--dark-slate)] text-white py-8 md:py-12 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bố cục Grid linh hoạt: 1 cột trên điện thoại di động, 2 cột trên máy tính */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8 text-left">
          
          {/* Cột 1: Giới thiệu ngắn về xưởng gốm */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 text-[var(--vermilion)] tracking-tight">
              {t("Lò gốm Lái Thiêu - Vườn Nhà Gốm", "Lò Gốm Lái Thiêu - Vườn Nhà Gốm")}
            </h3>
            <p className="text-sm opacity-80 leading-relaxed max-w-md text-justify">
              {t(
                "Gìn giữ và lan tỏa tinh hoa gốm truyền thống Nam Bộ. Hành trình kết nối giá trị văn hóa và trải nghiệm thủ công độc bản.",
                "Preserving and spreading the essence of traditional Southern pottery. A journey connecting cultural values and unique handcrafted experiences."
              )}
            </p>
          </div>

          {/* Cột 2: Toàn bộ thông tin liên hệ chính thức */}
          <div className="space-y-3 text-sm opacity-95">
            <h4 className="text-xs font-bold tracking-wider text-[var(--vermilion)] uppercase mb-2">
              {t("Thông tin liên hệ", "Contact Information")}
            </h4>
            
            {/* Địa chỉ cơ sở */}
            <div className="flex items-start space-x-2.5">
              <MapPin className="h-4 w-4 text-[var(--vermilion)] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong className="text-white">{t("Địa chỉ: ", "Address: ")}</strong>
                {t(
                  "120 Ngô Quyền (Đường Gia Long cũ), Lái Thiêu, TPHCM (Bình Dương cũ).",
                  "120 Ngo Quyen (former Gia Long Street), Lai Thieu, HCMC (former Binh Duong)."
                )}
              </span>
            </div>

            {/* Đường dây nóng */}
            <div className="flex items-center space-x-2.5">
              <Phone className="h-4 w-4 text-[var(--vermilion)] shrink-0" />
              <span>
                <strong className="text-white">{t("Số điện thoại: ", "Phone: ")}</strong>
                0976 035 247 | 0941 135 546
              </span>
            </div>

            {/* Thời gian mở cửa */}
            <div className="flex items-center space-x-2.5">
              <Clock className="h-4 w-4 text-[var(--vermilion)] shrink-0" />
              <span>
                <strong className="text-white">{t("Thời gian hoạt động: ", "Operating Hours: ")}</strong>
                8:00 - 17:00
              </span>
            </div>
          </div>
        </div>

        {/* Bản quyền ứng dụng */}
        <div className="border-t border-white/5 pt-6 text-center text-xs opacity-60">
          <p>
            © 2026 Be Able VN. {t("Vườn Nhà Gốm - Gìn giữ tinh hoa gốm Nam Bộ", "Vuon Nha Gom - Preserving Southern Pottery Essence")}
          </p>
        </div>
      </div>
    </footer>
  );
}