import React from 'react';

const Result = ({ name, images, city, country, description, price, date_start, date_end }) => {
  const dateStart = new Date(date_start);
  let formatted_date_start = dateStart.getDate() + "." + (dateStart.getMonth() + 1) + "." + dateStart.getFullYear();
  const dateEnd = new Date(date_end);
  let formatted_date_end = dateEnd.getDate() + "." + (dateEnd.getMonth() + 1) + "." + dateEnd.getFullYear();

  return (
    <div className="result">
      <div className="result__image">
        <div className="result__image-wrapper">
          <img src={images[0]} alt={name} />
        </div>
      </div>
      <div className="result__texts">
        <div className="result__row">
          <div>
            <h2 className="result__name">{name}</h2>
            <div className="result__destination">
              <span>{city} - {country}</span>
            </div>
          </div>
          <div className="result__stars">🟊🟊🟊🟊🟊</div>
        </div>
        <div className="result__description">{description}</div>
        <div className="result__row">
          <button className="result__show-reviews" onClick={() => {console.log('bbb')}}>Show reviews</button>
          <div className="result__details">
            <div className="result__price">{price} €</div>
            <div className="result__date">
              <span>{formatted_date_start} - {formatted_date_end}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;