import React, { useState } from 'react';
import { FaSortAmountUp, FaSortAmountDown, FaDollarSign, FaPercentage } from 'react-icons/fa';

function SortBar({ products, setProducts, category }) {
  const [priceAsc, setPriceAsc] = useState(false);
  const [discountAsc, setDiscountAsc] = useState(true);

  const sortByPrice = () => {
    const sorted = [...products].sort((a, b) =>
      priceAsc ? a.price - b.price : b.price - a.price
    );
    setProducts(sorted);
    setPriceAsc(!priceAsc);
  };

  const sortByDiscount = () => {
    const applyDiscount = (product) => {
      let discount = 0;
      if (product.category === "jewelery") discount = 0.10;
      if (product.category === "men's clothing") discount = 0.30;
      return product.price - (product.price * discount);
    };

    const sorted = [...products].sort((a, b) =>
      discountAsc ? applyDiscount(a) - applyDiscount(b) : applyDiscount(b) - applyDiscount(a)
    );
    setProducts(sorted);
    setDiscountAsc(!discountAsc);
  };

  return (
    <div className="d-flex gap-3 mt-2 align-items-center">
      <button
        className="btn btn-outline-primary d-flex align-items-center gap-2"
        onClick={sortByPrice}
      >
        <FaDollarSign />
        Price
        {priceAsc ? <FaSortAmountUp /> : <FaSortAmountDown />}
      </button>

      {category === 'all' && (
        <button
          className="btn btn-outline-success d-flex align-items-center gap-2"
          onClick={sortByDiscount}
        >
          <FaPercentage />
          Discount
          {discountAsc ? <FaSortAmountUp /> : <FaSortAmountDown />}
        </button>
      )}
    </div>
  );
}

export default SortBar;
