import React from 'react';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import FeaturedSection from '../components/FeaturesSection';
import VideoSection from '../components/VideoSection';
import Awards from '../components/Awards';
import BestDeal from '../components/BestDeal';
import PropertiesSection from '../components/PropertiesSection';
import ContactSection from '../components/ContactSection';


const Home = () => {

    return(
        <React.Fragment>
        {/* <Header /> */}
      
        <MainBanner />
        <FeaturedSection />
        <VideoSection />
        <Awards />
        <BestDeal />
        <PropertiesSection />
        <ContactSection />
            </React.Fragment>
    )

}

export default Home;