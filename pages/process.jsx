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
  show: { transition: { staggerChildren: 0.12 } },
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
  max-width: 500px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 64px;
  `}
`;

// ─── Steps ────────────────────────────────────────────────────────────────────

const StepsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.text}12;
`;

const StepRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 72px 1fr auto;
  gap: 40px;
  padding: 56px 0;
  border-bottom: 1px solid ${({ theme }) => theme.text}10;
  align-items: start;
  cursor: default;
  transition: background 0.22s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.red}05;
  }

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 48px 1fr;
    gap: 24px;
    padding: 40px 0;
  `}
`;

const StepNumber = styled.span`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 4vw, 4rem);
  line-height: 1;
  color: ${({ theme }) => theme.colors.red};
  opacity: 0.25;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 6px;
`;

const StepName = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.05;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const StepDesc = styled.p`
  ${secondaryFontStyle};
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  margin: 0;
  line-height: 1.65;
  max-width: 520px;
`;

const StepDetails = styled.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StepDetail = styled.li`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  padding-left: 14px;
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
    opacity: 0.6;
  }
`;

const StepBadge = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.25;
  border: 1px solid ${({ theme }) => theme.text}20;
  padding: 5px 12px;
  white-space: nowrap;
  align-self: flex-start;
  margin-top: 8px;

  ${({ theme }) => theme.breakpoints.small`
    display: none;
  `}
`;

// ─── Promise bar ──────────────────────────────────────────────────────────────

const PromiseSection = styled.div`
  margin-top: 96px;
  background: ${({ theme }) => theme.text}05;
  border: 1px solid ${({ theme }) => theme.text}12;
  padding: 56px 48px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 40px 28px;
    margin-top: 64px;
  `}
`;

const PromiseTitle = styled.h3`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0 0 32px;
`;

const PromiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  `}

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
    gap: 20px;
  `}
`;

const PromiseItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PromiseItemTitle = styled.span`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
`;

const PromiseItemDesc = styled.span`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  line-height: 1.6;
`;

// ─── CTA ──────────────────────────────────────────────────────────────────────

const CtaRow = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-top: 56px;
    flex-direction: column;
    align-items: flex-start;
  `}
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

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }
`;

const SecondaryLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition:
    opacity 0.2s ease,
    gap 0.2s ease;

  &:hover {
    opacity: 0.8;
    gap: 14px;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: '01',
    name: 'Submit Your Inquiry',
    desc: 'Tell us about your project using our quote form or reach out directly via email or WhatsApp. No lengthy brief needed — a paragraph about your data and research goal is enough to start.',
    details: [
      'Fill out the quote form (5 minutes)',
      'Or email us at info@dataharvestlabs.com',
      'Or message us on WhatsApp for a quicker response',
    ],
    badge: 'Day 1',
  },
  {
    number: '02',
    name: 'Free Discovery Call',
    desc: 'We schedule a 15–20 minute call to understand your research goals, data format, timeline, and any specific output requirements. No commitment needed at this stage.',
    details: [
      'Video call or phone — whichever you prefer',
      "We'll ask about your dataset, tools, and publications",
      "You'll get a clear picture of what's feasible",
    ],
    badge: 'Day 1–3',
  },
  {
    number: '03',
    name: 'Proposal & Agreement',
    desc: "Within 24–48 hours of the discovery call, we send a detailed proposal: scope, analytical plan, deliverables, timeline, and cost. Once you're happy, we sign a simple agreement and you share your data.",
    details: [
      'Itemised analytical plan — nothing vague',
      'Clear deliverable list and revision policy',
      'Secure data transfer via encrypted link',
    ],
    badge: 'Day 2–5',
  },
  {
    number: '04',
    name: 'Analysis & Development',
    desc: "Our team runs the full analysis pipeline using your data. You'll receive progress updates at key milestones, and we'll flag anything unexpected before proceeding.",
    details: [
      'Reproducible code in R or Python',
      'Mid-point check-in for large projects',
      'All assumptions tested, diagnostics documented',
    ],
    badge: '1–6 weeks',
  },
  {
    number: '05',
    name: 'Review & Revisions',
    desc: "We share a full results package — figures, tables, and a methodology write-up. You review, ask questions, and request any changes. We iterate until you're satisfied.",
    details: [
      'Draft results delivered as PDF + editable files',
      'Video walkthrough included for complex analyses',
      'Revisions included as per agreed tier',
    ],
    badge: '1–2 weeks',
  },
  {
    number: '06',
    name: 'Delivery & Ongoing Support',
    desc: "Final deliverables handed over in your preferred format. After delivery, we remain available for follow-up questions during the journal review and revision process — because the work doesn't end at submission.",
    details: [
      'Final files in publication-ready format',
      'Manuscript Methods section write-up included',
      '30-day post-delivery email support',
    ],
    badge: 'Ongoing',
  },
];

const PROMISES = [
  {
    title: 'No Black Boxes',
    desc: 'Every analytical decision is explained and documented. You understand what was done and why.',
  },
  {
    title: 'Deadline Respect',
    desc: 'We agree on a timeline upfront and stick to it. If something changes, you hear from us first.',
  },
  {
    title: 'Your Data Stays Yours',
    desc: 'Data is used only for your project, stored securely, and deleted after handover if requested.',
  },
  {
    title: 'Publication Support',
    desc: 'Methods write-up, reviewer response, and additional analyses during peer review — all included.',
  },
  {
    title: 'Honest Scope',
    desc: "If your data has a limitation, we'll tell you upfront. No overpromising, no surprises at delivery.",
  },
  {
    title: 'Reproducible Code',
    desc: 'Every analysis comes with clean, commented R or Python code you can run, audit, or build on.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ProcessPage = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <>
      <SEO
        title="How It Works"
        description="Our 6-step process — from first inquiry to final delivery. See exactly how Data Harvest Labs approaches genomics, biostatistics, and clinical research projects."
        path="/process"
      />

      <PageWrapper>
        <AnimateOnScreen>
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <TopLabel>Our process</TopLabel>
            <PageTitle>How it works</PageTitle>
            <PageSubtitle>
              Six straightforward steps from first contact to published results.
              No ambiguity, no surprises.
            </PageSubtitle>
          </motion.div>
        </AnimateOnScreen>

        {/* ── Steps ── */}
        <StepsList
          as={motion.div}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {STEPS.map(step => (
            <StepRow key={step.number} variants={fadeUp}>
              <StepNumber>{step.number}</StepNumber>
              <StepContent>
                <StepName>{step.name}</StepName>
                <StepDesc>{step.desc}</StepDesc>
                <StepDetails>
                  {step.details.map(d => (
                    <StepDetail key={d}>{d}</StepDetail>
                  ))}
                </StepDetails>
              </StepContent>
              <StepBadge>{step.badge}</StepBadge>
            </StepRow>
          ))}
        </StepsList>

        {/* ── Our Promise ── */}
        <AnimateOnScreen>
          <PromiseSection
            as={motion.div}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <PromiseTitle>Our commitments to you</PromiseTitle>
            <PromiseGrid>
              {PROMISES.map(p => (
                <PromiseItem key={p.title}>
                  <PromiseItemTitle>{p.title}</PromiseItemTitle>
                  <PromiseItemDesc>{p.desc}</PromiseItemDesc>
                </PromiseItem>
              ))}
            </PromiseGrid>
          </PromiseSection>
        </AnimateOnScreen>

        {/* ── CTA ── */}
        <CtaRow>
          <Link href="/quote" passHref>
            <CtaButton
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Start your project &#8594;
            </CtaButton>
          </Link>
          <Link href="/estimator" passHref>
            <SecondaryLink
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Estimate scope first &#8594;
            </SecondaryLink>
          </Link>
        </CtaRow>
      </PageWrapper>
    </>
  );
};

export default ProcessPage;
