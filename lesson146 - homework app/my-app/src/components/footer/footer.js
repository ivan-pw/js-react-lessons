import Menu from './../menu/menu';
import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hr from './../hr/hr';

// import './header.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={'page__' + this.props.page}>
        <Container>
          <Row className="justify-content-center">
            <Col md="auto">
              <Menu
                color="dark"
                className="pt-3 pb-1"
                changePage={this.props.changePage}
              ></Menu>
              <Hr></Hr>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
