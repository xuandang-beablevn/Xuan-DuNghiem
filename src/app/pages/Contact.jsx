import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, MapPin, Phone, Clock, Mail, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mô phỏng xử lý gửi biểu mẫu liên hệ thành công
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      {/* Nút Quay lại Trang chủ */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-[var(--vermilion)] transition-colors font-semibold"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            {t("Quay lại trang chủ", "Back to home")}
          </Link>
        </div>
      </div>

      {/* Biểu ngữ đầu trang */}
      <div className="bg-[var(--dark-slate)] text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-tight">
            {t("Liên Hệ Với Chúng Tôi", "Get In Touch")}
          </h1>
          <p className="text-xs md:text-sm text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
            {t(
              "Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn mọi thông tin về sản phẩm, dịch vụ cũng như các hoạt động tại Vườn Nhà Gốm.",
              "We are always ready to listen and support you with any information regarding our products, services, and activities at Vuon Nha Gom."
            )}
          </p>
        </div>
      </div>

      {/* Nội dung chính phân tách Layout: Tự động xếp dọc trên Mobile, 2 cột trên Desktop */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Cột Trái: Thông tin trực tiếp */}
          <div className="space-y-4">
            {/* ĐÃ SỬA: Đưa về hàm dịch chuẩn hóa không bị lẫn từ tự do bên ngoài */}
            <h2 className="text-lg font-bold text-gray-900 mb-2 border-b pb-2">
              {t("Thông Tin Trực Tiếp", "Direct Contact Info")}
            </h2>
            
            <div className="space-y-4">
              {/* Địa chỉ */}
              <div className="flex items-start bg-white p-4 rounded-xl shadow-xs border border-gray-100">
                <div className="p-2 bg-[var(--cream)] rounded-full text-[var(--vermilion)] mr-3.5 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">
                    {t("Địa chỉ xưởng", "Workshop Address")}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {t(
                      "120 Ngô Quyền (Đường Gia Long cũ), Lái Thiêu, TPHCM (Bình Dương cũ).",
                      "120 Ngo Quyen (former Gia Long Street), Lai Thieu, HCMC (former Binh Duong)."
                    )}
                  </p>
                </div>
              </div>

              {/* Số điện thoại */}
              <div className="flex items-start bg-white p-4 rounded-xl shadow-xs border border-gray-100">
                <div className="p-2 bg-[var(--cream)] rounded-full text-[var(--vermilion)] mr-3.5 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">
                    {t("Đường dây nóng", "Hotline")}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">0976 035 247 | 0941 135 546</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start bg-white p-4 rounded-xl shadow-xs border border-gray-100">
                <div className="p-2 bg-[var(--cream)] rounded-full text-[var(--vermilion)] mr-3.5 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">
                    {t("Thư điện tử", "Email")}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">contact@vuonnhagom.vn</p>
                </div>
              </div>

              {/* Giờ mở cửa */}
              <div className="flex items-start bg-white p-4 rounded-xl shadow-xs border border-gray-100">
                <div className="p-2 bg-[var(--cream)] rounded-full text-[var(--vermilion)] mr-3.5 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">
                    {t("Giờ hoạt động", "Operating Hours")}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">8:00 - 17:00 {t("(Thứ 2 - Chủ Nhật)", "(Monday - Sunday)")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột Phải: Biểu mẫu gửi lời nhắn */}
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-8 border border-gray-100">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900 border-b pb-2">
                  {t("Gửi Lời Nhắn", "Send Us a Message")}
                </h2>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t("Họ và Tên *", "Full Name *")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-xs md:text-sm bg-gray-50 focus:outline-[var(--vermilion)] focus:bg-white transition-all"
                    placeholder={t("Nhập họ và tên của bạn", "Enter your full name")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {t("Số điện thoại *", "Phone Number *")}
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-gray-200 rounded-lg p-2.5 text-xs md:text-sm bg-gray-50 focus:outline-[var(--vermilion)] focus:bg-white transition-all"
                      placeholder="09xx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {t("Email liên hệ", "Email Address")}
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 rounded-lg p-2.5 text-xs md:text-sm bg-gray-50 focus:outline-[var(--vermilion)] focus:bg-white transition-all"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {t("Nội dung tin nhắn *", "Your Message *")}
                  </label>
                  <textarea
                    required
                    rows="4"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-xs md:text-sm bg-gray-50 focus:outline-[var(--vermilion)] focus:bg-white transition-all resize-none"
                    placeholder={t("Nhập câu hỏi hoặc yêu cầu của bạn...", "Enter your questions or requests...")}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--terra-cotta)] hover:bg-[var(--vermilion)] text-white text-xs md:text-sm font-bold py-3 rounded-lg shadow-xs transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Send className="mr-1.5 h-4 w-4" />
                  {t("Gửi Lời Nhắn", "Send Message")}
                </button>
              </form>
            ) : (
              /* Trạng thái gửi thành công */
              <div className="text-center py-8 space-y-3">
                <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-full text-green-600 mb-1">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t("Gửi Thành Công!", "Message Sent!")}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  {t(
                    "Cảm ơn bạn đã gửi lời nhắn. Chúng tôi sẽ sớm liên hệ lại để hỗ trợ bạn.",
                    "Thank you for your message. We will get back to you shortly to support you."
                  )}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm text-[var(--terra-cotta)] hover:text-[var(--vermilion)] font-semibold transition-colors"
                >
                  {t("Gửi tin nhắn khác", "Send another message")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}