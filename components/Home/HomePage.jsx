import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimateOnScreen from '../AnimateOnScreen';
import useCursorStyle from '../../hooks/useCursorStyle';
import styled, { keyframes } from 'styled-components';
import containerStyles from '../../styles/shared/container';
import { secondaryFontStyle } from '../../styles/shared/text';

// ─── Count-up hook ───────────────────────────────────────────────────────────

const useCountUp = (target, duration, restartDelay) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let raf;
    let tid;
    const run = () => {
      const t0 = performance.now();
      const tick = now => {
        const progress = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          tid = setTimeout(() => {
            setCount(0);
            tid = setTimeout(run, 80);
          }, restartDelay);
        }
      };
      raf = requestAnimationFrame(tick);
    };
    run();
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(tid);
    };
  }, [target, duration, restartDelay]);
  return count;
};

const CountUpStat = ({ raw }) => {
  const match = raw.match(/^(\d+)(\D*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const count = useCountUp(target, 1800, 2600);
  return (
    <>
      {count}
      {suffix}
    </>
  );
};

// ─── Animations ──────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0.7, 0.29, 0.97] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const marqueeKf = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const marqueeKfReverse = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`;

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const IconGenomics = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 3c1.2 2.2 3.5 3.2 5 3.2s3.8-1 5-3.2" />
    <path d="M7 21c1.2-2.2 3.5-3.2 5-3.2s3.8 1 5 3.2" />
    <path d="M7 3C5.3 7.5 5.3 16.5 7 21" />
    <path d="M17 3c1.7 4.5 1.7 13.5 0 18" />
    <line x1="8" y1="8.5" x2="16" y2="8.5" />
    <line x1="7.5" y1="12" x2="16.5" y2="12" />
    <line x1="8" y1="15.5" x2="16" y2="15.5" />
  </svg>
);

const IconBiostat = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="3" y1="20" x2="21" y2="20" />
    <rect x="4" y="13" width="3.5" height="7" rx="0.5" />
    <rect x="10.25" y="8" width="3.5" height="12" rx="0.5" />
    <rect x="16.5" y="4" width="3.5" height="16" rx="0.5" />
    <polyline points="5.75 13 12 8 18.25 4" strokeDasharray="2 2" />
  </svg>
);

const IconClinical = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const IconReview = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
    <polyline points="14 3 14 8 19 8" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="16" x2="13" y2="16" />
    <circle cx="17.5" cy="17.5" r="2.5" />
    <line x1="19.5" y1="19.5" x2="21" y2="21" />
  </svg>
);

const IconML = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="2.2" />
    <circle cx="4.5" cy="5.5" r="1.8" />
    <circle cx="19.5" cy="5.5" r="1.8" />
    <circle cx="4.5" cy="18.5" r="1.8" />
    <circle cx="19.5" cy="18.5" r="1.8" />
    <line x1="6.2" y1="6.7" x2="10.5" y2="10.5" />
    <line x1="13.5" y1="10.5" x2="17.8" y2="6.7" />
    <line x1="6.2" y1="17.3" x2="10.5" y2="13.5" />
    <line x1="13.5" y1="13.5" x2="17.8" y2="17.3" />
  </svg>
);

const SERVICE_ICONS = [
  IconGenomics,
  IconBiostat,
  IconClinical,
  IconReview,
  IconML,
];

// ─── Shared ───────────────────────────────────────────────────────────────────

const SectionLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  display: block;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0 0 56px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    margin: 0 0 40px;
  `}
`;

const Section = styled.section`
  ${containerStyles};
  padding: 96px 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 64px 24px;
  `};
`;

// ─── Social Proof Marquee ─────────────────────────────────────────────────────

const SocialProofOuter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.text}12;
  border-bottom: 1px solid ${({ theme }) => theme.text}12;
  overflow: hidden;
  background: ${({ theme }) => theme.background};
`;

const SocialProofLabel = styled.div`
  ${containerStyles};
  padding: 20px 32px 0;

  span {
    ${secondaryFontStyle};
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 16px 20px 0;
  `};
`;

const SocialProofRow = styled.div`
  display: flex;
  overflow: hidden;
  padding: 14px 0;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );

  &:first-of-type {
    padding-top: 18px;
  }

  &:last-of-type {
    padding-bottom: 18px;
  }

  &:hover div {
    animation-play-state: paused;
  }
`;

const InstTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${marqueeKf} 32s linear infinite;
  gap: 0;
`;

const QuoteTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${marqueeKfReverse} 42s linear infinite;
  gap: 0;
`;

const InstItem = styled.span`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  white-space: nowrap;
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 32px;

  &::after {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.red};
    opacity: 0.5;
    flex-shrink: 0;
  }
`;

const QuoteSnippetItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  padding: 0 36px;
`;

const QuoteStars = styled.span`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 2px;
  opacity: 0.8;
  flex-shrink: 0;
`;

const QuoteSnippetText = styled.span`
  ${secondaryFontStyle};
  font-size: 0.78rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
  font-style: italic;
`;

const QuoteSnippetAttr = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  flex-shrink: 0;

  &::before {
    content: '—  ';
  }
`;

const QuoteSep = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.red};
  opacity: 0.35;
  flex-shrink: 0;
`;

// ─── Stats ────────────────────────────────────────────────────────────────────

const StatsWrapper = styled.div`
  background: #000;
  padding: 72px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 90% 55% at 50% 0%,
      rgba(192, 32, 26, 0.18) 0%,
      transparent 65%
    );
    pointer-events: none;
  }
`;

const StatsInner = styled.div`
  ${containerStyles};
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    padding: 0 20px;
  `};
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px 24px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(16px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(192, 32, 26, 0.6),
      transparent
    );
  }

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 24px 18px;
    border-radius: 16px;
  `};
`;

const StatNumber = styled.div`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1;
  color: #fff;
  text-shadow: 0 0 48px rgba(192, 32, 26, 0.45);
`;

const StatLabel = styled.div`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
`;

// ─── About pull-quote ─────────────────────────────────────────────────────────

const AboutWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.text}15;
`;

const AboutInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 72px 24px;
  `};
`;

const AboutQuote = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 400;
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  line-height: 1.55;
  color: ${({ theme }) => theme.text};
  max-width: 820px;
  margin: 0 0 28px;
  opacity: 0.85;
`;

const AboutMeta = styled.span`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.35;
`;

// ─── Services — editorial rows ────────────────────────────────────────────────

const ServiceIconWrap = styled.div`
  width: 36px;
  height: 36px;
  color: ${({ theme }) => theme.text};
  opacity: 0.35;
  flex-shrink: 0;
  transition:
    color 0.22s ease,
    opacity 0.22s ease;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    width: 28px;
    height: 28px;
  `};
`;

const ServiceRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 52px 1fr auto;
  gap: 0 28px;
  padding: 26px 0;
  border-bottom: 1px solid ${({ theme }) => theme.text}12;
  align-items: center;
  cursor: default;
  transition: background 0.22s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.red}07;
  }

  &:hover ${ServiceIconWrap} {
    color: ${({ theme }) => theme.colors.red};
    opacity: 1;
  }

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 40px 1fr auto;
    gap: 0 18px;
    padding: 20px 0;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 32px 1fr auto;
    gap: 0 14px;
    padding: 18px 0;
  `};
`;

const ServiceRowNumber = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.red};
  align-self: flex-start;
  padding-top: 6px;
`;

const ServiceRowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ServiceRowName = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  line-height: 1.05;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  letter-spacing: -0.01em;
`;

const ServiceRowDesc = styled.p`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
  max-width: 560px;
`;

const ServicesList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.text}12;
`;

// ─── Tools marquee ────────────────────────────────────────────────────────────

const MarqueeSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.text}12;
  border-bottom: 1px solid ${({ theme }) => theme.text}12;
  overflow: hidden;
  padding: 0;
  margin-top: 64px;
`;

const MarqueeLabel = styled.div`
  ${containerStyles};
  padding: 20px 32px 0;

  span {
    ${secondaryFontStyle};
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
    opacity: 0.28;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 16px 24px 0;
  `};
`;

const MarqueeTrackWrap = styled.div`
  display: flex;
  overflow: hidden;
  padding: 16px 0 20px;

  &:hover div {
    animation-play-state: paused;
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${marqueeKf} 28s linear infinite;
  gap: 0;
`;

const MarqueeItem = styled.span`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  padding: 0 28px;
  white-space: nowrap;
  cursor: default;
  transition:
    opacity 0.15s ease,
    color 0.15s ease;
  display: flex;
  align-items: center;
  gap: 28px;

  &::after {
    content: '';
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.red};
    opacity: 0.6;
    flex-shrink: 0;
  }

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.red};
  }
`;

// ─── Why Us ───────────────────────────────────────────────────────────────────

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 32px;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
  `};
`;

const WhyCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const WhyNumber = styled.span`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.red};
  opacity: 0.3;
  line-height: 1;
`;

const WhyTitle = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const WhyDesc = styled.p`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
`;

// ─── Who We Work With ─────────────────────────────────────────────────────────

const WhoWrapper = styled.div`
  background: ${({ theme }) => theme.text}05;
  border-top: 1px solid ${({ theme }) => theme.text}12;
  border-bottom: 1px solid ${({ theme }) => theme.text}12;
`;

const WhoInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 64px 24px;
  `};
`;

const WhoTagsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 48px;
`;

const WhoTag = styled(motion.span)`
  font-family: calibre, sans-serif;
  font-weight: 700;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: ${({ theme }) => theme.text};
  border: 1.5px solid ${({ theme }) => theme.text}22;
  border-radius: 999px;
  padding: 12px 28px;
  cursor: default;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
    background: ${({ theme }) => theme.colors.red}0d;
    color: ${({ theme }) => theme.colors.red};
  }

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1rem;
    padding: 10px 22px;
  `};
`;

// ─── Applications ─────────────────────────────────────────────────────────────

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: ${({ theme }) => theme.text}12;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
  `};
`;

const AppCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 32px 24px;
  `};
`;

const AppCardTitle = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1;
`;

const AppList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const AppListItem = styled.li`
  ${secondaryFontStyle};
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
  padding-left: 18px;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.red};
  }
`;

// ─── Training ─────────────────────────────────────────────────────────────────

const TrainingWrapper = styled.section`
  background: ${({ theme }) => theme.text}06;
  border-top: 1px solid ${({ theme }) => theme.text}12;
`;

const TrainingInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 64px 24px;
  `};
`;

const TrainingLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TrainingDesc = styled.p`
  font-family: calibre, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  margin: 0;
  line-height: 1.75;
`;

const TrainingLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.2s ease;

  &:hover {
    gap: 16px;
  }
`;

const TrainingCourses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CourseItem = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.text}10;
`;

const CourseName = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const CourseDesc = styled.p`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  margin: 0;
  line-height: 1.6;
`;

// ─── Free Consultation ────────────────────────────────────────────────────────

const ConsultWrapper = styled.section`
  background: #c0201a;
`;

const ConsultInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 72px 24px;
  `};
`;

const ConsultLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ConsultLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
`;

const ConsultHeading = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.25rem, 4.5vw, 3.75rem);
  line-height: 0.95;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
`;

const ConsultDesc = styled.p`
  font-family: calibre, sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
  line-height: 1.6;
`;

const ConsultBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const ConsultBadge = styled.span`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  padding: 5px 14px;
`;

const ConsultRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ConsultCta = styled.a`
  ${secondaryFontStyle};
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #c0201a;
  background: #fff;
  padding: 22px 40px;
  display: block;
  cursor: pointer;
  transition: background 0.2s ease;
  text-decoration: none;
  text-align: center;
  font-weight: 600;

  &:hover {
    background: #f2f2f2;
  }
`;

const ConsultNote = styled.p`
  ${secondaryFontStyle};
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.88);
  margin: 0;
  text-align: center;
  letter-spacing: 0.02em;
`;

// ─── Contact CTA ─────────────────────────────────────────────────────────────

const CtaWrapper = styled.section`
  ${containerStyles};
  padding: 96px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.text}12;

  ${({ theme }) => theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    padding: 64px 24px;
  `};
`;

const CtaText = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 0.95;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  max-width: 600px;
`;

const CtaButton = styled.a`
  ${secondaryFontStyle};
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.text};
  padding: 20px 48px;
  display: inline-block;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;
  text-decoration: none;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }
`;

// ─── Research Impact ──────────────────────────────────────────────────────────

const ImpactWrapper = styled.div`
  background: #c0201a;
`;

const ImpactInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 72px 24px;
  `}
`;

const ImpactStatement = styled.p`
  font-family: calibre, sans-serif;
  font-size: clamp(1.25rem, 2.2vw, 1.8rem);
  color: #fff;
  opacity: 0.9;
  margin: 0;
  line-height: 1.55;
`;

const ImpactRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImpactStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.1);
  border-left: 2px solid rgba(255, 255, 255, 0.35);
`;

const ImpactStatNum = styled.span`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.75rem;
  color: #fff;
  line-height: 1;
`;

const ImpactStatLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 400;
`;

const ImpactCtaLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  transition:
    color 0.2s ease,
    gap 0.2s ease;

  &:hover {
    color: #fff;
    gap: 16px;
  }
`;

// ─── Estimator Highlight ──────────────────────────────────────────────────────

const EstimatorOuter = styled.section`
  background: ${({ theme }) => theme.colors.red};
  width: 100%;
`;

const EstimatorSection = styled.div`
  ${containerStyles};
  padding: 96px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 72px 24px;
  `}
`;

const EstimatorLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EstimatorPills = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const EstimatorPill = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  padding: 5px 12px;
`;

const EstimatorTitle = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.75rem, 6vw, 5rem);
  line-height: 0.92;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
`;

const EstimatorDesc = styled.p`
  font-family: calibre, sans-serif;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: 1.65;
  max-width: 420px;
`;

const EstimatorCta = styled.a`
  ${secondaryFontStyle};
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  background: #fff;
  padding: 20px 40px;
  display: inline-block;
  text-decoration: none;
  transition:
    background 0.2s ease,
    color 0.2s ease;
  align-self: flex-start;

  &:hover {
    background: #111;
    color: #fff;
  }
`;

const EstimatorNote = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
`;

const EstimatorRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const EstimatorStep = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 16px;
  align-items: baseline;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.08);
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: #fff;
    background: rgba(255, 255, 255, 0.14);
  }
`;

const EstimatorStepNum = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
`;

const EstimatorStepText = styled.span`
  ${secondaryFontStyle};
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { number: '100+', label: 'Clients served' },
  { number: '200+', label: 'Datasets analyzed' },
  { number: '500+', label: 'Hours of consulting' },
  { number: '12+', label: 'Analytical methods' },
];

const SERVICES = [
  {
    name: 'Genomics & Bioinformatics',
    desc: 'GWAS, SNP analysis, population genetics, NGS pipelines — a rare capability in Indian academia.',
  },
  {
    name: 'Biostatistics & Data Analysis',
    desc: 'Regression, survival analysis, Bayesian methods, mixed models, and ANOVA.',
  },
  {
    name: 'Clinical Research Design',
    desc: 'RCT, cohort, case-control — sample size, randomisation, Ethics Committee protocol.',
  },
  {
    name: 'Systematic Reviews & Meta-Analysis',
    desc: 'PRISMA-compliant reviews, forest plots, network meta-analysis. NMC promotion eligible.',
  },
  {
    name: 'ML & Predictive Models',
    desc: 'Clinical prediction models, diagnostic AI, ML pipelines for medical decision support.',
  },
];

const TOOLS = [
  'R',
  'Python',
  'SPSS',
  'Stata',
  'PLINK',
  'GCTA',
  'REDCap',
  'G*Power',
  'TASSEL',
  'GATK',
  'RevMan',
  'SAS',
  'Epi Info',
  'Bioconductor',
  'ADMIXTURE',
  'JASP',
  'OpenEpi',
  'MEGA',
];

const WHY = [
  {
    title: 'End-to-End Expertise',
    desc: 'Raw data to publication-ready results — we handle the full analytical pipeline.',
  },
  {
    title: 'Clinical & Genomic Depth',
    desc: 'Rare dual capability in clinical research design and advanced genomic analysis.',
  },
  {
    title: 'Rigorous Statistics',
    desc: 'Best-practice model selection, multiple-testing correction, and assumption checks.',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Reproducible code, interpretable figures, and full methodology documentation.',
  },
  {
    title: 'NMC & Ethics Ready',
    desc: 'PRISMA-compliant reviews, Ethics Committee protocols, NMC thesis-ready deliverables.',
  },
  {
    title: 'Pan-India & Beyond',
    desc: 'Serving universities, hospitals, breeding companies, and government research programs across India.',
  },
];

const WHO_WE_WORK_WITH = [
  'MD · MS · MBBS',
  'PhD Researchers',
  'BVSc Students',
  'Clinicians',
  'Breeding Companies',
  'Govt Programs',
];

const PLANT_APPS = [
  'Crop improvement & trait-marker associations',
  'QTL mapping and genomic selection in cereals',
  'Disease resistance and stress tolerance GWAS',
  'Diversity assessment in gene bank collections',
  'Population genetics in wild plant species',
  'Multi-environment & GxE interaction analysis',
];

const ANIMAL_APPS = [
  'Livestock genomic selection & breeding values',
  'Production trait GWAS — milk yield, growth rate',
  'Disease susceptibility and resistance mapping',
  'Genetic diversity in endangered or wild species',
  'Inbreeding assessment and conservation planning',
  'Admixture and breed composition analysis',
];

const CLINICAL_APPS = [
  'RCT design, randomisation, and sample size',
  'Cohort and case-control study analysis',
  'Diagnostic accuracy & ROC analysis',
  'Survival analysis & Kaplan-Meier curves',
  'Systematic reviews and meta-analysis',
  'Ethics Committee protocol preparation',
];

const COURSES = [
  {
    name: 'Population & Quantitative Genetics',
    desc: 'HWE, heritability, BLUP, and variance components — hands-on R practicals.',
  },
  {
    name: 'SNP Data Analysis & GWAS',
    desc: 'QC, LD, phasing, and association testing using EMMAX, FarmCPU & BLINK.',
  },
  {
    name: 'Biostatistics for Clinical Research',
    desc: 'Survival analysis, regression, ANOVA, and sample size estimation for medical research.',
  },
  {
    name: 'Systematic Reviews & Meta-Analysis',
    desc: 'PRISMA workflow, forest plots, heterogeneity assessment, and RevMan/R practicals.',
  },
];

const INSTITUTIONS = [
  'SKUAST-K',
  'SKUAST-J',
  'ICAR-IVRI',
  'University of Kashmir',
  'NIT Srinagar',
  'AIIMS Delhi',
  'JIPMER Puducherry',
  'CMC Vellore',
  'ICMR',
  'NDRI Karnal',
  'Punjab Agricultural University',
  'GBPUAT Pantnagar',
  'HAU Hisar',
  'Central Asia Crop Research Centre',
  'National Livestock Improvement Programme',
  'NIMHANS Bengaluru',
  'University of Veterinary Sciences',
  'College of Agriculture & Life Sciences',
];

const QUOTE_SNIPPETS = [
  {
    text: 'Rigorous, publication-ready results — delivered on time.',
    name: 'Dr. Amir Malik',
    role: 'Plant Breeder',
  },
  {
    text: 'Deep domain knowledge and clear, honest communication.',
    name: 'Mehreen Hassan',
    role: 'PhD Candidate',
  },
  {
    text: 'Outstanding analysis with fully reproducible R code.',
    name: 'Dr. Suresh Patel',
    role: 'Principal Investigator',
  },
  {
    text: 'Flagged issues we had completely overlooked ourselves.',
    name: 'Dr. Farida Yusupova',
    role: 'Genomics Researcher',
  },
  {
    text: 'By the end I could run a full GWAS independently.',
    name: 'Bilal Qureshi',
    role: 'PhD Student',
  },
  {
    text: 'Compelling slides — several compliments from the audience.',
    name: 'Dr. Nadia Al-Rashid',
    role: 'Associate Professor',
  },
  {
    text: 'Both the statistics and biological context — a big difference.',
    name: "James O'Brien",
    role: 'Lead Geneticist',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const HomePage = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <>
      {/* ── 1. Stats ── */}
      <StatsWrapper>
        <StatsInner
          as={motion.div}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {STATS.map(({ number, label }) => (
            <StatItem key={label} variants={fadeUp}>
              <StatNumber>
                <CountUpStat raw={number} />
              </StatNumber>
              <StatLabel>{label}</StatLabel>
            </StatItem>
          ))}
        </StatsInner>
      </StatsWrapper>

      {/* ── 2. Research Partner pull-quote ── */}
      <AnimateOnScreen>
        <AboutWrapper>
          <AboutInner as={motion.div}>
            <SectionLabel>Your Dedicated Research Partner</SectionLabel>
            <AboutQuote>
              Data Harvest Labs is a genomic data analysis and statistical
              consulting company founded in Srinagar, Kashmir. We serve
              universities, breeding companies, government research programs,
              and clinician researchers — pan-India and beyond.
            </AboutQuote>
            <AboutMeta>Srinagar, Kashmir &nbsp;·&nbsp; Est. 2023</AboutMeta>
          </AboutInner>
        </AboutWrapper>
      </AnimateOnScreen>

      {/* ── 2.5. Social Proof Marquee ── */}
      <SocialProofOuter>
        <SocialProofLabel>
          <span>Trusted by researchers across India &amp; beyond</span>
        </SocialProofLabel>

        {/* Row 1 — institutions scrolling left */}
        <SocialProofRow>
          <InstTrack>
            {INSTITUTIONS.map((name, i) => (
              <InstItem key={i}>{name}</InstItem>
            ))}
            {INSTITUTIONS.map((name, i) => (
              <InstItem key={`d-${i}`} aria-hidden="true">
                {name}
              </InstItem>
            ))}
          </InstTrack>
        </SocialProofRow>

        {/* Row 2 — quote snippets scrolling right */}
        <SocialProofRow>
          <QuoteTrack>
            {[...QUOTE_SNIPPETS, ...QUOTE_SNIPPETS].map((q, i) => (
              <QuoteSnippetItem
                key={i}
                aria-hidden={i >= QUOTE_SNIPPETS.length}
              >
                <QuoteStars>★★★★★</QuoteStars>
                <QuoteSnippetText>&ldquo;{q.text}&rdquo;</QuoteSnippetText>
                <QuoteSnippetAttr>
                  {q.name}, {q.role}
                </QuoteSnippetAttr>
                <QuoteSep />
              </QuoteSnippetItem>
            ))}
          </QuoteTrack>
        </SocialProofRow>
      </SocialProofOuter>

      {/* ── 3. Services — editorial rows ── */}
      <AnimateOnScreen>
        <Section as={motion.section}>
          <SectionLabel>What we do</SectionLabel>
          <SectionTitle>Services</SectionTitle>
          <ServicesList
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <ServiceRow key={s.name} variants={fadeUp}>
                  <ServiceRowNumber>0{i + 1}</ServiceRowNumber>
                  <ServiceRowContent>
                    <ServiceRowName>{s.name}</ServiceRowName>
                    <ServiceRowDesc>{s.desc}</ServiceRowDesc>
                  </ServiceRowContent>
                  <ServiceIconWrap>
                    <Icon />
                  </ServiceIconWrap>
                </ServiceRow>
              );
            })}
          </ServicesList>

          {/* Tools marquee */}
          <MarqueeSection>
            <MarqueeLabel>
              <span>Tools &amp; Software</span>
            </MarqueeLabel>
            <MarqueeTrackWrap>
              <MarqueeTrack>
                {TOOLS.map((tool, i) => (
                  <MarqueeItem key={i}>{tool}</MarqueeItem>
                ))}
                {TOOLS.map((tool, i) => (
                  <MarqueeItem key={`d-${i}`} aria-hidden="true">
                    {tool}
                  </MarqueeItem>
                ))}
              </MarqueeTrack>
            </MarqueeTrackWrap>
          </MarqueeSection>
        </Section>
      </AnimateOnScreen>

      {/* ── 4. Why Us ── */}
      <AnimateOnScreen>
        <Section as={motion.section}>
          <SectionLabel>Why Data Harvest Labs</SectionLabel>
          <SectionTitle>Six reasons researchers choose us</SectionTitle>
          <WhyGrid
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {WHY.map((w, i) => (
              <WhyCard key={w.title} variants={fadeUp}>
                <WhyNumber>0{i + 1}</WhyNumber>
                <WhyTitle>{w.title}</WhyTitle>
                <WhyDesc>{w.desc}</WhyDesc>
              </WhyCard>
            ))}
          </WhyGrid>
        </Section>
      </AnimateOnScreen>

      {/* ── 5. Who We Work With ── */}
      <AnimateOnScreen>
        <WhoWrapper>
          <WhoInner as={motion.div}>
            <SectionLabel>Clientele</SectionLabel>
            <SectionTitle style={{ marginBottom: 0 }}>
              Who We Work With
            </SectionTitle>
            <WhoTagsWrap
              as={motion.div}
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {WHO_WE_WORK_WITH.map(who => (
                <WhoTag key={who} variants={fadeUp}>
                  {who}
                </WhoTag>
              ))}
            </WhoTagsWrap>
          </WhoInner>
        </WhoWrapper>
      </AnimateOnScreen>

      {/* ── 6. Applications ── */}
      <AnimateOnScreen>
        <Section as={motion.section}>
          <SectionLabel>Applications</SectionLabel>
          <SectionTitle>Plant, Animal &amp; Clinical</SectionTitle>
          <AppGrid
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <AppCard variants={fadeUp}>
              <AppCardTitle>Plant Species</AppCardTitle>
              <AppList>
                {PLANT_APPS.map(item => (
                  <AppListItem key={item}>{item}</AppListItem>
                ))}
              </AppList>
            </AppCard>
            <AppCard variants={fadeUp}>
              <AppCardTitle>Animal Species</AppCardTitle>
              <AppList>
                {ANIMAL_APPS.map(item => (
                  <AppListItem key={item}>{item}</AppListItem>
                ))}
              </AppList>
            </AppCard>
            <AppCard variants={fadeUp}>
              <AppCardTitle>Clinical Research</AppCardTitle>
              <AppList>
                {CLINICAL_APPS.map(item => (
                  <AppListItem key={item}>{item}</AppListItem>
                ))}
              </AppList>
            </AppCard>
          </AppGrid>
        </Section>
      </AnimateOnScreen>

      {/* ── 6.5 Research Impact ── */}
      <ImpactWrapper>
        <ImpactInner>
          <ImpactStatement>
            Our work has contributed to peer-reviewed research in plant
            genetics, clinical medicine, animal breeding, and epidemiology —
            spanning universities, hospitals, and government programmes across
            India and beyond.
          </ImpactStatement>
          <ImpactRight>
            <ImpactStat>
              <ImpactStatNum>15+</ImpactStatNum>
              <ImpactStatLabel>
                Published studies contributed to
              </ImpactStatLabel>
            </ImpactStat>
            <ImpactStat>
              <ImpactStatNum>8+</ImpactStatNum>
              <ImpactStatLabel>Countries served</ImpactStatLabel>
            </ImpactStat>
            <ImpactStat>
              <ImpactStatNum>20+</ImpactStatNum>
              <ImpactStatLabel>Academic institutions</ImpactStatLabel>
            </ImpactStat>
            <Link href="/case-studies" passHref legacyBehavior>
              <ImpactCtaLink>See our published results &#8594;</ImpactCtaLink>
            </Link>
          </ImpactRight>
        </ImpactInner>
      </ImpactWrapper>

      {/* ── 7. Training ── */}
      <TrainingWrapper>
        <TrainingInner>
          <AnimateOnScreen>
            <TrainingLeft as={motion.div}>
              <SectionLabel>Training</SectionLabel>
              <SectionTitle>
                Research Training for Students &amp; Clinicians
              </SectionTitle>
              <TrainingDesc>
                Structured programmes for MBBS, MD, BVSc, MSc, and PhD students
                — hands-on, software-driven, and aligned with international
                journal and NMC thesis standards.
              </TrainingDesc>
              <Link href="/quote" passHref legacyBehavior>
                <TrainingLink
                  onMouseEnter={addCursorBorder}
                  onMouseLeave={removeCursorBorder}
                >
                  Find the right course &#8594;
                </TrainingLink>
              </Link>
            </TrainingLeft>
          </AnimateOnScreen>
          <AnimateOnScreen>
            <TrainingCourses
              as={motion.div}
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {COURSES.map(course => (
                <CourseItem key={course.name} variants={fadeUp}>
                  <CourseName>{course.name}</CourseName>
                  <CourseDesc>{course.desc}</CourseDesc>
                </CourseItem>
              ))}
            </TrainingCourses>
          </AnimateOnScreen>
        </TrainingInner>
      </TrainingWrapper>

      {/* ── 8. Project Estimator ── */}
      <EstimatorOuter>
        <AnimateOnScreen>
          <EstimatorSection
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <EstimatorLeft as={motion.div} variants={fadeUp}>
              <EstimatorPills>
                <EstimatorPill>Free Tool</EstimatorPill>
                <EstimatorPill>2 Minutes</EstimatorPill>
              </EstimatorPills>
              <EstimatorTitle>
                Know Your
                <br />
                Budget
                <br />
                Instantly
              </EstimatorTitle>
              <EstimatorDesc>
                Answer 4 quick questions about your project and get a tailored
                scope, timeline, and price range — no sales call required.
              </EstimatorDesc>
              <Link href="/estimator" passHref legacyBehavior>
                <EstimatorCta
                  onMouseEnter={addCursorBorder}
                  onMouseLeave={removeCursorBorder}
                >
                  See my price in 2 minutes
                </EstimatorCta>
              </Link>
              <EstimatorNote>
                Takes less than 2 minutes &mdash; no sign-up
              </EstimatorNote>
            </EstimatorLeft>
            <EstimatorRight as={motion.div} variants={fadeUp}>
              {[
                'What type of research do you need?',
                'How many samples or data points?',
                "What's your timeline?",
                'How ready is your data?',
              ].map((q, i) => (
                <EstimatorStep key={i}>
                  <EstimatorStepNum>0{i + 1}</EstimatorStepNum>
                  <EstimatorStepText>{q}</EstimatorStepText>
                </EstimatorStep>
              ))}
            </EstimatorRight>
          </EstimatorSection>
        </AnimateOnScreen>
      </EstimatorOuter>

      {/* ── 9. Free Consultation ── */}
      <AnimateOnScreen>
        <ConsultWrapper>
          <ConsultInner
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <ConsultLeft as={motion.div} variants={fadeUp}>
              <ConsultLabel>Get Started</ConsultLabel>
              <ConsultHeading>Free 30-Minute Consultation</ConsultHeading>
              <ConsultDesc>
                No commitment. Tell us your problem — we&apos;ll map a solution.
              </ConsultDesc>
              <ConsultBadges>
                <ConsultBadge>Starting at &#8377;8,000</ConsultBadge>
                <ConsultBadge>Confidential</ConsultBadge>
                <ConsultBadge>Ethical</ConsultBadge>
                <ConsultBadge>NMC Thesis-Ready</ConsultBadge>
              </ConsultBadges>
            </ConsultLeft>
            <motion.div variants={fadeUp}>
              <ConsultRight>
                <Link href="/quote" passHref legacyBehavior>
                  <ConsultCta
                    onMouseEnter={addCursorBorder}
                    onMouseLeave={removeCursorBorder}
                  >
                    Claim my free 30-min call &#8594;
                  </ConsultCta>
                </Link>
                <ConsultNote>No payment required to book</ConsultNote>
              </ConsultRight>
            </motion.div>
          </ConsultInner>
        </ConsultWrapper>
      </AnimateOnScreen>

      {/* ── 9. CTA ── */}
      <AnimateOnScreen>
        <CtaWrapper as={motion.section}>
          <CtaText>Ready to unlock your data?</CtaText>
          <Link href="/quote" passHref legacyBehavior>
            <CtaButton
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Start your project &#8594;
            </CtaButton>
          </Link>
        </CtaWrapper>
      </AnimateOnScreen>
    </>
  );
};

export default HomePage;
