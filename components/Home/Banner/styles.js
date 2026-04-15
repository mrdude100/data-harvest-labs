import styled, { keyframes } from 'styled-components';
// Note: gradientShift removed — animating background-position forces GPU repaint every frame (non-composited)
import { motion } from 'framer-motion';

const arrowPulse = keyframes`
  0%   { opacity: 0;    transform: translateY(-6px); }
  50%  { opacity: 0.85; transform: translateY(0px);  }
  100% { opacity: 0;    transform: translateY(6px);  }
`;

const leafFall = keyframes`
  0%   { transform: translateY(-80px) translateX(0px)   rotate(0deg);   opacity: 0; }
  8%   { opacity: 0.88; }
  28%  { transform: translateY(22vh)  translateX(18px)  rotate(14deg); }
  52%  { transform: translateY(50vh)  translateX(-14px) rotate(-9deg); }
  76%  { transform: translateY(76vh)  translateX(12px)  rotate(16deg); }
  93%  { opacity: 0.55; }
  100% { transform: translateY(110vh) translateX(-6px)  rotate(-3deg); opacity: 0; }
`;

export const LeafContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const Leaf = styled.img`
  position: absolute;
  top: -80px;
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size};
  height: auto;
  opacity: 0;
  animation: ${leafFall} ${({ $dur }) => $dur} ${({ $delay }) => $delay}
    ease-in-out infinite;
  will-change: transform;
  user-select: none;
  display: block;
`;

export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(
      ellipse 75% 55% at 72% 18%,
      #6b1212 0%,
      rgba(50, 5, 5, 0) 62%
    ),
    radial-gradient(
      ellipse 50% 45% at 12% 88%,
      #3d0808 0%,
      rgba(25, 3, 3, 0) 58%
    ),
    linear-gradient(168deg, #0c0c0c 0%, #1c0606 38%, #120404 65%, #080808 100%);
`;

export const ScrollArrow = styled.button`
  position: absolute;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background: none;
  border: 1px solid ${({ theme }) => theme.text}28;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  svg {
    animation: ${arrowPulse} 1.6s ease-in-out infinite;
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
    background: ${({ theme }) => theme.colors.red}18;
    color: ${({ theme }) => theme.colors.red};
  }

  ${({ theme }) => theme.breakpoints.tablet`
    right: 20px;
  `};
`;

export const BannerSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.background};
  margin-bottom: 160px;

  & canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  ${({ theme }) => theme.breakpoints.small`
    margin-bottom: 80px;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 56px;
  `};
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 24px 24px;
  pointer-events: none;
  z-index: 2;
  margin: 0;

  & .line-wrapper {
    display: block;
    overflow: hidden;
    line-height: 0.88;
  }

  & span {
    display: block;
    font-family: calibre, sans-serif;
    font-weight: 900;
    font-size: clamp(3rem, 12vw, 11rem);
    line-height: 1;
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    letter-spacing: -0.02em;
    will-change: transform;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 0 18px 18px;
    & span {
      font-size: clamp(3rem, 16vw, 8rem);
    }
  `};
`;
