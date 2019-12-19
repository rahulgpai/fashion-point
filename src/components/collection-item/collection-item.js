import React from "react";
import "../../styles/collection-item/collection-item.scss";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cart/cartActions";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: cartItem => dispatch(addItemToCart(cartItem))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
