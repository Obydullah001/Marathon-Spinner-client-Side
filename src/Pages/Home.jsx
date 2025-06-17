import React from 'react';
import Bannner from '../Components/HomeComponents/Bannner';
import Featured from '../Components/HomeComponents/Featured';
import UpcomingEvents from '../Components/HomeComponents/UpcomingEvents';
import PhotoGrid from '../Components/HomeComponents/PhotoGrid';
import LastCard from '../Components/HomeComponents/LastCard';

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>
            <Featured></Featured>
            <UpcomingEvents></UpcomingEvents>
            <LastCard></LastCard>
            <PhotoGrid></PhotoGrid>
        </div>
    );
};

export default Home;