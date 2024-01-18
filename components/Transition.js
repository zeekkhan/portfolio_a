// framer motion
import {motion} from 'framer-motion'

// variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom- right-full w-screen h-screen z-30 bg-blue-500'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.1, duration: 0.2, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom- right-full w-screen h-screen z-20 bg-[#102d5c]'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.2, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom- right-full w-screen h-screen z-10 bg-blue-700'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.3, duration: 0.2, ease: 'easeInOut'}}>
      </motion.div>
    </>
  );
};

export default Transition;


