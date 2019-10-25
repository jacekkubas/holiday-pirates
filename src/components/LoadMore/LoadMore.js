import React from 'react';

const LoadMore = (props) => {
  return (
    <div className="load-more">
      {props.children}
    </div>
  );
}

export default LoadMore;