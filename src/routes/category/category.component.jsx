import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { CategoryContainer, CategoryTitle } from "./category.styles";

import Spinner from "../../components/spinner/spinner.component";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selectors";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { isLoading } = useSelector(selectIsLoading);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
