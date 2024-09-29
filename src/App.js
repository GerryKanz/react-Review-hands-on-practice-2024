import React from 'react';
import './style.css';

export default function App() {
  function Mybutton(props) {
    const clickHandler = () => {
      console.log('hi Gerald');
    };
    return <button onClick={clickHandler}>{props.children}</button>;
  }
  return <Mybutton />;
}
