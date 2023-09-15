import React from "react";
import AddToCart from "./AddToCart";
//import styles from "./ProductCard.module.css";


const ProductCard = () => {
  return <div className='p-1 my-5 bg-sky-400 text-white text-xl hover:bg-slate-800'>
    <AddToCart />
  </div>;
};

export default ProductCard;
