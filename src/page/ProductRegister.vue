<template>
  <HeaderComponent/>
  <div class="login-container">
    <div class="content-container">
      <br>
      <div>
        <div class="signupfont"><h3>상품 등록</h3></div>
      </div>
      <br>
      <div class="confortLogin">판매하실 상품에 대해 자세하게 기입해주세요</div>
      <hr class="line">
    </div>
    <br>

    <form id="signupForm">
      <div class="insertImg">
        <h5>상품 사진</h5>
        <div class="productImg">
          <div class="css-1rgmcy8 em8wpqo3">
            <i class="fa-solid fa-camera"></i> <br>
            <span class="css-kvdjin em8wpqo1">사진을 끌어다 놓으세요</span> <br>
            <span class="css-16dqprk em8wpqo0">10장까지 올릴 수 있어요.</span> <br><br>
            <button type="button" class="css-nd2q8i">PC에서 불러오기</button>
          </div>

        </div>
      </div>
      <div class="insertEmail"><h5>상품 이름</h5></div>
      <input type="text" placeholder="상품 이름" id="상품이름" required>
      <br>

      <div class="insertpassword"><h5>상품 원가</h5></div>
      <div class="insertpassword2">상품이 판매되는 원가를 입력해주세요.</div>
      <input type="text" placeholder="상품 원가" id="상품 원가" required>
      <br>

      <div class="insertcheck"><h5>상품의 할인된 가격</h5></div>
      <div class="insertpassword2">공동구매를 통해 판매하게 될 상품의 할인된 가격을 입력해주세요.</div>
      <input type="text" placeholder="상품의 할인된 가격" id="상품의 할인된 가격" required>
      <br>

      <div class="insertnick"><h5>상품 상품 정보</h5></div>
      <div class="insertnick2">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</div>
      <input type="text" placeholder="상품 상품 정보" id="상품 상품 정보" required>
      <br>

      <div class="insertnick"><h5>공동구매 참여 인원 수 </h5></div>
      <div class="insertnick2">모집할 공동구매 인원을 입력해주세요.</div>
      <input type="text" placeholder="공동구매 참여 인원 수" id="공동구매 참여 인원 수" required>
      <button type="submit">상품 등록하기</button>
    </form>
  </div>
<FooterComponent/>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "ProductRegisterPage",
  components: {FooterComponent, HeaderComponent}
}
</script>

<style>
*{
  font-family: 'GmarketSans';
}

body {
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 50px;
  width: 100%;
}

.login-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  text-align: center;
  margin-top: 20px; /* 이미지와 로고에 겹치지 않도록 여백 추가 */
  margin: 0 auto;
}

.text-with-image {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  text-align: center;
  top: 15px; /* 화면 상단에 정렬 */
  left: 10px; /* 화면 왼쪽에 정렬 */
  padding: 0px; /* 간격 조절 */
  z-index: 1000; /* 다른 요소들보다 위에 표시되도록 설정 */
  color: #494949;
  font-size: 14px;
  justify-content: center;
}

.text-with-image img {
  width: 130px;
  height: auto;
  margin-right: 5px;
  border-radius: 20%;
}

.login-container h2 {
  color: #333;
}

.login-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-container button {
  width: inherit;
  padding: 10px;
  background-color: #18cc3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-container button:hover {
  background-color: #00ab03;
}

.content-container {
  text-align: center;
  margin-top: 20px;
}

.content-container a {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 12px;
}

.sns-buttons {
  margin-top: 20px;
}

.sns-buttons a {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.sns-buttons .facebook {
  background-color: #3b5998;
}

.sns-buttons .kakao {
  background-color: #ffeb00;
}

.sns-buttons .naver {
  background-color: #00c63b;
}

.confortLogin {
  font-size: 11px;
  color: #696969;
  margin-top: 0px;
  margin-bottom: -7px;
}

.sns-buttons img {
  width: 15px;
  height: 15px;
  margin-right: 3px;
}

.insertImg{
  text-align: left;
  margin-top: -30px;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertEmail {
  text-align: left;
  margin-top: -30px;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertpassword {
  text-align: left;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertpassword2 {
  text-align: left;
  margin-bottom: 5px;
  font-size: 10px;
  color: #494949;
}
.insertcheck {
  text-align: left;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertnick {
  text-align: left;
  margin-bottom: -15px;
  font-size: 15px;
  color: #494949;
}

.insertnick2 {
  text-align: left;
  margin-bottom: 5px;
  font-size: 10px;
  color: #494949;
}

.signupfont {
  text-align: center;
  font-size: 14px;
  color: #494949;
}

.line {
  margin-top: 20px;
  border: none;
  height: 1px;
  background-color: #c2c8cc;
}

.emailAuth {
  margin-top: 4px;
  padding: 0px;
}

.emailAuth button {
  width: 100%;
  padding: 10px;
  background-color: rgb(247, 248, 250);
  color: rgb(194, 200, 204);
  border-color: rgb(218, 220, 224);
  border: solid 1px;
  border-radius: 4px;
  cursor: pointer;
}

.emailAuth button:hover {
  background-color: #00ab03;
}

.consent-label {
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: -10px;
  font-size: 15px;
  color: #494949;
}

.consent-options {
  border: 1px solid #ccc; /* Add border to wrap the consent options */
  padding: 10px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  text-align: left;
}

.checkbox-wrapper {
  width: 20px; /* Set the width of the checkbox wrapper */
  height: 20px; /* Set the height of the checkbox wrapper */
  border: 1px solid #ccc; /* Add border to create a box */
  margin-right: 10px; /* Add margin to separate the box from text */
  display: flex;
  align-items: center;
  justify-content: center;
}

.consent-text {
  font-size: 11px;
  color: #494949;
}

.additional-consent {
  font-size: 9px;
  opacity: 0.7; /* 연하게 만들기 위한 투명도 조절 */
}

.css-1n6jqop {
  transition: opacity 0.1s ease 0s;
  border-radius: 4px;
  display: inline-block;
  margin: 0px;
  padding: 0px 0px 60%;
  border: none;
  background: none;
  font: inherit;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.css-b2lzg2 {
  width: 100%;
  padding-bottom: 100%;
}


.productImg{
  height: 300px;
  background-color: rgb(227, 228, 228);
  border-radius: 10px;
  margin-bottom: 30px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
}

.css-nd2q8i {
  margin: 0px;
  background: none rgb(53, 197, 240);
  font-size: 14px;
  line-height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: 400;
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 0px;
  border-radius: 4px;
  top: 56.5%;
  left: 30px;
  width: 30px;
}

.submitBtn{
  border: none;
  background-color: #18cc3c;
  padding: 20px;
  border-radius: 8px;
  width: 40%;
  text-align: center;
  margin-top: 20px;
  margin: 0 auto;
  margin-left: 30%;
  color: white;
}

.submitBtn:hover {
  background-color: #00ab03;
}


</style>