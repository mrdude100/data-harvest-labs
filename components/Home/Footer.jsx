import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import containerStyles from '../../styles/shared/container';
import { secondaryFontStyle } from '../../styles/shared/text';
import useCursorStyle from '../../hooks/useCursorStyle';

// ─── Styled Components ───────────────────────────────────────────────────────

const FooterOuter = styled.footer`
  background: ${({ theme }) => theme.text}06;
  border-top: 1px solid ${({ theme }) => theme.text}15;
  margin-top: 0;
`;

const FooterGrid = styled.div`
  ${containerStyles};
  padding: 80px 32px 56px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 56px;
  align-items: start;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 64px 24px 48px;
  `}

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 48px 24px 40px;
  `}
`;

// ─── Brand column ─────────────────────────────────────────────────────────────

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BrandName = styled.p`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1;
`;

const BrandTagline = styled.p`
  ${secondaryFontStyle};
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
  margin: 0;
  line-height: 1.7;
  max-width: 230px;
`;

const MadeIn = styled.p`
  ${secondaryFontStyle};
  font-size: 0.78rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
  margin: 0;
  margin-top: 4px;
  letter-spacing: 0.04em;
`;

const SocialRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
`;

const SocialLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
  text-decoration: none;
  transition: opacity 0.2s ease, color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 0;

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 1px;
    background: currentColor;
    flex-shrink: 0;
    transition: width 0.2s ease;
  }

  &:hover {
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.red};

    &::before {
      width: 24px;
    }
  }
`;

// ─── Nav columns ──────────────────────────────────────────────────────────────

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ColHeading = styled.p`
  ${secondaryFontStyle};
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
  margin: 0;
`;

const LinkList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const NavLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.84rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
  text-decoration: none;
  transition: opacity 0.2s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

// ─── Contact column ───────────────────────────────────────────────────────────

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ContactLabel = styled.span`
  ${secondaryFontStyle};
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
`;

const ContactValue = styled.a`
  ${secondaryFontStyle};
  font-size: 0.83rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  opacity: 0.65;
  text-decoration: none;
  transition: opacity 0.2s ease, color 0.2s ease;
  display: inline-block;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.red};
  }
`;

// ─── Bottom bar ───────────────────────────────────────────────────────────────

const BottomBar = styled.div`
  ${containerStyles};
  padding: 20px 32px;
  border-top: 1px solid ${({ theme }) => theme.text}0d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 18px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  `}
`;

const Copyright = styled.p`
  ${secondaryFontStyle};
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text};
  opacity: 0.55;
  margin: 0;
`;

const BottomRight = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const BottomLink = styled.a`
  ${secondaryFontStyle};
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text};
  opacity: 0.55;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────

const Footer = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <FooterOuter>
      <FooterGrid>
        {/* ── Brand ── */}
        <BrandCol>
          <BrandName>Data Harvest Labs</BrandName>
          <BrandTagline>
            Precision genomic data analysis and statistical consulting — from
            Kashmir to researchers worldwide.
          </BrandTagline>
          <MadeIn>🍁 Founded in Srinagar, Kashmir</MadeIn>

          <SocialRow>
            <SocialLink
              href="https://in.linkedin.com/company/data-harvest-labs"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Data Harvest Labs
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/faraznaik/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Faraz Ahmad Naik
            </SocialLink>
            <SocialLink
              href="https://in.linkedin.com/in/zafir-naik"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Dr. Zafir Ahmad Naik
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/dr-yasir-mushtaq-wani-1864831b9/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
            >
              Dr. Yasir Mushtaq Wani
            </SocialLink>
          </SocialRow>
        </BrandCol>

        {/* ── Navigate ── */}
        <Col>
          <ColHeading>Company</ColHeading>
          <LinkList>
            <Link href="/" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Home
              </NavLink>
            </Link>
            <Link href="/about" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                About
              </NavLink>
            </Link>
            <Link href="/services" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Services
              </NavLink>
            </Link>
            <Link href="/process" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                How It Works
              </NavLink>
            </Link>
            <Link href="/case-studies" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Case Studies
              </NavLink>
            </Link>
            <Link href="/testimonials" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Testimonials
              </NavLink>
            </Link>
            <Link href="/contact" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Contact
              </NavLink>
            </Link>
            <Link href="/quote" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Get a Quote
              </NavLink>
            </Link>
          </LinkList>
        </Col>

        {/* ── Services ── */}
        <Col>
          <ColHeading>Services</ColHeading>
          <LinkList>
            <Link href="/services" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Genomics & Bioinformatics
              </NavLink>
            </Link>
            <Link href="/services" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Biostatistics & Data Analysis
              </NavLink>
            </Link>
            <Link href="/services" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Clinical Research Design
              </NavLink>
            </Link>
            <Link href="/services" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                Systematic Reviews & Meta-Analysis
              </NavLink>
            </Link>
            <Link href="/services" passHref>
              <NavLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                ML & Predictive Models
              </NavLink>
            </Link>
          </LinkList>
        </Col>

        {/* ── Contact ── */}
        <Col>
          <ColHeading>Get in touch</ColHeading>
          <ContactList>
            <ContactItem>
              <ContactLabel>Email</ContactLabel>
              <ContactValue
                href="mailto:info@dataharvestlabs.com"
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                info@dataharvestlabs.com
              </ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Phone</ContactLabel>
              <ContactValue
                href="tel:+917006087884"
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                +91 70060 87884
              </ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Location</ContactLabel>
              <ContactValue as="span">
                Srinagar, Jammu &amp; Kashmir
                <br />
                India
              </ContactValue>
            </ContactItem>
          </ContactList>
        </Col>
      </FooterGrid>

      <BottomBar>
        <Copyright>
          &copy; {new Date().getFullYear()} Data Harvest Labs. All rights
          reserved.
        </Copyright>
        <BottomRight>
          <Copyright>Made with 🍁 in Kashmir, India</Copyright>
          <BottomLink
            href="mailto:info@dataharvestlabs.com"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            info@dataharvestlabs.com
          </BottomLink>
        </BottomRight>
      </BottomBar>
    </FooterOuter>
  );
};

export default Footer;
