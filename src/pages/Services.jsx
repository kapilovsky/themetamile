import { motion } from "framer-motion";
import { GlassCard } from "../components/GlassEffect";

const Services = () => {
  const services = [
    {
      icon: "🎯",
      title: "B2B Marketing",
      description:
        "Generate high-quality leads and close bigger deals with strategic B2B marketing systems.",
      color: "#00897b",
    },
    {
      icon: "🛒",
      title: "D2C & E-commerce Scaling",
      description:
        "Scale your online store with proven strategies that increase conversions and maximize lifetime value.",
      color: "#26a69a",
    },
    {
      icon: "✨",
      title: "Brand Marketing & Strategy",
      description:
        "Build a brand that people remember, trust, and choose over competitors.",
      color: "#4db6ac",
    },
    {
      icon: "📊",
      title: "Paid Advertising & Performance",
      description:
        "Get more customers at lower costs with data-driven paid media strategies.",
      color: "#80cbc4",
    },
    {
      icon: "💼",
      title: "LinkedIn Lead Generation",
      description:
        "Turn LinkedIn into your most profitable sales channel with targeted outreach.",
      color: "#00695c",
    },
    {
      icon: "📧",
      title: "Email & Automation Marketing",
      description:
        "Build email systems that nurture leads and drive repeat purchases automatically.",
      color: "#004d40",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Create content that stops the scroll and builds communities around your brand.",
      color: "#26a69a",
    },
    {
      icon: "🎪",
      title: "Event & Product Marketing",
      description:
        "Launch products and events with campaigns that create buzz and drive registrations.",
      color: "#4db6ac",
    },
    {
      icon: "🏢",
      title: "Real Estate Marketing",
      description:
        "Generate qualified property leads and close deals faster with specialized strategies.",
      color: "#00897b",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-20 px-8 bg-gradient-to-b from-white to-[#e0f2f1]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neue text-[#2E2E2E]">
            What We Do <span className="instrument text-[#00897b]">Best</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E2E]/70 neue max-w-3xl mx-auto leading-relaxed">
            From strategy to scale — META MILE builds marketing engines that
            deliver measurable growth across D2C, B2B, and B2C spaces.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="h-full p-8 cursor-pointer group">
                <div
                  className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 neue text-[#2E2E2E] group-hover:text-[#00897b] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#2E2E2E]/70 neue leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-[#00897b] font-semibold neue text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#2E2E2E]/70 neue mb-6">
            Not sure which service you need?
          </p>
          <button className="px-8 py-4 bg-[#2E2E2E] text-white rounded-full text-lg font-semibold neue hover:bg-[#00897b] transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Free Strategy Session →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
