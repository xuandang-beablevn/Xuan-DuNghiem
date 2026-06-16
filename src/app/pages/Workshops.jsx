import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Calendar, Users, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Workshops() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    workshopType: "hanh-trinh-cham-vao-dat",
    date: "",
    timeSlot: "09:00",
    guests: "1"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mô phỏng quá trình xử lý gửi thông tin đặt lịch thành công
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      {/* Nút Quay lại Trang chủ - Tối ưu vùng chạm cho thiết bị di động */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 md:py-4">
          <Link
            to="/"
            className="inline-flex items-center text-sm md:text-base text-gray-600 hover:text-[var(--vermilion)] transition-colors font-medium py-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("Quay lại trang chủ", "Back to home")}
          </Link>
        </div>
      </div>

      {/* Banner Tiêu đề Trang */}
      <div className="bg-[var(--terra-cotta)] text-white py-12 md:py-16 px-4 text-center relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            {t("Trải Nghiệm Làm Gốm Thủ Công", "Pottery Workshop Booking")}
          </h1>
          <p className="text-sm md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
            {t(
              "Tự tay nhào nặn khối đất sét, gửi gắm tâm tư và tạo tác nên tác phẩm gốm độc bản của riêng mình.",
              "Hand-mold the raw clay, embrace mindfulness, and create your very own unique pottery masterpiece."
            )}
          </p>
        </div>
      </div>

      {/* Nội dung chính phân tách Layout di động/Máy tính */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cột Trái: Thông tin các khóa học (Chiếm 5 cột trên PC) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-5 md:p-6 border-l-4 border-[var(--vermilion)]">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Sparkles className="h-5 w-5 text-[var(--vermilion)] mr-2 shrink-0" />
                {t("Hành trình Chạm vào Đất", "Journey 'Touch the Earth'")}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                {t(
                  "Lớp học đặc sắc dẫn dắt bạn qua các kỹ thuật xoay bàn truyền thống dưới sự hướng dẫn tỉ mỉ từ nghệ nhân bản địa.",
                  "A special class guiding you through traditional kick-wheel techniques under direct assistance from native pottery artisans."
                )}
              </p>
              <div className="space-y-3 text-sm text-gray-700 font-medium">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-[var(--dark-slate)] mr-2 shrink-0" />
                  <span>{t("Thời lượng: 120 phút", "Duration: 120 minutes")}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-[var(--dark-slate)] mr-2 shrink-0" />
                  <span>{t("Phù hợp: Mọi lứa tuổi (Trẻ em từ 5 tuổi)", "Suitable for: All ages (Kids from 5+)")}</span>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{t("Chi phí học", "Fee")}</span>
                <span className="text-base md:text-lg font-bold text-[var(--terra-cotta)]">{t("250,000 VNĐ / người", "250,000 VND / person")}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 text-sm text-gray-600 leading-relaxed text-justify border border-gray-100 shadow-sm">
              <strong className="text-[var(--dark-slate)]">{t("* Lưu ý nhỏ: ", "* Travel Tips: ")}</strong>
              {t(
                "Sản phẩm tự tay làm sẽ được xưởng mang đi sấy khô, tráng men và nung chín ở nhiệt độ cao hoàn chỉnh trước khi gửi lại bạn sau 5 - 7 ngày làm việc.",
                "Your self-made items will be dried, glazed, and fully fired at high temperatures by our workshop before being delivered to you in 5 - 7 working days."
              )}
            </div>
          </div>

          {/* Cột Phải: Biểu mẫu đặt lịch (Chiếm 7 cột trên PC) */}
          <div className="lg:col-span-7 bg-white rounded-lg shadow-lg p-5 md:p-8 border border-gray-50">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                  {t("Thông Tin Đăng Ký Đặt Chỗ", "Reservation Details")}
                </h2>

                {/* Ô Nhập Họ và Tên */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t("Họ và tên của bạn *", "Your full name *")}
                  </label>
                  <input
                    type="text"
                    required
                    /* text-base trên mobile ngăn iOS Safari tự động zoom */
                    className="w-full border border-gray-200 rounded-md p-3 text-base sm:text-sm bg-gray-50/50 focus:bg-white focus:border-[var(--vermilion)] focus:ring-1 focus:ring-[var(--vermilion)] transition-all outline-none"
                    placeholder={t("Ví dụ: Nguyễn Văn A", "e.g., John Doe")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Grid 2 Cột trên PC, 1 Cột trên Mobile: SĐT & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("Số điện thoại liên hệ *", "Phone number *")}
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-gray-200 rounded-md p-3 text-base sm:text-sm bg-gray-50/50 focus:bg-white focus:border-[var(--vermilion)] focus:ring-1 focus:ring-[var(--vermilion)] transition-all outline-none"
                      placeholder="09xx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("Địa chỉ Email", "Email Address")}
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 rounded-md p-3 text-base sm:text-sm bg-gray-50/50 focus:bg-white focus:border-[var(--vermilion)] focus:ring-1 focus:ring-[var(--vermilion)] transition-all outline-none"
                      placeholder="username@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Grid 3 Ô: Ngày chọn, Khung giờ & Số người */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("Chọn Ngày tham gia *", "Select Date *")}
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full border border-gray-200 rounded-md p-3 text-base sm:text-sm bg-gray-50/50 focus:bg-white focus:border-[var(--vermilion)] focus:ring-1 focus:ring-[var(--vermilion)] transition-all outline-none min-h-[46px]"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("Khung Giờ *", "Time Slot *")}
                    </label>
                    <select
                      className="w-full border border-gray-200 rounded-md p-3 text-base sm:text-sm bg-gray-50/50 focus:bg-white focus:border-[var(--vermilion)] focus:ring-1 focus:ring-[var(--vermilion)] transition-all outline-none min-h-[46px]"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    >
                      <option value="09:00">09:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("Số người học *", "Number of Guests *")}
                    </label>
                    <select
                      className="w-full border border-gray-200 rounded-md p-3 text-base sm:text-sm bg-gray-50/50 focus:bg-white focus:border-[var(--vermilion)] focus:ring-1 focus:ring-[var(--vermilion)] transition-all outline-none min-h-[46px]"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    >
                      <option value="1">1 {t("người", "person")}</option>
                      <option value="2">2 {t("người", "people")}</option>
                      <option value="3">3 {t("người", "people")}</option>
                      <option value="4">4 {t("người", "people")}</option>
                      <option value="5">5+ {t("người (nhóm)", "people (group)")}</option>
                    </select>
                  </div>
                </div>

                {/* Nút Đăng Ký Gửi Form - Tối ưu chiều cao vùng chạm */}
                <button
                  type="submit"
                  className="w-full bg-[var(--vermilion)] hover:bg-[var(--terra-cotta)] text-white text-base font-bold py-3.5 px-4 rounded-lg shadow-md transition-colors duration-200 mt-6 cursor-pointer flex items-center justify-center min-h-[50px]"
                >
                  {t("Xác Nhận Đăng Ký Trải Nghiệm", "Confirm Workshop Booking")}
                </button>
              </form>
            ) : (
              /* Trạng thái sau khi đăng ký thành công */
              <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-full text-green-600 mb-2">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("Đặt Lịch Thành Công!", "Booking Successful!")}
                </h3>
                <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
                  {t(
                    "Cảm ơn bạn đã đăng ký trải nghiệm tại Vườn Nhà Gốm. Đội ngũ nghệ nhân xưởng gốm sẽ chủ động liên hệ đến bạn qua số điện thoại để chốt lịch hẹn sớm nhất.",
                    "Thank you for registering at Vuon Nha Gom. Our artisan team will contact you via phone shortly to finalize your appointment details."
                  )}
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-semibold text-[var(--vermilion)] hover:text-[var(--terra-cotta)] transition-colors inline-flex items-center"
                  >
                    <ArrowLeft className="mr-1.5 h-4 w-4" />
                    {t("Đăng ký thêm lịch học mới", "Create another booking")}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}