import * as Types from './../constants/actionTypes';
import * as Message from './../constants/message'
var initialState=Message.MSG_WELCOME;
//tạo reducer cho product
const message=(state=initialState,action)=>{   
    switch(action.type){  
        case Types.CHANGE_MESSAGE:
            return action.message;  
        default:return state;
    }
}

export default message;