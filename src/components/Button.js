import React from 'react';

const Button = (props) => {
  return (
    <button className="button" onClick={props.onBtnClick}>{props.children}</button>
  )
}

export default Button;