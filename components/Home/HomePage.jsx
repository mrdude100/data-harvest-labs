import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimateOnScreen from '../AnimateOnScreen';
import useCursorStyle from '../../hooks/useCursorStyle';
import styled from 'styled-components';
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
  show: { transition: { staggerChildren: 0.12 } },
};

// ─── Shared ───────────────────────────────────────────────────────────────────

const Section = styled.section`
  ${containerStyles};
  padding: 96px 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 48px 24px;
  `};
`;

const SectionLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
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
  margin: 0 0 48px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: clamp(1.5rem, 7vw, 2.5rem);
    margin: 0 0 32px;
  `}
`;

// ─── Stats ────────────────────────────────────────────────────────────────────

const StatsWrapper = styled.div`
  background: #c0201a;
  padding: 64px 0;
`;

const StatsInner = styled.div`
  ${containerStyles};
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 0 24px;
  `};
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatNumber = styled.div`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1;
  color: #fff;
`;

const StatLabel = styled.div`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  opacity: 1;
`;

// ─── About / Research Partner blurb ──────────────────────────────────────────

const AboutWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.text}18;
`;

const AboutInner = styled.div`
  ${containerStyles};
  padding: 80px 32px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 64px;
  align-items: start;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 56px 24px;
  `};
`;

const AboutHeading = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.05;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const AboutText = styled.p`
  font-family: calibre, sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  margin: 0;
  line-height: 1.75;
`;

// ─── Services ─────────────────────────────────────────────────────────────────

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${({ theme }) => theme.text}18;
  border: 1px solid ${({ theme }) => theme.text}18;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
  `};
`;

const ServiceCard = styled(motion.div)`
  padding: 40px 32px;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.red}11;
  }
`;

const ServiceIcon = styled.span`
  font-size: 1.75rem;
  line-height: 1;
  display: block;
`;

const ServiceName = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1;
`;

const ServiceDesc = styled.p`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  margin: 0;
  line-height: 1.55;
  font-weight: 400;

  ${({ theme }) => theme.breakpoints.tablet`
    display: none;
  `}
`;

// ─── Tools pills ──────────────────────────────────────────────────────────────

const ToolsSubSection = styled.div`
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.text}18;
`;

const ToolsSubLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  display: block;
  margin-bottom: 20px;
`;

const ToolsPillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ToolPill = styled.span`
  ${secondaryFontStyle};
  font-size: 0.82rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text}28;
  border-radius: 999px;
  padding: 7px 18px;
  cursor: default;
  transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
    background: ${({ theme }) => theme.colors.red}0a;
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
  border-top: 1px solid ${({ theme }) => theme.text}18;
  border-bottom: 1px solid ${({ theme }) => theme.text}18;
`;

const WhoInner = styled.div`
  ${containerStyles};
  padding: 80px 32px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 64px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 56px 24px;
  `};
`;

const WhoHeading = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  letter-spacing: 0.06em;
`;

const WhoPillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const WhoPill = styled.span`
  font-family: calibre, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  border: 1.5px solid ${({ theme }) => theme.text}30;
  border-radius: 999px;
  padding: 10px 22px;
  transition: border-color 0.18s ease, background 0.18s ease, color 0.18s ease;
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
    background: ${({ theme }) => theme.colors.red}0d;
    color: ${({ theme }) => theme.colors.red};
  }
`;

// ─── Applications ─────────────────────────────────────────────────────────────

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: ${({ theme }) => theme.text}18;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
  `};
`;

const AppCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 32px 24px;
  `};
`;

const AppCardTitle = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const AppList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const AppListItem = styled.li`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.55;
  padding-left: 16px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.red};
  }
`;

// ─── Training ─────────────────────────────────────────────────────────────────

const TrainingWrapper = styled.section`
  background: ${({ theme }) => theme.text}08;
  border-top: 1px solid ${({ theme }) => theme.text}18;
`;

const TrainingInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
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
  opacity: 0.55;
  margin: 0;
  line-height: 1.7;
`;

const TrainingLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  letter-spacing: 0.06em;
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
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  font-size: 0.78rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  margin: 0;
  line-height: 1.55;
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
    gap: 40px;
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
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.65;
  display: block;
`;

const ConsultHeading = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
`;

const ConsultDesc = styled.p`
  font-family: calibre, sans-serif;
  font-size: 1.05rem;
  color: #fff;
  opacity: 0.8;
  margin: 0;
  line-height: 1.65;
`;

const ConsultBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
`;

const ConsultBadge = styled.span`
  ${secondaryFontStyle};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  padding: 5px 14px;
`;

const ConsultRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ConsultCta = styled.a`
  ${secondaryFontStyle};
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #c0201a;
  background: #fff;
  padding: 20px 40px;
  display: inline-block;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  text-decoration: none;
  text-align: center;
  font-weight: 600;

  &:hover {
    background: #f0f0f0;
  }
`;

const ConsultNote = styled.p`
  ${secondaryFontStyle};
  font-size: 0.78rem;
  color: #fff;
  opacity: 0.5;
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
  border-top: 1px solid ${({ theme }) => theme.text}18;

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
  transition: background 0.2s ease, color 0.2s ease;
  text-decoration: none;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }
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
    icon: '🧬',
    name: 'Genomics & Bioinformatics',
    desc: 'GWAS, SNP analysis, population genetics, NGS pipelines — a rare capability in Indian academia.',
  },
  {
    icon: '📊',
    name: 'Biostatistics & Data Analysis',
    desc: 'Regression, survival analysis, Bayesian methods, mixed models, and ANOVA.',
  },
  {
    icon: '🔬',
    name: 'Clinical Research Design',
    desc: 'RCT, cohort, case-control — sample size, randomisation, Ethics Committee protocol.',
  },
  {
    icon: '📋',
    name: 'Systematic Reviews & Meta-Analysis',
    desc: 'PRISMA-compliant reviews, forest plots, network meta-analysis. NMC promotion eligible.',
  },
  {
    icon: '🤖',
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
    desc: 'PRISMA-compliant reviews, Ethics Committee protocols, and NMC thesis-ready deliverables.',
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

      {/* ── 2. Research Partner blurb ── */}
      <AnimateOnScreen>
        <AboutWrapper>
          <AboutInner
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <AboutHeading>Your Dedicated Research Partner</AboutHeading>
            </motion.div>
            <motion.div variants={fadeUp}>
              <AboutText>
                Data Harvest Labs is a genomic data analysis and statistical
                consulting company founded in Srinagar, Kashmir. We serve
                universities, breeding companies, government research programs,
                and clinician researchers — pan-India and beyond.
              </AboutText>
            </motion.div>
          </AboutInner>
        </AboutWrapper>
      </AnimateOnScreen>

      {/* ── 3. Services ── */}
      <AnimateOnScreen>
        <Section as={motion.section}>
          <SectionLabel>What we do</SectionLabel>
          <SectionTitle>Services</SectionTitle>
          <ServicesGrid
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {SERVICES.map(s => (
              <ServiceCard key={s.name} variants={fadeUp}>
                <ServiceIcon aria-hidden="true">{s.icon}</ServiceIcon>
                <ServiceName>{s.name}</ServiceName>
                <ServiceDesc>{s.desc}</ServiceDesc>
              </ServiceCard>
            ))}
          </ServicesGrid>

          <ToolsSubSection>
            <ToolsSubLabel>Tools &amp; Software</ToolsSubLabel>
            <ToolsPillsWrap>
              {TOOLS.map(tool => (
                <ToolPill key={tool}>{tool}</ToolPill>
              ))}
            </ToolsPillsWrap>
          </ToolsSubSection>
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
          <WhoInner
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Clientele</SectionLabel>
              <WhoHeading>Who We Work With</WhoHeading>
            </motion.div>
            <motion.div variants={fadeUp}>
              <WhoPillsWrap>
                {WHO_WE_WORK_WITH.map(who => (
                  <WhoPill key={who}>{who}</WhoPill>
                ))}
              </WhoPillsWrap>
            </motion.div>
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
              <Link href="/contact" passHref>
                <TrainingLink
                  onMouseEnter={addCursorBorder}
                  onMouseLeave={removeCursorBorder}
                >
                  Enquire about training &#8594;
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

      {/* ── 8. Free Consultation ── */}
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
                <Link href="/contact" passHref>
                  <ConsultCta
                    onMouseEnter={addCursorBorder}
                    onMouseLeave={removeCursorBorder}
                  >
                    Book Free Consultation &#8594;
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
          <Link href="/contact" passHref>
            <CtaButton
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Get in touch &#8594;
            </CtaButton>
          </Link>
        </CtaWrapper>
      </AnimateOnScreen>
    </>
  );
};

export default HomePage;
