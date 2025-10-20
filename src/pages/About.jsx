import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard, GlassButton } from "../components/GlassEffect";
import BrandTicker from "../components/BrandTicker";
import "../styles/About.css";
import Shape1 from "../assets/images/3d-shapes/1.png";
import Shape2 from "../assets/images/3d-shapes/2.png";
import Shape3 from "../assets/images/3d-shapes/3.png";
import { useRef } from "react";

const AboutSummary = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for each shape (different speeds)
  const shape1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const shape2Y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const shape3Y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const differentiators = [
    {
      icon: "🎯",
      title: "Strategy First",
      description:
        "We don't execute blindly. Every campaign starts with a deep-dive strategy that aligns with your business goals.",
    },
    {
      icon: "⚡",
      title: "Performance Driven",
      description:
        "Data-backed decisions, measurable results. We optimize for ROI, not vanity metrics.",
    },
    {
      icon: "🚀",
      title: "End-to-End Growth",
      description:
        "From brand strategy to execution and automation — we handle everything under one roof.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 px-8 relative overflow-hidden">
      {/* Brand Ticker Section */}
      <BrandTicker />
      <div className="about-page absolute top-0 left-0 w-full h-full z-[-1]"></div>

      {/* Parallax 3D Shapes */}
      <motion.img
        src={Shape1}
        alt="3D Shape"
        style={{ y: shape1Y }}
        className="absolute top-[25%] left-[15%] w-32 md:w-36 opacity-50 z-0 pointer-events-none rotate-12"
      />
      <motion.img
        src={Shape2}
        alt="3D Shape"
        style={{ y: shape2Y }}
        className="absolute top-[45%] right-[8%] w-40 md:w-56 opacity-50 z-0 pointer-events-none"
      />
      <motion.img
        src={Shape3}
        alt="3D Shape"
        style={{ y: shape3Y }}
        className="absolute bottom-[15%] left-[10%] w-36 md:w-52 opacity-50 z-0 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto mt-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neue text-[#2e2e2e]">
            Marketing That Actually{" "}
            <span className="instrument text-[#00897b]">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E2E]/70 neue max-w-3xl mx-auto leading-relaxed">
            We're not just another agency. We're your strategic growth partner —
            combining creativity, analytics, and automation to build marketing
            systems that scale.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {differentiators.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="h-full p-8">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 neue text-[#2E2E2E]">
                  {item.title}
                </h3>
                <p className="text-[#2E2E2E]/70 neue leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 max-w-sm mx-auto"
        >
          <GlassButton className="text-lg neue">
            Know More About Us →
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSummary;
