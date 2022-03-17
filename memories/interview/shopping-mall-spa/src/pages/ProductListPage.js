import { E, useState } from "../core/react.js";
import { request } from "../utils/api.js";
import ProductList from "../components/ProductList.js";

const ProductListPage = () => {
  const [ productList, setProductList ] = useState([]);

  const fetchProducts = async () => {
    const products = await request('/products');
    setProductList(products);
  }
  fetchProducts();

  return ( 
    E("div", [{k:"class", v:"ProductionListPage"}], 
      E("h1", null, "상품목록"),
      ProductList(productList)
    )
  )
}

export default ProductListPage;