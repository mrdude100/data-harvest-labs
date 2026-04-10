import SEO from '../components/SEO';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimateOnScreen from '../components/AnimateOnScreen';
import containerStyles from '../styles/shared/container';
import { secondaryFontStyle } from '../styles/shared/text';
import useCursorStyle from '../hooks/useCursorStyle';

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0, 0.7, 0.29, 0.97] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

// ─── Styled Components ───────────────────────────────────────────────────────

const PageWrapper = styled.main`
  padding-bottom: 0;
`;

// ── Hero ──

const HeroSection = styled.div`
  ${containerStyles};
  padding-top: 160px;
  padding-bottom: 96px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding-top: 120px;
    padding-bottom: 64px;
  `};
`;

const TopLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 0.16em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 24px;
`;

const PageTitle = styled.h1`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(4rem, 10vw, 9rem);
  line-height: 0.9;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -0.02em;
`;

const HeroMeta = styled.p`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.3;
  margin: 32px 0 0;
`;

// ── Story ──

const StorySection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.text}12;
  border-bottom: 1px solid ${({ theme }) => theme.text}12;
`;

const StoryInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 80px;
  align-items: start;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 64px 24px;
  `};
`;

const StorySideLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.35;
  padding-top: 6px;
`;

const StoryTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const StoryPara = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 400;
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  margin: 0 0 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PullQuote = styled.blockquote`
  font-family: calibre, sans-serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.35;
  color: ${({ theme }) => theme.text};
  border-left: 3px solid ${({ theme }) => theme.colors.red};
  margin: 40px 0;
  padding-left: 28px;
  font-style: normal;
`;

// ── Stats ──

const StatsSection = styled.div`
  background: #c0201a;
  padding: 64px 0;
`;

const StatsInner = styled.div`
  ${containerStyles};
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 0 24px;
  `};

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
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
  opacity: 0.7;
`;

// ── Team ──

const TeamSection = styled.div`
  ${containerStyles};
  padding: 96px 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 64px 24px;
  `};
`;

const TeamSectionLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  display: block;
  margin-bottom: 56px;
`;

const TeamList = styled.div`
  border-top: 1px solid ${({ theme }) => theme.text}12;
`;

const TeamMemberRow = styled(motion.div)`
  padding: 56px 0;
  border-bottom: 1px solid ${({ theme }) => theme.text}12;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 48px 0;
  `};
`;

const TeamLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TeamRole = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
`;

const TeamName = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4.5vw, 3.75rem);
  line-height: 0.95;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  letter-spacing: -0.01em;
`;

const TeamLinkedIn = styled.a`
  ${secondaryFontStyle};
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.38;
  text-decoration: none;
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s ease, color 0.2s ease;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.red};
  }
`;

const TeamRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 4px;
`;

const TeamBio = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  margin: 0;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  ${secondaryFontStyle};
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 14px;
  border: 1px solid ${({ theme }) => theme.text}20;
  color: ${({ theme }) => theme.text};
  opacity: 0.55;
  border-radius: 2px;
`;

// ── Values ──

const ValuesSection = styled.div`
  background: ${({ theme }) => theme.text}05;
  border-top: 1px solid ${({ theme }) => theme.text}12;
`;

const ValuesInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 64px 24px;
  `};
`;

const ValuesSectionLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  display: block;
  margin-bottom: 16px;
`;

const ValuesTitle = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0 0 56px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${({ theme }) => theme.text}12;
  border: 1px solid ${({ theme }) => theme.text}12;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
  `};
`;

const ValueCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 48px 36px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ValueIndex = styled.span`
  ${secondaryFontStyle};
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.red};
`;

const ValueTitle = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const ValueDesc = styled.p`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.42;
  margin: 0;
  line-height: 1.65;
  font-weight: 400;
`;

// ── CTA ──

const CtaSection = styled.div`
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

const CtaTitle = styled.h2`
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
];

const TEAM = [
  {
    name: 'Dr. Zafir Ahmad Naik',
    role: 'Co-Founder · Data Scientist',
    bio: 'PhD in Genetics & Plant Breeding from SKUAST-K, Zafir is the analytical core of Data Harvest Labs. A quantitative geneticist and bioinformatician, he specializes in GWAS, PCA, predictive modeling, and statistical analysis using R and Python. He has served 100+ researchers across agriculture, biotech, and academia.',
    tags: ['R', 'Python', 'GWAS', 'Biostatistics', 'PCA', 'Genomics'],
    linkedin: 'https://in.linkedin.com/in/zafir-naik',
  },
  {
    name: 'Dr. Yasir Mushtaq Wani',
    role: 'Co-Founder · Veterinarian',
    bio: 'Assistant Professor in Animal Genetics & Breeding at Khalsa College of Veterinary and Animal Sciences, Yasir brings deep expertise in computational genomics, bioinformatics, and veterinary science. An MVSc from the National Dairy Research Institute, Karnal, he specializes in CNV analysis, population genetics, and clinical data systems.',
    tags: [
      'Bioinformatics',
      'Genomics',
      'R',
      'Veterinary Science',
      'CNV Analysis',
    ],
    linkedin:
      'https://www.linkedin.com/in/dr-yasir-mushtaq-wani-1864831b9/?originalSubdomain=in',
  },
  {
    name: 'Faraz Ahmad Naik',
    role: 'Co-Founder · Software Engineer',
    bio: 'Software Engineer bringing the technical infrastructure to Data Harvest Labs. Faraz works across full-stack development, machine learning, cloud systems, and systems engineering — ensuring every product we build is fast, reliable, and scalable.',
    tags: ['Full-Stack', 'ML', 'Cloud', 'Systems', 'CI/CD'],
    linkedin: 'https://www.linkedin.com/in/faraznaik/',
  },
];

const VALUES = [
  {
    title: 'Rigour First',
    desc: 'Every analysis follows best-practice statistical standards. No shortcuts, no guesswork — reproducible, defensible results.',
  },
  {
    title: 'Built for Researchers',
    desc: 'We understand the constraints of academic research — timelines, budgets, Ethics Committees — and work within them.',
  },
  {
    title: 'From Kashmir, For the World',
    desc: 'Founded in Srinagar, we bring world-class analytical capability to a region that deserves it, and export it pan-India and beyond.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const AboutPage = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <>
      <SEO
        title="Who We Are"
        description="Data Harvest Labs was founded in Kashmir by Faraz Ahmad Naik, Dr. Zafir Ahmad Naik and Dr. Yasir Mushtaq Wani. Learn our story, meet the team, and discover what drives us."
        path="/about"
      />

      <PageWrapper>
        {/* ── Hero ── */}
        <AnimateOnScreen>
          <HeroSection as={motion.div}>
            <TopLabel>Who we are</TopLabel>
            <PageTitle>
              Built in
              <br />
              Kashmir
            </PageTitle>
            <HeroMeta>Srinagar, Kashmir &nbsp;·&nbsp; Est. 2023</HeroMeta>
          </HeroSection>
        </AnimateOnScreen>

        {/* ── Story ── */}
        <StorySection>
          <AnimateOnScreen>
            <StoryInner
              as={motion.div}
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeUp}>
                <StorySideLabel>Our story</StorySideLabel>
              </motion.div>
              <StoryTextBlock>
                <motion.div variants={fadeUp}>
                  <StoryPara>
                    Data Harvest Labs started in July 2023 in Srinagar — not in
                    a boardroom, but between three friends who kept running into
                    the same problem: researchers and students drowning in data
                    with no affordable way to make sense of it.
                  </StoryPara>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <PullQuote>
                    &ldquo;Powerful tools existed, but they were inaccessible to
                    the people of Kashmir — expensive, or requiring expertise
                    most people didn&apos;t have.&rdquo;
                  </PullQuote>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <StoryPara>
                    Zafir was deep in his PhD, watching fellow researchers waste
                    weeks on analyses that should take hours. Faraz was building
                    software and saw the same gap from the other side. So they
                    built something about it — a data analytics service that
                    meets people where they are.
                  </StoryPara>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <StoryPara>
                    From the Valley of Kashmir, for the world.
                  </StoryPara>
                </motion.div>
              </StoryTextBlock>
            </StoryInner>
          </AnimateOnScreen>
        </StorySection>

        {/* ── Stats ── */}
        <StatsSection>
          <StatsInner
            as={motion.div}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {STATS.map(({ number, label }) => (
              <StatItem key={label} variants={fadeUp}>
                <StatNumber>{number}</StatNumber>
                <StatLabel>{label}</StatLabel>
              </StatItem>
            ))}
          </StatsInner>
        </StatsSection>

        {/* ── Team ── */}
        <AnimateOnScreen>
          <TeamSection as={motion.div}>
            <TeamSectionLabel>The team</TeamSectionLabel>
            <TeamList
              as={motion.div}
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {TEAM.map(member => (
                <TeamMemberRow key={member.name} variants={fadeUp}>
                  <TeamLeft>
                    <TeamRole>{member.role}</TeamRole>
                    <TeamName>{member.name}</TeamName>
                    <TeamLinkedIn
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={addCursorBorder}
                      onMouseLeave={removeCursorBorder}
                    >
                      LinkedIn &#8594;
                    </TeamLinkedIn>
                  </TeamLeft>
                  <TeamRight>
                    <TeamBio>{member.bio}</TeamBio>
                    <TagRow>
                      {member.tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagRow>
                  </TeamRight>
                </TeamMemberRow>
              ))}
            </TeamList>
          </TeamSection>
        </AnimateOnScreen>

        {/* ── Values ── */}
        <ValuesSection>
          <AnimateOnScreen>
            <ValuesInner as={motion.div}>
              <ValuesSectionLabel>What drives us</ValuesSectionLabel>
              <ValuesTitle>Our Values</ValuesTitle>
              <ValuesGrid
                as={motion.div}
                variants={stagger}
                initial="hidden"
                animate="show"
              >
                {VALUES.map((v, i) => (
                  <ValueCard key={v.title} variants={fadeUp}>
                    <ValueIndex>0{i + 1}</ValueIndex>
                    <ValueTitle>{v.title}</ValueTitle>
                    <ValueDesc>{v.desc}</ValueDesc>
                  </ValueCard>
                ))}
              </ValuesGrid>
            </ValuesInner>
          </AnimateOnScreen>
        </ValuesSection>

        {/* ── CTA ── */}
        <AnimateOnScreen>
          <CtaSection as={motion.div}>
            <CtaTitle>Ready to work together?</CtaTitle>
            <Link href="/contact" passHref>
              <CtaButton
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Get in touch &#8594;
              </CtaButton>
            </Link>
          </CtaSection>
        </AnimateOnScreen>
      </PageWrapper>
    </>
  );
};

export default AboutPage;
