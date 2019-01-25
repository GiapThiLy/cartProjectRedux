import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './../components/Product';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from './../actions/index';
class ProductsContainer extends Component {
    render() {
        var {products}=this.props;
        
        return (
            <Products>
                {this.showProducts(products)}    
            </Products>                         
        );
    }
    showProducts=(products)=>{
        var result=null;
        //console.log(products);
        var {onAddToCart,onChangeMessage}=this.props;
        if(products.length>0){
            result=products.map((product,key)=>{
                return <Product 
                            key={key}
                            product={product}    
                            onAddToCart={onAddToCart} 
                            onChangeMessage={onChangeMessage}                       
                        />
            });
        }
        return result;
    }
   
}
//kiểm tra các object mà component nhận vào
ProductsContainer.propTypes={
    //ktra products có phải là 1 mảng(trong 1 mảng có phải là object). có phải bắt buộc.
    products:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    onAddToCart:PropTypes.func.isRequired,
}
const mapStateToProps=state=>{
    return{
        products:state.products,
    };
};
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onAddToCart:(product)=>{
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message));
        }
    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
