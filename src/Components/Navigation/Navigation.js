import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../Assets/Images/homejam_logo.png';
import classes from './Navigation.module.css';

const Navigation = () => {

    return (
        <React.Fragment>
            <ul className={classes.Navigation}>
                <li><img src={Logo} alt="Logo"/></li>
                <li><FontAwesomeIcon className={classes.IconStart} icon={faSearch} /><span className={classes.DesktopDisplay}>Search</span></li>
                <li className={classes.DesktopDisplay}>Help</li>
                <li className={classes.DesktopDisplay}>Account</li>
                <li className={classes.DesktopDisplay}><FontAwesomeIcon icon={faCartPlus} /></li>
                <li className={classes.MobileDisplay}><FontAwesomeIcon icon={faUserPlus} /></li>
                <li className={classes.MobileDisplay}><FontAwesomeIcon icon={faBars} /></li>
            </ul>
        </React.Fragment>
    )
}

export default Navigation;