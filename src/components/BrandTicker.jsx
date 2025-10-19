import { useEffect, useRef } from "react";

const BrandTicker = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationId;
    let position = 0;
    const speed = 1; // Adjust speed (pixels per frame)

    const animate = () => {
      position -= speed;

      // Reset position when first image has scrolled past
      const imageWidth = scroll.firstChild.offsetWidth;
      if (Math.abs(position) >= imageWidth) {
        position = 0;
      }

      scroll.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const logoStrip =
    "https://framerusercontent.com/images/zkBHaeDtp6WCChy4QQ9busTs9tA.svg";

  return (
    <div className="w-full py-12 overflow-hidden">
      {/* Title */}
      <p className="text-center text-black/50 neue text-sm md:text-base mb-8 neue">
        You're in expert hands. Trusted by top companies around the world.
      </p>

      {/* Ticker Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Scrolling Content */}
        <div
          ref={scrollRef}
          className="flex items-center gap-0"
          style={{ willChange: "transform" }}
        >
          {/* Multiple copies for seamless loop */}
          <img
            src={logoStrip}
            alt="Brand logos"
            className="h-12 w-auto flex-shrink-0"
          />
          <img
            src={logoStrip}
            alt="Brand logos"
            className="h-12 w-auto flex-shrink-0"
          />
          <img
            src={logoStrip}
            alt="Brand logos"
            className="h-12 w-auto flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandTicker;
