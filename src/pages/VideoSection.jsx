import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { GlassCard } from "../components/GlassEffect";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-8 relative overflow-hidden bg-gradient-to-b from-white to-[#e0f2f1]/30"
    >
      {/* Decorative Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#00897b]/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#26a69a]/5 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neue text-[#2E2E2E]">
            See How We{" "}
            <span className="instrument text-[#00897b]">Transform</span> Brands
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E2E]/70 neue max-w-3xl mx-auto leading-relaxed">
            Watch how we help businesses turn marketing into a growth engine
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlassCard className="p-4 md:p-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#2E2E2E] aspect-video group">
              {/* Thumbnail/Placeholder */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#00897b] to-[#004d40]">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full border-4 border-white/40 hover:scale-110 transition-transform duration-300 group"
                  >
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              )}

              {/* YouTube Video Embed */}
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="META MILE Company Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 neue">
                      META MILE Overview
                    </h3>
                    <p className="text-white/80 neue">
                      Click to watch our story
                    </p>
                  </div>
                </div>
              )}
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
        >
          <div className="text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-[#00897b]/10">
            <h4 className="text-3xl md:text-4xl font-bold text-[#00897b] mb-2 neue">
              3+
            </h4>
            <p className="text-sm md:text-base text-[#2E2E2E]/70 neue">
              Years Experience
            </p>
          </div>
          <div className="text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-[#00897b]/10">
            <h4 className="text-3xl md:text-4xl font-bold text-[#00897b] mb-2 neue">
              12+
            </h4>
            <p className="text-sm md:text-base text-[#2E2E2E]/70 neue">
              Industries Served
            </p>
          </div>
          <div className="text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-[#00897b]/10">
            <h4 className="text-3xl md:text-4xl font-bold text-[#00897b] mb-2 neue">
              100%
            </h4>
            <p className="text-sm md:text-base text-[#2E2E2E]/70 neue">
              Client Retention
            </p>
          </div>
          <div className="text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-[#00897b]/10">
            <h4 className="text-3xl md:text-4xl font-bold text-[#00897b] mb-2 neue">
              24/7
            </h4>
            <p className="text-sm md:text-base text-[#2E2E2E]/70 neue">
              Support Available
            </p>
          </div>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-[#2E2E2E]/70 neue mb-6">
            Ready to start your growth journey?
          </p>
          <button className="px-8 py-4 bg-[#00897b] text-white rounded-full text-lg font-semibold neue hover:bg-[#00695c] transition-colors duration-300 shadow-lg hover:shadow-xl">
            Book Your Free Consultation →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
