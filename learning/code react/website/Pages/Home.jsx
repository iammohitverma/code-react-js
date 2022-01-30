import React from 'react';
import CommonBanner from "../Components/CommonBanner";
import BannerImg from "../images/men.svg";
const Home = () => {
    return(
        <>
            <CommonBanner 
                pageTitle="Home"
                bannerImg={BannerImg}
                btnLink="/about"
            />
        </>
    )
}
export default Home;