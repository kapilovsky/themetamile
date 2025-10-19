import GradientBackground from "../components/GradientBackground";
import { GlassFilter, GlassButton, GlassCard } from "../components/GlassEffect";
import TrustBadge from "../components/TrustBadge";
import { Navbar } from "../components/Navbar";
import BrandTicker from "../components/BrandTicker";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden hero-section">
        <GlassFilter />
        <GradientBackground Breathing={true} />
        <div className="dot-pattern absolute top-0 left-0 w-full h-full mix-blend-multiply"></div>

        <div className="relative z-10 flex flex-col items-center gap-8 p-8">
          <Navbar />
          {/* Content */}
          <div className="flex flex-col items-center gap-6 mt-10">
            <TrustBadge />
            <h1 className="text-black hero-text text-5xl md:text-8xl font-bold text-center neue">
              We Don't Market <br /> We Multiply{" "}
              <span className="instrument">Growth</span>
            </h1>

            <p className="neue text-[#004d40c3] md:text-lg text-sm text-center">
              Themetamile is a full-stack marketing company helping brands{" "}
              <br /> scale with strategy, design, and systems.
            </p>

            <div className="flex items-center gap-8">
              <GlassButton onClick={() => alert("Button clicked!")}>
                <span className="text-black/70 text-lg neue">Let's Talk</span>
              </GlassButton>

              <GlassButton
                className="bg-[#00897b] "
                onClick={() => alert("Button clicked!")}
              >
                <span className="text-white/90 text-lg neue">
                  Get Free Audit
                </span>
              </GlassButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
