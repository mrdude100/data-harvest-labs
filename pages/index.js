import React from 'react';
import SEO from '../components/SEO';
import BannerSection from '../components/Home/Banner';
import HomePage from '../components/Home/HomePage';
const Home = () => {
  return (
    <>
      <SEO path="/" />
      <BannerSection />
      <HomePage />
    </>
  );
};

export default React.memo(Home);
