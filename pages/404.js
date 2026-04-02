import SEO from '../components/SEO';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import containerStyles from '../styles/shared/container';
import { secondaryFontStyle } from '../styles/shared/text';

const Wrapper = styled.main`
  ${containerStyles};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 140px;
  padding-bottom: 100px;
`;

const ErrorCode = styled.span`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-family: calibre, sans-serif;
  font-weight: 900;
  font-size: clamp(3rem, 10vw, 9rem);
  line-height: 0.95;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  margin: 0 0 32px;
`;

const Subtitle = styled.p`
  ${secondaryFontStyle};
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  margin: 0 0 56px;
  line-height: 1.6;
  max-width: 420px;
`;

const HomeLink = styled.a`
  ${secondaryFontStyle};
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.text};
  padding: 18px 40px;
  display: inline-block;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }
`;

const NotFound = () => {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <Wrapper>
        <ErrorCode>404</ErrorCode>
        <Title>
          Not
          <br />
          Found
        </Title>
        <Subtitle>
          This page doesn&apos;t exist or was moved. Let&apos;s get you back on
          track.
        </Subtitle>
        <Link href="/" passHref>
          <HomeLink>Go to Homepage</HomeLink>
        </Link>
      </Wrapper>
    </>
  );
};

export default NotFound;
