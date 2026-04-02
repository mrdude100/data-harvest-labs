import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimateOnScreen from '../components/AnimateOnScreen';
import containerStyles from '../styles/shared/container';
import { secondaryFontStyle } from '../styles/shared/text';

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

// ─── Styled Components ───────────────────────────────────────────────────────

const PageWrapper = styled.main`
  ${containerStyles};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 140px;
  padding-bottom: 100px;
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
  margin: 0 0 16px;
`;

const PageSubtitle = styled.p`
  ${secondaryFontStyle};
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  margin: 0 0 72px;
  line-height: 1.6;
  max-width: 520px;
  font-weight: 400;
`;

const TestimonialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: ${({ theme }) => theme.text}18;
  border: 1px solid ${({ theme }) => theme.text}18;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
  `}
`;

const TestimonialCard = styled(motion.article)`
  background: ${({ theme }) => theme.background};
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const QuoteMark = styled.span`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.red};
  opacity: 0.3;
  line-height: 1;
  display: block;
  margin-bottom: -8px;
`;

const QuoteText = styled.blockquote`
  font-family: calibre, sans-serif;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
  margin: 0;
  line-height: 1.65;
  font-weight: 400;
`;

const CardDivider = styled.div`
  width: 32px;
  height: 1px;
  background: ${({ theme }) => theme.colors.red};
  opacity: 0.4;
`;

const ClientInfo = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ClientName = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1;
`;

const ClientRole = styled.p`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  margin: 0;
  font-weight: 400;
`;

const ServiceTag = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  margin-top: 8px;
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      'Data Harvest Labs delivered a complete GWAS pipeline for our wheat dataset within the agreed timeline. The methodology was rigorous, the figures publication-ready, and the team was responsive throughout.',
    name: 'Dr. A. Researcher',
    role: 'Senior Scientist',
    organisation: 'National Agricultural University',
    service: 'GWAS & SNP Data Analysis',
  },
  {
    quote:
      'Exceptional statistical consulting — they helped us design a multi-environment trial analysis that satisfied our thesis committee. Clear communication and deep domain knowledge.',
    name: 'M. Hassan',
    role: 'PhD Candidate',
    organisation: 'Department of Plant Genetics',
    service: 'Statistical Consulting & ANOVA',
  },
  {
    quote:
      'The population structure and genomic diversity analysis they performed on our livestock dataset was outstanding. Delivered on time with fully reproducible R code and detailed interpretation.',
    name: 'Dr. S. Patel',
    role: 'Principal Investigator',
    organisation: 'Livestock Genomics Institute',
    service: 'Genomic Diversity & PCA Analysis',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const TestimonialsPage = () => {
  return (
    <>
      <SEO
        title="Client Testimonials"
        description="See what researchers, scientists, and students say about Data Harvest Labs' data analysis and genomic consulting services."
        path="/testimonials"
      />

      <PageWrapper>
        <TopLabel>Testimonials</TopLabel>
        <PageTitle>What clients{'\u00A0'}say</PageTitle>
        <PageSubtitle>
          Feedback from researchers, PhD students, and institutions who have
          worked with us.
        </PageSubtitle>

        <AnimateOnScreen>
          <TestimonialsGrid variants={stagger} initial="hidden" animate="show">
            {TESTIMONIALS.map(t => (
              <TestimonialCard key={t.name} variants={fadeUp}>
                <QuoteMark aria-hidden="true">&ldquo;</QuoteMark>
                <QuoteText>{t.quote}</QuoteText>
                <CardDivider />
                <ClientInfo>
                  <ClientName>{t.name}</ClientName>
                  <ClientRole>
                    {t.role} — {t.organisation}
                  </ClientRole>
                  <ServiceTag>{t.service}</ServiceTag>
                </ClientInfo>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </AnimateOnScreen>
      </PageWrapper>
    </>
  );
};

export default TestimonialsPage;
