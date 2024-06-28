import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
interface UpAnimationProps {
  children: JSX.Element | React.ReactNode;
  className?: string;
  delay: number;
}
function UpAnimation({ children, className, delay }: UpAnimationProps) {
  const divref = useRef(null);
  const isInView = useInView(divref);
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView]);
  return (
    <div ref={divref} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.9, delay: delay }}>
        {children}
      </motion.div>
    </div>
  );
}

export default UpAnimation;
