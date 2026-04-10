import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import useWindowSize from '../../../hooks/useWindowSize';
import {
  BannerSection,
  BannerTitle,
  GradientBackground,
  Leaf,
  LeafContainer,
  ScrollArrow,
} from './styles';

// ─── Bubble animations ────────────────────────────────────────────────────────

const floatKf = keyframes`
  0%, 100% { transform: translateY(0px);   }
  50%       { transform: translateY(-18px); }
`;

const spinKf = keyframes`
  from { transform: rotate(0deg);   }
  to   { transform: rotate(360deg); }
`;

const pulseKf = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(192,32,26,0.55); }
  50%       { box-shadow: 0 0 0 18px rgba(192,32,26,0);  }
`;

// ─── Bubble styled components ─────────────────────────────────────────────────

const BubbleWrap = styled.div`
  position: absolute;
  bottom: 30%;
  right: 8%;
  z-index: 4;
  animation: ${floatKf} 3.8s ease-in-out infinite;

  ${({ theme }) => theme.breakpoints.small`
    bottom: 20%;
    right: 4%;
  `};
`;

const BubbleLink = styled.a`
  display: block;
  width: 148px;
  height: 148px;
  border-radius: 50%;
  background: #c0201a;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  animation: ${pulseKf} 2.6s ease-in-out infinite;
  transition: transform 0.18s cubic-bezier(0.23, 1, 0.32, 1),
    background 0.18s ease;

  &:hover {
    background: #d42520;
    animation-play-state: paused;
  }

  &:hover .bubble-ring {
    animation-play-state: paused;
  }

  &:hover .bubble-arrow {
    transform: translate(3px, -3px) scale(1.15);
  }

  ${({ theme }) => theme.breakpoints.small`
    width: 120px;
    height: 120px;
  `};
`;

const BubbleRing = styled.div.attrs({ className: 'bubble-ring' })`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  animation: ${spinKf} 9s linear infinite;
`;

const BubbleArrow = styled.span.attrs({ className: 'bubble-arrow' })`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.22s cubic-bezier(0.23, 1, 0.32, 1);
  pointer-events: none;
  z-index: 1;
`;

// ─── Rotating text SVG ────────────────────────────────────────────────────────

const BubbleTextSvg = () => (
  <svg
    viewBox="0 0 148 148"
    width="148"
    height="148"
    style={{ position: 'absolute', inset: 0 }}
    aria-hidden="true"
  >
    <defs>
      <path
        id="bubbleCircle"
        d="M 74,74 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
      />
    </defs>
    <text
      fill="rgba(255,255,255,0.75)"
      fontSize="9"
      letterSpacing="3.2"
      fontWeight="600"
      fontFamily="'Barlow', sans-serif"
    >
      <textPath href="#bubbleCircle">
        FREE CONSULTATION · 30 MIN · NO COMMITMENT ·&nbsp;&nbsp;
      </textPath>
    </text>
  </svg>
);

// ─── Title animation ──────────────────────────────────────────────────────────

const titleAnimation = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemTitleAnimation = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
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

// ─── Component ────────────────────────────────────────────────────────────────

const Banner = () => {
  const windowSize = useWindowSize();

  // Magnetic bubble effect
  const bubbleRef = React.useRef(null);
  const [magnetOffset, setMagnetOffset] = React.useState({ x: 0, y: 0 });

  const handleBannerMouseMove = React.useCallback(e => {
    if (!bubbleRef.current) return;
    const rect = bubbleRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const range = 160;
    if (dist < range) {
      const power = (1 - dist / range) * 22;
      const angle = Math.atan2(dy, dx);
      setMagnetOffset({
        x: Math.cos(angle) * power,
        y: Math.sin(angle) * power,
      });
    } else {
      setMagnetOffset({ x: 0, y: 0 });
    }
  }, []);

  const handleBannerMouseLeave = React.useCallback(() => {
    setMagnetOffset({ x: 0, y: 0 });
  }, []);

  const handleScrollDown = React.useCallback(() => {
    window.scrollTo({ top: windowSize.height, behavior: 'smooth' });
  }, [windowSize.height]);

  return (
    <BannerSection
      style={{ height: windowSize.height }}
      onMouseMove={handleBannerMouseMove}
      onMouseLeave={handleBannerMouseLeave}
    >
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

      {/* Canvas eraser disabled — kept for future re-enable */}
      {/* isDesktop && (
        <CanvasEraser
          ref={canvasRef}
          width={windowSize.width}
          height={windowSize.height}
          size={120}
          background={theme.background}
        />
      ) */}

      <ScrollArrow onClick={handleScrollDown} aria-label="Scroll down">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </ScrollArrow>

      {/* Floating consultation bubble */}
      <BubbleWrap>
        <Link href="/contact" passHref>
          <BubbleLink
            ref={bubbleRef}
            style={{
              transform: `translate(${magnetOffset.x}px, ${magnetOffset.y}px)`,
            }}
            aria-label="Book a free 30-minute consultation"
          >
            <BubbleRing>
              <BubbleTextSvg />
            </BubbleRing>
            <BubbleArrow>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="28"
                height="28"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </BubbleArrow>
          </BubbleLink>
        </Link>
      </BubbleWrap>

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
