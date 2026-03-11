import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stepData = [
  { id: '01', title: 'Consultation', img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772845705/linkedin-sales-solutions-Be5aVKFv9ho-unsplash_prwqde.jpg', desc: 'We start by listening. Every great space begins with a deep understanding of who you are.' },
  { id: '02', title: 'Concept', img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772845701/scott-graham-5fNmWej4tAA-unsplash_ypj9mn.jpg', desc: 'Your ideas take shape. We translate everything we have heard into spatial concepts.' },
  { id: '03', title: 'Development', img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240330/vincent_x5tzag.png', desc: 'The design matures. We refine every detail — structure, materials, light and flow.' },
  { id: '04', title: 'Construction', img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772845701/joe-holland-80zZ1s24Nag-unsplash_q4dbq9.jpg', desc: 'We bring it to life. Our team oversees every stage of the build coordinating contractors.' },
  { id: '05', title: 'The Reveal', img: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240281/final_h3whnw.webp', desc: 'Your vision, realised. We hand over a finished space that reflects everything you asked for.' },
];

const StepCard = ({ step, index, isTop, parentInView }) => {
  const [hovered, setHovered] = useState(false);

  // Calculate the "Explosion" travel distance
  // Circles move from the center (index 2) outwards
  const xOffset = (index - 2) * 50; 

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      /* EXPLOSION LOGIC: Start at center (x: -xOffset), scale 0, then move to 0 */
      initial={{ opacity: 0, scale: 0, x: -xOffset, y: 0 }}
      animate={parentInView ? { 
        opacity: 1, 
        scale: hovered ? 1.05 : 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        type: 'spring', 
        stiffness: 40, 
        damping: 12, 
        delay: index * 0.1 
      }}
      className="flex flex-col items-center gap-6 relative z-10"
    >
      {!isTop && <TextBlock step={step} hovered={hovered} />}
      
      <div className="relative group">
        <motion.div
          className="relative rounded-full overflow-hidden border border-[#003152]/10"
          style={{ width: 150, height: 150 }}
        >
          <img
            src={step.img}
            alt={step.title}
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-[#003152]/10 group-hover:bg-transparent transition-colors" />
        </motion.div>
        
        {/* Architectural Annotation */}
        <div className="absolute -top-2 -right-2 bg-white border border-[#003152]/20 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
          <span className="text-[10px] font-bold text-[#003152]">{step.id}</span>
        </div>
      </div>

      {isTop && <TextBlock step={step} hovered={hovered} />}
    </motion.div>
  );
};

const TextBlock = ({ step, hovered }) => (
  <div className="text-center max-w-[180px]">
    <h3 className="text-sm font-bold tracking-widest text-[#003152] uppercase mb-2 font-barlow">{step.title}</h3>
    <p className="text-[11px] text-gray-400 font-light leading-relaxed font-barlow">{step.desc}</p>
  </div>
);

const ArchitecturalLine = ({ index, parentInView }) => {
  const isDown = index % 2 === 0;
  const d = isDown ? "M0,50 Q25,80 50,50 T100,50" : "M0,50 Q25,20 50,50 T100,50";

  return (
    <div className="flex-1 h-32 relative -mx-8 z-0">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <motion.path
          d={d}
          fill="none"
          stroke="#003152"
          strokeWidth="0.5"
          /* Blueprint Line Logic */
          initial={{ pathLength: 0, opacity: 0 }}
          animate={parentInView ? { pathLength: 1, opacity: 0.15 } : {}}
          transition={{ duration: 1.5, delay: index * 0.2 }}
        />
        {/* Technical "End points" for architectural vibe */}
        <motion.circle 
          cx="0" cy="50" r="1.5" fill="#003152" opacity="0.2"
          initial={{ scale: 0 }} animate={parentInView ? { scale: 1 } : {}} 
        />
        <motion.circle 
          cx="100" cy="50" r="1.5" fill="#003152" opacity="0.2"
          initial={{ scale: 0 }} animate={parentInView ? { scale: 1 } : {}} 
        />
      </svg>
    </div>
  );
};

const DesignFlow = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-40 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-10">
        
        <div className="mb-32 text-center">
          <motion.span 
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            className="text-[10px] tracking-[0.8em] uppercase text-gray-300 font-bold block mb-4"
          >
            Our Process
          </motion.span>
          <h2 className="text-7xl font-light text-[#003152] tracking-tighter font-barlow">
            The Design <span className="italic font-serif text-gray-300">Sequence</span>
          </h2>
        </div>

        <div className="flex items-center justify-between">
          {stepData.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <StepCard 
                step={step} 
                index={index} 
                isTop={index % 2 === 0} 
                parentInView={isInView} 
              />
              {index < stepData.length - 1 && (
                <ArchitecturalLine index={index} parentInView={isInView} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignFlow;