import React from 'react';

import Navigation from '../Navigation/Navigation';
import Title from '../Title/Title';
import Shows from '../Shows/Shows';
import Reviews from '../Reviews/Reviews';

const HomePage = () => {
    return (
        <React.Fragment>
            <Navigation />
            <Title />
            <Shows />
            <Reviews />
        </React.Fragment>
    )
}

export default HomePage;