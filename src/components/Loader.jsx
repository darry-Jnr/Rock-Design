import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]"
    >
      <div className="relative overflow-hidden w-64 h-20 flex flex-col items-center justify-center">
        {/* The Outline/Ghost Text */}
        <h1 className="text-4xl font-bold tracking-[0.5em] text-gray-100 uppercase absolute italic font-barlow">
          ROCK DEZIGN
        </h1>
        
        {/* The Filling Text */}
        <motion.h1 
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="text-4xl font-bold tracking-[0.5em] text-[#003152] uppercase absolute italic font-barlow"
        >
          ROCK DEZIGN
        </motion.h1>
      </div>

      {/* The Technical Line */}
      <div className="w-48 h-[1px] bg-gray-100 relative mt-4 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[#003152]"
        />
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase"
      >
        Establishing Grid...
      </motion.p>
    </motion.div>
  );
};

export default Loader;