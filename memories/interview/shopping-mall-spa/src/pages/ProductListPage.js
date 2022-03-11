import { E } from "../core/react.js"

const ProductListPage = () => {
  return ( 
    E("div", [{k:"class", v:"ProductionListPage"}], 
      E("h1", null, "상품목록"),
      E("ul", null,
        E("li", [{k:"class", v:"Product"}],
          E("img", [{k:"src", v:"https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"}]),
          E("div", [{k:"class", v:"Product__info"}], 
            E("div", null, "커피잔"),
            E("div", null, "10,000원")
          )
        )
      )
    )
  )
}

export default ProductListPage;