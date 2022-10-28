import { Component } from 'react';
import Item from './../item/item';

class ItemList extends Component {
  render() {
    const selectedProducts = this.props.products.map((v, i) => {
      return <Item product={v} key={i}></Item>;
      // console.log(v);
    });

    return <div className="item-list">{selectedProducts}</div>;
  }
}

export default ItemList;
