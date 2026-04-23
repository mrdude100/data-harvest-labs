import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// ─── Arrow animation ──────────────────────────────────────────────────────────

const arrowPulse = keyframes`
  0%   { opacity: 0;    transform: translateY(-6px); }
  50%  { opacity: 0.85; transform: translateY(0px);  }
  100% { opacity: 0;    transform: translateY(6px);  }
`;

// ─── Leaf fall animation ──────────────────────────────────────────────────────

const leafFall = keyframes`
  0%   { transform: translateY(-80px) translateX(0px)   rotate(0deg);   opacity: 0; }
  8%   { opacity: 0.55; }
  28%  { transform: translateY(22vh)  translateX(18px)  rotate(14deg); }
  52%  { transform: translateY(50vh)  translateX(-14px) rotate(-9deg); }
  76%  { transform: translateY(76vh)  translateX(12px)  rotate(16deg); }
  93%  { opacity: 0.3; }
  100% { transform: translateY(110vh) translateX(-6px)  rotate(-3deg); opacity: 0; }
`;

// ─── Aurora blob animations ───────────────────────────────────────────────────

const aurora1 = keyframes`
  0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.6; }
  25%       { transform: translate(5%, -8%) scale(1.08); opacity: 0.75; }
  50%       { transform: translate(-3%, 5%) scale(0.95); opacity: 0.55; }
  75%       { transform: translate(7%, 2%) scale(1.05); opacity: 0.68; }
`;

const aurora2 = keyframes`
  0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.45; }
  30%       { transform: translate(-6%, 4%) scale(1.1); opacity: 0.58; }
  60%       { transform: translate(4%, -5%) scale(0.92); opacity: 0.38; }
  80%       { transform: translate(-2%, 6%) scale(1.06); opacity: 0.52; }
`;

const aurora3 = keyframes`
  0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.3; }
  40%       { transform: translate(4%, 6%) scale(1.12); opacity: 0.42; }
  70%       { transform: translate(-5%, -3%) scale(0.9); opacity: 0.22; }
`;

// ─── Aurora blobs ─────────────────────────────────────────────────────────────

export const AuroraBlob1 = styled.div`
  position: absolute;
  width: 75vw;
  height: 75vw;
  border-radius: 50%;
  top: -25%;
  right: -15%;
  background: radial-gradient(
    ellipse,
    rgba(192, 32, 26, 0.55) 0%,
    rgba(192, 32, 26, 0.12) 45%,
    transparent 70%
  );
  filter: blur(70px);
  animation: ${aurora1} 20s ease-in-out infinite;
  will-change: transform, opacity;
  pointer-events: none;

  @media (max-width: 767px) {
    width: 120vw;
    height: 120vw;
    filter: blur(50px);
  }
`;

export const AuroraBlob2 = styled.div`
  position: absolute;
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
  bottom: -15%;
  left: -12%;
  background: radial-gradient(
    ellipse,
    rgba(110, 15, 160, 0.38) 0%,
    rgba(80, 10, 120, 0.08) 50%,
    transparent 70%
  );
  filter: blur(90px);
  animation: ${aurora2} 25s ease-in-out infinite;
  will-change: transform, opacity;
  pointer-events: none;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const AuroraBlob3 = styled.div`
  position: absolute;
  width: 45vw;
  height: 45vw;
  border-radius: 50%;
  top: 35%;
  left: 20%;
  background: radial-gradient(
    ellipse,
    rgba(0, 50, 160, 0.22) 0%,
    transparent 65%
  );
  filter: blur(110px);
  animation: ${aurora3} 30s ease-in-out infinite;
  will-change: transform, opacity;
  pointer-events: none;

  @media (max-width: 767px) {
    display: none;
  }
`;

// ─── Grid overlay ─────────────────────────────────────────────────────────────

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;

  @media (max-width: 767px) {
    background-size: 48px 48px;
    opacity: 0.6;
  }
`;

// ─── Bottom gradient vignette ─────────────────────────────────────────────────

export const BottomVignette = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to bottom, transparent 0%, #000000 100%);
  z-index: 2;
  pointer-events: none;
`;

// ─── Leaf components ──────────────────────────────────────────────────────────

export const LeafContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
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

// ─── Section shell ────────────────────────────────────────────────────────────

export const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  background: #000000;
  margin-bottom: 160px;

  ${({ theme }) => theme.breakpoints.small`
    margin-bottom: 80px;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 56px;
  `};
`;

// ─── Scroll arrow ─────────────────────────────────────────────────────────────

export const ScrollArrow = styled.button`
  position: absolute;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  backdrop-filter: blur(12px);
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
    background: rgba(192, 32, 26, 0.15);
    color: ${({ theme }) => theme.colors.red};
  }

  ${({ theme }) => theme.breakpoints.tablet`
    right: 20px;
  `};
`;

// ─── Banner title ─────────────────────────────────────────────────────────────

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 24px 28px;
  pointer-events: none;
  z-index: 4;
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
    padding: 0 18px 80px;
    & span {
      font-size: clamp(3rem, 16vw, 8rem);
    }
  `};
`;
