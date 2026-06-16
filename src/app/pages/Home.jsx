import { ArrowRight, MapPin, Compass, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { destinations } from "../data/destinations";
import { DestinationCard } from "../components/DestinationCard";
import { useLanguage } from "../LanguageContext";
// Thêm rõ đuôi .jsx để Vite giải quyết đường dẫn chính xác tuyệt đối
import { SafeImage } from "../components/ImageWithFallback.jsx";

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      
      {/* Vùng biểu ngữ Hero Banner sử dụng SafeImage bọc ngoài để chống lỗi ảnh nền làm vỡ bố cục đầu trang */}
      <section className="relative h-[60vh] min-h-[400px] md:h-[70vh] text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage 
            src="/images/2.png" 
            alt="Hero Banner Gốm Nam Bộ"
            className="w-full h-full object-cover opacity-65 animate-in zoom-in-95 duration-1000"
          />
        </div>
        {/* Lớp phủ tối (Overlay) tăng độ tương phản giúp chữ luôn sắc nét trên điện thoại */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-20 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight drop-shadow-md leading-tight text-white">
            {t("Tinh Hoa Gốm Nam Bộ", "The Essence of Southern Ceramics")}
          </h1>
          <p className="text-sm md:text-xl max-w-2xl mx-auto mb-8 text-gray-200 drop-shadow-xs leading-relaxed px-2">
            {t(
              "Khám phá hành trình trăm năm của đất và men, nơi lưu giữ hồn cốt văn hóa dân gian Lái Thiêu - Bình Dương.",
              "Explore a century-long journey of earth and glaze, preserving the cultural soul of Lai Thieu - Binh Duong folklore."
            )}
          </p>
          
          {/* Cụm nút hành động tối ưu vùng chạm trên mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-3.5 w-full max-w-xs mx-auto sm:max-w-none px-4">
            <Link
              to="/map"
              className="inline-flex items-center justify-center bg-[var(--terra-cotta)] hover:bg-[var(--vermilion)] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md active:scale-98 text-sm cursor-pointer min-h-[44px]"
            >
              <MapPin className="mr-2 h-4 w-4" />
              {t("Xem bản đồ di sản", "View Heritage Map")}
            </Link>
            <a
              href="#explore"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-xl font-semibold transition-all text-sm cursor-pointer min-h-[44px]"
            >
              {t("Tìm hiểu thêm", "Learn More")}
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Mục giới thiệu giá trị cốt lõi / Thống kê nhanh */}
      <section className="py-10 bg-white shadow-xs border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            <div className="flex flex-col items-center p-3">
              <div className="p-3 bg-[var(--cream)] rounded-full text-[var(--terra-cotta)] mb-2.5">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold mb-1 text-gray-900">
                {t("4 Địa Điểm Lớn", "4 Major Locations")}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                {t("Bao quát các giá trị lịch sử, xưởng sản xuất và không gian nghệ thuật.", "Covering historical values, workshops, and art spaces.")}
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="p-3 bg-[var(--cream)] rounded-full text-[var(--terra-cotta)] mb-2.5">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold mb-1 text-gray-900">
                {t("Cốt Chuyện Chi Tiết", "Detailed Stories")}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                {t("Mỗi điểm đến gắn liền với tư liệu lịch sử vẽ tay và nung lò truyền thống.", "Each destination is linked with historical hand-painted and traditional kiln records.")}
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="p-3 bg-[var(--cream)] rounded-full text-[var(--terra-cotta)] mb-2.5">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold mb-1 text-gray-900">
                {t("Tích Hợp Bản Đồ", "Map Integration")}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                {t("Dễ dàng định vị và lên lộ trình tham quan thực tế các lò gốm cổ.", "Easily locate and plan your actual tour of ancient pottery kilns.")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Phần nội dung chính: Lưới danh sách thẻ khám phá địa danh kế thừa SafeImage */}
      <section id="explore" className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            {t("Hành Trình Khám Phá Di Sản", "Heritage Discovery Journey")}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            {t(
              "Ghé thăm các không gian lưu giữ tinh hoa gốm thủ công Nam Bộ xưa và nay tại thủ phủ Bình Dương.",
              "Visit spaces preserving the essence of handmade Southern pottery past and present in the capital of Binh Duong."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>
    </div>
  );
}