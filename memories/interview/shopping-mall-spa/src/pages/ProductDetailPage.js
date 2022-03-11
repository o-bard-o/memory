import { E } from "../core/react.js"

export default function ProductDetailPage() {
  const { pathname } = location;
  const [, , productId] = pathname.split('/');
  return ( 
    E("div", [{k:"class", v:"ProductDetailPage"}], 
      E("h1", null, "커피잔 상품 정보"),
      E("div", [{k:"class", v:"ProductDetail"}],
        E("img", [{k:"src", v:"https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"}]),
        E("div", [{k:"class", v:"ProductDetail__info"}],
          E("h2", null, "커피잔"),
          E("div", [{k:"class", v:"ProductDetail__price"}], "10,000원~"),
          E("select", null, 
            E("option", null, "선택하세요."),
            E("option", null, "100개 번들"),
            E("option", null, "1000개 번들(+5,000)"),
          ),
          E("div", [{k:"class", v:"ProductDetail__selectedOptions"}],
            E("h3", null, "선택된 상품"),
            E("ul", null, 
              E("li", null, 
                "커피잔 100개 번들 10,000원", 
                E("div", null, 
                  E("input", [{k:"type", v:"number"}, {k:"value", v:"10"}]),
                  "개"
                )
              ),
              E("li", null, 
                "커피잔 1000개 번들 15,000원", 
                E("div", null, 
                  E("input", [{k:"type", v:"number"}, {k:"value", v:"5"}]),
                  "개"
                )
              )
            ),
            E("div", [{k:"class", v:"ProductDetail__totalPrice"}], "175,000원"),
            E("button", [{k:"class", v:"OrderButton"}], "주문하기")
          ),
        )
      )
    )
  )
}
