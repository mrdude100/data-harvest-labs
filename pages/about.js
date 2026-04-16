import SEO from '../components/SEO';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../styles/shared/container';
import { secondaryFontStyle } from '../styles/shared/text';
import useCursorStyle from '../hooks/useCursorStyle';

// ─── Styled Components ───────────────────────────────────────────────────────

const PageWrapper = styled.main`
  ${containerStyles};
  padding-top: 140px;
  padding-bottom: 120px;
`;

const TopLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 24px;
`;

const PageTitle = styled.h1`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.95;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  margin: 0 0 96px;
`;

const Section = styled(motion.section)`
  margin-bottom: 96px;
`;

const SectionLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  display: block;
  margin-bottom: 32px;
`;

const OriginText = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 400;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  line-height: 1.55;
  color: ${({ theme }) => theme.text};
  max-width: 800px;
  margin: 0 0 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Divider = styled.div`
  width: 48px;
  height: 2px;
  background: ${({ theme }) => theme.colors.red};
  margin: 64px 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  `}

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
    gap: 64px;
  `}
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TeamName = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const TeamRole = styled.span`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
`;

const TeamBio = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  margin: 0;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Tag = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
`;

const LinkedInLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  text-decoration: none;
  margin-top: 8px;
  display: inline-block;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.red};
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 64px;
  padding-top: 64px;
  border-top: 1px solid ${({ theme }) => theme.text};
  opacity: 0.15;
  border-color: ${({ theme }) => theme.text};

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr 1fr;
  `}

  ${({ theme }) => theme.breakpoints.mobile`
    grid-template-columns: 1fr;
  `}
`;

const StatItem = styled.div`
  opacity: 1;
`;

const StatNumber = styled.div`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1;
  color: ${({ theme }) => theme.text};
  opacity: 1;
`;

const StatLabel = styled.div`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  margin-top: 8px;
`;

const CtaSection = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 560px;
`;

const CtaTitle = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  line-height: 1;
  margin: 0;
`;

const CtaButton = styled.a`
  ${secondaryFontStyle};
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.text};
  padding: 18px 40px;
  display: inline-block;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;
  text-decoration: none;
  align-self: flex-start;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }
`;

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
  show: { transition: { staggerChildren: 0.15 } },
};

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
    bio: 'PhD in Quantitative Genetics from SKUAST-K, Zafir is the analytical core of DataHarvestLabs. A quantitative geneticist and bioinformatician, he specializes in GWAS, PCA, predictive modeling, and statistical analysis using R and Python. He has served 100+ researchers across agriculture, biotech, and academia.',
    tags: ['R', 'Python', 'GWAS', 'Biostatistics', 'PCA', 'Genomics'],
    linkedin: 'https://in.linkedin.com/in/zafir-naik',
  },
  {
    name: 'Dr. Yasir Mushtaq Wani',
    role: 'Co-Founder · Veterinarian',
    bio: `Assistant Professor in Animal Genetics & Breeding at Khalsa College of Veterinary and Animal Sciences, Yasir brings deep expertise in computational genomics, bioinformatics, and veterinary science to DataHarvestLabs. An MVSc from the National Dairy Research Institute, Karnal, he specializes in CNV analysis, population genetics, and clinical data systems. He also built VetField - an offline clinical assistant for field veterinarians.`,
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
    bio: 'Software Engineer, Faraz brings the technical infrastructure to DataHarvestLabs. He works across full-stack development, machine learning and cloud systems, and systems engineering',
    tags: ['Full-Stack', 'ML', 'Cloud', 'Systems', 'CI/CD'],
    linkedin: 'https://www.linkedin.com/in/faraznaik/',
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
        <TopLabel>Who we are</TopLabel>
        <PageTitle>
          Built in
          <br />
          Kashmir
        </PageTitle>

        {/* Origin story */}
        <Section variants={stagger} initial="hidden" animate="show">
          <SectionLabel>Our story</SectionLabel>
          <motion.div variants={fadeUp}>
            <OriginText>
              DataHarvestLabs started in July 2023 in Srinagar - not in a
              boardroom, but between three friends who kept running into the
              same problem: researchers and students drowning in data with no
              affordable way to make sense of it.
            </OriginText>
          </motion.div>
          <motion.div variants={fadeUp}>
            <OriginText>
              Zafir was deep in his PhD, watching fellow researchers waste weeks
              on analyses that should take hours. Faraz was building software
              and saw the same gap from the other side - powerful tools existed,
              but they were inaccessible to the people of Kashmir, expensive, or
              required expertise most people didn&apos;t have.
            </OriginText>
          </motion.div>
          <motion.div variants={fadeUp}>
            <OriginText>
              So they built something about it. A data analytics service that
              meets people where they are - students, researchers, professionals
              - and delivers the kind of tailored, rigorous analysis that used
              to require an entire team. From the Valley of Kashmir, for the
              world.
            </OriginText>
          </motion.div>
        </Section>

        <Divider />

        {/* Stats */}
        <StatsRow>
          {STATS.map(({ number, label }) => (
            <StatItem key={label}>
              <StatNumber>{number}</StatNumber>
              <StatLabel>{label}</StatLabel>
            </StatItem>
          ))}
        </StatsRow>

        <Divider />

        {/* Team */}
        <Section variants={stagger} initial="hidden" animate="show">
          <SectionLabel>The team</SectionLabel>
          <TeamGrid>
            {TEAM.map(member => (
              <motion.div key={member.name} variants={fadeUp}>
                <TeamCard>
                  <TeamRole>{member.role}</TeamRole>
                  <TeamName>{member.name}</TeamName>
                  <TeamBio>{member.bio}</TeamBio>
                  <TagRow>
                    {member.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagRow>
                  <LinkedInLink
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={addCursorBorder}
                    onMouseLeave={removeCursorBorder}
                  >
                    LinkedIn →
                  </LinkedInLink>
                </TeamCard>
              </motion.div>
            ))}
          </TeamGrid>
        </Section>

        {/* CTA */}
        <CtaSection>
          <CtaTitle>Ready to work together?</CtaTitle>
          <Link href="/contact" passHref legacyBehavior>
            <CtaButton
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Get in touch →
            </CtaButton>
          </Link>
        </CtaSection>
      </PageWrapper>
    </>
  );
};

export default AboutPage;
