import React from 'react';

function CartItem({ item }) {
  return (
    <div className="cart">
      <img className="cart_img" src={item.posterUrlPreview} alt="posterUrlPreview" />
      <div className="cart__info">
        <div className="cart__info-name">{item.nameRu}</div>
        <div className="cart__info-year">{item.year}</div>
      </div>
    </div>
  );
}

export default CartItem;
