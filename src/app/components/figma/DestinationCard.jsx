import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
// Đã sửa lại đường dẫn import cho đúng cấp thư mục
import { ImageWithFallback } from "../ImageWithFallback";
import { useLanguage } from "../../LanguageContext";

export function DestinationCard({ destination }) {
  const { language, t } = useLanguage();
  const scrollRef = useRef(null);

  // Bảng màu phân loại di sản
  const categoryColors = {
    "LỊCH SỬ": "bg-[var(--vermilion)]",
    "KHÔNG GIAN": "bg-[var(--deep-copper)]",
    "HÀNH TRÌNH": "bg-[var(--terra-cotta)]",
    "SẢN PHẨM": "bg-[var(--dark-slate)]"
  };

  // Từ điển dịch danh mục
  const categoryEn = {
    "LỊCH SỬ": "HISTORY",
    "KHÔNG GIAN": "SPACE",
    "HÀNH TRÌNH": "JOURNEY",
    "SẢN PHẨM": "PRODUCTS"
  };

  // Hàm điều khiển cuộn ảnh
  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -width : width,
        behavior: 'smooth'
      });
    }
  };

  // Đảm bảo luôn có mảng hình ảnh để hiển thị (fallback về ảnh gốc nếu mảng images bị thiếu)
  const images = destination.images && destination.images.length > 0 
    ? destination.images 
    : [destination.image];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full group">
      
      {/* Bộ cuộn hình ảnh (Image Carousel) - Tối ưu vuốt trên Mobile */}
      <div className="relative h-56 bg-gray-200 overflow-hidden">
        {/* Container chứa các ảnh */}
        <div 
          ref={scrollRef}
          className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {images.map((img, index) => (
            <div key={index} className="h-full w-full flex-shrink-0 snap-center relative">
              <ImageWithFallback
                src={img}
                alt={`${destination.title} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Nút điều hướng ảnh (Chỉ hiện khi hover trên desktop, và khi có nhiều hơn 1 ảnh) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.preventDefault(); scroll('left'); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm transition-all opacity-0 md:group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); scroll('right'); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm transition-all opacity-0 md:group-hover:opacity-100 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Chấm tròn hiển thị số lượng ảnh cho thiết bị di động */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
              {images.map((_, idx) => (
                <div key={idx} className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-sm" />
              ))}
            </div>
          </>
        )}

        {/* Thẻ (Badge) Danh mục */}
        <div className={`absolute top-3 right-3 ${categoryColors[destination.category]} text-white px-3 py-1 rounded-full text-xs font-medium shadow-md z-10`}>
          {language === "VI" ? destination.category : categoryEn[destination.category]}
        </div>
      </div>

      {/* Nội dung Text chuẩn Song ngữ */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-1">
          {language === "VI" ? destination.title : destination.titleEn}
        </h3>
        <p className="text-gray-600 mb-5 line-clamp-2 text-sm md:text-base flex-1">
          {language === "VI" ? destination.description : destination.descriptionEn}
        </p>
        
        {/* Nút Khám phá */}
        <Link
          to={`/destination/${destination.id}`}
          className="inline-flex items-center text-[var(--terra-cotta)] hover:text-[var(--vermilion)] font-medium transition-colors group/btn mt-auto text-sm md:text-base w-fit"
        >
          {t("Khám phá ngay", "Explore now")}
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}