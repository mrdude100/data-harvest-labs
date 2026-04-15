import React from 'react';
import styled from 'styled-components';
import useCursorStyle from '../../hooks/useCursorStyle';

const WHATSAPP_NUMBER = '917006087884';
const WHATSAPP_MESSAGE =
  'Hi%2C%20I%27d%20like%20to%20discuss%20a%20research%20project%20with%20Data%20Harvest%20Labs.';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Wrap = styled.a`
  position: fixed;
  bottom: 32px;
  left: 32px;
  z-index: 900;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px 10px 12px;
  background: #25d366;
  text-decoration: none;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06);
  }

  ${({ theme }) => theme.breakpoints.tablet`
    bottom: 20px;
    left: 16px;
    padding: 8px 12px;
  `}
`;

const Label = styled.span`
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

const WhatsAppIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 32 32"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0, display: 'block', width: 18, height: 18 }}
  >
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.666 4.785 1.826 6.773L2 30l7.45-1.807A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.874-1.601l-.42-.247-4.417 1.072 1.103-4.296-.274-.44A11.562 11.562 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6z" />
    <path d="M22.35 19.28c-.34-.17-2.003-.988-2.313-1.1-.31-.113-.537-.17-.763.15-.226.34-.876 1.1-1.074 1.327-.198.227-.396.254-.736.085-.34-.17-1.437-.53-2.737-1.69-1.011-.903-1.694-2.017-1.892-2.357-.198-.34-.021-.523.149-.692.153-.152.34-.396.51-.594.17-.198.226-.34.34-.567.113-.226.056-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
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
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
    >
      <WhatsAppIcon />
      <Label>WhatsApp</Label>
    </Wrap>
  );
};

export default WhatsAppButton;
