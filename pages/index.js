import React from 'react';
import Head from 'next/head';
import SEO from '../components/SEO';
import BannerSection from '../components/Home/Banner';
import HomePage from '../components/Home/HomePage';
const Home = () => {
  return (
    <>
      <SEO path="/" />
      <Head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </Head>
      <BannerSection />
      <HomePage />
    </>
  );
};

export default React.memo(Home);
