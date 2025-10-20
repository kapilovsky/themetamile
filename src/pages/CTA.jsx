import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard, GlassButton } from "../components/GlassEffect";
import { useRef } from "react";

const CTA = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.8, 1, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-8 relative overflow-hidden bg-gradient-to-b from-white via-[#e0f2f1]/40 to-[#e0f2f1]/60"
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#00897b]/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-[32rem] h-[32rem] bg-[#26a69a]/10 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <GlassCard className="p-12 md:p-16 text-center">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 neue text-[#2E2E2E] leading-tight">
                Ready to Build Something{" "}
                <span className="instrument text-[#00897b]">
                  Unforgettable?
                </span>
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-[#2E2E2E]/70 neue max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Let's turn your brand into a movement. Book your free consultation
              and discover how META MILE can multiply your growth.
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-[#2E2E2E] font-semibold neue">
                  Free Strategy Session
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">📊</div>
                <p className="text-[#2E2E2E] font-semibold neue">
                  Customized Growth Plan
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">🚀</div>
                <p className="text-[#2E2E2E] font-semibold neue">
                  No Obligation Audit
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="px-10 py-5 bg-[#00897b] text-white rounded-full text-lg font-bold neue hover:bg-[#00695c] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 min-w-[240px]">
                Book Free Consultation →
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-[#2E2E2E] text-[#2E2E2E] rounded-full text-lg font-bold neue hover:bg-[#2E2E2E] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[240px]">
                Get Free Audit
              </button>
            </motion.div>

            {/* Social Proof Line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-[#2E2E2E]/60 neue mt-8"
            >
              Join 100+ brands across India who trust META MILE for their growth
            </motion.p>
          </GlassCard>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#00897b]/10">
            <h4 className="text-3xl font-bold text-[#00897b] mb-1 neue">24h</h4>
            <p className="text-xs text-[#2E2E2E]/70 neue">Response Time</p>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#00897b]/10">
            <h4 className="text-3xl font-bold text-[#00897b] mb-1 neue">
              100%
            </h4>
            <p className="text-xs text-[#2E2E2E]/70 neue">Transparency</p>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#00897b]/10">
            <h4 className="text-3xl font-bold text-[#00897b] mb-1 neue">ROI</h4>
            <p className="text-xs text-[#2E2E2E]/70 neue">Focused Approach</p>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#00897b]/10">
            <h4 className="text-3xl font-bold text-[#00897b] mb-1 neue">
              360°
            </h4>
            <p className="text-xs text-[#2E2E2E]/70 neue">Full Stack Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
