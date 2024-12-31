import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>
              Follow us on{' '}
              <a href="#facebook" className="social-link">Facebook</a>,{' '}
              <a href="#twitter" className="social-link">Twitter</a>, and{' '}
              <a href="#instagram" className="social-link">Instagram</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
