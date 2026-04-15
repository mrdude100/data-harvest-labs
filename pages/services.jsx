import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SEO from '../components/SEO';
import AnimateOnScreen from '../components/AnimateOnScreen';
import useCursorStyle from '../hooks/useCursorStyle';
import containerStyles from '../styles/shared/container';
import { secondaryFontStyle } from '../styles/shared/text';

// ─── Animations ──────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0, 0.7, 0.29, 0.97] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

// ─── Shared ───────────────────────────────────────────────────────────────────

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
  margin: 0;
`;

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

const HeroWrapper = styled.div`
  ${containerStyles};
  padding-top: 140px;
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: end;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 120px;
    padding-bottom: 64px;
  `}
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const HeroRight = styled.p`
  font-family: calibre, sans-serif;
  font-size: clamp(1rem, 1.8vw, 1.3rem);
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  margin: 0;
  line-height: 1.65;
  max-width: 480px;
  padding-bottom: 12px;
`;

// ─── Service Cards ────────────────────────────────────────────────────────────

const ServicesSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.text}12;
`;

const ServiceCard = styled(motion.div)`
  ${containerStyles};
  padding-top: 64px;
  padding-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  border-bottom: 1px solid ${({ theme }) => theme.text}10;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 48px;
    padding-bottom: 48px;
  `}
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardNumber = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.red};
`;

const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const CardName = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const CardDesc = styled.p`
  font-family: calibre, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.55;
  margin: 0;
  line-height: 1.7;
  max-width: 420px;
`;

const CardLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  transition: gap 0.2s ease;

  &:hover {
    gap: 16px;
  }
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 24px;
`;

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardBlockLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.35;
`;

const DelList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DelItem = styled.li`
  ${secondaryFontStyle};
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
  padding-left: 16px;
  position: relative;
  line-height: 1.5;

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

const ForTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ForTag = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  border: 1px solid ${({ theme }) => theme.text}22;
  padding: 5px 12px;
`;

// ─── Pricing ──────────────────────────────────────────────────────────────────

const PricingSection = styled.div`
  background: ${({ theme }) => theme.text}04;
  border-top: 1px solid ${({ theme }) => theme.text}12;
`;

const PricingInner = styled.div`
  ${containerStyles};
  padding: 96px 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 64px 24px;
  `}
`;

const PricingGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: ${({ theme }) => theme.text}12;
  margin-top: 0;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
  `}
`;

const PricingCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 48px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: relative;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 36px 28px 32px;
  `}
`;

const PricingBadge = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.red};
  color: #fff;
  padding: 4px 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

const PricingTier = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1;
`;

const PricingFor = styled.p`
  ${secondaryFontStyle};
  font-size: 0.82rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  margin: 0;
  line-height: 1.6;
`;

const PricingDivider = styled.div`
  width: 36px;
  height: 1px;
  background: ${({ theme }) => theme.colors.red};
  opacity: 0.4;
`;

const PricingFeatures = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const PricingFeature = styled.li`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
  padding-left: 18px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.red};
    opacity: 0.7;
  }
`;

const PricingCta = styled.a`
  ${secondaryFontStyle};
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.text};
  padding: 16px 28px;
  text-decoration: none;
  text-align: center;
  display: block;
  transition:
    background 0.2s ease,
    color 0.2s ease;
  margin-top: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }
`;

// ─── CTA ──────────────────────────────────────────────────────────────────────

const CtaSection = styled.section`
  ${containerStyles};
  padding: 96px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.text}12;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    padding: 64px 24px;
  `}
`;

const CtaText = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 0.95;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  max-width: 560px;
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

// ─── Icons ────────────────────────────────────────────────────────────────────

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
    <rect x="3" y="4" width="18" height="17" rx="1" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="12" y1="14" x2="12" y2="18" />
    <line x1="9" y1="16" x2="15" y2="16" />
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: IconGenomics,
    name: 'Genomics & Bioinformatics',
    desc: 'End-to-end NGS pipelines, GWAS, population structure, and variant annotation. One of the few teams in Indian academia with full-stack genomic capability.',
    deliverables: [
      'GWAS with Manhattan & QQ plots',
      'Population structure (PCA, ADMIXTURE)',
      'SNP quality control & filtering (PLINK/GATK)',
      'Variant annotation & functional analysis',
      'Haplotype & LD analysis',
      'Kinship matrix and population differentiation (FST)',
    ],
    forWhom: [
      'PhD Researchers',
      'Plant Breeders',
      'Animal Scientists',
      'Breeding Companies',
    ],
  },
  {
    icon: IconBiostat,
    name: 'Biostatistics & Data Analysis',
    desc: 'Rigorous statistical modelling for medical and biological research — from simple t-tests to Bayesian mixed models. Publication-ready outputs every time.',
    deliverables: [
      'Regression modelling (linear, logistic, Poisson)',
      'Survival analysis & Kaplan-Meier curves',
      'Repeated-measures & mixed-effects models',
      'ANOVA, MANOVA, and non-parametric alternatives',
      'Bayesian analysis with MCMC',
      'Publication-ready tables and figures',
    ],
    forWhom: [
      'Clinicians',
      'Medical Researchers',
      'MS/MD Students',
      'PhD Candidates',
    ],
  },
  {
    icon: IconClinical,
    name: 'Clinical Research Design',
    desc: 'Rigorous trial design from the ground up — sample size, randomisation, and ethics committee-ready protocols aligned with ICMR and NMC standards.',
    deliverables: [
      'Sample size calculation & power analysis',
      'Randomisation & allocation concealment',
      'CONSORT-compliant RCT design',
      'Ethics Committee protocol preparation',
      'REDCap database design & setup',
      'Interim analysis & DSMB reporting',
    ],
    forWhom: [
      'MBBS/MD Clinicians',
      'Government Hospitals',
      'Pharma Researchers',
      'Academic Institutions',
    ],
  },
  {
    icon: IconReview,
    name: 'Systematic Reviews & Meta-Analysis',
    desc: 'PRISMA-compliant reviews with full methodology, forest plots, and heterogeneity assessment. NMC-eligible output for promotion and PhD thesis.',
    deliverables: [
      'PROSPERO registration support',
      'Comprehensive database search strategy',
      'PRISMA flow diagram & data extraction',
      'Fixed/random-effects meta-analysis',
      'Forest plots & funnel plots',
      'Network meta-analysis where applicable',
    ],
    forWhom: [
      'MD/MS Candidates',
      'NMC Promotion Applicants',
      'PhD Students',
      'Research Fellows',
    ],
  },
  {
    icon: IconML,
    name: 'ML & Predictive Models',
    desc: 'Machine learning pipelines for clinical prediction, diagnostic AI, and genomic selection — built to be interpretable, validated, and publication-ready.',
    deliverables: [
      'Clinical prediction model development (TRIPOD)',
      'Classification & risk stratification models',
      'Feature importance & SHAP interpretation',
      'Cross-validation and internal validation',
      'ROC curves & calibration analysis',
      'Genomic selection & GBLUP models',
    ],
    forWhom: [
      'Clinical Researchers',
      'AI in Healthcare',
      'Breeding Companies',
      'Academic Labs',
    ],
  },
];

const PRICING_TIERS = [
  {
    tier: 'Starter',
    forWhom:
      'Individual students, MBBS/MD thesis, or single-analysis projects with straightforward datasets.',
    features: [
      'Single analysis type',
      'Up to 100 samples / participants',
      'Standard turnaround (3–6 weeks)',
      'Publication-ready figures',
      'One revision round',
      'Email support',
    ],
    cta: 'Get a quote',
    href: '/quote',
    highlighted: false,
  },
  {
    tier: 'Professional',
    forWhom:
      'Multi-analysis projects, PhD theses, institutional research, or complex datasets requiring full-pipeline work.',
    features: [
      'Multiple analysis types combined',
      'Up to 1,000 samples / participants',
      'Priority turnaround (2–4 weeks)',
      'Full methodology documentation',
      'Unlimited revisions until satisfied',
      'Video call debrief included',
      'Co-authorship acknowledgement',
    ],
    cta: 'Get a quote',
    href: '/quote',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    tier: 'Enterprise',
    forWhom:
      'Breeding companies, government programs, pharma, and multi-site clinical trials with large or ongoing data.',
    features: [
      'Unlimited scope & sample size',
      'Dedicated analyst assigned',
      'Expedited turnaround available',
      'Custom reporting & dashboards',
      'Training sessions for your team',
      'Ongoing retainer available',
      'NDA & data security agreement',
    ],
    cta: 'Contact us',
    href: '/contact',
    highlighted: false,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ServicesPage = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <>
      <SEO
        title="Services"
        description="Genomics & Bioinformatics, Biostatistics, Clinical Research Design, Systematic Reviews, and ML modelling — end-to-end research support from Data Harvest Labs."
        path="/services"
      />

      {/* ── Hero ── */}
      <HeroWrapper
        as={motion.div}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0.7, 0.29, 0.97] }}
      >
        <HeroLeft>
          <TopLabel>What we do</TopLabel>
          <PageTitle>Services</PageTitle>
        </HeroLeft>
        <HeroRight>
          From GWAS pipelines to Ethics Committee protocols — we deliver
          end-to-end analytical support so you can focus on the science. Every
          output is publication-ready.
        </HeroRight>
      </HeroWrapper>

      {/* ── Service Detail Cards ── */}
      <ServicesSection>
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <AnimateOnScreen key={s.name}>
              <ServiceCard variants={fadeUp} initial="hidden" animate="show">
                <CardLeft>
                  <CardNumber>0{i + 1}</CardNumber>
                  <CardIcon>
                    <Icon />
                  </CardIcon>
                  <CardName>{s.name}</CardName>
                  <CardDesc>{s.desc}</CardDesc>
                  <Link href="/quote" passHref>
                    <CardLink
                      onMouseEnter={addCursorBorder}
                      onMouseLeave={removeCursorBorder}
                    >
                      Get a quote &#8594;
                    </CardLink>
                  </Link>
                </CardLeft>
                <CardRight>
                  <CardBlock>
                    <CardBlockLabel>Deliverables</CardBlockLabel>
                    <DelList>
                      {s.deliverables.map(d => (
                        <DelItem key={d}>{d}</DelItem>
                      ))}
                    </DelList>
                  </CardBlock>
                  <CardBlock>
                    <CardBlockLabel>Ideal for</CardBlockLabel>
                    <ForTagRow>
                      {s.forWhom.map(f => (
                        <ForTag key={f}>{f}</ForTag>
                      ))}
                    </ForTagRow>
                  </CardBlock>
                </CardRight>
              </ServiceCard>
            </AnimateOnScreen>
          );
        })}
      </ServicesSection>

      {/* ── Pricing Tiers ── */}
      <AnimateOnScreen>
        <PricingSection>
          <PricingInner>
            <SectionLabel>Pricing</SectionLabel>
            <SectionTitle>Choose your scope</SectionTitle>
            <PricingGrid
              as={motion.div}
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {PRICING_TIERS.map(t => (
                <PricingCard key={t.tier} variants={fadeUp}>
                  {t.badge && <PricingBadge>{t.badge}</PricingBadge>}
                  <div>
                    <PricingTier>{t.tier}</PricingTier>
                  </div>
                  <PricingFor>{t.forWhom}</PricingFor>
                  <PricingDivider />
                  <PricingFeatures>
                    {t.features.map(f => (
                      <PricingFeature key={f}>{f}</PricingFeature>
                    ))}
                  </PricingFeatures>
                  <Link href={t.href} passHref>
                    <PricingCta
                      onMouseEnter={addCursorBorder}
                      onMouseLeave={removeCursorBorder}
                    >
                      {t.cta} &#8594;
                    </PricingCta>
                  </Link>
                </PricingCard>
              ))}
            </PricingGrid>
          </PricingInner>
        </PricingSection>
      </AnimateOnScreen>

      {/* ── Estimator CTA ── */}
      <AnimateOnScreen>
        <CtaSection
          as={motion.section}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <CtaText>Not sure what you need?</CtaText>
          <Link href="/estimator" passHref>
            <CtaButton
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Try the estimator &#8594;
            </CtaButton>
          </Link>
        </CtaSection>
      </AnimateOnScreen>
    </>
  );
};

export default ServicesPage;
