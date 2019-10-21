import React from 'react';
import 'normalize.css';
import './sass/style.scss';
import Header from './components/Header';
import Results from './components/Results';
import Result from './components/Result';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoaded: false,
      error: null,
      count: 1
    }
  }

  onBtnClick = () => {
    fetch('http://fake-hotel-api.herokuapp.com/api/hotels?count=5')
      .then(response => response.json())
      .then(data => this.setState({ data, isLoaded: true }, () => { console.log(this.state.data) }))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <div className="App">
        <Header onBtnClick={this.onBtnClick} />
        <Results>
          {this.state.isLoaded &&
            this.state.data.map(item => {
              console.log(item.images[0])
              return (
                <Result
                  key={item.id}
                  {...item}
                  onBtnClick={this.onBtnClick}
                />
              )
            })}
        </Results>
      </div>
    );
  }
}

export default App;
