import React, { Component } from 'react';
import * as Message from './../constants/message';
class CartItem extends Component {   
    render() {
        var {cartItem}=this.props;
        var {quantity}=cartItem;
        //console.log(quantity);
        
        return (
                                                            
                <tr>
                    <th scope="row">
                        <img src={cartItem.product.image}
                            alt="" className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{cartItem.product.name}</strong>
                        </h5>
                    </td>
                    <td>{cartItem.product.price}$</td>
                    <td className="center-on-small-only">
                        <span className="qty">{quantity} </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label 
                                onClick={()=>this.onUpdateQuantity(cartItem.product,cartItem.quantity-1)}
                                className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            >
                                <a>—</a>
                            </label>
                            <label 
                                onClick={()=>this.onUpdateQuantity(cartItem.product,cartItem.quantity+1)}
                                className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td>{this.showSubTotal(cartItem.product.price,cartItem.quantity)}$</td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-primary waves-effect waves-light" 
                            data-toggle="tooltip" 
                            data-placement="top"
                            title="" 
                            data-original-title="Remove item"
                            onClick={()=>this.onDelete(cartItem.product)}
                        >
                            X
                        </button>
                    </td>
                </tr>                                                            
        
        );
    }
    showSubTotal=(price,quantity)=>{
        return price*quantity;
    }
    onDelete=(product)=>{
        this.props.onDelete(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS);
    }
    onUpdateQuantity=(product,quantity)=>{
        if(quantity>0){
           
            this.props.onUpdateProductInCart(product,quantity);
            this.props.onChangeMessage(Message.MSG_UPDATE_CARD_SUCCESS);
        }
       
    }
}

export default CartItem;
