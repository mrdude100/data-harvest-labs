import React from 'react';
import SEO from '../components/SEO';
import CalendlyLoader from '../components/CalendlyLoader';
import BannerSection from '../components/Home/Banner';
import HomePage from '../components/Home/HomePage';

const Home = () => {
  return (
    <>
      <SEO path="/" />
      <CalendlyLoader />
      <BannerSection />
      <HomePage />
    </>
  );
};

export default React.memo(Home);
