import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../styles/shared/container';

// eslint-disable-next-line no-unused-vars
export const Slider = styled(({ renderAs, scrolled, ...props }) => {
  const Component = motion[renderAs] || motion.header;
  return <Component {...props} />;
})`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.slider};
  transition:
    background 0.3s ease,
    backdrop-filter 0.3s ease,
    box-shadow 0.3s ease;
  background: ${({ scrolled, theme }) =>
    scrolled ? `${theme.background}e6` : 'transparent'};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(12px)' : 'none')};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none'};
`;

export const Container = styled.div`
  ${containerStyles};
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.tablet`
    height: 64px;
    padding: 0 24px;
  `};
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  width: 131px;
  height: 23px;
  flex-shrink: 0;

  ${({ theme }) => theme.breakpoints.tablet`
    width: 99px;
    height: 17px;
  `};
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: -20px;
`;

/* ── Mobile top nav ── */
export const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.slider};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: ${({ scrolled, theme }) =>
    scrolled ? `${theme.background}f0` : theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.text}14;
  backdrop-filter: blur(12px);
  transition: background 0.3s ease;
`;

export const MobileNavLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
`;
