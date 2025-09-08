import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const GateAnimation = ({ onAnimationComplete }) => {
  useEffect(() => {
    // Trigger animation complete after a delay
    const timer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Optional: Add any gate animation elements here */}
    </motion.div>
  );
};

export default GateAnimation;