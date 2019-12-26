import React from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import selectCollection from "../../reselect-selectors/shop/shop-selectors";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollection
});

export default connect(mapStateToProps)(ShopPage);
