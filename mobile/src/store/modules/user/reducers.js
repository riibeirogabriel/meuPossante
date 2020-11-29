const INITIAL_STATE = {
    data: {},
    loading: false,
};

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
    case '@user/REQUEST_USER':
        return { ...state, loading: true };
    default:
        return state;
    }
}
