const defaultState = {
    Types: [],
    checkall: false,
    total: 0,
    summer: 0,
    details: []
}

const listReducers = ( state = defaultState, action ) => {
    const { type, payload } = action;
    switch(type){
        case 'TYPES':
            return { ...state, Types: payload }
        case 'ADD':
            return { ...state, add: [...payload] }
        case 'MIN':
            return { ...state, min: [...payload] }
        case 'TOTAL':
            return { ...state, total: payload }
        case 'SUMMER':
            return { ...state, summer: payload }
        case 'CHECKALL':
            return { ...state, checkall: payload }
        case 'CHECKONE':
            return { ...state, Types: [...payload] }
        default:
            return state;
    }
}

export default listReducers;