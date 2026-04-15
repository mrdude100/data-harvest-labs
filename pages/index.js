import React from 'react';
import Script from 'next/script';
import SEO from '../components/SEO';
import BannerSection from '../components/Home/Banner';
import HomePage from '../components/Home/HomePage';
const Home = () => {
  return (
    <>
      <SEO path="/" />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
        media="print"
        // eslint-disable-next-line react/no-unknown-property
        onLoad="this.media='all'"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <BannerSection />
      <HomePage />
    </>
  );
};

export default React.memo(Home);
