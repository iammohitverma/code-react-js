import React from 'react';
import CommonBanner from "../Components/CommonBanner";
import BannerImg from "../images/women.svg";
const About = () => {
    return(
        <>
            <CommonBanner 
                pageTitle="About"
                bannerImg={BannerImg}
                btnLink="/"
            />
        </>
    )
}
export default About;