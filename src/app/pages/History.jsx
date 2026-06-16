import { destinations } from "../data/destinations";
import { DestinationCard } from "../components/DestinationCard";
import { useLanguage } from "../LanguageContext";

export function HistoryPage() {
  const { t } = useLanguage();
  // Lọc lấy các bài viết có danh mục Lịch sử
  const historyDestinations = destinations.filter(d => d.category === "LỊCH SỬ");

  return (
    <div className="min-h-screen bg-[var(--cream)] py-12 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            {t("Di Sản Lịch Sử Gốm Nam Bộ", "Historical Pottery Heritage")}
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            {t(
              "Tìm hiểu về dòng chảy lịch sử thăng trầm và nguồn gốc hình thành của các làng gốm cổ xưa bên dòng sông Sài Gòn.",
              "Learn about the historical flow and the origins of ancient pottery villages along the Saigon River."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {historyDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}