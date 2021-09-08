import globalActionType from "./globalActionType";

const globalState = {
    totalOrder: 0
}

// Reducer
const globalReducer = (state = globalState, action) => {
    switch(action.type){
        case globalActionType.PLUS_ORDER:
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        case globalActionType.MINUS_ORDER:
            let totalOrder = 0;
            if(state.totalOrder>0){
                totalOrder = state.totalOrder - 1
            }
            return {
                ...state,
                totalOrder: totalOrder
            }
        default:
            return state;
    }
}

export default globalReducer;