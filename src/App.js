import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import ArtPage from '@pages/ArtPage';
import PhotographyPage from '@pages/PhotographyPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';
import Browser from '@components/Browser';
import Footer from '@components/Footer';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <AboutPage />
          <ArtPage />
          <PhotographyPage />
          <ScrollTop />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
