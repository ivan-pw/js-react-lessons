import { Component } from 'react';
import { Nav } from 'react-bootstrap';

import './menu.scss';

import logoLigth from './images/beens-ligth.svg';
import logoDark from './images/beens-dark.svg';

class Menu extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const links = [
      { name: 'Coffee house', link: 'mainpage' },
      { name: 'Our coffee', link: 'our-coffee' },
      { name: 'For your pleasure', link: 'about' },
    ];

    // const linksList = links.reduce((markup, current) => {
    //   if (typeof current == 'string') {
    //     return '';
    //   }

    //   return (
    //     <Nav.Item>
    //       <Nav.Link href={current.link}>{current.name}</Nav.Link>
    //     </Nav.Item>
    //   );
    // }, '');

    // console.log(linksList);

    // .map((link) => {
    //   return (
    //     <Nav.Item>
    //       <Nav.Link href="#">Coffee house</Nav.Link>
    //     </Nav.Item>
    //   );
    // });

    return (
      <Nav
        className={
          this.props.className +
          ' ' +
          (this.props.color === 'ligth' ? 'color-ligth' : 'color-dark')
        }
      >
        <Nav.Item>
          <img
            src={this.props.color === 'ligth' ? logoLigth : logoDark}
            alt="Coffee beens"
          />
        </Nav.Item>
        {links.map((v, i) => {
          return (
            <Nav.Item key={'menu-item-' + i}>
              <Nav.Link
                href="#"
                data-link={v.link}
                onClick={(e) => this.props.changePage(e)}
              >
                {v.name}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    );
  }
}

export default Menu;
