import React from 'react';
import BannerSection from '../../components/BannerSection';
import CategorySection from '../../components/CategorySection';
import PropertiesSection from '../../components/PropertiesSection';
import StatsSection from '../../components/StatsSection';
import DealsSection from '../../components/DealsSection';
import FeedbackSection from '../../components/FeedbackSection';
import PopularPlaceSection from '../../components/PopularPlaceSection';
import SubscribeSection from '../../components/SubscribeSection';

const Home = () => {
    return (
        <div>
          <BannerSection></BannerSection> 
          <CategorySection></CategorySection>
          <PropertiesSection></PropertiesSection>
          <StatsSection></StatsSection>
          <DealsSection></DealsSection>
          <FeedbackSection></FeedbackSection>
          <PopularPlaceSection></PopularPlaceSection>
          <SubscribeSection></SubscribeSection>
        </div>
    );
};

export default Home;