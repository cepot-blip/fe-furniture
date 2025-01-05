/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function Card({ className, children, onClick }) {
  return (
    <section className={className} onClick={onClick}>
      {children}
    </section>
  );
}

function Header({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Body({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Footer({ className, children }) {
  return <footer className={className}>{children}</footer>;
}

// composition patern
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
