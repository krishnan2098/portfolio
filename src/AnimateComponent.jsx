import { motion } from "framer-motion";

const PageTransition = {
  entry: {
    opacity: 0,
    x: "80vw",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "-80vw",
  },
};

const AnimateComponent = ({ children }) => {
  return (
    <motion.div
      initial="entry"
      animate="animate"
      exit="exit"
      variants={PageTransition}
      transition={{ duration: 1, transition: "linear" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponent;
