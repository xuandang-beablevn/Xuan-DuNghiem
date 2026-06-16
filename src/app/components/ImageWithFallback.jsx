import { useState } from 'react';

// Đã làm sạch mã base64, loại bỏ ký tự lỗi để đảm bảo SVG luôn render thành công
const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjNDY1ZTZjIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIj48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgcng9IjYiLz48cGF0aCBkPSJtMTYgNTggMTYtMTggMzIgMzIiLz48Y2lyY2xlIGN4PSI1MyIgY3k9IjM1IiByPSI3Ii8+PC9zdmc+';

export function ImageWithFallback({ src, alt, style, className, ...rest }) {
  const [didError, setDidError] = useState(false);

  // SafeImage logic: Trả về một khối hộp đồng bộ màu sắc với thiết kế nếu mất ảnh
  return didError ? (
    <div
      className={`bg-[#f4eae0] flex items-center justify-center overflow-hidden ${className ?? ''}`}
      style={style}
    >
      <img 
        src={ERROR_IMG_SRC} 
        alt="Image missing" 
        className="w-10 h-10 md:w-16 md:h-16 object-contain opacity-30 animate-pulse" 
        {...rest} 
      />
    </div>
  ) : (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={() => setDidError(true)} 
    />
  );
}

export { ImageWithFallback as SafeImage };