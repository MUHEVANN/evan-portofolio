"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.5, delay: 1, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-[100]"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}

export default PageTransition;
