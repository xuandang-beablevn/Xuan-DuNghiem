import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./styles/index.css";

// Khởi tạo và gắn kết ứng dụng React vào thẻ div mang định danh 'root' trên trình duyệt
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);