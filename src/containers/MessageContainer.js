import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';
class MessageContainer extends Component {
    render() {     
        var {message}=this.props;           
        return (
               <Message>
                   {message}
               </Message>                  
        );
    }   
   
}
//kiểm tra các object mà component nhận vào
MessageContainer.propTypes={
   message:PropTypes.string.isRequired,   
}
const mapStateToProps=state=>{
    return{
        message:state.message,
    };
};

export default connect(mapStateToProps,null)(MessageContainer);
