const initial = { data: [], searchData: [] }


const dataReducer = (state = initial, action) => {
    switch (action.type) {
        case "UpdateData":
            return {
                ...state,
                data: action.payload.data
            }
        case "UpdateSearchData":
            return {
                ...state,
                searchData: action.payload.data
            }
        default:
            return {
                ...state
            }

    }

}

export default dataReducer;