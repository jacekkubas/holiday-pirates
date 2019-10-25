import React from 'react';
import LoadMore from '../LoadMore/LoadMore';
import Button from '../Button/Button';
import Results from '../Results/Results';
import Result from '../Result/Result';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';

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
        <LoadMore>
          <Button onBtnClick={this.onBtnClick}>Load Hotels</Button>
        </LoadMore>

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
