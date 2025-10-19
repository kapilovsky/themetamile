import { GlassEffect } from "./GlassEffect";

const TrustBadge = () => {
  const avatars = [
    "https://framerusercontent.com/images/KPMp2NVpOD4UwQF11ICxWjO8NQ.png",
    "https://framerusercontent.com/images/2mTwLJelFOnoyY1kfwbBJADx8L0.png",
    "https://framerusercontent.com/images/bmdWBuJR1xw0I9sDl6A5NPLRw4.png",
  ];

  return (
    <GlassEffect className="inline-flex rounded-full px-4 py-2">
      <div className="flex items-center gap-3">
        {/* Avatar Images */}
        <div className="flex items-center -space-x-2">
          {avatars.map((src, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border-2 border-white overflow-hidden"
            >
              <img
                src={src}
                alt={`User ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Tag Text */}
        <p className="text-sm text-black/70 neue font-medium whitespace-nowrap">
          50+ Happy Clients!
        </p>
      </div>
    </GlassEffect>
  );
};

export default TrustBadge;
