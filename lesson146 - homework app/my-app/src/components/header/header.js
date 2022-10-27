import Menu from './../menu/menu';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Hr from './../hr/hr';

import './header.scss';

class Header extends Component {
  render() {
    const text = {
      mainpage: (
        <div>
          <h1>Everything You Love About Coffee</h1>
          <Hr color="white"></Hr>
          <h2>
            We makes every day full of energy and taste <br />
            Want to try our beans?
          </h2>
        </div>
      ),
      'our-coffee': <h1>Our Coffee</h1>,
      'one-item': <h1>Our Coffee</h1>,
      about: <h1>For your pleasure</h1>,
    };

    return (
      <header className={'page__' + this.props.page}>
        <Container>
          <Menu
            color="ligth"
            className="pt-3 pb-1"
            changePage={this.props.changePage}
          ></Menu>
          {text[this.props.page]}
        </Container>
      </header>
    );
  }
}

export default Header;
