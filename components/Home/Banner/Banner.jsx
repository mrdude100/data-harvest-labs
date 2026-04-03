import React from 'react';
import { motion } from 'framer-motion';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useWindowSize from '../../../hooks/useWindowSize';
import useStyledTheme from '../../../hooks/useStyledTheme';
import useMediaQuery from '../../../hooks/useMediaQuery';
import {
  BannerSection,
  BannerTitle,
  GradientBackground,
  Leaf,
  LeafContainer,
} from './styles';
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

const LEAVES = [
  { left: '5%', delay: '0s', dur: '16s', size: '54px' },
  { left: '13%', delay: '-5s', dur: '19s', size: '40px' },
  { left: '22%', delay: '-9s', dur: '17s', size: '66px' },
  { left: '34%', delay: '-3s', dur: '15s', size: '46px' },
  { left: '46%', delay: '-7s', dur: '18s', size: '74px' },
  { left: '57%', delay: '-2s', dur: '16s', size: '38px' },
  { left: '67%', delay: '-8s', dur: '20s', size: '60px' },
  { left: '77%', delay: '-4s', dur: '17s', size: '48px' },
  { left: '87%', delay: '-6s', dur: '18s', size: '56px' },
  { left: '94%', delay: '-1s', dur: '19s', size: '36px' },
];

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
      <LeafContainer aria-hidden="true">
        {LEAVES.map((leaf, i) => (
          <Leaf
            key={i}
            src="/chinar-leaf.svg"
            alt=""
            $left={leaf.left}
            $delay={leaf.delay}
            $dur={leaf.dur}
            $size={leaf.size}
          />
        ))}
      </LeafContainer>
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
