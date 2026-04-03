import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const leafFall = keyframes`
  0%   { transform: translateY(-60px) rotate(0deg) translateX(0px);   opacity: 0; }
  6%   { opacity: 1; }
  35%  { transform: translateY(28vh)  rotate(160deg) translateX(18px); }
  65%  { transform: translateY(58vh)  rotate(300deg) translateX(-14px); }
  92%  { opacity: 0.65; }
  100% { transform: translateY(108vh) rotate(420deg) translateX(10px); opacity: 0; }
`;

export const LeafContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const Leaf = styled.span`
  position: absolute;
  top: -40px;
  left: ${({ $left }) => $left};
  font-size: ${({ $size }) => $size};
  opacity: 0;
  animation: ${leafFall} ${({ $dur }) => $dur} ${({ $delay }) => $delay}
    ease-in-out infinite;
  will-change: transform;
  filter: brightness(0.7) saturate(0.6);
  display: block;
`;

export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    135deg,
    #0a0a0a 0%,
    #1a0000 25%,
    #2d0000 40%,
    #ea281e22 60%,
    #1a0000 75%,
    #0a0a0a 100%
  );
  background-size: 300% 300%;
  animation: ${gradientShift} 12s ease infinite;
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
