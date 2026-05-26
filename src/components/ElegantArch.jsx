export default function ElegantArch({ src, alt, className = "", height = "h-[380px] sm:h-[450px]" }) {
  return (
    <div className={`arch-frame-double ${className}`}>
      <div className={`arch-inner bg-cream-border/20 ${height}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
        />
      </div>
    </div>
  );
}
