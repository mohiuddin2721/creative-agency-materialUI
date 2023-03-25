import React from 'react';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import Contact from './Contact/Contact';
import Faq from './Faq/Faq';
import OurTeam from './OurTeam/OurTeam';
import OurWorks from './OurWorks/OurWorks';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Branding />
            <Brands />
            <Services />
            <OurWorks />
            <OurTeam />
            <ClientFeedback />
            <Faq />
            <Contact />
        </div>
    );
};

export default Home;