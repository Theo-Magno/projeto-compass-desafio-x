import React from 'react';
import './Card.css';

type Props = {
  children: React.ReactNode;
};

function Card(props: Props) {
  const classes = 'card'
  return <div className={classes}>{props.children}</div>
};

export default Card;