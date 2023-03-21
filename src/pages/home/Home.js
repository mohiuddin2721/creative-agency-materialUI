import React from 'react';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import Faq from './Faq/Faq';
import OurWorks from './OurWorks/OurWorks';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Branding />
            <Brands />
            <Services />
            <OurWorks />
            <Faq />
            <ClientFeedback />
        </div>
    );
};

export default Home;