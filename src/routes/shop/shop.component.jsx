import React, { useContext } from "react";
// import { ProductsContext } from "../../components/contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
// import { CategoriesContext } from "../../components/contexts/categories.context";
// import { Fragment } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";


const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // console.log(categoriesMap)
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}>
      <Route path=':category' element={<Category/>}/>
      
      </Route>
    </Routes>
   
  );
};

export default Shop;
