"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ShutterDropdown() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); 
    }, 2000);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="relative overflow-hidden">
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-blue-950 z-50 flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >

          <h1 className="text-yellow-500 text-6xl font-bold">WELCOME TO MY PORTFOLIO</h1>
        </motion.div>
      )}

    </div>
  );
}
