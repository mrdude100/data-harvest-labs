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
  show: { transition: { staggerChildren: 0.1 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

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
  margin: 0 0 24px;
`;

const PageSubtitle = styled.p`
  ${secondaryFontStyle};
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  margin: 0 0 96px;
  line-height: 1.65;
  font-weight: 400;
  max-width: 520px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 64px;
  `}
`;

// ─── Case Study Cards ─────────────────────────────────────────────────────────

const CaseGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.text}12;
`;

const CaseCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 72px 0;
  border-bottom: 1px solid ${({ theme }) => theme.text}10;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 52px 0;
  `}
`;

const CaseLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CaseMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const CaseTag = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
`;

const CaseDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${({ theme }) => theme.text};
  opacity: 0.2;
  flex-shrink: 0;
`;

const CaseClient = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.35;
`;

const CaseTitle = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.05;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const CaseChallenge = styled.p`
  font-family: calibre, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  margin: 0;
  line-height: 1.7;
  max-width: 440px;
`;

const OutcomeBox = styled.div`
  background: ${({ theme }) => theme.colors.red}0d;
  border-left: 2px solid ${({ theme }) => theme.colors.red};
  padding: 20px 24px;
  margin-top: 8px;
`;

const OutcomeLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  display: block;
  margin-bottom: 8px;
`;

const OutcomeText = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1.6;
  opacity: 0.8;
`;

const CaseRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 8px;
`;

const CaseBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CaseBlockLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.3;
`;

const CaseList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CaseListItem = styled.li`
  ${secondaryFontStyle};
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
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

const ToolPill = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  border: 1px solid ${({ theme }) => theme.text}18;
  padding: 4px 10px;
`;

const ToolRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 4px;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}10;
`;

const StatNum = styled.span`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.red};
  line-height: 1;
`;

const StatLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.35;
  font-weight: 400;
  line-height: 1.4;
`;

// ─── Impact Bar ───────────────────────────────────────────────────────────────

const ImpactSection = styled.div`
  background: #c0201a;
  margin-top: 96px;
  padding: 72px 0;
`;

const ImpactInner = styled.div`
  ${containerStyles};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const ImpactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ImpactNumber = styled.div`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  line-height: 1;
  color: #fff;
`;

const ImpactLabel = styled.div`
  ${secondaryFontStyle};
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.65;
  font-weight: 400;
`;

// ─── CTA ──────────────────────────────────────────────────────────────────────

const CtaSection = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
`;

const CtaText = styled.p`
  font-family: calibre, sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  color: ${({ theme }) => theme.text};
  opacity: 0.55;
  margin: 0;
  line-height: 1.5;
  max-width: 480px;
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

const CASES = [
  {
    service: 'Genomics & Bioinformatics',
    client: 'Agricultural University, North India',
    title: 'Identifying drought-tolerance loci in wheat using GWAS',
    challenge:
      'A PhD student had sequenced 480 wheat lines across two environments but lacked the bioinformatics capacity to run QC, population structure correction, and association testing. The dataset had high missing-data rates and unknown population stratification.',
    approach: [
      'Genotype QC: MAF filtering, LD pruning, and missingness thresholds via PLINK',
      'Population structure: PCA and ADMIXTURE with K=2–6 selection',
      'GWAS: EMMAX with kinship matrix correction for false positives',
      'Functional annotation of top SNPs using plant gene databases',
    ],
    tools: ['PLINK', 'ADMIXTURE', 'EMMAX', 'R', 'TASSEL'],
    stats: [
      { num: '480', label: 'Lines' },
      { num: '22k', label: 'SNPs' },
      { num: '3', label: 'Loci found' },
    ],
    outcome:
      'Three significant loci on chromosomes 4A, 6B, and 7D were identified — two of which were novel. The student submitted a first-author manuscript to a plant science journal within 6 months of our engagement.',
  },
  {
    service: 'Biostatistics & Clinical Research',
    client: 'Government Medical College, J&K',
    title: 'Predictors of 30-day mortality in ICU patients with sepsis',
    challenge:
      'A senior resident had a 5-year retrospective dataset of 340 ICU patients with incomplete records, informative censoring, and 18 potential confounders. Standard logistic regression gave unstable results due to event rarity.',
    approach: [
      'Multiple imputation for missing values using MICE in R',
      'Penalised logistic regression (LASSO) for variable selection',
      'Cox proportional hazards model with time-to-event outcome',
      'Calibration and discrimination assessment (Hosmer-Lemeshow, AUC)',
    ],
    tools: ['R', 'SPSS', 'MICE', 'survival', 'rms'],
    stats: [
      { num: '340', label: 'Patients' },
      { num: '18', label: 'Covariates' },
      { num: '0.84', label: 'AUC' },
    ],
    outcome:
      'Four independent predictors of 30-day mortality were confirmed. The study was accepted in a Q2 clinical journal with minor revisions — the reviewers specifically commended the statistical rigour.',
  },
  {
    service: 'Systematic Review & Meta-Analysis',
    client: 'Assistant Professor, Medical College, Maharashtra',
    title:
      'Efficacy of probiotics in reducing antibiotic-associated diarrhoea: a meta-analysis',
    challenge:
      'A faculty member needed an NMC-eligible publication for promotion. Time was short and previous attempts at meta-analysis had been rejected for methodological issues including inadequate heterogeneity assessment and lack of PRISMA compliance.',
    approach: [
      'PROSPERO registration and PRISMA 2020-compliant protocol',
      'Systematic search across PubMed, Embase, and Cochrane',
      "Data extraction by two independent reviewers with Cohen's kappa",
      'Random-effects meta-analysis with I² and prediction intervals',
      'Subgroup analysis by probiotic strain and patient age',
    ],
    tools: ['RevMan', 'R (meta)', 'PRISMA 2020', 'Epi Info'],
    stats: [
      { num: '28', label: 'Studies' },
      { num: '6.2k', label: 'Patients' },
      { num: '4 mo', label: 'To publish' },
    ],
    outcome:
      'Published in a PubMed-indexed journal with an impact factor of 3.2. NMC promotion approved. The faculty member has since commissioned a second meta-analysis with us.',
  },
  {
    service: 'ML & Predictive Modelling',
    client: 'Livestock Breeding Company, Haryana',
    title:
      'Genomic prediction of milk yield in Murrah buffalo using machine learning',
    challenge:
      'A buffalo breeding programme had 1,200 genotyped animals across three generations but their BLUP-based genomic selection model was underperforming. They needed ML benchmarking against traditional GBLUP without losing interpretability.',
    approach: [
      'GBLUP baseline with genomic relationship matrix (GRM)',
      'Random forest and gradient boosting feature importance',
      'XGBoost model tuning with 5-fold cross-validation',
      'Shapley value interpretation for breeder communication',
    ],
    tools: ['R (BGLR)', 'Python', 'XGBoost', 'SHAP', 'GCTA'],
    stats: [
      { num: '1.2k', label: 'Animals' },
      { num: '54k', label: 'SNPs' },
      { num: '+9%', label: 'Accuracy gain' },
    ],
    outcome:
      'XGBoost achieved a 9% improvement in predictive accuracy over GBLUP for 305-day milk yield. A pilot genomic selection programme was launched using the new model, with an agreed 12-month evaluation period.',
  },
];

const IMPACT = [
  { num: '100+', label: 'Researchers supported' },
  { num: '15+', label: 'Published studies' },
  { num: '8+', label: 'Countries served' },
  { num: '20+', label: 'Institutions' },
];

// ─── Component ────────────────────────────────────────────────────────────────

const CaseStudiesPage = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <>
      <SEO
        title="Case Studies"
        description="Real research outcomes from Data Harvest Labs — GWAS in wheat, ICU survival analysis, meta-analysis for NMC promotion, and genomic selection in buffalo."
        path="/case-studies"
      />

      <PageWrapper>
        <AnimateOnScreen>
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <TopLabel>Research outcomes</TopLabel>
            <PageTitle>Case studies</PageTitle>
            <PageSubtitle>
              Anonymised examples of real projects — the challenges, analytical
              approach, and final outcomes.
            </PageSubtitle>
          </motion.div>
        </AnimateOnScreen>

        {/* ── Case Cards ── */}
        <CaseGrid
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CASES.map(c => (
            <CaseCard key={c.title} variants={fadeUp}>
              <CaseLeft>
                <CaseMeta>
                  <CaseTag>{c.service}</CaseTag>
                  <CaseDot />
                  <CaseClient>{c.client}</CaseClient>
                </CaseMeta>
                <CaseTitle>{c.title}</CaseTitle>
                <CaseChallenge>{c.challenge}</CaseChallenge>
                <OutcomeBox>
                  <OutcomeLabel>Outcome</OutcomeLabel>
                  <OutcomeText>{c.outcome}</OutcomeText>
                </OutcomeBox>
              </CaseLeft>
              <CaseRight>
                <CaseBlock>
                  <CaseBlockLabel>Analytical approach</CaseBlockLabel>
                  <CaseList>
                    {c.approach.map(a => (
                      <CaseListItem key={a}>{a}</CaseListItem>
                    ))}
                  </CaseList>
                </CaseBlock>
                <CaseBlock>
                  <CaseBlockLabel>Tools used</CaseBlockLabel>
                  <ToolRow>
                    {c.tools.map(t => (
                      <ToolPill key={t}>{t}</ToolPill>
                    ))}
                  </ToolRow>
                </CaseBlock>
                <CaseBlock>
                  <CaseBlockLabel>Project scale</CaseBlockLabel>
                  <StatRow>
                    {c.stats.map(s => (
                      <StatBox key={s.label}>
                        <StatNum>{s.num}</StatNum>
                        <StatLabel>{s.label}</StatLabel>
                      </StatBox>
                    ))}
                  </StatRow>
                </CaseBlock>
              </CaseRight>
            </CaseCard>
          ))}
        </CaseGrid>

        {/* ── CTA ── */}
        <CtaSection>
          <CtaText>
            Have a similar project? Let&apos;s talk through what&apos;s possible
            with your data.
          </CtaText>
          <Link href="/quote" passHref>
            <CtaButton
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Start your project &#8594;
            </CtaButton>
          </Link>
        </CtaSection>
      </PageWrapper>

      {/* ── Impact Bar ── */}
      <ImpactSection>
        <ImpactInner>
          {IMPACT.map(i => (
            <ImpactItem key={i.label}>
              <ImpactNumber>{i.num}</ImpactNumber>
              <ImpactLabel>{i.label}</ImpactLabel>
            </ImpactItem>
          ))}
        </ImpactInner>
      </ImpactSection>
    </>
  );
};

export default CaseStudiesPage;
