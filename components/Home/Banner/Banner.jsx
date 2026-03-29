import React from 'react';
import { motion } from 'framer-motion';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useWindowSize from '../../../hooks/useWindowSize';
import useStyledTheme from '../../../hooks/useStyledTheme';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { BannerSection, BannerTitle, GradientBackground } from './styles';
import CanvasEraser from '../../CanvasEraser';
const titleAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemTitleAnimation = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Banner = () => {
  const canvasRef = React.useRef(null);
  const windowSize = useWindowSize();
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();
  const isDesktop = useMediaQuery(
    ({ breakpoints }) => `(min-width:${breakpoints.sizes.small + 1}px)`,
  );

  return (
    <BannerSection style={{ height: windowSize.height }}>
      <GradientBackground />
      {isDesktop && (
        <CanvasEraser
          ref={canvasRef}
          width={windowSize.width}
          height={windowSize.height}
          size={120}
          background={theme.background}
          onMouseEnter={addCursorBorder}
          onMouseLeave={removeCursorBorder}
        />
      )}
      <BannerTitle
        variants={titleAnimation}
        initial="initial"
        animate="animate"
      >
        <span className="line-wrapper">
          <motion.span variants={itemTitleAnimation}>DATA</motion.span>
        </span>
        <span className="line-wrapper">
          <motion.span variants={itemTitleAnimation}>HARVEST</motion.span>
        </span>
        <span className="line-wrapper">
          <motion.span variants={itemTitleAnimation}>LABS</motion.span>
        </span>
      </BannerTitle>
    </BannerSection>
  );
};

export default React.memo(Banner);