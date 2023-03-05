
interface RepositoriesReducerState {
    repositories: Object[],
    loading: boolean,
    error: null | string
}

export interface actionData {
    type: string,
    payload?: any
}

const initialState: RepositoriesReducerState = {
    repositories: [],
    loading: false,
    error: null
};

const RepositoriesReducer = (state = initialState, action: actionData): RepositoriesReducerState => {
    switch (action.type) {
        case 'search_repositories':
            return {
                ...state,
                loading: true,
                repositories: []
            };
            break;
        case 'search_repositories_success':
            return {
                ...state,
                loading: false,
                repositories: action.payload
            }
            break;
        case 'search_repositories_error':
            return {
                ...state,
                loading: false,
                error: action.payload,
                repositories: []
            }
            break;
        default:
            return state;
    }
}

export default RepositoriesReducer;