import React from 'react';

const Review = ({ name, comment, positive }) => {
  return (
    <div className="review">
      <div className="review__wrapper">
        <div className="review__icon-wrapper"><span className="review__icon">{positive ? '+' : '-'}</span></div>
        <div className="review__texts">
          <div className="review__name">{name}</div>
          <div className="review__comment">{comment}</div>
        </div>
      </div>
    </div>
  );
}

export default Review;