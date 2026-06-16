import { Link } from "react-router";
import { Compass, Leaf, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { destinations } from "../data/destinations";
import { DestinationCard } from "../components/DestinationCard";
// Thêm rõ đuôi .jsx để Vite xử lý mượt mà
import { SafeImage } from "../components/ImageWithFallback.jsx";

export function SpacePage() {
  const { t } = useLanguage();
  const spaceItems = destinations.filter(d => d.category === "KHÔNG GIAN");

  return (
    <div className="min-h-screen bg-[var(--cream)] animate-in fade-in duration-300">
      {/* Biểu ngữ đầu trang dạng ảnh bìa lớn áp dụng SafeImage bảo vệ - Sử dụng ảnh 12.png */}
      <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden flex">
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src="/images/12.png"
            alt="Không gian kiến trúc Vườn Nhà Gốm"
            className="w-full h-full object-cover opacity-75 animate-in zoom-in-95 duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
        
        <div className="absolute bottom-6 left-0 right-0 z-20 text-center md:text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 bg-[var(--deep-copper)] text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <Leaf className="h-3 w-3" />
              {t("Khám Phá Cảnh Quan", "Explore Architecture")}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
              {t("Không Gian Nghệ Thuật & Kiến Trúc", "Artistic Spaces & Architecture")}
            </h1>
            <p className="text-sm md:text-lg text-gray-200 font-medium max-w-2xl leading-relaxed drop-shadow-xs">
              {t(
                "Nơi thời gian như lắng đọng bên những mảng tường gốm mộc, những đôn gốm cổ rêu phong và bóng cây xanh mát lành.",
                "Where time stands still beside rustic ceramic walls, mossy ancient stools, and refreshing green shades."
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="p-2.5 bg-[var(--cream)] rounded-full text-[var(--terra-cotta)] w-fit mb-4">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {t("Ốc đảo xanh giữa lòng phố", "Green Oasis in the City")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {t(
                  "Rời xa những ồn ào và khói bụi hối hả của đô thị, bước chân vào không gian xưởng là bạn đang hòa mình vào một lối kiến trúc mộc mạc đậm chất làng quê Nam Bộ. Tiếng lá cây xào xạc hòa cùng mùi đất nung ấm áp mang lại cảm giác thư thái lạ kỳ.",
                  "Leaving behind the hustle and bustle of the city, stepping into our workshop means immersing yourself in a rustic Southern countryside architecture. The rustling leaves combined with the warm scent of baked clay bring an extraordinarily relaxing feeling."
                )}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="p-2.5 bg-[var(--cream)] rounded-full text-[var(--deep-copper)] w-fit mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {t("Mảnh gốm kể chuyện", "Storytelling Shards")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {t(
                  "Điểm độc đáo tại đây là những mảng tường rạn men, những lối đi được lót bằng các mảnh gốm vỡ tỉ mỉ. Mỗi góc nhỏ, mỗi chiếc kệ trưng bày chén dĩa con gà xưa cũ đều kể lại câu chuyện về hành trình gìn giữ ngọn lửa nghề của cha ông.",
                  "The unique feature here is the crackle-glazed walls and pathways meticulously lined with ceramic shards. Every corner and display shelf of ancient rooster bowls tells the story of preserving our ancestors' craft flame."
                )}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 flex flex-col justify-between border-l-4 border-l-[var(--vermilion)]">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {t("Góc tìm về sự tĩnh lặng", "Seeking Inner Peace")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify mb-4">
                {t(
                  "Nhiều du khách tìm đến đây không chỉ để tham quan mà còn để xoa dịu tâm hồn. Ngồi bên chiếc đôn gốm cổ, ngắm nhìn những tác phẩm độc bản và thưởng thức không khí trong lành là phương thuốc 'chữa lành' hoàn hảo nhất.",
                  "Many visitors come here not just for sightseeing but to soothe their souls. Sitting by an ancient ceramic stool, admiring unique masterpieces, and enjoying the fresh air is the most perfect 'healing' remedy."
                )}
              </p>
              <Link to="/map" className="inline-flex items-center text-xs font-bold text-[var(--terra-cotta)] hover:text-[var(--vermilion)] transition-colors py-1 min-h-[36px]">
                {t("Xem vị trí xưởng trên bản đồ", "View workshop location")}
                <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
          {t("Các Điểm Đến Không Gian", "Featured Spaces")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {spaceItems.map((item) => (
            <DestinationCard key={item.id} destination={item} />
          ))}
        </div>
      </div>
    </div>
  );
}