import { createContext, useState, useContext } from "react";

// Khởi tạo Context quản lý ngôn ngữ song ngữ (VI / EN)
export const LanguageContext = createContext(undefined);

// Custom hook giúp các thành phần giao diện gọi nhanh trạng thái ngôn ngữ
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage phải được đặt trong LanguageProvider");
  }
  return context;
}

// Bộ bọc Provider quản lý trạng thái ngôn ngữ toàn cục cho toàn bộ Website
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("VI");

  // Hàm helper điều phối hiển thị văn bản theo ngôn ngữ đang chọn nhanh gọn
  const t = (vi, en) => (language === "VI" ? vi : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}