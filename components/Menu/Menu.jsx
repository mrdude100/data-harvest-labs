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
  const theme = useStyledTheme();
  const [{ isMenuOpen }, dispatch] = useMenuContext();
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


  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isMenuOpen && (
        <Backdrop onAnimationComplete={handleAnimationComplete}>
          <Container>
            <Header>
              <h3>Menu</h3>
              <CloseButton title="Close" />
            </Header>
            <Navigation>
              <List
                variants={listVariants}
                initial="hidden"
                animate="show"
                
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
                        
                        custom={{ isMobile, color: theme.text }}
                        initial="initial"
                        whileHover="hover"
                        variants={linkVariants}
                        transition={transition}
                        onClick={() => dispatch({ type: 'TOGGLE_MENU' })}

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
                href="tel:+91.7006087884"
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                +91 70060 87884
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
