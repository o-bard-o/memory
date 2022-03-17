# Meta App Review

## 1. 앱 설정

- 기본 설정의 앱 아이콘, 앱 도메인, 개인정보처리방침 URL, 카테고리를 설정한다.
- 고급 설정
  - 앱 제한 사항에서 국가 제한 설정을 잘 확인해본다.

## 2. 테스트 앱 생성

- 내 앱  → 관리자 앱 탭에서 테스트 앱 만들기를 선택한다.

  ![Screen Shot 2022-03-18 at 2 50 47 AM](https://user-images.githubusercontent.com/46441280/158889991-b2945653-eb0c-4f1c-8008-f079c93ad7f4.png)

## 3. 테스트 사용자 생성 및 권한 부여

- 테스트 앱을 생성했다면 테스트 사용자를 만든다.
- 개발을 하고 동작 화면을 녹화할 때만 사용된다. 검수할 때는 검수자가 알아서 테스트 계정을 만들어 검수를 한다.
- 권한을 부여할 때 막 넣지 않고 하나씩 넣는 것이 추천된다. 그래야 권한이 언제 사용되는지 파악할 수 있다. 이는 다음 단계인 스크린 레코딩을 할 때 중요하다.
- 자세한 생성방법은 [공식 문서](https://developers.facebook.com/docs/development/build-and-test/test-users) 에 자세하게 나와있다.

## 4. 스크린 레코딩

- 가장 중요한 단계이다.
- 웹사이트의 경우, 웹사이트 로그인부터 페이스북 로그인, 그리고 기능을 사용하는 장면까지 모두 담겨야 한다.
- 즉, 웹사이트 메인 → 웹사이트 로그인 → 페이스북 로그인 버튼 확인 → 요청 권한 확인 → 페이스북 로그인 완료 → API 사용 순으로 진행되어야 한다.
- 상황을 설명하는 자막을 반드시 추가해야 한다. (영어로 추가하면 검수가 좀 더 수월하게 된다.)
- 권한을 사용하는 상황에서는 해당 권한이 어떤 데이터에 접근을 하는지 적는다.
  - 만약 ‘user_profile’ 권한을 사용한다면 [Get user profile with ‘user_profile’ permission] 같이 적어둔다.
- 가능하다면 개발자 도구를 열어 네트워크 항목을 보여 준다. 검수자가 자체적으로 테스트 계정을 만들어 검수하다 보니 의도와 다르게 작동하는 경우가 있을 수 있다.
- 자세한 녹화 방법은 [공식 문서](https://developers.facebook.com/docs/app-review/submission-guide/screen-recordings) 에 자세하게 나와있다.

## 5. 제출 상세 정보 작성

- 크게 두가지를 작성한다. 페이스북 로그인까지 가는 단계(앱 인증 상세 정보)와 권한을 사용하는 이유다.
- 앱 인증 상세정보는 다음과 같다. 페이스북 로그인까지 가는 단계를 명세하면 된다.
    1. 웹사이트에 접속합니다.
    2. 웹사이트 로그인 버튼을 클릭합니다.
    3. 웹사이트 테스트 계정으로 로그인합니다.
- 만약 서비스 계정을 로그인하고 페이스북 계정을 연동하는 방식이라면 아래에 서비스 로그인을 위한 테스트 계정을 추가해야 한다.
- 권한을 요청하는 이유는 이 권한을 사용하여 어떤 데이터에 접근을 하는지, 어떤 엔드포인트를 사용하고 어떤 데이터를 얻게 되는지에 대해 작성한다.

## 6. 제출 전 확인 사항

- 제출 전에 웹사이트에 연동된 페이스북 앱이 테스트 앱인지 확인해야 한다. 실제 적용할 앱은 검수 전이기 때문에 권한이 없어서 개발자를 제외하고는 앱을 사용할 수 없으며, 이는 검수자도 마찬가지다.
- 웹사이트에 검수 통과 전의 일반 앱을 연동시켜두었다면 검수가 거절되므로 반드시 테스트 앱을 연동 시키고 제출해야 한다.

## References

- [https://developers.facebook.com/docs/app-review/](https://developers.facebook.com/docs/app-review/)
- [https://developers.facebook.com/docs/app-review/submission-guide/screen-recordings](https://developers.facebook.com/docs/app-review/submission-guide/screen-recordings)
- [https://developers.facebook.com/docs/development/build-and-test/test-users](https://developers.facebook.com/docs/development/build-and-test/test-users)
- [https://teserre.tistory.com/17](https://teserre.tistory.com/17)
