// import Menu from './components/menu/menu';

import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hr from './components/hr/hr';

import './App.scss';

import ourCoffeePic from './components/images/our-coffee-pic.jpg';
import aboutPic from './components/images/about-pic.jpg';
import ItemList from './components/item-list/item-list';

class App extends Component {
  state = {
    page: 'our-coffee',
  };

  products = [
    {
      id: 1,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: false,
      country: 'Brazil',
      image: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: false,
      country: 'Brazil',
      image: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: false,
      country: 'Brazil',
      image: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: true,
      country: 'Brazil',
      image: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 5,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: true,
      country: 'Brazil',
      image: 2,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 6,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: true,
      country: 'Brazil',
      image: 3,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  getProducts = (require) => {
    if (typeof require == 'string' && require === 'all') {
      return this.products;
    }
    return this.products.filter((v) => require.includes(v.id));
  };

  changePage = (e) => {
    // console.log(e.target.getAttribute('data-link'));
    console.log(e.currentTarget.getAttribute('data-link'));
    this.setState({
      page: e.currentTarget.getAttribute('data-link'),
    });
    if (+e.currentTarget.getAttribute('data-item') > 0) {
      this.setState({
        item: +e.currentTarget.getAttribute('data-item'),
      });
    } else {
      this.setState({
        item: false,
      });
    }
  };

  pageItem = () => {
    const image = require('./components/item/images/' +
      this.state.item +
      '_big.jpg');
    const product = this.products.filter((v) => v.id == this.state.item)[0];
    // const productDesc = this.products.filter((v) => v.id == this.state.item);

    return (
      <Container className="text-content">
        <Row className="justify-content-center">
          <Col md={8}>
            <Container>
              <Row className="justify-content-center mb-5">
                <Col md={6}>
                  <img className="text-image" src={image} alt="Our Coffee" />
                </Col>
                <Col md={6}>
                  <h2 className="text-center">{product.name}</h2>
                  <Hr></Hr>
                  <p>
                    <strong>Country</strong>: {product.country}
                  </p>
                  <p>
                    <strong>Description</strong>: {product.desc}
                  </p>
                  <p>
                    <strong>Price</strong>: <span>${product.price}</span>
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  };

  pageOurCoffee = () => {
    return (
      <Container className="text-content">
        <Row className="justify-content-center">
          <Col md={8}>
            <Container>
              <Row className="justify-content-center text-center mb-5">
                <Col md={6}>
                  <img
                    className="text-image"
                    src={ourCoffeePic}
                    alt="Our Coffee"
                  />
                </Col>
                <Col md={6}>
                  <h2>About our beans</h2>
                  <Hr></Hr>
                  <p>
                    Extremity sweetness difficult behaviour he of. On disposal
                    of as landlord horrible.
                  </p>
                  <p>
                    Afraid at highly months do things on at. Situation recommend
                    objection do intention so questions.{' '}
                  </p>
                  <p>
                    As greatly removed calling pleased improve an. Last ask him
                    cold feel met spot shy want. Children me laughing we
                    prospect answered followed. At it went is song that held
                    help face.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={12}>
                  <ItemList
                    products={this.getProducts('all')}
                    changePage={this.changePage}
                  ></ItemList>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  };

  pageAbout = () => {
    return (
      <Container className="text-content">
        <Row className="justify-content-center">
          <Col md={8}>
            <Container>
              <Row className="justify-content-center text-center">
                <Col md={6}>
                  <img className="text-image" src={aboutPic} alt="About" />
                </Col>
                <Col md={6}>
                  <h2>About our goods</h2>
                  <Hr></Hr>
                  <p>
                    Extremity sweetness difficult behaviour he of. On disposal
                    of as landlord horrible.
                  </p>
                  <p>
                    Afraid at highly months do things on at. Situation recommend
                    objection do intention so questions.{' '}
                  </p>
                  <p>
                    As greatly removed calling pleased improve an. Last ask him
                    cold feel met spot shy want. Children me laughing we
                    prospect answered followed. At it went is song that held
                    help face.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={12}>
                  <ItemList
                    products={this.getProducts('all')}
                    changePage={this.changePage}
                  ></ItemList>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  };

  pageMain = () => {
    return (
      <>
        <Container className="text-content">
          <Row className="justify-content-center">
            <Col md={8}>
              <Container>
                <Row className="justify-content-center text-center">
                  <Col md={12}>
                    <h2>About Us</h2>
                    <Hr></Hr>
                    <p>
                      Extremity sweetness difficult behaviour he of. On disposal
                      of as landlord horrible.
                    </p>
                    <p>
                      Afraid at highly months do things on at. Situation
                      recommend objection do intention so questions. As greatly
                      removed calling pleased improve an. Last ask him cold feel
                      met spot shy want. Children me laughing we prospect
                      answered followed. At it went is song that held help face.
                    </p>
                    <p>
                      Now residence dashwoods she excellent you. Shade being
                      under his bed her, Much read on as draw. Blessing for
                      ignorant exercise any yourself unpacked. Pleasant horrible
                      but confined day end marriage. Eagerness furniture set
                      preserved far recommend. Did even but nor are most gave
                      hope. Secure active living depend son repair day ladies
                      now.
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="our-best py-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8}>
                <h2 className="text-center">Our best</h2>
                <ItemList
                  products={this.getProducts([1, 2, 3])}
                  changePage={this.changePage}
                ></ItemList>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  };

  render() {
    let page;
    switch (this.state.page) {
      case 'our-coffee':
        page = this.pageOurCoffee();
        break;
      case 'mainpage':
        page = this.pageMain();
        break;
      case 'one-item':
        page = this.pageItem();
        break;
      case 'about':
        page = this.pageAbout();
        break;

      default:
        break;
    }

    return (
      <div className="App">
        <Header page={this.state.page} changePage={this.changePage}></Header>
        {page}
        <Footer page={this.state.page} changePage={this.changePage}></Footer>
      </div>
    );
  }
}

export default App;
