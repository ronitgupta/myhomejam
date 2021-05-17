import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y  } from 'swiper';

import 'swiper/swiper.scss';
import Show from './Show/Show';
import Photo1 from '../../Assets/Images/photo1.jpg';
import Photo2 from '../../Assets/Images/photo2.jpg';
import Photo3 from '../../Assets/Images/photo3.jpg';
import Photo4 from '../../Assets/Images/photo4.jpg';
import classes from './Shows.module.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Shows = () => {

    const artists = [
        <Show name="Benny Dayal" type="Folk" pic={Photo1}/>,
        <Show name="James Brown" type="Bollywood" pic={Photo2}/>,
        <Show name="Anna Smith" type="Bazz" pic={Photo3}/>,
        <Show name="Tylor King" type="Folk" pic={Photo4}/>
    ];

    return (
        <div>
            <section className={classes.Shows}>
                <h2><span>U</span><span>p</span><span>c</span><span>o</span>ming Shows</h2>
                <a href="#id">View All</a>
            </section>
            <div className={classes.Show}>
                <div className={classes.ShowSlider}>
                    <Swiper slidesPerView={1}>
                        {artists.map(artist => <SwiperSlide>{artist}</SwiperSlide>)}
                    </Swiper>
                </div>    
                <div className={classes.ShowDesktop}>
                    {artists}
                </div>
            </div>
        </div>
    );
}

export default Shows;