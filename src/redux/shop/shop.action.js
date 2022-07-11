import ShopActionTypes from "./shop.types";
import { convertCollectionToMap, fireStore } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {

        dispatch(fetchCollectionsStart());
        onSnapshot(collection(fireStore, 'collections'),
            async(snapshot) => {
                const collectionsMap = await convertCollectionToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })

        // .then((snapshot) => {
        //     const collectionsMap = convertCollectionToMap(snapshot);
        //     dispatch(fetchCollectionsSuccess(collectionsMap));
        // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
        // .catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
};