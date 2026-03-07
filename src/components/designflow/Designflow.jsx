import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const stepData = [
  {
    id: '01',
    title: 'Consultation',
    desc: 'We start by listening. Every great space begins with a deep understanding of who you are, how you live, and what you truly need from your environment.',
    img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772845705/linkedin-sales-solutions-Be5aVKFv9ho-unsplash_prwqde.jpg',
  },
  {
    id: '02',
    title: 'Concept',
    desc: 'Your ideas take shape. We translate everything we have heard into spatial concepts — floor plans, mood boards and early sketches that define the direction.',
    img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772845701/scott-graham-5fNmWej4tAA-unsplash_ypj9mn.jpg',
  },
  {
    id: '03',
    title: 'Development',
    desc: 'The design matures. We refine every detail — structure, materials, light and flow — until the proposal is technically sound and visually compelling.',
    img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240330/vincent_x5tzag.png',
  },
  {
    id: '04',
    title: 'Construction',
    desc: 'We bring it to life. Our team oversees every stage of the build — coordinating contractors, maintaining quality standards and keeping the project on schedule.',
    img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772845701/joe-holland-80zZ1s24Nag-unsplash_q4dbq9.jpg',
  },
  {
    id: '05',
    title: 'The Reveal',
    desc: 'Your vision, realised. We hand over a finished space that reflects everything you asked for — built to last, designed to inspire, and made entirely for you.',
    img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240281/final_h3whnw.webp',
  },
];

// ─── STEP CARD ────────────────────────────────────────────────────────────────

const StepCard = ({ step, index, isTop }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);

  const textBlock = (
    <div className="text-center max-w-[200px]">
      <span className="text-[11px] font-bold tracking-[0.4em] font-barlow block mb-2 text-[#003152]/30">
        {step.id}
      </span>
      <h3 className="text-lg md:text-xl font-light tracking-tight font-barlow text-[#003152] uppercase mb-3 leading-tight">
        {step.title}
      </h3>
      <motion.p
        animate={{ opacity: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
        className="text-sm text-gray-500 font-barlow font-light leading-relaxed"
      >
        {step.desc}
      </motion.p>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isTop ? -50 : 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-6 cursor-default"
    >
      {/* Text above for bottom-row cards */}
      {!isTop && textBlock}

      {/* Circular image */}
      <motion.div
        animate={{
          scale: hovered ? 1.07 : 1,
          boxShadow: hovered
            ? '0 0 0 3px #003152, 0 20px 50px rgba(0,49,82,0.2)'
            : '0 0 0 1.5px rgba(0,49,82,0.12), 0 6px 24px rgba(0,0,0,0.07)',
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative rounded-full overflow-hidden flex-shrink-0"
        style={{ width: 140, height: 140 }}
      >
        <img
          src={step.img}
          alt={step.title}
          className="w-full h-full object-cover transition-all duration-700"
          style={{ filter: hovered ? 'grayscale(0%) brightness(1.05)' : 'grayscale(50%)' }}
        />

        {/* Dark tint on idle */}
        <motion.div
          animate={{ opacity: hovered ? 0 : 0.2 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[#003152] rounded-full"
        />

        {/* Step number overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center rounded-full bg-[#003152]/40"
        >
          <span className="text-white text-3xl font-light font-barlow tracking-tighter">
            {step.id}
          </span>
        </motion.div>

        {/* Ripple ring */}
        {hovered && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#003152]"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.35, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        )}
      </motion.div>

      {/* Text below for top-row cards */}
      {isTop && textBlock}
    </motion.div>
  );
};

// ─── CURVED SVG CONNECTOR ─────────────────────────────────────────────────────

const CurvedConnector = ({ index, inView }) => {
  const isDown = index % 2 === 0;
  const d = isDown
    ? 'M 0 50 C 25 95, 75 5, 100 50'
    : 'M 0 50 C 25 5, 75 95, 100 50';

  return (
    <div className="flex-1 h-28 relative" style={{ minWidth: 40 }}>
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">

        {/* Ghost track */}
        <path d={d} fill="none" stroke="#003152" strokeWidth="0.6" opacity="0.07" />

        {/* Animated dashed path */}
        <motion.path
          d={d}
          fill="none"
          stroke="#003152"
          strokeWidth="1"
          strokeDasharray="5 4"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.4, delay: index * 0.25 + 0.4, ease: 'easeInOut' }}
        />

        {/* Travelling dot */}
        <motion.circle
          r="3.5"
          fill="#003152"
          opacity="0.7"
          initial={{ offsetDistance: '0%', opacity: 0 }}
          animate={inView ? { offsetDistance: '100%', opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 1.8, delay: index * 0.25 + 0.7, ease: 'easeInOut' }}
          style={{ offsetPath: `path("${d}")` }}
        />
      </svg>
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const DesignFlow = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const flowRef = useRef(null);
  const flowInView = useInView(flowRef, { once: true, margin: '-60px' });

  return (
    <section className="py-40 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <div ref={headerRef} className="mb-28">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-bold tracking-[0.8em] uppercase block mb-6 font-barlow text-gray-300"
          >
            Methodology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-6xl md:text-8xl font-light text-[#003152] tracking-tighter leading-[0.85] font-barlow"
          >
            The Design <br />
            <span className="italic font-serif text-gray-300">Sequence.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-gray-400 font-barlow font-light text-base max-w-lg leading-relaxed"
          >
            From the first conversation to the final handover, every step in our process is designed to ensure your project is delivered with precision, care, and excellence.
          </motion.p>
        </div>

        {/* ── DESKTOP: Zigzag wave ── */}
        <div
          ref={flowRef}
          className="hidden md:flex items-center justify-between"
          style={{ minHeight: 500 }}
        >
          {stepData.map((step, index) => {
            const isTop = index % 2 === 0;
            return (
              <div key={step.id} className="flex items-center flex-1">
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    alignSelf: isTop ? 'flex-start' : 'flex-end',
                    width: 200,
                  }}
                >
                  <StepCard step={step} index={index} isTop={isTop} />
                </div>

                {index < stepData.length - 1 && (
                  <CurvedConnector index={index} inView={flowInView} />
                )}
              </div>
            );
          })}
        </div>

        {/* ── MOBILE: Vertical timeline ── */}
        <div className="md:hidden flex flex-col">
          {stepData.map((step, index) => (
            <div key={step.id} className="flex gap-6 items-start">

              {/* Left: image + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="rounded-full overflow-hidden border border-[#003152]/15 flex-shrink-0"
                  style={{ width: 56, height: 56 }}
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(40%)' }}
                  />
                </div>
                {index < stepData.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{ originY: 0 }}
                    className="w-[1px] min-h-[70px] flex-1 bg-gradient-to-b from-[#003152]/20 to-transparent mt-2"
                  />
                )}
              </div>

              {/* Right: text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="pb-12 pt-1"
              >
                <span className="text-[11px] font-bold tracking-[0.4em] font-barlow text-[#003152]/30 block mb-1">
                  {step.id}
                </span>
                <h3 className="text-xl font-light text-[#003152] tracking-tight font-barlow uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 font-barlow font-light leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DesignFlow;