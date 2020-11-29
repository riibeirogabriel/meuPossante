const INITIAL_STATE = {
    data: {},
    loading: false,
};

export default function car(state = INITIAL_STATE, action) {
    switch (action.type) {
    case '@car/REQUEST_CAR':
        return { ...state, loading: true };
    default:
        return state;
    }
}
