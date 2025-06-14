import React from 'react';

import { EmblaOptionsType } from 'embla-carousel';
import Head from 'next/head';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import EmblaCarousel from '../components/EmblaCarousel';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

const App = () => {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' };
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <Head>
        <title>Small Business Tax Inc. | Expert Tax Solutions</title>
        <meta
          name="description"
          content="Specialized tax services for small businesses and entrepreneurs."
        />
        <meta property="og:title" content="Small Business Tax Inc." />
        <meta
          property="og:description"
          content="Expert tax and advisory services for small businesses."
        />
        <meta
          property="og:image"
          content="https://sbttax.vercel.app/assets/images/preview.jpg"
        />
        <meta property="og:url" content="https://sbttax.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Small Business Tax Inc." />
        <meta
          name="twitter:description"
          content="Secure, smart tax solutions for entrepreneurs."
        />
        <meta
          name="twitter:image"
          content="https://sbttax.vercel.app/assets/images/preview.jpg"
        />
      </Head>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Pricing />
          {/* <div className="pt-8">
            <Review />
          </div> */}
          <EmblaCarousel options={OPTIONS} />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
