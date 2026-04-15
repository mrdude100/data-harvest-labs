import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-5px); }
`;

const Btn = styled.button`
  position: fixed;
  bottom: 36px;
  right: 36px;
  z-index: 998;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  animation: ${float} 2.4s ease-in-out infinite;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition:
    opacity 0.35s ease,
    background 0.2s ease;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.red}44;

  &:hover {
    background: ${({ theme }) => theme.text};
  }

  svg {
    width: 20px;
    height: 20px;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    bottom: 24px;
    right: 20px;
    width: 42px;
    height: 42px;
  `}
`;

const BackToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Btn
      $visible={visible}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </Btn>
  );
};

export default BackToTop;
