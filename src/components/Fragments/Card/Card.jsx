/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function Card({ className, children }) {
  return <section className={className}>{children}</section>;
}

function Header({ className, children }) {
  return (
    <div className={className}>
      <h1>{children}</h1>
    </div>
  );
}

function Body({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Footer({ className, children }) {
  return <div className={className}>{children}</div>;
}

// composition patern
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
