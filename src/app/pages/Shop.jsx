import { useState } from "react";
import { Link } from "react-router";
import { Filter, ShoppingBag, Eye, ArrowLeft, Download, Sparkles, Calendar } from "lucide-react";
import { useLanguage } from "../LanguageContext";
// Thêm rõ đuôi .jsx để Vite giải quyết đường dẫn chính xác tuyệt đối
import { SafeImage } from "../components/ImageWithFallback.jsx";

export function Shop() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = [
    { id: "ALL", vi: "TẤT CẢ", en: "ALL" },
    { id: "TABLEWARE", vi: "GỐM GIA DỤNG", en: "TABLEWARE" },
    { id: "DECOR", vi: "GỐM TRANG TRÍ", en: "DECORATIVE" }
  ];

  // Đồng bộ dải ảnh sản phẩm cục bộ từ 16.png đến 21.png theo đúng quy hoạch
  const products = [
    {
      id: "to-con-ga-truyen-thong",
      title: "Tô con gà trống vẽ tay truyền thống",
      titleEn: "Traditional Hand-Painted Rooster Bowl",
      category: "TABLEWARE",
      price: "65,000đ",
      image: "/images/16.png",
      desc: "Họa tiết con gà oai vệ mộc mạc dưới lớp men rạn ấm áp hoài cổ.",
      descEn: "Rustic rooster motifs under a warm, nostalgic crackle glaze."
    },
    {
      id: "chen-hoa-cuc-xua",
      title: "Bộ chén dĩa họa tiết hoa cúc xưa cũ",
      titleEn: "Vintage Chrysanthemum Dinnerware Set",
      category: "TABLEWARE",
      price: "180,000đ",
      image: "/images/17.png",
      desc: "Nét cọ cúc đại đóa dung dị mang đậm phong vị mâm cơm Nam Bộ xưa.",
      descEn: "Simple chrysanthemum brushstrokes rich in ancient Southern dining styles."
    },
    {
      id: "don-gom-thuong-hai",
      title: "Đôn gốm sắc men Thượng Hải trầm ấm",
      titleEn: "Warm Shanghai-Glazed Ceramic Stool",
      category: "DECOR",
      price: "950,000đ",
      image: "/images/18.png",
      desc: "Chế tác thủ công tỉ mỉ, thích hợp làm đôn cây hoặc trang trí sân vườn.",
      descEn: "Meticulously handcrafted, suitable for plant stands or garden decor."
    },
    {
      id: "chau-cay-men-ran",
      title: "Chậu gốm men rạn tự nhiên dáng cổ",
      titleEn: "Ancient Natural Crackle-Glazed Pot",
      category: "DECOR",
      price: "350,000đ",
      image: "/images/19.png",
      desc: "Những vết rạn men tự nhiên tạo nên nét duyên dáng độc bản độc đáo.",
      descEn: "Natural glaze crackles create an exclusive and unique charm."
    },
    {
      id: "binh-hoa-phu-lang",
      title: "Bình hoa dáng tỏi men hỏa biến",
      titleEn: "Flambé Glazed Garlic-Shaped Ceramic Vase",
      category: "DECOR",
      price: "420,000đ",
      image: "/images/20.png",
      desc: "Màu sắc men biến ảo kỳ diệu qua ngọn lửa lò củi truyền thống.",
      descEn: "Magical glaze colors transformed via traditional wood-fired kilns."
    },
    {
      id: "ly-gom-moc-mac",
      title: "Ly tách gốm thô mộc không men",
      titleEn: "Rustic Unglazed Ceramic Mug",
      category: "TABLEWARE",
      price: "45,000đ",
      image: "/images/21.png",
      desc: "Giữ trọn vẹn nét nguyên bản ấm áp và thô ráp của đất sét phương Nam.",
      descEn: "Preserving the warm and raw texture of the genuine Southern clay."
    }
  ];

  const filteredProducts = selectedCategory === "ALL" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      {/* Thanh điều hướng quay lại - Tối ưu vùng chạm */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <Link
            to="/"
            className="inline-flex items-center text-sm md:text-base text-gray-600 hover:text-[var(--vermilion)] transition-colors font-medium py-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("Quay lại trang chủ", "Back to home")}
          </Link>
        </div>
      </div>

      {/* Biểu ngữ đầu trang dạng ảnh bìa lớn hoài cổ - Sử dụng ảnh 13.png */}
      <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
        <SafeImage
          src="/images/13.png"
          alt="Không gian trưng bày gốm Nam Bộ"
          className="w-full h-full object-cover opacity-75 animate-in zoom-in-95 duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-6 left-0 right-0 z-10 text-center md:text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
              {t("Không Gian Trưng Bày Gốm", "Pottery Gallery & Shop")}
            </h1>
            <p className="text-sm text-gray-200 max-w-2xl leading-relaxed drop-shadow-xs">
              {t(
                "Nơi lưu giữ hồn cọ vẽ tay mộc mạc và sắc men Thượng Hải độc bản trên từng tác phẩm thủ công tinh xảo.",
                "Where rustic hand-painted brushwork and unique Shanghai glazes live on every exquisite craft piece."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-gray-800 font-bold text-sm mb-3">
            <Filter className="h-4 w-4 text-[var(--terra-cotta)]" />
            <span>{t("Phân loại sản phẩm:", "Filter Category:")}</span>
          </div>
          
          {/* Vùng chọn danh mục: Tối ưu cuộn ngang và vùng chạm trên mobile */}
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap border transition-all cursor-pointer min-h-[40px] flex items-center justify-center ${
                  selectedCategory === cat.id
                    ? "bg-[var(--dark-slate)] text-white border-[var(--dark-slate)] shadow-xs"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {language === "VI" ? cat.vi : cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Lưới hiển thị các sản phẩm thương mại di sản */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all"
            >
              <div className="relative h-60 bg-gray-50 overflow-hidden">
                <SafeImage
                  src={product.image}
                  alt={language === "VI" ? product.title : product.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[var(--dark-slate)] font-bold text-xs px-3 py-1 rounded-md border border-gray-100 shadow-xs">
                  {product.category === "TABLEWARE" ? t("Gia dụng", "Tableware") : t("Trang trí", "Decor")}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2">
                  {language === "VI" ? product.title : product.titleEn}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-5 flex-1 text-justify leading-relaxed">
                  {language === "VI" ? product.desc : product.descEn}
                </p>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-lg font-extrabold text-[var(--terra-cotta)]">
                    {product.price}
                  </span>
                  
                  <Link
                    to={`/destination/tuyet-tac-gom`}
                    className="inline-flex items-center space-x-1.5 bg-[var(--cream)] border border-[var(--vermilion)]/20 text-[var(--terra-cotta)] hover:bg-[var(--terra-cotta)] hover:text-white px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer min-h-[36px]"
                  >
                    <Eye className="h-4 w-4" />
                    <span>{t("Xem chi tiết", "View detail")}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Khối Hộp 1: Sở hữu tuyệt tác thương mại */}
        <div className="mt-12 bg-white rounded-xl p-6 md:p-8 text-center max-w-2xl mx-auto shadow-xs border border-dashed border-[var(--vermilion)]/30">
          <ShoppingBag className="h-8 w-8 text-[var(--vermilion)] mx-auto mb-3" />
          <h4 className="font-bold text-gray-900 text-lg mb-2">
            {t("Bạn muốn sở hữu những tuyệt tác này?", "Interested in buying these pieces?")}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {t(
              "Do đặc thù gốm thủ công mỹ nghệ có số lượng giới hạn và độc bản, vui lòng liên hệ hotline hoặc ghé trực tiếp xưởng để chọn lựa những mẻ lò mới nhất.",
              "Since handcrafted ceramics are limited and unique, please contact our hotline or visit our workshop to select from the latest kiln batches."
            )}
          </p>
        </div>

        {/* Khối Hộp 2 Nâng cấp mới theo yêu cầu: Mời gọi tham gia và mở file báo giá biểu phí Workshop */}
        <div className="mt-6 bg-white rounded-xl p-6 md:p-8 text-center max-w-2xl mx-auto shadow-xs border border-dashed border-[var(--terra-cotta)]/30">
          <Sparkles className="h-8 w-8 text-[var(--terra-cotta)] mx-auto mb-3" />
          <h4 className="font-bold text-gray-900 text-lg mb-2">
            {t("Bạn muốn tự tay tạo nên những tác phẩm đậm dấu ấn cá nhân?", "Want to hand-craft pieces with your own personal touch?")}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {t(
              "Hãy cùng tham gia hành trình trải nghiệm nhào nặn đất sét cao lanh phương Nam và tìm hiểu biểu phí dịch vụ ưu đãi dành riêng cho team đoàn, trường học và doanh nghiệp.",
              "Join our interactive Southern kaolin clay workshops and discover special discounted pricing packages tailor-made for corporate teams, schools, and organizations."
            )}
          </p>

          {/* Cụm nút tương tác: Đăng ký đặt chỗ & Tải mở xem trực tiếp tài liệu báo giá PDF */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/workshops" 
              className="inline-flex items-center justify-center w-full sm:w-auto bg-[var(--terra-cotta)] hover:bg-[var(--vermilion)] text-white px-6 py-2.5 rounded-lg font-bold text-xs shadow-xs transition-all cursor-pointer min-h-[44px]"
            >
              <Calendar className="mr-1.5 h-4 w-4" />
              {t("Đăng ký lịch hẹn", "Book Appointment")}
            </Link>
            
            <a 
              href="/Bao-Phi-Workshop.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full sm:w-auto bg-white hover:bg-gray-50 border border-[var(--dark-slate)] text-[var(--dark-slate)] px-6 py-2.5 rounded-lg font-bold text-xs shadow-xs transition-all cursor-pointer min-h-[44px]"
            >
              <Download className="mr-1.5 h-4 w-4" />
              {t("Xem báo giá Workshop PDF", "View Workshop Quote PDF")}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}