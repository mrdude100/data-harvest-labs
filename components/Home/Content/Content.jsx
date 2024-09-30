import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            Data analysis is complex and costly, we understand—
            <br />
            Our service streamlines the process, delivering tailored insights
            for students, researchers, and professionals alike. Let us manage
            the details, so you can focus on results.
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
