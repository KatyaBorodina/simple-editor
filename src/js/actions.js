import { store } from './index';

export const ADD_IMAGE = 'ADD_IMAGE';
export const ADD_VIDEO = 'ADD_VIDEO';

export const addImage = (image) => ({
    type: ADD_IMAGE,
    image: {
        id: store.getState().length + 1,
        type: 'image',
        src: image.src
    }
});