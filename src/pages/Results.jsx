import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "../components/GlassEffect";
import { useRef } from "react";

const Results = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const results = [
    {
      metric: "₹20k → ₹10L",
      period: "in 4 months",
      description:
        "Scaled D2C fashion brand with strategic paid ads + email automation",
      icon: "📈",
      color: "#00897b",
    },
    {
      metric: "500+",
      period: "Qualified Leads",
      description:
        "Generated high-intent B2B leads for SaaS company in 6 months",
      icon: "🎯",
      color: "#26a69a",
    },
    {
      metric: "3x ROAS",
      period: "in 90 days",
      description:
        "Improved return on ad spend for e-commerce brand with data-driven campaigns",
      icon: "💰",
      color: "#4db6ac",
    },
    {
      metric: "50+",
      period: "Demo Calls/Month",
      description:
        "Built predictable pipeline for B2B tech startup through LinkedIn + content",
      icon: "📞",
      color: "#00695c",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-8 relative overflow-hidden bg-gradient-to-b from-[#e0f2f1]/20 to-white"
    >
      {/* Decorative Background Circles */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 right-10 w-64 h-64 bg-[#00897b]/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-[#26a69a]/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neue text-[#2E2E2E]">
            Results That{" "}
            <span className="instrument text-[#00897b]">Speak</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E2E]/70 neue max-w-3xl mx-auto leading-relaxed">
            We've helped brands across India scale from startups to market
            leaders. Here's what measurable growth looks like.
          </p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {results.map((result, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="h-full p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: result.color }}
                  >
                    {result.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3
                        className="text-4xl font-bold neue"
                        style={{ color: result.color }}
                      >
                        {result.metric}
                      </h3>
                    </div>
                    <p className="text-lg font-semibold text-[#2E2E2E] neue mb-3">
                      {result.period}
                    </p>
                    <p className="text-[#2E2E2E]/70 neue leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#00897b]/10">
            <h4 className="text-4xl font-bold text-[#00897b] mb-2 neue">
              100+
            </h4>
            <p className="text-[#2E2E2E]/70 neue">Brands Served</p>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#00897b]/10">
            <h4 className="text-4xl font-bold text-[#00897b] mb-2 neue">
              ₹50Cr+
            </h4>
            <p className="text-[#2E2E2E]/70 neue">Revenue Generated</p>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#00897b]/10">
            <h4 className="text-4xl font-bold text-[#00897b] mb-2 neue">
              5000+
            </h4>
            <p className="text-[#2E2E2E]/70 neue">Qualified Leads</p>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#00897b]/10">
            <h4 className="text-4xl font-bold text-[#00897b] mb-2 neue">98%</h4>
            <p className="text-[#2E2E2E]/70 neue">Client Satisfaction</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-[#2E2E2E]/70 neue mb-6">
            Want results like these for your brand?
          </p>
          <button className="px-8 py-4 bg-[#00897b] text-white rounded-full text-lg font-semibold neue hover:bg-[#00695c] transition-colors duration-300 shadow-lg hover:shadow-xl">
            Book Your Free Audit →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
