const initialState = {
    popup: "false",
    isLogin: false
}

const reduxReducer = (state=initialState, action) => {
    if(action.type == "CHANGE_POPUP"){
        return {
            ...state,
            popup: action.value
        }
    }
    if(action.type == "CHANGE_ISLOGIN"){
        return {
            ...state,
            isLogin: action.value
        }
    }
    return state;
}

export default reduxReducer;