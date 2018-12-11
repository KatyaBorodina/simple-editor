import { store } from './index';

export const ADD_IMAGE = 'ADD_IMAGE';
export const ADD_VIDEO = 'ADD_VIDEO';
export const CHANGE_WIDTH = 'CHANGE_WIDTH';

export const addImage = (image) => ({
    type: ADD_IMAGE,
    image: {
        id: store.getState().length + 1,
        type: 'image',
        width: 10,
        src: image.src
    }
});

export const changeItemWidth = (id, width) => ({
    type: CHANGE_WIDTH,
    id,
    width
});