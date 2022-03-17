import { E } from "./core/react.js";

import ProductListPage from './pages/ProductListPage.js'
import ProductDetailPage from './pages/ProductDetailPage.js'
import CartPage from './pages/CartPage.js'

const App = () => {
  const { pathname } = location;

  switch(pathname) {
    case "/": {
      return E(ProductListPage);
    }
    case "/cart": {
      return E(CartPage);
    }
    default: {
      return E(ProductDetailPage);
    }
  }
};

export default App;
