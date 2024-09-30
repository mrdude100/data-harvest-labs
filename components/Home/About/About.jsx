import React from 'react';
import items from '../../../utils/constants/services-items';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleMouseEnter = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder],
  );

  const handleMouseLeave = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder],
  );

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <h2>
            Data Harvest Labs is a data analytics service founded by a group of
            friends from Kashmir who came together to harness the power of data.
          </h2>
          <p>
            Our mission? To simplify data analysis and provide businesses with
            actionable insights that drive success. With expertise in data
            analysis, visualization, predictive analytics, and data cleaning, we
            are dedicated to helping organizations make informed decisions. Our
            client-centric approach ensures that we tailor our solutions to meet
            your unique needs.
          </p>
        </TextWrapper>
        <ServicesWrapper>
          <h3>Services</h3>
          {items.map(([item, services], itemIndex) => (
            <React.Fragment key={item}>
              <AccordionToggle
                aria-expanded={itemIndex === selectedItem}
                onClick={() => setSelectedItem(itemIndex)}
                onMouseEnter={() => handleMouseEnter(itemIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex)}
              >
                {item}
              </AccordionToggle>
              <AccordionContent
                animate={{ height: itemIndex === selectedItem ? '100%' : '0' }}
                transition={{ duration: 0.7, ease: [0, 0.7, 0.29, 0.97] }}
              >
                {services.map((service, serviceIndex) => (
                  <p key={`${itemIndex}_${serviceIndex}`}>{service}</p>
                ))}
              </AccordionContent>
            </React.Fragment>
          ))}
        </ServicesWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
