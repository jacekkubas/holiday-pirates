import React from 'react';
import { ReactComponent as LoadingIcon } from '../img/loading.svg';

const Loading = ({ type }) => {
  return (
    <div className="loading">
      <LoadingIcon className="loading__icon" />
    </div>
  );
}

export default Loading;