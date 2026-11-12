"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DynamicRoleTextProps {
  roles: string[];
  interval?: number;
}

export const DynamicRoleText: React.FC<DynamicRoleTextProps> = ({
  roles,
  interval = 3000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, interval);
    return () => clearInterval(timer);
  }, [roles, interval]);

  return (
    <div className="relative inline-block h-[1.3em] overflow-hidden align-top min-w-[260px] sm:min-w-[340px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 28, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -28, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent font-bold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
