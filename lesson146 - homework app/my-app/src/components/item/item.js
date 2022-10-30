import { Component } from 'react';
import { Col } from 'react-bootstrap';

import './item.scss';

class ItemCoffee extends Component {
  render() {
    const { product, changePage } = this.props;

    const image = require('./images/' + product.image + '.jpg');

    return (
      <Col md={4}>
        <div
          className="item text-right"
          onClick={changePage}
          data-link="one-item"
          data-item={product.id}
        >
          <div
            className="product__image mb-3"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          >
            {/* <img src= alt={product.name} className="mb-3" /> */}
          </div>
          <div className="product__name">{product.name}</div>
          <div className="product__country">{product.country}</div>
          <div className="product__price mt-2">${product.price}</div>
        </div>
      </Col>
    );
  }
}

export default ItemCoffee;
