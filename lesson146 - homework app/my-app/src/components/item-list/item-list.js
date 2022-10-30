import { Component } from 'react';
import Item from './../item/item';
import { Row } from 'react-bootstrap';

class ItemList extends Component {
  render() {
    const selectedProducts = this.props.products.map((v, i) => {
      return (
        <Item product={v} key={i} changePage={this.props.changePage}></Item>
      );
      // console.log(v);
    });

    return <Row className="item-list">{selectedProducts}</Row>;
  }
}

export default ItemList;
