import { Link } from "react-router";
import { ArrowLeft, Calendar, BookOpen, ChevronRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
// Thêm rõ đuôi .jsx để Vite giải quyết đường dẫn chính xác tuyệt đối
import { SafeImage } from "../components/ImageWithFallback.jsx";

export function Blog() {
  const { language, t } = useLanguage();

  // Đồng bộ dải ảnh bài viết cục bộ từ 22.png đến 25.png
  const blogPosts = [
    {
      id: "nghe-thuat-men-ran",
      title: "Nghệ thuật men rạn: Vẻ đẹp từ sự không hoàn hảo",
      titleEn: "Crackle Glaze Art: Beauty in Imperfection",
      category: "KIẾN THỨC",
      categoryEn: "KNOWLEDGE",
      date: "15/06/2026",
      image: "/images/22.png",
      excerpt: "Khám phá bí ẩn đằng sau những đường nứt tự nhiên trên bề mặt men gốm Nam Bộ và tại sao chúng lại mang giá trị nghệ thuật cao.",
      excerptEn: "Discover the mystery behind the natural cracks on Southern ceramic glaze surfaces and why they hold such high artistic value."
    },
    {
      id: "bi-quyet-bao-quan-gom",
      title: "Bí quyết bảo quản và vệ sinh gốm sứ thủ công",
      titleEn: "Guide to Preserving and Cleaning Handmade Ceramics",
      category: "CẨM NANG",
      categoryEn: "GUIDE",
      date: "10/06/2026",
      image: "/images/23.png",
      excerpt: "Những lưu ý quan trọng giúp các bộ chén dĩa họa tiết xưa hay đôn chậu gốm của bạn luôn bền màu và sáng bóng theo thời gian.",
      excerptEn: "Important tips to help your vintage patterned dinnerware or ceramic pots retain their color and shine over time."
    },
    {
      id: "su-kien-ra-mat-lo-gom",
      title: "Sự kiện: Đỏ lửa mẻ gốm đầu xuân tại Vườn Nhà Gốm",
      titleEn: "Event: Spring's First Kiln Firing at Vuon Nha Gom",
      category: "SỰ KIỆN",
      categoryEn: "EVENT",
      date: "05/06/2026",
      image: "/images/24.png",
      excerpt: "Cùng nhìn lại những khoảnh khắc đáng nhớ trong sự kiện mở lò đầu năm, nơi quy tụ hàng trăm tác phẩm gốm độc bản đặc sắc.",
      excerptEn: "Let's look back at memorable moments from the early year kiln opening event, gathering hundreds of unique ceramic masterpieces."
    },
    {
      id: "cau-chuyen-nghe-nhan",
      title: "Gặp gỡ nghệ nhân: Hơn 40 năm gắn bó với bàn xoay",
      titleEn: "Meet the Artisan: Over 40 Years with the Potter's Wheel",
      category: "CÂU CHUYỆN",
      categoryEn: "STORY",
      date: "28/05/2026",
      image: "/images/25.png",
      excerpt: "Lắng nghe câu chuyện tâm huyết của chú Ba - một trong những nghệ nhân lão làng đang ngày đêm giữ lửa nghề tại Lái Thiêu.",
      excerptEn: "Listen to the dedicated story of Uncle Ba - one of the veteran artisans keeping the craft alive day and night in Lai Thieu."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      {/* Nút Quay lại Trang chủ - Tối ưu vùng chạm */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <Link
            to="/"
            className="inline-flex items-center text-sm md:text-base text-gray-600 hover:text-[var(--vermilion)] transition-colors font-medium py-1"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            {t("Quay lại trang chủ", "Back to home")}
          </Link>
        </div>
      </div>

      {/* Biểu ngữ đầu trang dạng ảnh bìa lớn áp dụng SafeImage bảo vệ */}
      <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src="/images/24.png"
            alt="Đỏ lửa mẻ gốm di sản"
            className="w-full h-full object-cover opacity-75 animate-in zoom-in-95 duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        
        <div className="absolute bottom-6 left-0 right-0 z-20 text-center md:text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-md rounded-full text-white mb-2">
              <BookOpen className="h-4 w-4" />
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
              {t("Tin Tức & Chuyện Nghề", "News & Pottery Stories")}
            </h1>
            <p className="text-sm text-gray-200 max-w-xl leading-relaxed drop-shadow-xs">
              {t(
                "Góc nhỏ lưu giữ những kiến thức văn hóa, cẩm nang chăm sóc gốm và cập nhật các hoạt động mới nhất tại Vườn.",
                "A small corner preserving cultural knowledge, ceramic care guides, and the latest activities at the Garden."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden group hover:shadow-md transition-all flex flex-col">
              {/* Áp dụng SafeImage cố định phom dáng thumbnail bài viết */}
              <div className="relative h-52 md:h-48 overflow-hidden bg-gray-50">
                <SafeImage
                  src={post.image}
                  alt={language === "VI" ? post.title : post.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[var(--dark-slate)] font-bold text-[10px] px-2.5 py-0.5 rounded-md border border-gray-100 shadow-xs">
                  {language === "VI" ? post.category : post.categoryEn}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="font-bold text-gray-900 text-base mb-2.5 line-clamp-2 group-hover:text-[var(--terra-cotta)] transition-colors leading-snug">
                  {language === "VI" ? post.title : post.titleEn}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-5 flex-1 text-justify leading-relaxed">
                  {language === "VI" ? post.excerpt : post.excerptEn}
                </p>
                
                {/* Nút đọc tiếp: Tối ưu vùng chạm min-h-[40px] */}
                <button className="inline-flex items-center text-[var(--terra-cotta)] hover:text-[var(--vermilion)] font-bold text-sm transition-colors mt-auto w-fit cursor-pointer py-2 min-h-[40px]">
                  {t("Đọc tiếp", "Read more")}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}