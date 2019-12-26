import { createSelector } from "reselect";

const selectShop = state => state.shop;

const selectCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

export default selectCollection;
