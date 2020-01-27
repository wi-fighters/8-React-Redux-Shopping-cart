import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {checkout} from '../modules/actions';

import ShoppingCartItem from './ShoppingCartItem';


class ShoppingCart extends Component {
  render() {
    const {items, checkout} = this.props;
    return (
      <Fragment>
        <ul>
          {items.map(item => <ShoppingCartItem item={item} key={item.id}/>)}
        </ul>
        <p>Total: ${items.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
        <div>
          <button onClick={checkout}>Checkout</button>
        </div>
      </Fragment>
    );
  }
}

const mapStoreToProps = store => ({
  items: Object.values(store.cart)
});

const mapActionsToProps = {
  checkout
};

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(ShoppingCart);
