import { motion } from "framer-motion";
import { GlassCard } from "../components/GlassEffect";
import { useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Working with META MILE was a game-changer for our business. They didn't just run ads — they built us a complete growth system that scales.",
      author: "Rahul Sharma",
      designation: "Founder & CEO",
      company: "TechStartup India",
      rating: 5,
      color: "#00897b",
    },
    {
      quote:
        "The ROI we've seen is incredible. META MILE understands B2B marketing like no other agency. They're true strategic partners, not just vendors.",
      author: "Priya Patel",
      designation: "Marketing Director",
      company: "SaaS Solutions Co.",
      rating: 5,
      color: "#26a69a",
    },
    {
      quote:
        "From zero to 10 lakh monthly revenue in 4 months. Their D2C strategies and execution are world-class. Highly recommend!",
      author: "Amit Verma",
      designation: "Co-Founder",
      company: "Fashion Brand XYZ",
      rating: 5,
      color: "#4db6ac",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-[#e0f2f1]/30 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00897b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#26a69a]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neue text-[#2E2E2E]">
            What Our Clients{" "}
            <span className="instrument text-[#00897b]">Say</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2E2E2E]/70 neue max-w-3xl mx-auto leading-relaxed">
            Don't take our word for it — hear from brands we've helped grow
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <GlassCard className="p-8 md:p-12">
            {/* Quote Icon */}
            <div
              className="text-6xl mb-6 opacity-20"
              style={{ color: testimonials[activeTestimonial].color }}
            >
              "
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[activeTestimonial].rating)].map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6"
                      style={{ color: testimonials[activeTestimonial].color }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-[#2E2E2E] neue leading-relaxed text-center mb-8">
                {testimonials[activeTestimonial].quote}
              </p>

              {/* Author Info */}
              <div className="text-center">
                <h4
                  className="text-xl font-bold neue mb-1"
                  style={{ color: testimonials[activeTestimonial].color }}
                >
                  {testimonials[activeTestimonial].author}
                </h4>
                <p className="text-[#2E2E2E]/70 neue">
                  {testimonials[activeTestimonial].designation}
                </p>
                <p className="text-[#2E2E2E]/50 neue text-sm">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00897b]/10 hover:bg-[#00897b]/20 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-[#00897b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00897b]/10 hover:bg-[#00897b]/20 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-[#00897b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-[#00897b] w-8"
                      : "bg-[#00897b]/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
