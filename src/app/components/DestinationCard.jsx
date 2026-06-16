import { Link } from "react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
// Sử dụng SafeImage đã được export alias từ ImageWithFallback
import { SafeImage } from "./ImageWithFallback";

export function DestinationCard({ destination }) {
  const { language, t } = useLanguage();

  const categoryEn = {
    "LỊCH SỬ": "HISTORY",
    "KHÔNG GIAN": "SPACE",
    "HÀNH TRÌNH": "JOURNEY",
    "SẢN PHẨM": "PRODUCTS"
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden flex flex-col sm:flex-row group hover:shadow-md transition-all duration-300">
      {/* Vùng ảnh bìa của thẻ - Áp dụng SafeImage chống vỡ layout hình khối */}
      <div className="sm:w-2/5 h-48 sm:h-auto relative bg-gray-50 overflow-hidden min-h-[192px]">
        <SafeImage
          src={destination.image}
          alt={language === "VI" ? destination.title : destination.titleEn}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[var(--dark-slate)] font-bold text-[10px] tracking-wider px-2.5 py-1 rounded-md border border-gray-100/50 shadow-xs uppercase">
          {language === "VI" ? destination.category : categoryEn[destination.category]}
        </span>
      </div>

      {/* Vùng nội dung chữ văn bản */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base md:text-lg font-bold text-gray-950 mb-1.5 group-hover:text-[var(--terra-cotta)] transition-colors line-clamp-1 leading-snug">
            {language === "VI" ? destination.title : destination.titleEn}
          </h3>
          <p className="text-xs text-[var(--terra-cotta)] font-bold uppercase tracking-wide mb-3 line-clamp-1">
            {language === "VI" ? destination.subtitle : destination.subtitleEn}
          </p>
          <p className="text-gray-600 text-xs md:text-sm line-clamp-2 md:line-clamp-3 mb-4 text-justify leading-relaxed">
            {language === "VI" ? destination.description : destination.descriptionEn}
          </p>
        </div>

        {/* Khối tương tác phía dưới chân thẻ */}
        <div className="pt-3.5 border-t border-gray-50 flex items-center justify-between mt-auto">
          <div className="flex items-center text-[11px] text-gray-500 font-medium">
            <MapPin className="h-3.5 w-3.5 text-gray-400 mr-1 shrink-0" />
            <span className="line-clamp-1">{t("Bình Dương, Việt Nam", "Binh Duong, VN")}</span>
          </div>
          
          <Link
            to={`/destination/${destination.id}`}
            className="inline-flex items-center text-xs font-bold text-[var(--terra-cotta)] hover:text-[var(--vermilion)] transition-colors min-h-[32px] py-1 cursor-pointer"
          >
            <span>{t("Khám phá", "Explore")}</span>
            <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}