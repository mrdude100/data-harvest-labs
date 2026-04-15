import React from 'react';
import styled, { keyframes } from 'styled-components';
import useCursorStyle from '../../hooks/useCursorStyle';

const WHATSAPP_NUMBER = '917006087884';
const WHATSAPP_MESSAGE =
  'Hi%2C%20I%27d%20like%20to%20discuss%20a%20research%20project%20with%20Data%20Harvest%20Labs.';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70%  { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`;

const Wrap = styled.a`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  text-decoration: none;
  animation: ${pulse} 2.4s ease-out infinite;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.08);
    animation: none;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    bottom: 20px;
    right: 16px;
    width: 50px;
    height: 50px;
  `}
`;

const WhatsAppIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 32 32"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.666 4.785 1.826 6.773L2 30l7.45-1.807A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.874-1.601l-.42-.247-4.417 1.072 1.103-4.296-.274-.44A11.562 11.562 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6z" />
    <path d="M22.35 19.28c-.34-.17-2.003-.988-2.313-1.1-.31-.113-.537-.17-.763.17-.226.34-.876 1.1-1.074 1.327-.198.227-.396.254-.736.085-.34-.17-1.437-.53-2.737-1.69-1.011-.903-1.694-2.017-1.892-2.357-.198-.34-.021-.523.149-.692.153-.152.34-.396.51-.594.17-.198.226-.34.34-.567.113-.226.056-.424-.028-.594-.085-.17-.763-1.837-1.045-2.516-.275-.66-.554-.57-.763-.58-.198-.009-.424-.011-.65-.011s-.594.085-.905.424c-.31.34-1.187 1.16-1.187 2.827s1.215 3.28 1.384 3.506c.17.226 2.39 3.65 5.793 5.118.81.35 1.44.558 1.932.715.812.26 1.553.223 2.137.135.652-.097 2.003-.819 2.285-1.61.283-.79.283-1.467.198-1.608-.085-.141-.31-.226-.65-.396z" />
  </svg>
);

const WhatsAppButton = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Wrap
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
    >
      <WhatsAppIcon />
    </Wrap>
  );
};

export default WhatsAppButton;
