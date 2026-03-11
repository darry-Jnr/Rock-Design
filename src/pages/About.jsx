import { motion } from "framer-motion";
import { useRef } from "react";
import TeamSection from "../components/team/Teamsection";
import StatsSection from "../components/stats/Stats";
import { Helmet } from "react-helmet";

// ─── SHARED CONSTANTS ────────────────────────────────────────────────────────
const CONTAINER = "max-w-7xl mx-auto px-6 md:px-12 lg:px-16";
const SECTION_PY = "py-24 md:py-32 lg:py-40";
const LABEL_CLASS =
  "text-[10px] font-bold tracking-[0.6em] uppercase text-gray-300 font-barlow block mb-6 md:mb-8";
const DIVIDER = "border-t border-[#003152]/8";

const About = () => {
  const containerRef = useRef(null);

  return (
    <div className="bg-white overflow-hidden" ref={containerRef}>
      <Helmet>
        <title>About | Rock Dezign Architecture</title>
      </Helmet>

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770257180/aboutus_xsen1u.webp")`,
          }}
        />

        {/* "About" bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute bottom-10 md:bottom-12 left-6 md:left-16 z-10"
        >
          <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] font-light text-white tracking-tighter leading-none font-barlow">
            About
          </h1>
        </motion.div>

        {/* Scroll hint - Hidden on very small screens to avoid clutter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 right-6 md:right-16 z-10 hidden sm:block"
        >
          <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-barlow">
            Scroll to Explore
          </p>
        </motion.div>

        {/* Corner brackets */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 w-6 h-6 md:w-8 md:h-8 border-t border-l border-white/20 z-10" />
        <div className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 border-t border-r border-white/20 z-10" />
      </section>

      {/* ── 2. STUDIO INTRO ─────────────────────────────────────────── */}
      <section className={`${SECTION_PY} ${DIVIDER}`}>
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="md:col-span-5"
            >
              <span className={LABEL_CLASS}>The Studio</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#003152] leading-[1.1] tracking-tighter font-barlow">
                Strategic leadership.
                <br />
                <span className="italic font-serif text-gray-300">
                  Innovative design.
                </span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[1px] bg-[#003152]/20 mt-8 md:mt-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="md:col-span-7 md:pt-12 lg:pt-16"
            >
              <div className="space-y-6 text-base md:text-lg text-gray-400 font-light leading-relaxed font-barlow">
                <p>
                  Rock Dezign is a multidisciplinary architectural practice
                  dedicated to shaping the built environment through leadership
                  and innovation. We deliver residential, commercial,
                  institutional, and interior projects that are elegant,
                  functional, and built to last.
                </p>
                <p>
                  Our approach blends design excellence with technology and
                  integrated collaboration. From architecture and interiors to
                  3D renderings and animation, we help clients visualize and
                  realize their projects, creating solutions that respond to
                  context, community, and the evolving future of the built
                  environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. STATS ────────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── 4. VISION & MISSION ─────────────────────────────────────── */}
      <section className={`${SECTION_PY} ${DIVIDER}`}>
        <div className={CONTAINER}>
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-[#003152]/8 pt-12 md:pt-20 mb-16 md:mb-24"
          >
            <div className="md:col-span-2">
              <span className={LABEL_CLASS}>01 — Vision</span>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#003152] leading-[1.1] tracking-tighter font-barlow">
                Shaping the Future of the{" "}
                <span className="italic font-serif text-gray-300">
                  Built Environment.
                </span>
              </h3>
            </div>
            <div className="md:col-span-5 md:pt-2 lg:pl-10">
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed font-barlow">
                To build a leading innovation-driven organization that shapes
                the future of the built environment across Africa and on the
                global stage through intelligent systems and collaborative
                design.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-[#003152]/8 pt-12 md:pt-20"
          >
            <div className="md:col-span-2">
              <span className={LABEL_CLASS}>02 — Mission</span>
            </div>
            <div className="md:col-span-5">
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#003152] leading-[1.1] tracking-tighter font-barlow">
                Designing Integrated Solutions for{" "}
                <span className="italic font-serif text-gray-300">
                  Lasting Impact.
                </span>
              </h3>
            </div>
            <div className="md:col-span-5 md:pt-2 lg:pl-10">
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed font-barlow">
                To conceive, design and execute integrated solutions that
                combine architectural excellence, technological insight and
                strategic thinking to create measurable and lasting impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CORE VALUES ──────────────────────────────────────────── */}
      <section className={`${SECTION_PY} ${DIVIDER}`}>
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sticky header on large screens */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <span className={LABEL_CLASS}>Core Values</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#003152] tracking-tighter leading-[1] mb-6 md:mb-8 font-barlow">
                The bedrock of <br className="hidden md:block" />
                <span className="italic font-serif text-gray-300">
                  our practice.
                </span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[1px] bg-[#003152]/20 mb-6 md:mb-8"
              />
              <p className="text-gray-400 font-light leading-relaxed font-barlow text-sm max-w-sm">
                Every project at Rock Dezign is guided by six non-negotiable
                pillars that ensure architectural excellence.
              </p>
            </div>

            {/* Values list */}
            <div className="lg:col-span-8 flex flex-col">
              {[
                {
                  number: "01",
                  title: "Divine Inspiration",
                  desc: "We acknowledge God as the source of all profound wisdom and creativity, seeking divine guidance in the ideas we conceive and the spaces we shape.",
                },
                {
                  number: "02",
                  title: "Strategic Leadership",
                  desc: "We approach every project with clarity, foresight, and responsibility, guiding ideas from concept to completion with confidence and direction.",
                },
                {
                  number: "03",
                  title: "Design Excellence",
                  desc: "We pursue architecture that is carefully designed and built to achieve optimum performance and longevity.",
                },
                {
                  number: "04",
                  title: "Innovation",
                  desc: "We embrace new ideas, technologies, and methods that improve how spaces are conceived, designed, and built.",
                },
                {
                  number: "05",
                  title: "Integrity",
                  desc: "We act with honesty, professionalism, and accountability in our relationships with clients, collaborators, and communities.",
                },
                {
                  number: "06",
                  title: "Collaboration",
                  desc: "We believe the best outcomes come from open dialogue and the combined expertise of diverse disciplines and perspectives.",
                },
              ].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="group border-t border-[#003152]/8 py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
                >
                  <div className="md:col-span-1">
                    <span className="text-[10px] font-bold font-barlow text-gray-300 tracking-widest">
                      {val.number}
                    </span>
                  </div>

                  <div className="md:col-span-5 relative">
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-light text-[#003152] tracking-tighter font-barlow group-hover:italic transition-all duration-300">
                      {val.title}
                    </h4>
                    <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#003152]/30 group-hover:w-full transition-all duration-700 hidden md:block" />
                  </div>

                  <div className="md:col-span-6 md:pl-6">
                    <p className="text-gray-400 font-light leading-relaxed font-barlow text-sm">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TEAM ─────────────────────────────────────────────────── */}
      <TeamSection />
    </div>
  );
};

export default About;
