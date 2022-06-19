import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);

export const searchCollection = searchValue => createSelector(
    [selectShop],
    collections => (collections ? collections[searchValue] : null)
)

export const selectOverview = productUrlParam => createSelector(
    [selectCollection],
    collections => collections[productUrlParam]
);