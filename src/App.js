import React from 'react';
import 'normalize.css';
import './sass/style.scss';
import Button from './components/Button';
import Results from './components/Results';
import Result from './components/Result';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      error: null,
      count: 1
    }
  }

  onBtnClick = () => {

    this.setState({ isLoading: true });

    fetch(`http://fake-hotel-api.herokuapp.com/api/hotels?count=5`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }, () => { console.log(this.state) }));
  }

  render() {
    return (
      <div className="app">
        <div className="load-more">
          <Button onBtnClick={this.onBtnClick}>Load Hotels</Button>
        </div>

        {this.state.data.length > 0 &&
          <Results>
            {this.state.data.map(item => {
              return (
                <Result
                  key={item.id}
                  {...item}
                  onBtnClick={this.onBtnClick}
                />
              )
            })}
          </Results>
        }


        {this.state.data.error &&
          <ErrorMessage error={this.state.data.error} />}

        {this.state.isLoading &&
          <Loading />}
      </div>
    );
  }
}

export default App;
