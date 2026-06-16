import { Link } from "react-router";
import { Sparkles, Compass, Flame, Calendar, Download } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { destinations } from "../data/destinations";
import { DestinationCard } from "../components/DestinationCard";
// Import chuẩn (không cần đuôi .jsx)
import { SafeImage } from "../components/ImageWithFallback";

export function JourneyPage() {
  const { t } = useLanguage();
  const journeyItems = destinations.filter(d => d.category === "HÀNH TRÌNH");

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      {/* Biểu ngữ đầu trang dạng ảnh bìa lớn */}
      <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
        <SafeImage
          src="/images/12.png"
          alt="Hành trình thủ công Nam Bộ"
          className="w-full h-full object-cover opacity-75 animate-in zoom-in-95 duration-700"
        />
        {/* Lớp phủ dốc (Gradient Overlay) bảo toàn độ tương phản giúp chữ luôn nổi bật */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-6 left-0 right-0 z-10 text-center md:text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 bg-[var(--dark-slate)] text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <Sparkles className="h-3 w-3 text-[var(--vermilion)]" />
              {t("Chạm Vào Đất Mẹ", "Touch The Earth")}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
              {t("Hành Trình Trải Nghiệm Thủ Công", "Interactive Crafts Journeys")}
            </h1>
            <p className="text-sm md:text-base text-gray-200 max-w-xl leading-relaxed drop-shadow-xs">
              {t(
                "Hành trình kỳ diệu đưa bạn đi từ những khối đất sét vô tri đến tác phẩm gốm độc bản mang đậm dấu ấn cá nhân.",
                "A magical journey taking you from inanimate blocks of clay to a unique ceramic piece with your own personal touch."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Quy trình trải nghiệm 3 bước đặc sắc */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-16 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center md:text-left">
            {t("Ba Bước Để Bạn Tác Tạo Hồn Đất", "Three Steps To Shape Your Creation")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-[var(--terra-cotta)] text-base">
                <span className="flex items-center justify-center bg-[var(--cream)] rounded-full h-7 w-7 border text-sm">1</span>
                <h4>{t("Thuần phục bàn xoay", "Master the Kick-wheel")}</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-justify">
                {t(
                  "Bạn sẽ được các nghệ nhân lão làng chỉ dẫn cách dùng lực chân để giữ nhịp bàn xoay đều đặn, đôi tay ẩm mịn khéo léo vuốt nặn đất sét từ phôi thô thành dáng hình chiếc tô, chiếc ly xinh xắn.",
                  "Veteran artisans will guide you on using foot power to keep the kick-wheel rotating steadily, while your moist, smooth hands deftly mold raw clay into beautiful bowl or mug shapes."
                )}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-[var(--deep-copper)] text-base">
                <span className="flex items-center justify-center bg-[var(--cream)] rounded-full h-7 w-7 border text-sm">2</span>
                <h4>{t("Hồn cọ vẽ tay", "Hand-painted Soul")}</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-justify">
                {t(
                  "Khi phôi đất đã se lại, bạn tự tay dùng những chiếc cọ lông thô mộc phác họa họa tiết xưa cũ như đóa hoa cúc giản dị, con gà trống oai vệ và phủ lên mảng men Shanghai trầm ấm.",
                  "When the clay body tightens up, you use rustic hair brushes to sketch vintage patterns like simple chrysanthemums or majestic roosters, then apply warm, rich Shanghai glazes."
                )}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-[var(--dark-slate)] text-base">
                <span className="flex items-center justify-center bg-[var(--cream)] rounded-full h-7 w-7 border text-sm">3</span>
                <h4>{t("Đỏ lửa lò củi", "Wood-fired Kiln Firing")}</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-justify">
                {t(
                  "Sản phẩm kỷ niệm của bạn sẽ được xưởng mang đi xếp vào lòng lò củi truyền thống, nung ngày đêm ở nhiệt độ cao để cho ra lớp men rạn tự nhiên độc bản trước khi giao tận tay bạn.",
                  "Your keepsake item will be placed inside a traditional wood-fired kiln, baked day and night at high temperatures to yield unique natural crackle glazes before being delivered to you."
                )}
              </p>
            </div>
          </div>

          {/* Nút hành động bao gồm nút mở file báo giá Workshop */}
          <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/workshops" className="inline-flex items-center justify-center w-full sm:w-auto bg-[var(--terra-cotta)] hover:bg-[var(--vermilion)] text-white px-6 py-3 rounded-lg font-bold text-xs shadow-xs transition-all cursor-pointer min-h-[44px]">
              <Calendar className="mr-1.5 h-4 w-4" />
              {t("Đăng ký lịch trải nghiệm ngay", "Book a workshop session")}
            </Link>
            
            <a 
              href="/Bao-Phi-Workshop.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full sm:w-auto bg-white hover:bg-gray-50 border border-[var(--dark-slate)] text-[var(--dark-slate)] px-6 py-3 rounded-lg font-bold text-xs shadow-xs transition-all cursor-pointer min-h-[44px]"
            >
              <Download className="mr-1.5 h-4 w-4" />
              {t("Xem báo giá dịch vụ Đoàn", "View Group Service Quote")}
            </a>
          </div>
        </div>

        {/* Khu vực hiển thị các Card hành trình liên quan */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
          {t("Các Gói Trải Nghiệm Thực Tế", "Featured Journeys")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {journeyItems.map((item) => (
            <DestinationCard key={item.id} destination={item} />
          ))}
        </div>
      </div>
    </div>
  );
}