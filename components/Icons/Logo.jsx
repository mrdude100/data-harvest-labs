import React from 'react';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = props => {
  const { ...rootProps } = props;

  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <div {...rootProps} style={{ display: 'flex', alignItems: 'center' }}>
      <span
        style={{
          color: theme.text, // Use theme text color for the rest
          fontSize: '24px', // Set font size for the rest of the text
          lineHeight: '1', // Ensure line height is set to 1 for proper alignment
        }}
      >
        Data Harvest Labs ©
      </span>
    </div>
  );
};

export default Logo;
