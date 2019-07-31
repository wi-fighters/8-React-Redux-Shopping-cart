import React, {Component} from 'react';
import {removeOne, removeAll} from '../modules/actions';
import {connect} from 'react-redux';

class ShoppingCartItem extends Component {
  render(){
    const {item, removeOne, removeAll} = this.props;

    return (
      <li>
        <p> {item.title} | ${item.price} | x{item.quantity} </p>
        <div>
          <button onClick={() => removeOne(item)}>Remove One</button>
          <button onClick={() => removeAll(item)}>Remove All</button>
        </div>
      </li>
    );
  }
}

const mapStoreToProps = store => ({});
const mapActionsToProps = {
  removeOne,
  removeAll
}

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(ShoppingCartItem);
