import { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import './filter.scss';

class Filter extends Component {
  genFilterButtons = () => {
    const { products } = this.props;
    let countries = [];

    products.forEach((element) => {
      countries.push(element.country);
    });

    countries = [...new Set(countries)];

    let buttons = countries.map((v, i) => {
      return (
        <button
          type="button"
          className="country_filter"
          data-country={v}
          key={i}
          onClick={this.props.filterItems}
        >
          {v}
        </button>
      );
    });

    return buttons;
  };

  render() {
    return (
      <div className="filter">
        <Row>
          <Col md={6}>
            <label>Looking for</label>
            <input
              type="text"
              className="text_filter"
              placeholder="start typing here..."
              onChange={this.props.filterItems}
            ></input>
          </Col>
          <Col md={6}>
            <label>Or filter</label>
            {this.genFilterButtons()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Filter;
