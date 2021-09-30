const initialState = {
    popup: false,
    isLogin: false,
    username: "Andrian"
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
    if(action.type == "CHANGE_USERNAME"){
        return {
            ...state,
            username: action.value
        }
    }
    return state;
}

export default reduxReducer;