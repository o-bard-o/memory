import { E } from "../core/react.js";

const ProductList = (initialState) => {

  return (
    E("ul", null,
      initialState.map(product => {
        E("li", [{k:"class", v:"Product"}],
          E("img", [{k:"src", v:product.imageUrl}]),
          E("div", [{k:"class", v:"Product__info"}], 
            E("div", null, product.name),
            E("div", null, product.price)
          )
        )
      })
    )
  )
}

export default ProductList;