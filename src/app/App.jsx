import { BrowserRouter, Routes, Route } from "react-router";
import { LanguageProvider } from "./LanguageContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { DestinationDetail } from "./pages/DestinationDetail";
import { MapPage } from "./pages/Map";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Shop } from "./pages/Shop";
import { Workshops } from "./pages/Workshops";

// Import các trang mới tách biệt
import { SpacePage } from "./pages/Space";
import { JourneyPage } from "./pages/Journey";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[var(--cream)] selection:bg-[var(--vermilion)] selection:text-white">
          {/* Thanh điều hướng cố định tích hợp menu liên kết đa trang */}
          <Navbar />
          
          {/* Vùng hiển thị nội dung động không tải lại trang */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination/:id" element={<DestinationDetail />} />
              <Route path="/map" element={<MapPage />} />
              
              {/* Đã gộp trang Lịch sử và About thành trang Giới thiệu đồng nhất */}
              <Route path="/gioi-thieu" element={<About />} />
              
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/san-pham" element={<Shop />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/khong-gian" element={<SpacePage />} />
              <Route path="/hanh-trinh" element={<JourneyPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}