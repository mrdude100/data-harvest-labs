import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import useCursorStyle from '../hooks/useCursorStyle';
import containerStyles from '../styles/shared/container';
import { secondaryFontStyle } from '../styles/shared/text';

// ─── Constants ───────────────────────────────────────────────────────────────

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqlbjlr';

const SERVICES = [
  'Data Analysis',
  'PCA',
  'Clustering',
  'Classification',
  'Regression',
  'Statistical Consulting',
  'CNV Analysis',
  'GWAS',
  'Big Data',
];

const SOURCES = ['Google', 'LinkedIn', 'Referral', 'Social Media', 'Other'];

const STEPS = [
  'About you',
  'Services',
  'Your project',
  'Your location',
  'Review & submit',
];

// ─── Animations ──────────────────────────────────────────────────────────────

const slideVariants = {
  enter: direction => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: direction => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

const transition = {
  duration: 0.45,
  ease: [0, 0.7, 0.29, 0.97],
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
  margin: 0 0 64px;
`;

const StepIndicatorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 56px;
`;

const StepDot = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: ${({ $active, $done }) =>
    $done ? 'pointer' : $active ? 'default' : 'not-allowed'};
  padding: 0;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

const DotCircle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme, $active, $done }) =>
    $active || $done ? theme.colors.red : 'transparent'};
  border: 2px solid
    ${({ theme, $active, $done }) =>
      $active || $done ? theme.colors.red : theme.text};
  opacity: ${({ $active, $done }) => ($active || $done ? 1 : 0.3)};
  transition: all 0.3s ease;
  flex-shrink: 0;
`;

const DotLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: ${({ $active, $done }) => ($active || $done ? 1 : 0.3)};
  transition: opacity 0.3s ease;

  ${({ theme }) => theme.breakpoints.tablet`
    display: none;
  `}
`;

const DotSeparator = styled.span`
  width: 32px;
  height: 1px;
  background: ${({ theme }) => theme.text};
  opacity: 0.2;
  flex-shrink: 0;
`;

const FormArea = styled.div`
  position: relative;
  min-height: 340px;
`;

const StepPanel = styled(motion.div)`
  width: 100%;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 640px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  ${secondaryFontStyle};
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
`;

const inputBase = `
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  padding: 12px 0;
  font-family: calibre, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  -webkit-appearance: none;
`;

const StyledInput = styled.input`
  ${inputBase};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.text};
  opacity: 0.85;

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.2;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.red};
    opacity: 1;
  }
`;

const StyledTextarea = styled.textarea`
  ${inputBase};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.text};
  opacity: 0.85;
  resize: none;
  min-height: 120px;

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.2;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.red};
    opacity: 1;
  }
`;

const ChipGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 640px;
`;

const Chip = styled.button`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  padding: 10px 20px;
  border-radius: 0;
  border: 1px solid
    ${({ theme, $selected }) => ($selected ? theme.colors.red : theme.text)};
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.red : 'transparent'};
  color: ${({ theme, $selected }) => ($selected ? '#fff' : theme.text)};
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: ${({ $selected }) => ($selected ? 1 : 0.5)};

  &:hover {
    opacity: 1;
    border-color: ${({ theme }) => theme.colors.red};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 2px;
  }
`;

const ReviewGrid = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 640px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.text}18;
  margin-bottom: 8px;
`;

const ReviewRow = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 16px;
  align-items: baseline;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
    gap: 4px;
  `}
`;

const ReviewKey = styled.dt`
  ${secondaryFontStyle};
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
`;

const ReviewValue = styled.dd`
  font-family: calibre, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1.5;
  opacity: 0.85;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 56px;
`;

const PrimaryButton = styled.button`
  ${secondaryFontStyle};
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.text};
  border: none;
  padding: 18px 40px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }

  &:disabled {
    opacity: 0.3;
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
  opacity: 0.4;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const ErrorText = styled.span`
  ${secondaryFontStyle};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.red};
  margin-top: 4px;
`;

const SuccessWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 640px;
  padding: 64px 0;
`;

const SuccessTitle = styled.h2`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 4rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  line-height: 0.95;
  margin: 0;
`;

const SuccessText = styled.p`
  ${secondaryFontStyle};
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  margin: 0;
  line-height: 1.6;
`;

const SuccessCalendlyBox = styled.div`
  margin-top: 8px;
  padding: 28px 32px;
  border: 1px solid ${({ theme }) => theme.colors.red}40;
  border-left: 3px solid ${({ theme }) => theme.colors.red};
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 22px 20px;
  `}
`;

const SuccessCalendlyHeading = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.15rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1;
`;

const SuccessCalendlyDesc = styled.p`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.55;
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
`;

const SuccessCalendlyBtn = styled.button`
  ${secondaryFontStyle};
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  background: ${({ theme }) => theme.colors.red};
  border: none;
  padding: 14px 28px;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s ease;
  margin-top: 4px;

  &:hover {
    background: #a81a15;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 4px;
  }
`;

const SuccessCalendlyNote = styled.span`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.text};
  opacity: 0.3;
`;

// ─── Calendly Banner ─────────────────────────────────────────────────────────

const CALENDLY_LINK =
  'https://calendly.com/d/cvpd-6ms-9j3/30-minute-consultation';

const CalendlyBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 28px;
  background: ${({ theme }) => theme.text}06;
  border: 1px solid ${({ theme }) => theme.text}12;
  margin-bottom: 64px;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 16px 20px;
    margin-bottom: 48px;
  `}
`;

const CalendlyText = styled.p`
  ${secondaryFontStyle};
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  margin: 0;
  line-height: 1.5;
`;

const CalendlyLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.2s ease;
  flex-shrink: 0;

  &:hover {
    gap: 12px;
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────

const QuotePage = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const [step, setStep] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const [form, setForm] = React.useState({
    name: '',
    email: '',
    organisation: '',
    phone: '',
    services: [],
    description: '',
    country: '',
    source: '',
  });

  const goTo = React.useCallback(
    next => {
      setDirection(next > step ? 1 : -1);
      setStep(next);
    },
    [step],
  );

  const validate = React.useCallback(() => {
    const newErrors = {};
    if (step === 0) {
      if (!form.name.trim()) newErrors.name = 'Name is required';
      if (!form.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        newErrors.email = 'Enter a valid email';
    }
    if (step === 1 && form.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }
    if (step === 2 && !form.description.trim()) {
      newErrors.description = 'Please describe your project';
    }
    if (step === 3 && !form.country.trim()) {
      newErrors.country = 'Country is required';
    }
    if (step === 4 && !form.source) {
      newErrors.source = 'Please let us know how you found us';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [step, form]);

  const handleNext = React.useCallback(() => {
    if (!validate()) return;
    goTo(step + 1);
  }, [validate, goTo, step]);

  const handleBack = React.useCallback(() => {
    goTo(step - 1);
  }, [goTo, step]);

  const toggleService = React.useCallback(service => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
    setErrors(prev => ({ ...prev, services: undefined }));
  }, []);

  const handleChange = React.useCallback(
    field => e => {
      setForm(prev => ({ ...prev, [field]: e.target.value }));
      setErrors(prev => ({ ...prev, [field]: undefined }));
    },
    [],
  );

  const selectSource = React.useCallback(value => {
    setForm(prev => ({ ...prev, source: value }));
    setErrors(prev => ({ ...prev, source: undefined }));
  }, []);

  const handleSubmit = React.useCallback(async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organisation: form.organisation,
          phone: form.phone,
          services: form.services.join(', '),
          description: form.description,
          country: form.country,
          source: form.source,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  }, [validate, form]);

  return (
    <>
      <SEO
        title="Get a Quotation"
        description="Request a quote from Data Harvest Labs for data analysis, GWAS, PCA, statistical consulting, and genomic research services."
        path="/quote"
      />

      <PageWrapper>
        <TopLabel>Quotation</TopLabel>
        <PageTitle>Get a{'\u00A0'}quote</PageTitle>

        <CalendlyBanner>
          <CalendlyText>
            Prefer to talk through your project first? Book a free 15-minute
            discovery call — no commitment required.
          </CalendlyText>
          <CalendlyLink
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => {
              if (
                window.Calendly &&
                !window.matchMedia('(max-width: 768px)').matches
              ) {
                e.preventDefault();
                window.Calendly.initPopupWidget({ url: CALENDLY_LINK });
              }
            }}
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            Book a call &#8594;
          </CalendlyLink>
        </CalendlyBanner>

        {!submitted ? (
          <>
            {/* Step indicator */}
            <StepIndicatorRow>
              {STEPS.map((label, i) => (
                <React.Fragment key={label}>
                  <StepDot
                    $active={i === step}
                    $done={i < step}
                    onClick={() => i < step && goTo(i)}
                    onMouseEnter={addCursorBorder}
                    onMouseLeave={removeCursorBorder}
                    disabled={i > step}
                    aria-label={`Step ${i + 1}: ${label}`}
                  >
                    <DotCircle $active={i === step} $done={i < step} />
                    <DotLabel $active={i === step} $done={i < step}>
                      {label}
                    </DotLabel>
                  </StepDot>
                  {i < STEPS.length - 1 && <DotSeparator />}
                </React.Fragment>
              ))}
            </StepIndicatorRow>

            {/* Form steps */}
            <FormArea>
              <AnimatePresence mode="wait" custom={direction}>
                {/* Step 1 — About you */}
                {step === 0 && (
                  <StepPanel
                    key="step0"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                  >
                    <FieldGroup>
                      <FieldWrapper>
                        <Label htmlFor="name">Your name</Label>
                        <StyledInput
                          id="name"
                          type="text"
                          placeholder="e.g. Faraz Naik"
                          value={form.name}
                          onChange={handleChange('name')}
                          autoComplete="name"
                        />
                        {errors.name && <ErrorText>{errors.name}</ErrorText>}
                      </FieldWrapper>
                      <FieldWrapper>
                        <Label htmlFor="email">Your email</Label>
                        <StyledInput
                          id="email"
                          type="email"
                          placeholder="michael@example.com"
                          value={form.email}
                          onChange={handleChange('email')}
                          autoComplete="email"
                        />
                        {errors.email && <ErrorText>{errors.email}</ErrorText>}
                      </FieldWrapper>
                      <FieldWrapper>
                        <Label htmlFor="organisation">
                          Organisation (optional)
                        </Label>
                        <StyledInput
                          id="organisation"
                          type="text"
                          placeholder="University or company name"
                          value={form.organisation}
                          onChange={handleChange('organisation')}
                          autoComplete="organization"
                        />
                      </FieldWrapper>
                      <FieldWrapper>
                        <Label htmlFor="phone">Mobile number (optional)</Label>
                        <StyledInput
                          id="phone"
                          type="tel"
                          placeholder="e.g. +91 70060 87884"
                          value={form.phone}
                          onChange={handleChange('phone')}
                          autoComplete="tel"
                        />
                      </FieldWrapper>
                    </FieldGroup>
                  </StepPanel>
                )}

                {/* Step 2 — Services */}
                {step === 1 && (
                  <StepPanel
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                  >
                    <FieldGroup>
                      <FieldWrapper>
                        <Label>Select services</Label>
                        <ChipGrid>
                          {SERVICES.map(service => (
                            <Chip
                              key={service}
                              type="button"
                              $selected={form.services.includes(service)}
                              onClick={() => toggleService(service)}
                              onMouseEnter={addCursorBorder}
                              onMouseLeave={removeCursorBorder}
                            >
                              {service}
                            </Chip>
                          ))}
                        </ChipGrid>
                        {errors.services && (
                          <ErrorText>{errors.services}</ErrorText>
                        )}
                      </FieldWrapper>
                    </FieldGroup>
                  </StepPanel>
                )}

                {/* Step 3 — Describe project */}
                {step === 2 && (
                  <StepPanel
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                  >
                    <FieldGroup>
                      <FieldWrapper>
                        <Label htmlFor="description">
                          Describe your data / project
                        </Label>
                        <StyledTextarea
                          id="description"
                          placeholder="Describe your dataset, research goals, timeline, and any specific requirements..."
                          value={form.description}
                          onChange={handleChange('description')}
                          rows={6}
                        />
                        {errors.description && (
                          <ErrorText>{errors.description}</ErrorText>
                        )}
                      </FieldWrapper>
                    </FieldGroup>
                  </StepPanel>
                )}

                {/* Step 4 — Country */}
                {step === 3 && (
                  <StepPanel
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                  >
                    <FieldGroup>
                      <FieldWrapper>
                        <Label htmlFor="country">Where are you from?</Label>
                        <StyledInput
                          id="country"
                          type="text"
                          placeholder="e.g. India, United Kingdom, United States"
                          value={form.country}
                          onChange={handleChange('country')}
                          autoComplete="country-name"
                        />
                        {errors.country && (
                          <ErrorText>{errors.country}</ErrorText>
                        )}
                      </FieldWrapper>
                    </FieldGroup>
                  </StepPanel>
                )}

                {/* Step 5 — How did you hear + review */}
                {step === 4 && (
                  <StepPanel
                    key="step4"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                  >
                    <FieldGroup>
                      <FieldWrapper>
                        <Label>How did you hear about us?</Label>
                        <ChipGrid>
                          {SOURCES.map(src => (
                            <Chip
                              key={src}
                              type="button"
                              $selected={form.source === src}
                              onClick={() => selectSource(src)}
                              onMouseEnter={addCursorBorder}
                              onMouseLeave={removeCursorBorder}
                            >
                              {src}
                            </Chip>
                          ))}
                        </ChipGrid>
                        {errors.source && (
                          <ErrorText>{errors.source}</ErrorText>
                        )}
                      </FieldWrapper>

                      {/* Review summary */}
                      <FieldWrapper>
                        <Label as="p">Review your answers</Label>
                        <ReviewGrid>
                          <ReviewRow>
                            <ReviewKey>Name</ReviewKey>
                            <ReviewValue>{form.name || '—'}</ReviewValue>
                          </ReviewRow>
                          <ReviewRow>
                            <ReviewKey>Email</ReviewKey>
                            <ReviewValue>{form.email || '—'}</ReviewValue>
                          </ReviewRow>
                          {form.organisation && (
                            <ReviewRow>
                              <ReviewKey>Organisation</ReviewKey>
                              <ReviewValue>{form.organisation}</ReviewValue>
                            </ReviewRow>
                          )}
                          {form.phone && (
                            <ReviewRow>
                              <ReviewKey>Mobile</ReviewKey>
                              <ReviewValue>{form.phone}</ReviewValue>
                            </ReviewRow>
                          )}
                          <ReviewRow>
                            <ReviewKey>Services</ReviewKey>
                            <ReviewValue>
                              {form.services.length > 0
                                ? form.services.join(', ')
                                : '—'}
                            </ReviewValue>
                          </ReviewRow>
                          <ReviewRow>
                            <ReviewKey>Project</ReviewKey>
                            <ReviewValue>{form.description || '—'}</ReviewValue>
                          </ReviewRow>
                          <ReviewRow>
                            <ReviewKey>Country</ReviewKey>
                            <ReviewValue>{form.country || '—'}</ReviewValue>
                          </ReviewRow>
                        </ReviewGrid>
                        {errors.submit && (
                          <ErrorText>{errors.submit}</ErrorText>
                        )}
                      </FieldWrapper>
                    </FieldGroup>
                  </StepPanel>
                )}
              </AnimatePresence>
            </FormArea>

            {/* Navigation */}
            <ButtonRow>
              {step < 4 ? (
                <PrimaryButton
                  onClick={handleNext}
                  onMouseEnter={addCursorBorder}
                  onMouseLeave={removeCursorBorder}
                >
                  Next →
                </PrimaryButton>
              ) : (
                <PrimaryButton
                  onClick={handleSubmit}
                  disabled={submitting}
                  onMouseEnter={addCursorBorder}
                  onMouseLeave={removeCursorBorder}
                >
                  {submitting ? 'Sending...' : 'Submit quote'}
                </PrimaryButton>
              )}
              {step > 0 && (
                <BackButton
                  onClick={handleBack}
                  onMouseEnter={addCursorBorder}
                  onMouseLeave={removeCursorBorder}
                >
                  ← Back
                </BackButton>
              )}
            </ButtonRow>
          </>
        ) : (
          <SuccessWrapper
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0.7, 0.29, 0.97] }}
          >
            <SuccessTitle>Request{'\u00A0'}received!</SuccessTitle>
            <SuccessText>
              Thanks, {form.name.split(' ')[0]}. We&apos;ve received your quote
              request and will get back to you with a detailed proposal soon.
            </SuccessText>

            <SuccessCalendlyBox>
              <SuccessCalendlyHeading>
                Don&apos;t want to wait?
              </SuccessCalendlyHeading>
              <SuccessCalendlyDesc>
                Book a free 30-minute discovery call — we can discuss your
                project directly and get you a faster turnaround.
              </SuccessCalendlyDesc>
              <SuccessCalendlyBtn
                onClick={() => {
                  if (
                    window.Calendly &&
                    !window.matchMedia('(max-width: 768px)').matches
                  ) {
                    window.Calendly.initPopupWidget({ url: CALENDLY_LINK });
                  } else {
                    window.open(CALENDLY_LINK, '_blank', 'noopener,noreferrer');
                  }
                }}
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Book a call now &#8594;
              </SuccessCalendlyBtn>
              <SuccessCalendlyNote>No commitment required</SuccessCalendlyNote>
            </SuccessCalendlyBox>
          </SuccessWrapper>
        )}
      </PageWrapper>
    </>
  );
};

export default QuotePage;
