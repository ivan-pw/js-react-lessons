import { Component } from 'react';

class ItemCoffee extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="item">
        <div className="product__name">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
    );
  }
}

export default ItemCoffee;
