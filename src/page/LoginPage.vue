<template>
  <div class="login-container">
    <div class="content-container">
      <div class="text-with-image">
        <img src="../../public/icon/pampam-logo.png" alt="Pampam 로고">
      </div>
      <form id="loginForm">
        <input type="text" placeholder="이메일" id="이메일" required>
        <input type="password" placeholder="비밀번호" id="비밀번호" required>
        <br>
        <br>
        <button type="submit">로그인</button>
      </form>
      <br>
      <div>
        <a href="/users/password/new">비밀번호 재설정</a>
        <a href="/normal_users/new">회원가입</a>
      </div>
      <br>
      <div class="confortLogin">SNS계정으로 간편 로그인 / 회원가입</div>
      <div class="sns-buttons">
        <a href="/users/auth/facebook" class="facebook"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTAzMjlfNSAg%2FMDAxNTUzODM2ODA4MTky.-gS3ZoRn6NftLL0GUjuFUaDNRgoG9vAnH--zyNQIF1Ag.7tgGDNfnJlPGxaTGqye0f5cD0_HKnU6GNQ7wf1FbgZAg.JPEG.btf0c6dsc%2FDFGJSDF%253BLGJ%253BKJSF%253BGKLJR%253BKLDFG.gif&type=sc960_832_gif" alt="Facebook 로고"></a>
        <a href="/users/auth/kakao" class="kakao"><img src="../../public/icon/kakao.png" alt="Kakao 로고"></a>
        <a href="/users/auth/naver" class="naver"><img src="../../public/icon/naver.png" alt="Naver 로고"></a>
      </div>
      <div class="loginError">로그인에 문제가 있으신가요?</div>
      <hr class="line">
      <div class="serchOrder" onclick="toggleOrderSearch()">비회원 주문 조회하기</div>
      <div class="order-search-container">
        <input type="text" placeholder="주문번호" id="orderNumber">
        <input type="text" placeholder="이메일" id="orderEmail">
        <br>
        <button type="button" onclick="searchOrder()">주문 조회</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}

// function toggleOrderSearch() {
//   var orderSearchContainer = document.querySelector('.order-search-container');
//   var isVisible = orderSearchContainer.style.maxHeight !== '0px';
//
//   if (isVisible) {
//     orderSearchContainer.style.maxHeight = '0';
//     orderSearchContainer.style.opacity = '0';
//   } else {
//     orderSearchContainer.style.maxHeight = '200px'; // Adjust the height as needed
//     orderSearchContainer.style.opacity = '1';
//   }
// }
//
// function searchOrder() {
//   // 주문 조회 기능 구현
//   var orderNumber = document.getElementById('orderNumber').value;
//   var orderEmail = document.getElementById('orderEmail').value;
//   // 실제로는 이 정보를 서버로 전송하여 주문 조회를 수행해야 합니다.
//   // 여기서는 간단하게 콘솔에 출력하는 예시를 보여드립니다.
//   console.log('주문번호:', orderNumber);
//   console.log('이메일:', orderEmail);
//   // 실제로는 서버로 전송 및 응답 처리를 구현해야 합니다.
// }
</script>

<style>
*{
  font-family: 'GmarketSans';
}

body {
  width: 100%;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  text-align: center;
}

.text-with-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: -10px;
  color: #494949;
  font-size: 13px;
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
  width: 100%;
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
  margin-top: 10px;
}

.sns-buttons img {
  width: 15px;
  height: 15px;
  margin-right: 3px;
}

.line {
  margin-top: 25px;
  border: none;
  height: 1px;
  background-color: #c2c8cc;
}

.loginError {
  font-size: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #c2c8cc;
}

.serchOrder {
  font-size: 11px;
  color: #696969;
  margin-top: 10px;
  cursor: pointer;
}

.order-search-container {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  margin-top: 10px;
}

.order-search-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

</style>