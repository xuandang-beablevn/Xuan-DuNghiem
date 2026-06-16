import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router";
import { destinations } from "../data/destinations";
import { useLanguage } from "../LanguageContext";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Khắc phục lỗi hiển thị biểu tượng ghim định vị mặc định của thư viện Leaflet trong React
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export function MapPage() {
  const { language, t } = useLanguage();
  
  // Tọa độ trung tâm điều phối bản đồ (Khu vực Lái Thiêu - Bình Dương)
  const center = [10.9350, 106.6800];

  const categoryEn = {
    "LỊCH SỬ": "HISTORY",
    "KHÔNG GIAN": "SPACE",
    "HÀNH TRÌNH": "JOURNEY",
    "SẢN PHẨM": "PRODUCTS"
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] flex flex-col animate-in fade-in duration-300">
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          
          <h1 className="text-xl md:text-3xl font-extrabold mb-4 md:mb-6 text-[var(--dark-slate)] tracking-tight">
            {t("Bản đồ địa điểm Vườn Nhà Gốm", "Vuon Nha Gom Location Map")}
          </h1>

          {/* Khung bản đồ (Map Container) - Tối ưu chiều cao hiển thị và z-index an toàn trên Mobile */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-[380px] md:h-[580px] relative z-0 border border-gray-100">
            <MapContainer
              center={center}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {destinations.map((destination) => (
                <Marker
                  key={destination.id}
                  position={destination.coordinates}
                  icon={icon}
                >
                  <Popup>
                    <div className="p-1 min-w-[140px] font-sans">
                      <h3 className="font-bold text-sm mb-1 text-[var(--dark-slate)] leading-tight">
                        {language === "VI" ? destination.title : destination.titleEn}
                      </h3>
                      <p className="text-[11px] text-gray-500 mb-2">
                        {t("Danh mục: ", "Category: ")} 
                        <span className="font-semibold text-gray-700">
                          {language === "VI" ? destination.category : categoryEn[destination.category]}
                        </span>
                      </p>
                      {/* Liên kết dẫn thẳng tới trang câu chuyện chi tiết - Tối ưu chiều cao chạm */}
                      <Link
                        to={`/destination/${destination.id}`}
                        className="inline-block text-[var(--terra-cotta)] hover:text-[var(--vermilion)] font-bold text-xs transition-colors py-1"
                      >
                        {t("Xem bài viết →", "Read article →")}
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Danh sách liệt kê nhanh các điểm đến hỗ trợ tra cứu dưới bản đồ (Tối ưu vuốt chạm) */}
          <div className="mt-6 bg-white rounded-xl shadow-xs p-5 mb-6 border border-gray-100">
            <h2 className="text-base md:text-xl font-bold mb-3.5 text-[var(--dark-slate)]">
              {t("Danh sách địa điểm di sản", "List of Locations")}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {destinations.map((destination) => (
                <Link
                  key={destination.id}
                  to={`/destination/${destination.id}`}
                  className="flex items-start p-3.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 bg-gray-50/30 group active:bg-gray-100 min-h-[52px]"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900 mb-0.5 group-hover:text-[var(--terra-cotta)] transition-colors line-clamp-1">
                      {language === "VI" ? destination.title : destination.titleEn}
                    </h3>
                    <p className="text-[11px] text-gray-500">
                      {language === "VI" ? destination.category : categoryEn[destination.category]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}