//npm install redux-thunk --save

export const Loading = (data) => (dispatch) => {
    dispatch({type: "CHANGE_LOADING", value: true});
    return (
        setTimeout(() => {
            dispatch({type: "CHANGE_LOADING", value: false});
            alert(data.message);
        }, 3000)
    )
}