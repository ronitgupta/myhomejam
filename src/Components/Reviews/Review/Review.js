import React from 'react';

import classes from './Review.module.css';

const Review = props => {
    return (
        <div className={classes.Review}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img className={classes.Picture} src={props.pic} alt={props.name} />
                        </td>
                        <td>
                            <p className={classes.Name} >{props.name}</p>
                            <img className={classes.Flag} src={props.flag} alt={props.name} />
                            <p className={classes.Location}>{props.location}</p>
                        </td>
                    </tr>
                </tbody>

            </table>
            <p className={classes.Message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 In at consectetur lorem, sit amet volutpat odio. 
                 Mauris consectetur eleifend condimentum.
            </p>
        </div>
    );
}

export default Review;