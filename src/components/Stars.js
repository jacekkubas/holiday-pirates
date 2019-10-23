import React from 'react';

const Stars = ({rating}) => {
  const getStars = (stars) => {
    let starsArray = [];

    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starsArray.push('x')    
      } else {
        starsArray.push('o')
      }
    }

    return starsArray;
  }

  return ( 
    <div className="stars">
      {getStars(rating).map((star, index) => {
        return star === 'x' ? <span key={index} className="stars__star stars__star--full">★</span> : <span key={index} className="stars__star">★</span>
      })}
    </div>
   );
}
 
export default Stars;