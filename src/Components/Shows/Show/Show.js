import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './Show.module.css';

const Show = props => {
    return (
        <div className={classes.Show} >
            <img src={props.pic} alt={props.name}/>
            <p className={classes.Type} >{props.type}</p>
            <p className={classes.Name}>{props.name}</p>
            <section>
                <a href="#id" className={classes.Info}>More Info<FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                <p className={classes.Ticket}>| <FontAwesomeIcon icon={faTicketAlt} /> </p>
            </section>
        </div>
    )
}

export default Show;