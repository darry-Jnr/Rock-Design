import { motion } from "framer-motion";
import mark from "../assets/images/mark.png";

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]"
    >
      <div className="relative flex flex-col items-center">
        
        {/* 1. THE TRADEMARK ANIMATION */}
        <div className="relative overflow-hidden mb-12">
          {/* Background Ghost Image (Low Opacity) */}
          <img 
            src={mark} 
            alt="Rock Dezign" 
            className="h-12 md:h-16 w-auto object-contain opacity-[0.05]"
          />

          {/* Foreground Reveal Image */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ 
              duration: 2.5, 
              ease: [0.65, 0, 0.35, 1], // Custom Architectural Cubic Bezier
              repeat: Infinity 
            }}
            className="absolute inset-0"
          >
            <img 
              src={mark} 
              alt="Rock Dezign" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </motion.div>
        </div>

        {/* 2. THE TECHNICAL PROGRESSION */}
        <div className="flex flex-col items-center space-y-6">
          {/* Precision Tracking Line */}
          <div className="w-64 h-[1px] bg-gray-100 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-[#003152]"
            />
          </div>

          {/* Technical Metadata */}
          <div className="flex justify-between w-64 text-[8px] font-bold tracking-[0.3em] text-gray-300 uppercase font-barlow">
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              System.Init()
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Precision_v2.0
            </motion.span>
          </div>
        </div>
      </div>

      {/* 3. THE "STUDIO" TEXT FOOTER */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 flex flex-col items-center"
      >
        <p className="text-[10px] font-bold tracking-[1em] text-[#003152] uppercase font-barlow">
          Rock Dezign Studio
        </p>
        <div className="mt-4 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3] 
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
              className="w-1 h-1 bg-[#003152] rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;