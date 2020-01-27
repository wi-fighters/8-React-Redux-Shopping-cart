import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProductListItem from './ProductListItem';

class ProductList extends Component {
  render(){
    const {items} = this.props;
    return (
      <ul>
        {items.map(item => <ProductListItem item={item} key={item.id} />)}
      </ul>
    );
  }
}

const mapStoreToProps = store => ({
  items: Object.values(store.products)
});

export default connect(mapStoreToProps)(ProductList);
