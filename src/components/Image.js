import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      errored: false,
    };
  }

  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.fallbackSrc,
        errored: true,
      });
    }
  }

  render() {
    const { src } = this.state;

    return (
      <img
        src={src}
        onError={this.onError}
        alt={this.props.alt}
      />
    );
  }
}

export default Image;