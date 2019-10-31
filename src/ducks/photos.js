import { Record } from 'immutable'

export const moduleName = 'photos'
export const START = "_START";
export const SUCCESS = "_SUCCESS";
export const FAIL = "_FAIL";
export const FETCH_PHOTOS = `${moduleName}/FETCH_PHOTOS`;
export const SELECT_PHOTO = `${moduleName}/SELECT_PHOTO`;


// Reducer
const ReducerState = Record({
    photos: null,
    selectedPhoto:null,
    loading: false,
    loaded: false
});

export default function reducer(state = new ReducerState(), action) {
    const { type, payload, response } = action;

    switch (type) {
        case FETCH_PHOTOS + START:
            return state.set('loading', true)

        case FETCH_PHOTOS + SUCCESS:
            return state
                .set('photos', response)
                .set('loading', false)
                .set('loaded', true)

        case SELECT_PHOTO:
            return state.set('selectedPhoto', payload.id)

        default:
            return state
    }
}

// Actions Creators
export function loadPhotos() {
    return (dispatch) => {
        dispatch({
            type: FETCH_PHOTOS + START
        })

        fetch('https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043')
            .then((res) => res.json())
            .then((response) =>
                dispatch({
                    type: FETCH_PHOTOS + SUCCESS,
                    response
                })
            )
            .catch((error) =>
                dispatch({
                    type: FETCH_PHOTOS + FAIL,
                    error
                })
            )
    }
}

export function selectPhoto(id) {
  return {
      type:SELECT_PHOTO,
      payload: { id }
  }
}

// Selectors
export const stateSelector = state => state[moduleName];
export const getPhotos = state => stateSelector(state).photos;
export const getLoading = state => stateSelector(state).loading;
export const getSelectedPhoto = state => getPhotos(state).find(photo => photo.id === stateSelector(state).selectedPhoto);

