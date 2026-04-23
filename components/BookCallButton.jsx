import React from 'react';
import styled, { keyframes } from 'styled-components';
import useCursorStyle from '../hooks/useCursorStyle';

const CALENDLY_LINK =
  'https://calendly.com/d/cvpd-6ms-9j3/30-minute-consultation';

const pulseRing = keyframes`
  0%, 100% { transform: scale(1);    opacity: 0.6; }
  50%       { transform: scale(1.22); opacity: 0;   }
`;

const Wrap = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.tablet`
    bottom: 20px;
    right: 16px;
  `}
`;

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 18px 11px 14px;
  background: #c0201a;
  border: none;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  transition:
    transform 0.18s ease,
    background 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    background: #d42520;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(192, 32, 26, 0.5);
    animation: ${pulseRing} 2.8s ease-in-out infinite;
    pointer-events: none;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 9px 14px 9px 11px;
  `}
`;

const BtnLabel = styled.span`
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  line-height: 1;

  ${({ theme }) => theme.breakpoints.small`
    display: none;
  `}
`;

const CalIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0, display: 'block' }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BookCallButton = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleClick = React.useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      window.Calendly &&
      !window.matchMedia('(max-width: 768px)').matches
    ) {
      window.Calendly.initPopupWidget({ url: CALENDLY_LINK });
    } else {
      window.open(CALENDLY_LINK, '_blank', 'noopener,noreferrer');
    }
  }, []);

  return (
    <Wrap>
      <Btn
        onClick={handleClick}
        aria-label="Book a free 30-minute consultation"
        onMouseEnter={addCursorBorder}
        onMouseLeave={removeCursorBorder}
      >
        <CalIcon />
        <BtnLabel>Book Free Call</BtnLabel>
      </Btn>
    </Wrap>
  );
};

export default BookCallButton;
