import { Link } from "react-router";
import { ArrowLeft, History, Heart, ShieldCheck, Sparkles, Calendar } from "lucide-react";
import { useLanguage } from "../LanguageContext";
// Thay thế bằng SafeImage để bảo vệ layout trang Giới thiệu
import { SafeImage } from "../components/ImageWithFallback";

export function About() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      {/* Nút Quay lại Trang chủ - Tối ưu vùng chạm lớn trên Mobile */}
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

      {/* Banner Tiêu đề Trang hoài cổ - Sử dụng SafeImage bảo vệ */}
      <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src="/images/3.png"
            alt="Gốm Nam Bộ"
            className="w-full h-full object-cover opacity-75 animate-in zoom-in-95 duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <div className="absolute bottom-6 left-0 right-0 z-20 text-center md:text-left">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1 bg-[var(--vermilion)] text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <Sparkles className="h-3 w-3" />
              {t("Câu Chuyện Di Sản", "Heritage Story")}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
              {t("Giới Thiệu Về Chúng Tôi", "About Du Nghiệm")}
            </h1>
            <p className="text-sm md:text-lg text-gray-200 font-medium max-w-2xl leading-relaxed drop-shadow-xs">
              {t(
                "Hành trình kết nối những giá trị văn hóa cốt lõi và gìn giữ ngọn lửa nghề gốm thủ công Nam Bộ xưa và nay.",
                "A journey connecting core cultural values and preserving the handcrafted flame of Southern pottery past and present."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Nội dung chi tiết: Tích hợp bài đăng Gốm Lái Thiêu – Gốm Nam Bộ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        
        {/* Khối chính: Bài đăng thiên hướng tư liệu về Gốm Lái Thiêu */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 mb-8 md:mb-12 border border-gray-100">
          <div className="flex items-center space-x-3 mb-5 md:mb-6 border-b border-gray-50 pb-3">
            <div className="p-2.5 bg-[var(--cream)] rounded-full text-[var(--terra-cotta)] shrink-0">
              <History className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {t("Gốm Lái Thiêu – Gốm Nam Bộ", "Lai Thieu Pottery – Southern Ceramics")}
              </h2>
              <p className="text-xs text-[var(--terra-cotta)] font-bold uppercase tracking-wider mt-0.5">
                {t("Hồn đất phương Nam trăm năm gìn giữ", "Preserving the Southern Soul for Centuries")}
              </p>
            </div>
          </div>

          <div className="text-gray-700 space-y-5 text-sm md:text-base leading-relaxed text-justify">
            <p className="indent-4 md:indent-6">
              {t(
                "Lái Thiêu (Bình Dương) từ lâu đã được coi là chiếc nôi sản sinh ra dòng gốm dân dã đặc sắc bậc nhất Nam Bộ, mang vẻ đẹp bình dị, mộc mạc đi sâu vào đời sống bao thế hệ người Việt. Dòng gốm này hình thành từ sự giao thoa văn hóa đặc sắc giữa người Việt cổ xưa và cộng đồng người Hoa di cư từ cuối thế kỷ 19, đầu thế kỷ 20. Tận dụng nguồn đất sét trắng dồi dào bên sông Sài Gòn, các lò gốm Lái Thiêu xưa đã đỏ lửa ngày đêm để tạo ra những sản phẩm gia dụng mộc mạc như tô, chén, dĩa, lu đựng nước.",
                "Lai Thieu (Binh Duong) has long been considered the cradle of the most unique rustic ceramics in the South, bearing a simple, rustic beauty deeply rooted in the lives of generations of Vietnamese people. This pottery style was formed from the unique cultural convergence between ancient Vietnamese and Chinese immigrant communities from the late 19th and early 20th centuries. Taking advantage of the abundant white clay along the Saigon River, ancient Lai Thieu kilns burned day and night to create rustic household items like bowls, plates, dishes, and water jars."
              )}
            </p>
            
            {/* Ảnh minh họa chèn giữa bài đọc sinh động - Sử dụng SafeImage */}
            <div className="my-6 rounded-xl overflow-hidden shadow-xs bg-gray-50 max-w-2xl mx-auto border border-gray-100">
              <SafeImage 
                src="/images/4.png" 
                alt="Họa tiết con gà trống vẽ tay" 
                className="w-full h-auto object-cover max-h-72"
              />
              <div className="p-2.5 bg-gray-50/80 text-center text-xs text-gray-500 italic font-medium border-t">
                {t("Họa tiết vẽ tay phóng khoáng đặc trưng trên nền men rạn Nam Bộ xưa.", "Signature liberal hand-painted motifs on ancient Southern crackle glaze.")}
              </div>
            </div>

            <p className="indent-4 md:indent-6">
              {t(
                "Nổi bật nhất của gốm Lái Thiêu chính là họa tiết vẽ tay phóng khoáng, giàu sức sống. Từ hình ảnh con gà trống oai vệ, cây chuối xanh rì đến đóa hoa cúc giản dị dưới lớp men rạn ấm áp, mỗi tác phẩm là một lát cắt chân thực của đời sống đồng quê Nam Bộ xưa, vừa thô mộc vừa đầy tính nghệ thuật. Trải qua những thăng trầm lịch sử, mảng màu men rạn thô mộc ấm áp cùng họa tiết vẽ tay thân thuộc vẫn mang trọn vẹn hơi thở mộc mạc của làng quê Việt Nam.",
                "The most prominent feature of Lai Thieu ceramics is the liberal, vibrant hand-painted patterns. From majestic roosters and lush green banana trees to simple chrysanthemums under a warm crackle glaze, each piece is an authentic slice of ancient Southern rural life, both raw and highly artistic. Through historical ups and downs, the warm, rustic crackle glazes and familiar hand-painted motifs still carry the pure, rustic breath of the Vietnamese countryside."
              )}
            </p>
          </div>
        </div>

        {/* Khối Sứ mệnh & Giá trị cốt lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <div className="bg-white rounded-xl shadow-xs p-6 border-t-4 border-[var(--vermilion)] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <div className="p-2 bg-[var(--cream)] rounded-full text-[var(--vermilion)] shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {t("Sứ Mệnh Bảo Tồn", "Our Mission")}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                {t(
                  "Vườn Nhà Gốm sinh ra với sứ mệnh giữ lửa và truyền tải trọn vẹn nét đẹp nguyên bản của gốm Nam Bộ thủ công đến thế hệ trẻ và bạn bè quốc tế. Không chỉ dừng lại ở việc trưng bày, chúng tôi mở rộng không gian trải nghiệm thực tế để mỗi người đều có thể tự tay chạm vào hồn cốt đất quê hương.",
                  "Vuon Nha Gom was born with the mission of keeping the flame and fully conveying the original beauty of handmade Southern pottery to the younger generation and international friends. Moving beyond exhibitions, we expand interactive experiences so everyone can touch the soul of the homeland earth with their own hands."
                )}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xs p-6 border-t-4 border-[var(--deep-copper)] border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <div className="p-2 bg-[var(--cream)] rounded-full text-[var(--deep-copper)] shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {t("Giá Trị Cốt Lõi", "Core Values")}
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[var(--terra-cotta)] font-bold mr-2 shrink-0">•</span>
                  <span><strong>{t("Tính Độc Bản: ", "Uniqueness: ")}</strong>{t("Mỗi tác phẩm đều được nghệ nhân vuốt tay và vẽ cọ thủ công hoàn toàn.", "Every piece is completely hand-molded and brush-painted by artisans.")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--terra-cotta)] font-bold mr-2 shrink-0">•</span>
                  <span><strong>{t("Sự Gắn Kết: ", "Connection: ")}</strong>{t("Hành trình kết nối con người hiện đại quay về kết giao hòa quyện với thiên nhiên.", "A journey connecting modern people back to harmonious kinship with nature.")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--terra-cotta)] font-bold mr-2 shrink-0">•</span>
                  <span><strong>{t("Tôn Trọng Di Sản: ", "Heritage Respect: ")}</strong>{t("Gìn giữ nguyên vẹn kỹ thuật nung lò củi truyền thống của thế hệ đi trước.", "Preserving the traditional wood-fired kiln techniques of previous generations intact.")}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Nút đăng ký khóa học bổ trợ cuối trang */}
        <div className="mt-12 text-center">
          <Link 
            to="/workshops" 
            className="inline-flex items-center justify-center w-full md:w-auto bg-[var(--terra-cotta)] hover:bg-[var(--vermilion)] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors min-h-[48px] cursor-pointer"
          >
            <Calendar className="mr-2 h-4 w-4" />
            {t("Đăng ký trải nghiệm nặn gốm Nam Bộ", "Book a Southern pottery workshop")}
          </Link>
        </div>

      </div>
    </div>
  );
}