import React from "react";
import './Favorite.css';

const StarRating=({rating})=>
{
    const maxRating = 5;

    const stars = [];
    for(let i=0; i<maxRating; i++)
    {
        stars.push(
            <span
            key={i}
            className={i < rating ? 'star active' : 'star'}
            role='img'
            aria-label='star'>
            &#9733;
            </span>
        );
        console.log(stars);
    }
    
    return (
        <div className="star-rating">
            {stars}
        </div>
    );
};
export default StarRating;