import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+91.7006038395"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +91 70060 38395
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:info@dataharvestlabs.com"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            info@dataharvestlabs.com
          </a>
        </div>
        <address className="column contact-text">
          Srinagar
          <br /> Valley of Kashmir, 190001
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
