import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import classes from './Reviews.module.css';
import Review from './Review/Review';
import Photo1 from '../../Assets/Images/Pics/78.jpg';
import Photo2 from '../../Assets/Images/Pics/91.jpg';
import Photo3 from '../../Assets/Images/Pics/76.jpg';
import Flag1 from '../../Assets/Images/flags/us.png';
import Flag2 from '../../Assets/Images/flags/il.png';
import Flag3 from '../../Assets/Images/flags/sd.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Reviews = () => {

    // Parsing Persons JSX Data
    const PersonJSX = () => {
        const personsJSX = [];
        const persons = [
                        {name : 'Steve Kiler',location : 'PALO ALTO, CA', pic : Photo1, flag : Flag1},
                        {name : 'Fiona Jane',location : 'DALLAS, TX', pic : Photo3, flag : Flag3},
                        {name : 'Rita Williams',location : 'SANT CRUZ, CA', pic : Photo2, flag : Flag2}
                    ];
        for(let i= 0;i<persons.length;i++){
            personsJSX.push(<Review 
                name={persons[i].name} 
                location={persons[i].location} 
                pic={persons[i].pic} 
                flag={persons[i].flag} />)
        }
        return personsJSX;
    }

    return (
        <div className={classes.Reviews}>
            <h2>
                <span>R</span>
                <span>e</span>
                <span>v</span>
                <span>i</span>ews
            </h2>
            <div className={classes.Review}>
                <div className={classes.ShowDesktop}>
                    {PersonJSX()}
                </div>
                <div className={classes.ShowMobile}>
                    <Swiper slidesPerView={1}>
                        {PersonJSX().map(person => <SwiperSlide>{person}</SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Reviews;