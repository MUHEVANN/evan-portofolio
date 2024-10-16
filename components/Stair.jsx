import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%", // Tetap menggunakan top sebagai persentase
  },

  animate: {
    top: "100%", // Pastikan CSS mendukung unit ini dengan benar
  },

  exit: {
    top: ["100%", "0%"], // dijalan kan ketika berpindah halaman, yang dimana sebelumnya 100% (dari animate) dipindah ke 0% (halaman paling atas),
    // alurnya exit-> initial -> animate
  },
};

const reverseIndex = (index) => {
  const totalStair = 6;
  return totalStair - index - 1;
};

function Stair() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
}

export default Stair;
