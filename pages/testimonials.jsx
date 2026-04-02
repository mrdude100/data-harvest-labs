import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import containerStyles from '../styles/shared/container';
import { secondaryFontStyle } from '../styles/shared/text';
import { getReviews } from '../lib/getReviews';

// ─── Animations ──────────────────────────────────────────────────────────────

const slideVariants = {
  enter: dir => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: dir => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const slideTransition = { duration: 0.42, ease: [0, 0.7, 0.29, 0.97] };

// ─── Styled Components ───────────────────────────────────────────────────────

const PageWrapper = styled.main`
  ${containerStyles};
  min-height: 100vh;
  padding-top: 140px;
  padding-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 72px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 48px;
  `}
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
  margin: 0 0 20px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: clamp(2rem, 10vw, 4rem);
  `}
`;

const PageSubtitle = styled.p`
  ${secondaryFontStyle};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.45;
  margin: 0;
  line-height: 1.65;
  font-weight: 400;
  max-width: 420px;
`;

// ─── Carousel ─────────────────────────────────────────────────────────────────

const CarouselOuter = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.text}18;
`;

const SlidePanel = styled(motion.div)`
  padding: 56px 56px 48px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 36px 28px 32px;
    gap: 20px;
  `}
`;

const QuoteMark = styled.div`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 5rem;
  line-height: 0.7;
  color: ${({ theme }) => theme.colors.red};
  opacity: 0.25;
  pointer-events: none;
`;

const QuoteText = styled.blockquote`
  font-family: calibre, sans-serif;
  font-size: clamp(1.15rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1.65;
  max-width: 720px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.05rem;
  `}
`;

const CardDivider = styled.div`
  width: 36px;
  height: 1px;
  background: ${({ theme }) => theme.colors.red};
  opacity: 0.5;
`;

const Stars = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 0.1em;
`;

const ClientBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ClientName = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const ClientMeta = styled.p`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  margin: 0;
  font-weight: 400;
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const ServiceTag = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
`;

const GoogleBadge = styled.span`
  ${secondaryFontStyle};
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.35;
  border: 1px solid ${({ theme }) => theme.text}30;
  padding: 3px 8px;
`;

// ─── Controls ─────────────────────────────────────────────────────────────────

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 56px 40px;
  border-top: 1px solid ${({ theme }) => theme.text}10;
  padding-top: 28px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 20px 28px 28px;
    gap: 16px;
  `}
`;

const NavButton = styled.button`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  background: none;
  border: 1px solid ${({ theme }) => theme.text}30;
  color: ${({ theme }) => theme.text};
  padding: 10px 18px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 2px;
  }
`;

const DotsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: center;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? '20px' : '6px')};
  height: 6px;
  border-radius: 3px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.red : theme.text};
  opacity: ${({ $active }) => ($active ? 1 : 0.2)};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: width 0.3s ease, opacity 0.2s ease, background 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 2px;
  }
`;

const Counter = styled.span`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.text};
  opacity: 0.35;
  margin-left: auto;
  flex-shrink: 0;
`;

// ─── CTA ──────────────────────────────────────────────────────────────────────

const CtaRow = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-top: 32px;
  `}
`;

const CtaLabel = styled.p`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.4;
  margin: 0;
  font-weight: 400;
`;

const CtaLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.2s ease;

  &:hover {
    gap: 14px;
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────

const TestimonialsPage = ({ reviews }) => {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [paused, setPaused] = React.useState(false);
  const total = reviews.length;

  const navigate = React.useCallback(
    dir => {
      setDirection(dir);
      setCurrent(prev => (prev + dir + total) % total);
    },
    [total],
  );

  const goTo = React.useCallback(
    index => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  // Auto-advance: restarts whenever slide changes or pause state changes
  React.useEffect(() => {
    if (paused || total <= 1) return;
    const timer = setTimeout(() => navigate(1), 7000);
    return () => clearTimeout(timer);
  }, [current, paused, total, navigate]);

  const review = reviews[current];

  return (
    <>
      <SEO
        title="Client Testimonials"
        description="See what researchers, scientists, and students say about Data Harvest Labs' data analysis, GWAS, and genomic consulting services."
        path="/testimonials"
      />

      <PageWrapper>
        <Header>
          <TopLabel>Testimonials</TopLabel>
          <PageTitle>What clients{'\u00A0'}say</PageTitle>
          <PageSubtitle>
            Feedback from researchers, PhD students, and institutions we&apos;ve
            worked with worldwide.
          </PageSubtitle>
        </Header>

        <CarouselOuter
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slide area */}
          <div style={{ overflow: 'hidden' }}>
            <AnimatePresence exitBeforeEnter custom={direction}>
              <SlidePanel
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.06}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -40) navigate(1);
                  else if (offset.x > 40) navigate(-1);
                }}
              >
                <QuoteMark aria-hidden="true">&ldquo;</QuoteMark>

                <QuoteText>{review.text}</QuoteText>

                <CardDivider />

                {review.rating && (
                  <Stars aria-label={`${review.rating} out of 5`}>
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </Stars>
                )}

                <ClientBlock>
                  <ClientName>{review.name}</ClientName>
                  {(review.role || review.organisation) && (
                    <ClientMeta>
                      {[review.role, review.organisation]
                        .filter(Boolean)
                        .join(' \u2014 ')}
                    </ClientMeta>
                  )}
                </ClientBlock>

                <TagRow>
                  {review.service && <ServiceTag>{review.service}</ServiceTag>}
                  {review.source === 'google' && (
                    <GoogleBadge>Google</GoogleBadge>
                  )}
                </TagRow>
              </SlidePanel>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <Controls>
            <NavButton
              onClick={() => navigate(-1)}
              aria-label="Previous testimonial"
            >
              &#8592;
            </NavButton>

            <DotsRow>
              {reviews.map((_, i) => (
                <Dot
                  key={i}
                  $active={i === current}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </DotsRow>

            <Counter>
              {String(current + 1).padStart(2, '0')}&thinsp;/&thinsp;
              {String(total).padStart(2, '0')}
            </Counter>

            <NavButton
              onClick={() => navigate(1)}
              aria-label="Next testimonial"
            >
              &#8594;
            </NavButton>
          </Controls>
        </CarouselOuter>

        {/* CTA to leave a review */}
        <CtaRow>
          <CtaLabel>Worked with us?</CtaLabel>
          <CtaLink
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a Google review &#8594;
          </CtaLink>
        </CtaRow>
      </PageWrapper>
    </>
  );
};

// Statically generated at build time, revalidated every 24 hours.
// New Google reviews (when configured) appear automatically on next revalidation.
export async function getStaticProps() {
  const reviews = await getReviews();
  return {
    props: { reviews },
    revalidate: 86400,
  };
}

export default TestimonialsPage;
