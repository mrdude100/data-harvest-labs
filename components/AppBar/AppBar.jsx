import React from 'react';
import Link from 'next/link';
import Logo from '../Icons/Logo';
import MenuButton from '../MenuButton';
import useMediaQuery from '../../hooks/useMediaQuery';
import {
  Slider,
  Container,
  StyledLink,
  MenuWrapper,
  MobileNav,
  MobileNavLink,
} from './styles';
import useCursorStyle from '../../hooks/useCursorStyle';

const variants = {
  hidden: { y: -80, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const AppBar = props => {
  const { logoProps = {}, style: styleProp = {}, ...rootProps } = props;

  const [scrolled, setScrolled] = React.useState(false);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();
  const isMobile = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On mobile, render a fixed bottom nav bar instead
  if (isMobile) {
    return (
      <MobileNav scrolled={scrolled}>
        <Link href="/" passHref>
          <MobileNavLink
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            <Logo {...logoProps} />
          </MobileNavLink>
        </Link>
        <MenuButton sticky={false} title="Menu" />
      </MobileNav>
    );
  }

  return (
    <Slider
      variants={variants}
      initial="show"
      animate="show"
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      scrolled={scrolled}
      style={styleProp}
      {...rootProps}
    >
      <Container>
        <Link href="/" passHref>
          <StyledLink
            title="DataHarvestLabs"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            <Logo {...logoProps} />
          </StyledLink>
        </Link>
        <MenuWrapper>
          <MenuButton title="Menu" />
        </MenuWrapper>
      </Container>
    </Slider>
  );
};

export default React.memo(AppBar);
