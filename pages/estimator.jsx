import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import SEO from '../components/SEO';
import useCursorStyle from '../hooks/useCursorStyle';
import containerStyles from '../styles/shared/container';
import { secondaryFontStyle } from '../styles/shared/text';

// ─── Animations ──────────────────────────────────────────────────────────────

const slideVariants = {
  enter: dir => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: dir => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const transition = { duration: 0.42, ease: [0, 0.7, 0.29, 0.97] };

// ─── Layout ───────────────────────────────────────────────────────────────────

const PageWrapper = styled.main`
  ${containerStyles};
  min-height: 100vh;
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
  margin: 0 0 16px;
`;

const PageSubtitle = styled.p`
  ${secondaryFontStyle};
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  margin: 0 0 72px;
  line-height: 1.65;
  font-weight: 400;
  max-width: 480px;
`;

// ─── Progress bar ─────────────────────────────────────────────────────────────

const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 64px;
`;

const ProgressStep = styled.div`
  height: 2px;
  flex: 1;
  background: ${({ theme, $active, $done }) =>
    $active || $done ? theme.colors.red : theme.text};
  opacity: ${({ $active, $done }) => ($active ? 1 : $done ? 0.5 : 0.12)};
  transition: all 0.35s ease;
  border-radius: 1px;
`;

// ─── Question area ────────────────────────────────────────────────────────────

const QuestionLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.3;
  display: block;
  margin-bottom: 16px;
`;

const QuestionText = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.75rem, 4vw, 3rem);
  line-height: 1.05;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0 0 40px;
  max-width: 600px;
`;

const StepPanel = styled(motion.div)`
  width: 100%;
`;

const FormArea = styled.div`
  position: relative;
  min-height: 280px;
`;

// ─── Chips ────────────────────────────────────────────────────────────────────

const ChipGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 720px;
`;

const Chip = styled.button`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  padding: 14px 24px;
  border: 1px solid
    ${({ theme, $selected }) => ($selected ? theme.colors.red : theme.text)};
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.red : 'transparent'};
  color: ${({ theme, $selected }) => ($selected ? '#fff' : theme.text)};
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: ${({ $selected }) => ($selected ? 1 : 0.5)};
  border-radius: 0;

  &:hover {
    opacity: 1;
    border-color: ${({ theme }) => theme.colors.red};
    color: ${({ $selected }) => ($selected ? '#fff' : 'inherit')};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 2px;
  }
`;

// ─── Navigation ───────────────────────────────────────────────────────────────

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 56px;
`;

const NextButton = styled.button`
  ${secondaryFontStyle};
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.text};
  border: none;
  padding: 18px 40px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 4px;
  }
`;

const BackButton = styled.button`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.35;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

// ─── Result ───────────────────────────────────────────────────────────────────

const ResultWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 760px;
`;

const ResultHeading = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  line-height: 0.95;
  margin: 0 0 16px;
`;

const ResultSub = styled.p`
  ${secondaryFontStyle};
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  margin: 0 0 48px;
  line-height: 1.6;
`;

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: ${({ theme }) => theme.text}12;
  margin-bottom: 2px;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
  `}
`;

const ResultCard = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 28px 24px;
  `}
`;

const ResultCardLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
`;

const ResultCardValue = styled.span`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.1;
`;

const ResultCardNote = styled.span`
  ${secondaryFontStyle};
  font-size: 0.78rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  line-height: 1.5;
  margin-top: 2px;
`;

const IncludesBox = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 36px 40px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 28px 24px;
  `}
`;

const IncludesLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  display: block;
  margin-bottom: 16px;
`;

const IncludesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 32px;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
  `}
`;

const IncludesItem = styled.li`
  ${secondaryFontStyle};
  font-size: 0.84rem;
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

const DisclaimerText = styled.p`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.3;
  margin: 24px 0 0;
  line-height: 1.6;
`;

const ResultCtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const PrimaryCtaButton = styled.a`
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

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }
`;

const ResetButton = styled.button`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.3;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: 'type',
    label: 'Step 1 of 4',
    question: 'What type of work do you need?',
    options: [
      'Genomics / GWAS / NGS',
      'Biostatistics & Data Analysis',
      'Clinical Research Design',
      'Systematic Review / Meta-Analysis',
      'Machine Learning / AI',
      'Not sure yet',
    ],
  },
  {
    id: 'scale',
    label: 'Step 2 of 4',
    question: 'How many samples or participants?',
    options: [
      'Under 50',
      '50 – 200',
      '200 – 1,000',
      'Over 1,000',
      "Don't know yet",
    ],
  },
  {
    id: 'timeline',
    label: 'Step 3 of 4',
    question: 'When do you need results?',
    options: [
      'Within 2 weeks (urgent)',
      '1 – 3 months',
      '3+ months (flexible)',
      'No deadline yet',
    ],
  },
  {
    id: 'data',
    label: 'Step 4 of 4',
    question: 'Is your data ready to share?',
    options: [
      'Yes — clean and ready',
      'Mostly ready, needs some prep',
      'Raw data, needs processing',
      "I don't have data yet",
    ],
  },
];

const getEstimate = answers => {
  const { type, scale, timeline, data } = answers;

  const isComplex =
    type === 'Genomics / GWAS / NGS' ||
    type === 'Machine Learning / AI' ||
    scale === 'Over 1,000' ||
    scale === '200 – 1,000';

  const isUrgent = timeline === 'Within 2 weeks (urgent)';
  const isDataReady =
    data === 'Yes — clean and ready' ||
    data === 'Mostly ready, needs some prep';
  const noData = data === "I don't have data yet";

  let tier = 'Starter';
  let duration = '2 – 4 weeks';
  let includes = [
    'Statistical analysis plan',
    'Publication-ready figures',
    'Results interpretation',
    'Methods section write-up',
    'One revision round',
    'Email support',
  ];

  if (isComplex) {
    tier = 'Professional';
    duration = '3 – 6 weeks';
    includes = [
      'Full pipeline from QC to results',
      'Multiple analysis types',
      'Publication-ready figures & tables',
      'Detailed methods documentation',
      'Reproducible R / Python code',
      'Video walkthrough debrief',
      'Unlimited revisions',
      '30-day post-delivery support',
    ];
  }

  if (isUrgent) {
    duration = isComplex ? '2 – 3 weeks (rush)' : '5 – 10 days (rush)';
  }

  if (noData) {
    duration = 'To be confirmed after data collection';
  }

  let dataNote = isDataReady
    ? 'Data is ready — we can start immediately after agreement.'
    : noData
    ? 'We can advise on data collection as part of the discovery call.'
    : 'Some preparation time may be needed before analysis begins.';

  return { tier, duration, includes, dataNote };
};

// ─── Component ────────────────────────────────────────────────────────────────

const EstimatorPage = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const [step, setStep] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [answers, setAnswers] = React.useState({});
  const [done, setDone] = React.useState(false);

  const current = QUESTIONS[step];
  const selected = answers[current?.id];
  const total = QUESTIONS.length;

  const handleSelect = React.useCallback(
    option => {
      setAnswers(prev => ({ ...prev, [current.id]: option }));
    },
    [current],
  );

  const handleNext = React.useCallback(() => {
    if (!selected) return;
    if (step < total - 1) {
      setDirection(1);
      setStep(s => s + 1);
    } else {
      setDone(true);
    }
  }, [selected, step, total]);

  const handleBack = React.useCallback(() => {
    setDirection(-1);
    setStep(s => s - 1);
  }, []);

  const handleReset = React.useCallback(() => {
    setStep(0);
    setDirection(1);
    setAnswers({});
    setDone(false);
  }, []);

  const estimate = done ? getEstimate(answers) : null;

  return (
    <>
      <SEO
        title="Project Estimator"
        description="Answer 4 quick questions and get an instant scope estimate for your genomics, biostatistics, or clinical research project with Data Harvest Labs."
        path="/estimator"
      />

      <PageWrapper>
        <TopLabel>Free estimator</TopLabel>
        <PageTitle>Scope your project</PageTitle>
        <PageSubtitle>
          4 questions. 2 minutes. Get an instant estimate of scope, timeline,
          and what&apos;s typically included.
        </PageSubtitle>

        {!done ? (
          <>
            {/* Progress */}
            <ProgressRow>
              {QUESTIONS.map((_, i) => (
                <ProgressStep key={i} $active={i === step} $done={i < step} />
              ))}
            </ProgressRow>

            {/* Question */}
            <FormArea>
              <AnimatePresence mode="wait" custom={direction}>
                <StepPanel
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                >
                  <QuestionLabel>{current.label}</QuestionLabel>
                  <QuestionText>{current.question}</QuestionText>
                  <ChipGrid>
                    {current.options.map(option => (
                      <Chip
                        key={option}
                        type="button"
                        $selected={selected === option}
                        onClick={() => handleSelect(option)}
                        onMouseEnter={addCursorBorder}
                        onMouseLeave={removeCursorBorder}
                      >
                        {option}
                      </Chip>
                    ))}
                  </ChipGrid>
                </StepPanel>
              </AnimatePresence>
            </FormArea>

            {/* Nav */}
            <NavRow>
              <NextButton
                onClick={handleNext}
                disabled={!selected}
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                {step < total - 1 ? 'Next →' : 'See estimate →'}
              </NextButton>
              {step > 0 && (
                <BackButton
                  onClick={handleBack}
                  onMouseEnter={addCursorBorder}
                  onMouseLeave={removeCursorBorder}
                >
                  ← Back
                </BackButton>
              )}
            </NavRow>
          </>
        ) : (
          <ResultWrapper
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0, 0.7, 0.29, 0.97] }}
          >
            <ResultHeading>Your estimate</ResultHeading>
            <ResultSub>
              Based on your answers — this is a rough scope, not a binding
              quote. We&apos;ll confirm everything on a free discovery call.
            </ResultSub>

            <ResultGrid>
              <ResultCard>
                <ResultCardLabel>Recommended tier</ResultCardLabel>
                <ResultCardValue>{estimate.tier}</ResultCardValue>
                <ResultCardNote>
                  {estimate.tier === 'Professional'
                    ? 'Full-pipeline analysis with unlimited revisions'
                    : 'Focused single-analysis with clean outputs'}
                </ResultCardNote>
              </ResultCard>
              <ResultCard>
                <ResultCardLabel>Estimated duration</ResultCardLabel>
                <ResultCardValue>{estimate.duration}</ResultCardValue>
                <ResultCardNote>{estimate.dataNote}</ResultCardNote>
              </ResultCard>
            </ResultGrid>

            <IncludesBox>
              <IncludesLabel>Typically included</IncludesLabel>
              <IncludesList>
                {estimate.includes.map(item => (
                  <IncludesItem key={item}>{item}</IncludesItem>
                ))}
              </IncludesList>
            </IncludesBox>

            <DisclaimerText>
              Pricing depends on dataset complexity, specific analysis
              requirements, and timeline. A formal quote is provided after a
              free 15-minute discovery call.
            </DisclaimerText>

            <ResultCtaRow>
              <Link href="/quote" passHref>
                <PrimaryCtaButton
                  onMouseEnter={addCursorBorder}
                  onMouseLeave={removeCursorBorder}
                >
                  Get a formal quote &#8594;
                </PrimaryCtaButton>
              </Link>
              <ResetButton
                onClick={handleReset}
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Start over
              </ResetButton>
            </ResultCtaRow>
          </ResultWrapper>
        )}
      </PageWrapper>
    </>
  );
};

export default EstimatorPage;
