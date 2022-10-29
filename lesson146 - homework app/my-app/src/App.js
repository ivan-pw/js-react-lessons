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
    },
    {
      id: 2,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: false,
      country: 'Brazil',
      image: 1,
    },
    {
      id: 3,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: false,
      country: 'Brazil',
      image: 1,
    },
    {
      id: 4,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: true,
      country: 'Brazil',
      image: 1,
    },
    {
      id: 5,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: true,
      country: 'Brazil',
      image: 2,
    },
    {
      id: 6,
      name: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
      best: true,
      country: 'Brazil',
      image: 3,
    },
  ];

  getProducts = (require) => {
    if (typeof require == 'string' && require === 'all') {
      return this.products;
    }
    return this.products.filter((v) => require.includes(v.id));
  };

  pageOurCoffee = () => {
    return (
      <Container className="text-content">
        <Row className="justify-content-center">
          <Col md={8}>
            <Container>
              <Row className="justify-content-center text-center">
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
                  <ItemList products={this.getProducts('all')}></ItemList>
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
                  <ItemList products={this.getProducts('all')}></ItemList>
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
                <ItemList products={this.getProducts([1, 2, 3])}></ItemList>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  };

  changePage = (e) => {
    console.log(e.target.getAttribute('data-link'));
    this.setState({
      page: e.target.getAttribute('data-link'),
    });
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
        // page = this.pageOurCoffee();
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
