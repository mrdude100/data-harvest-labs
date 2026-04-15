import React from 'react';
import { useAnimation, useInView } from 'framer-motion';

const transition = {
  delay: 0.2,
  translateY: {
    duration: 0.8,
    ease: [0, 0.7, 0.29, 0.97],
  },
  opacity: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1.0],
  },
};

const variants = {
  show: { translateY: 0, opacity: 1 },
  hidden: { translateY: 60, opacity: 0 },
};

const AnimateOnScreen = ({ children: childrenProp }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const animation = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      animation.start('show');
    }
  }, [animation, isInView]);

  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) return null;

    const handleRef = node => {
      ref.current = node;
      const { ref: childRef } = child;
      if (typeof childRef === 'function') {
        childRef(node);
      } else if (childRef != null) {
        childRef.current = node;
      }
    };

    return React.cloneElement(child, {
      variants,
      transition,
      animate: animation,
      initial: 'hidden',
      ref: handleRef,
    });
  });

  return children;
};

export default React.memo(AnimateOnScreen);
