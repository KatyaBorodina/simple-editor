import { initialState } from './index';
import { ADD_IMAGE, ADD_VIDEO } from './actions';

const simpleEditorApp = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return [
                ...state,
                action.image
            ];
        case ADD_VIDEO:
            return state;
        default:
            return state;
    }
};

export default simpleEditorApp;