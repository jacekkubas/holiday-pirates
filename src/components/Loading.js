import React from 'react';
import { ReactComponent as LoadingIcon } from '../loading.svg';

const Loading = () => {
  return ( 
    <div className="loading">
      <LoadingIcon className="loading__icon" />
    </div>
   );
}
 
export default Loading;