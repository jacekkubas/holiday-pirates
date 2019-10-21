import React from 'react';
import Button from './Button';

const Header = (props) => {
  return (
    <header className="header">
      <Button onBtnClick={props.onBtnClick}>Load Hotels</Button>
    </header>
  )
}

export default Header;