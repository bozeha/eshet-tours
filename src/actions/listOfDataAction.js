


export const UpdateListOfDataAction = (dataReceived) => (dispatch) => {
    dispatch({
        type: "UpdateData",
        payload: {
            data: dataReceived
        }
    })

}
export const UpdateListSearchOfDataAction = (dataReceived) => (dispatch) => {
    dispatch({
        type: "UpdateSearchData",
        payload: {
            data: dataReceived
        }
    })

}
