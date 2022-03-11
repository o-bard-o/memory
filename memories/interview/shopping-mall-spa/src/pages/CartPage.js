import { E } from "../core/react.js"

export default function ProductDetailPage() {
  return ( 
    E("div", [{k:"class", v:"CartPage"}], 
      E("h1", null, "장바구니"),
      E("div", [{k:"class", v:"Cart"}], 
        E("ul", null, 
          E("li", [{k:"class", v:"Cart__item"}],
            E("img", [{k:"src", v:"https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"}]),
            E("div", [{k:"class", v:"Cart__itemDescription"}],
              E("div", null, "커피잔 100개 번들 10,000원 10개"),
              E("div", null, "100,000원"),
            )
          ),
          E("li", [{k:"class", v:"Cart__item"}],
            E("img", [{k:"src", v:"https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"}]),
            E("div", [{k:"class", v:"Cart__itemDescription"}],
              E("div", null, "커피잔 1000개 번들 15,000원 5개"),
              E("div", null, "75,000원"),
            )
          )
        ),
        E("div", [{k:"class", v:"Cart__totalPrice"}], "총 상품가격 175,000원"),
        E("button", [{k:"class", v:"OrderButton"}], "주문하기")  
      )
    )
  )
}