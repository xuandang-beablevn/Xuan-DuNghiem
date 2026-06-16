import { useParams, Link } from "react-router";
import { ArrowLeft, BookOpen, MapPin, AlertCircle, Sparkles } from "lucide-react";
import { destinations } from "../data/destinations";
import { useLanguage } from "../LanguageContext";
// Thêm rõ đuôi .jsx để Vite giải quyết đường dẫn chính xác tuyệt đối
import { SafeImage } from "../components/ImageWithFallback.jsx";

export function DestinationDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();

  // Tìm kiếm địa điểm khớp với ID trên URL đường dẫn
  const destination = destinations.find((d) => d.id === id);

  // Xử lý trường hợp không tìm thấy dữ liệu địa điểm trong hệ thống
  if (!destination) {
    return (
      <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center p-4">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xs border text-center max-w-sm w-full">
          <AlertCircle className="h-10 w-10 text-[var(--terra-cotta)] mx-auto mb-3" />
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            {t("Không tìm thấy bài viết", "Article Not Found")}
          </h2>
          <p className="text-xs text-gray-500 mb-5 leading-relaxed">
            {t("Nội dung di sản bạn yêu cầu không tồn tại hoặc đã được chuyển dời.", "The heritage content you requested does not exist or has been moved.")}
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[var(--terra-cotta)] text-white font-bold text-xs px-5 py-2.5 rounded-lg w-full transition-colors min-h-[40px] cursor-pointer"
          >
            {t("Quay về trang chủ", "Return to Home")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      {/* Nút quay lại trang chủ cố định ở đầu bài viết */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <Link
            to="/"
            className="inline-flex items-center text-sm md:text-base text-gray-600 hover:text-[var(--vermilion)] transition-colors font-medium py-1 min-h-[40px]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("Quay lại trang chủ", "Back to home")}
          </Link>
        </div>
      </div>

      {/* Ảnh bìa lớn bài viết chi tiết - Áp dụng SafeImage chống vỡ khung banner */}
      <div className="relative h-64 md:h-96 bg-gray-900 overflow-hidden">
        <SafeImage
          src={destination.coverImage || destination.image}
          alt={language === "VI" ? destination.title : destination.titleEn}
          className="w-full h-full object-cover opacity-75 animate-in zoom-in-95 duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 z-10 text-center md:text-left">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1 bg-[var(--vermilion)] text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <BookOpen className="h-3 w-3" />
              {t("Chuyện về Di Sản", "Heritage Story")}
            </span>
            <h1 className="text-xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
              {language === "VI" ? destination.title : destination.titleEn}
            </h1>
            <div className="flex items-center justify-center md:justify-start text-xs md:text-sm text-gray-200 font-medium drop-shadow-xs">
              <MapPin className="h-4 w-4 text-[var(--vermilion)] mr-1 shrink-0" />
              <span>{t("Lái Thiêu, Bình Dương, Việt Nam", "Lai Thieu, Binh Duong, Vietnam")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nội dung chi tiết văn bản tư liệu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 border border-gray-100 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-[var(--terra-cotta)] border-b pb-3 mb-5 uppercase tracking-wide">
            {language === "VI" ? destination.subtitle : destination.subtitleEn}
          </h2>

          <div className="text-gray-700 space-y-5 text-sm md:text-base leading-relaxed text-justify">
            {(language === "VI" ? destination.content : destination.contentEn).map((paragraph, index) => (
              <p key={index} className="indent-4 md:indent-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Khối Điểm nhấn đặc sắc */}
          {destination.highlights && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[var(--vermilion)]" />
                {t("Điểm nhấn đặc sắc", "Core Highlights")}
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                {(language === "VI" ? destination.highlights : destination.highlightsEn).map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[var(--terra-cotta)] font-bold mr-2.5 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lời khuyên tư vấn hành trình bổ trợ */}
          {destination.notes && (
            <div className="mt-8 p-4 bg-[var(--cream)] rounded-xl border border-[var(--vermilion)]/10">
              <h4 className="font-bold text-xs md:text-sm text-gray-900 mb-1 uppercase tracking-wider">
                {t("Lời khuyên cho trải nghiệm thêm trọn vẹn:", "Tips for a better experience:")}
              </h4>
              <p className="text-xs md:text-sm text-gray-700 italic leading-relaxed">
                {language === "VI" ? destination.notes : destination.notesEn}
              </p>
            </div>
          )}
        </div>

        {/* Lưới Bộ sưu tập hình ảnh minh họa chi tiết - Áp dụng SafeImage chống lệch layout lưới */}
        {destination.images && destination.images.length > 0 && (
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 border-b pb-2">
              {t("Hình ảnh không gian & Hiện vật", "Gallery & Artifacts")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {destination.images.map((imgUrl, idx) => (
                <div key={idx} className="h-48 md:h-56 bg-gray-50 rounded-xl overflow-hidden shadow-xs border border-gray-100 group">
                  <SafeImage
                    src={imgUrl}
                    alt={`${destination.title} photo ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}