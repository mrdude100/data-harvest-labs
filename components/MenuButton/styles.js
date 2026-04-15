import styled from 'styled-components';
import { secondaryFontStyle } from '../../styles/shared/text';

export const Button = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 6px;
  width: 48px;
  height: 48px;
  padding: 12px;
  cursor: pointer;
  flex-shrink: 0;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.text};
    transition:
      width 0.2s ease,
      transform 0.2s ease;
    border-radius: 1px;
  }

  &::before {
    width: 24px;
  }

  &::after {
    width: 16px;
  }

  &:hover::after {
    width: 24px;
  }

  & span {
    ${secondaryFontStyle};
    position: absolute;
    right: 56px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.2s ease;
    white-space: nowrap;
    pointer-events: none;
    color: ${({ theme }) => theme.text};
  }

  &:hover span {
    opacity: 1;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    & span {
      display: none;
    }
  `};
`;
