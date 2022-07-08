import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './page-layout.component.css';
import PropTypes from 'prop-types';

export default function PageLayout({ title, content, button, onBtnClick }) {
  return (
    <Container className="mx-auto d-flex justify-content-center flex-wrap page-container">
      {title && (
        <header className="">
          <h2>{title}</h2>
        </header>
      )}
      <div className="w-100">
        <main>{content}</main>
      </div>

      {button && (
        <Button onClick={onBtnClick} variant="secondary">
          {button}
        </Button>
      )}
    </Container>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
  button: PropTypes.string,
  onBtnClick: PropTypes.func,
};
