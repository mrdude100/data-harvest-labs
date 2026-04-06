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
  background: ${({ theme }) => theme.colors.red};
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
  opacity: 0.88;
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

const ServiceNumber = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  color: ${({ theme }) => theme.colors.red};
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

// ─── Applications ─────────────────────────────────────────────────────────────

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  font-size: 1.75rem;
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
    name: 'SNP Data Analysis',
    desc: 'QC filtering, LD pruning, haplotype phasing and allele frequency estimation from GBS or SNP chip data.',
  },
  {
    name: 'GWAS',
    desc: 'Genome-wide association studies using EMMAX, FarmCPU, and BLINK mixed models.',
  },
  {
    name: 'Genomic Diversity',
    desc: "Population structure via ADMIXTURE, PCA, Fst, Tajima's D, and ROH analysis.",
  },
  {
    name: 'PCA Analysis',
    desc: 'Dimensionality reduction and population stratification for any genotypic dataset.',
  },
  {
    name: 'Heritability Estimation',
    desc: 'SNP-based and pedigree heritability using GCTA, BLUP, and variance components.',
  },
  {
    name: 'ANOVA & Regression',
    desc: 'One-way, two-way, and MET ANOVA with post-hoc tests — publication ready.',
  },
  {
    name: 'Report & Article Writing',
    desc: 'Publication-ready reports with interpretable figures and full methodology.',
  },
  {
    name: 'Presentations',
    desc: 'Slide design for seminars, conference talks, and thesis defences.',
  },
  {
    name: 'Data Visualization',
    desc: 'Manhattan plots, PCA biplots, heatmaps, and custom publication figures.',
  },
];

const WHY = [
  {
    title: 'End-to-End Expertise',
    desc: 'Raw genotype files to publication-ready results — we handle the full pipeline.',
  },
  {
    title: 'Species Versatility',
    desc: 'Proven workflows for crops, livestock, aquaculture, and wildlife genetics.',
  },
  {
    title: 'Rigorous Statistics',
    desc: 'Best-practice model selection, multiple-testing correction, and assumption checks.',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Reproducible R/Python code, interpretable figures, and full methodology docs.',
  },
  {
    title: 'Custom Pipelines',
    desc: 'Tailored to your data type — GBS, SNP chip, or WGS — and your research goals.',
  },
  {
    title: 'Academic & Industry Ready',
    desc: 'Serving universities, breeding companies, government programs, and NGOs.',
  },
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
    name: 'Genomic Diversity & Population Structure',
    desc: 'PCA, ADMIXTURE, Fst, ROH, and kinship matrices in PLINK, GCTA, and R.',
  },
  {
    name: 'Biostatistics — ANOVA & Regression',
    desc: 'One-way, two-way & MET ANOVA with regression models and post-hoc tests.',
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

      {/* ── 2. Services ── */}
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
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.name} variants={fadeUp}>
                <ServiceNumber>0{i + 1}</ServiceNumber>
                <ServiceName>{s.name}</ServiceName>
                <ServiceDesc>{s.desc}</ServiceDesc>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Section>
      </AnimateOnScreen>

      {/* ── 3. Why Us ── */}
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

      {/* ── 4. Applications ── */}
      <AnimateOnScreen>
        <Section as={motion.section}>
          <SectionLabel>Applications</SectionLabel>
          <SectionTitle>Plant &amp; Animal Genomics</SectionTitle>
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
          </AppGrid>
        </Section>
      </AnimateOnScreen>

      {/* ── 5. Training ── */}
      <TrainingWrapper>
        <TrainingInner>
          <AnimateOnScreen>
            <TrainingLeft as={motion.div}>
              <SectionLabel>Training</SectionLabel>
              <SectionTitle>
                Genomics Training for Students &amp; Researchers
              </SectionTitle>
              <TrainingDesc>
                Structured programmes for BVSc, MSc, and PhD students —
                hands-on, software-driven (R, PLINK, GCTA, TASSEL), and aligned
                with international journal standards.
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

      {/* ── 6. CTA ── (moved to end for better conversion flow) */}
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
