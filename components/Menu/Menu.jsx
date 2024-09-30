/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useMenuContext } from '../../context/menu';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';
import useMediaQuery from '../../hooks/useMediaQuery';
import routes from '../../utils/constants/routes';
import Arrow from '../Icons/Arrow';
import {
  listVariants,
  listItemsVariants,
  linkVariants,
  transition,
} from './variants';
import {
  Backdrop,
  Container,
  CloseButton,
  Header,
  Navigation,
  List,
  Link,
  ArrowContainer,
  Footer,
  FooterText,
  Address,
  SocialMedia,
} from './styles';

const Menu = () => {
  const containerRef = React.useRef(null);
  const [isHovering, setIsHovering] = React.useState(false);
  const theme = useStyledTheme();
  const [{ isMenuOpen }] = useMenuContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();
  const isMobile = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.small}px)`,
  );

  const handleAnimationComplete = React.useCallback(() => {
    addCursorColor(theme.text);
  }, [addCursorColor, theme.text]);

  const handleExitComplete = React.useCallback(() => {
    resetCursorColor();
  }, [resetCursorColor]);

  const handleHoverStart = React.useCallback(
    event => {
      addCursorBorder();
    },
    [addCursorBorder],
  );

  const handleHoverEnd = React.useCallback(() => {
    removeCursorBorder();
  }, [removeCursorBorder]);

  React.useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen && containerRef.current) {
        const offset = 256;
        const { width } = containerRef.current.getBoundingClientRect();
        const left = (window.innerWidth - width) / 2 + offset;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isMenuOpen && (
        <Backdrop onAnimationComplete={handleAnimationComplete}>
          <Container ref={containerRef}>
            <Header>
              <h3>Menu</h3>
              <CloseButton title="Close" />
            </Header>
            <Navigation>
              <List
                variants={listVariants}
                initial="hidden"
                animate="show"
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                {routes.map(route => (
                  <motion.li
                    key={route.id}
                    variants={listItemsVariants}
                    transition={{
                      duration: 0.9,
                      ease: transition.ease,
                    }}
                  >
                    <NextLink href={route.path}>
                      <Link
                        key={`${route.id}_${isMobile}`}
                        name={route.id}
                        onHoverStart={handleHoverStart}
                        onHoverEnd={handleHoverEnd}
                        custom={{ isMobile, color: theme.text }}
                        initial="initial"
                        whileHover="hover"
                        variants={linkVariants}
                        transition={transition}
                      >
                        <ArrowContainer>
                          <Arrow fillColor={theme.background} />
                        </ArrowContainer>
                        {route.title}
                      </Link>
                    </NextLink>
                  </motion.li>
                ))}
              </List>
            </Navigation>
            <Footer>
              <FooterText
                className="link"
                as="a"
                href="mailto:info@dataharvestlabs.com"
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                info@dataharvestlabs.com
              </FooterText>
              <FooterText
                className="link"
                as="a"
                href="tel:+91.7006038395"
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                +91 70060 38395
              </FooterText>
              <FooterText className="copyright">© DataHarvestLabs</FooterText>
              {isMobile && (
                <Address>
                  <FooterText>
                    Srinagar
                    <br /> Valley of Kashmir, 190001
                  </FooterText>
                </Address>
              )}
              <SocialMedia />
            </Footer>
          </Container>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default React.memo(Menu);
