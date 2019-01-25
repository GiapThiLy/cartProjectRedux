import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import * as Message from './../constants/message';
import CartResult from '../components/CartResult';
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions';
class CartContainer extends Component {
    render() {
        var {cart}=this.props;
       // console.log(cart);
        
        return (
          <Cart> 
              {this.showCart(cart)}
              {this.showTotalAmount(cart)}
          </Cart>                   
        );
    }
    showCart=(cart)=>{
        var result=<tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        var {onDelete,onChangeMessage,onUpdateProductInCart}=this.props;
        if(cart.length>0){
           result=cart.map((cartItem,index)=>{
                return <CartItem
                            key={index}
                            cartItem={cartItem}
                            onDelete={onDelete}
                            onChangeMessage={onChangeMessage}
                            onUpdateProductInCart={onUpdateProductInCart}
                        />
           });
       }
       return result;
    }
    showTotalAmount=(cart)=>{
        var result=null;
        if (cart.length > 0) {
            return <CartResult
                        cart={cart}
                    />
        }
        return result;
    }
   
}
//kiểm tra các object mà component nhận vào
CartContainer.propTypes={
    //ktra products có phải là 1 mảng(trong 1 mảng có phải là object). có phải bắt buộc.
    cart:PropTypes.arrayOf(
        PropTypes.shape({
            product:PropTypes.shape({
                id:PropTypes.number.isRequired,
                name:PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                description:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                inventory:PropTypes.number.isRequired,
                rating:PropTypes.number.isRequired
            }).isRequired,
            quantity:PropTypes.number.isRequired,
           
        }),             
    ).isRequired,
    onDelete:PropTypes.func.isRequired,
    onUpdateProductInCart:PropTypes.func.isRequired,
    onChangeMessage:PropTypes.func.isRequired,
}
const mapStateToProps=state=>{
    return{
        cart:state.cart,
    };
};
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onDelete:(product)=>{
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(actUpdateProductInCart(product,quantity));
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
