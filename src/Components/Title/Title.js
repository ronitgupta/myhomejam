import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y  } from 'swiper';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';

import classes from './Title.module.css';
import 'swiper/swiper.scss';
import 'react-circular-progressbar/dist/styles.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Title = () => {
    
    const circles = () => {
        let circlesJSX = [];
        for(var i=0;i<4;i++){
            const number = Math.floor(Math.random()*100);
            circlesJSX.push(<CircularProgressbarWithChildren value={number} strokeWidth={2}
                                styles={{path: {strokeLinecap: 'butt',
                                stroke: "rgb(254, 10, 54)"},
                                trail: {stroke: 'rgb(150,150,150)'}}}
                                    >
                                <p className={classes.Symbol}>{number%3 === 0?
                                        <FontAwesomeIcon style={{color: 'blue'}} icon={faHeart} />
                                        :<FontAwesomeIcon icon={faStar} />}</p>
                                <p className={classes.Number}>0</p>
                                <p className={classes.Label}>Label</p>
                            </CircularProgressbarWithChildren>)
        }
        return circlesJSX;
    }


    return (
        <React.Fragment>
        <div className={classes.Title}>
            <div className={classes.Text}>
                <h1>Cari Cari</h1>
                <p>Live from their sofa to yours. Get closer to your
                    favorite artists, and never miss out.</p>
            </div>
        </div>
            <div className={classes.Stats}>
                <div className={classes.ShowMobile}>
                    <Swiper slidesPerView={2}>
                        {circles().map(circle => <SwiperSlide>{circle}</SwiperSlide>)}
                    </Swiper>
                </div>
                <div className={classes.ShowDesktop}>
                        {circles()}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Title;