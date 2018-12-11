import { initialState } from './index';
import { ADD_IMAGE, CHANGE_WIDTH } from './actions';

const simpleEditorApp = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return [
                ...state,
                action.image
            ];
        case CHANGE_WIDTH:
            let oldItem = state.find((item) => item.id === action.id);
            let index = state.indexOf(oldItem);
            let newItem = { ...oldItem, width: action.width };

            return [
                ...state.slice(0, index),
                newItem,
                ...state.slice(index + 1, state.length)
            ];
        default:
            return state;
    }
};

export default simpleEditorApp;