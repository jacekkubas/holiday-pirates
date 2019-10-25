import React from 'react';
import Stars from '../Stars/Stars';
import Button from '../Button/Button';
import Review from '../Review/Review';
import Image from '../Image/Image';
import NoReviews from '../NoReviews/NoReviews';
import placeholder from '../../img/placeholder.png';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsData: [],
      isEmpty: false,
      reviewsOpened: false,
      firstLoad: true,
      error: null
    }
  }

  formatDate = (date) => {
    const dateToFormat = new Date(date);

    return dateToFormat.getDate() + "." + (dateToFormat.getMonth() + 1) + "." + dateToFormat.getFullYear();
  }

  getReviews = () => {
    if (this.state.firstLoad) {
      this.setState({ isLoading: true });

      fetch(`http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${this.props.id}`)
        .then(response => response.json())
        .then(data =>
          this.setState({ reviewsData: data }, () => {
            this.setState({ firstLoad: false, isLoading: false })
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    this.setState({
      reviewsOpened: !this.state.reviewsOpened,
    })
  }

  render() {
    const { name, images, city, country, description, price, date_start, date_end, stars } = this.props;

    return (
      <div className="result">
        <div className="result__wrapper">
          <div className="result__image">
            <div className="result__image-wrapper">
              <Image src={images[0]} fallbackSrc={placeholder} alt={name} />
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
              <Stars rating={stars} />
            </div>
            <div className="result__description">{description}</div>
            <div className="result__row">
              <Button onBtnClick={this.getReviews} >{this.state.reviewsOpened ? 'Hide' : 'Show'} Reviews</Button>
              <div className="result__details">
                <div className="result__price">{price} €</div>
                <div className="result__date">
                  <span>{this.formatDate(date_start)} - {this.formatDate(date_end)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.reviewsOpened ? 'result__reviews' : 'result__reviews result__reviews--closed'}>
          {this.state.reviewsData.map((review, index) => {
            return <Review {...review} key={index} />
          })}

          {this.state.reviewsData.length === 0 && !this.state.firstLoad &&
            <NoReviews />}
        </div>
      </div>
    )
  }
}

export default Result;