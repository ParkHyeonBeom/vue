<template>
  <div class="body-deadline-item-info">
    <div>
      <article class="deadline-item">
        <router-link v-bind:to="`/product/${product.idx}`">
          <a class="deadline-item-link"></a>
        </router-link>

        <div class="deadline-item-image">
          <div class="deadline-item-image-show">
            <div class="deadline-item-image-info">
              <img class="image" :src="product.filename[0]" width="220px" height="300px" alt=""/>
              <div class="deadline-item-image-dark-overlay"></div>
              <div class="deadline-item-timer">
                <div>{{timer}} 남음</div>
              </div>
            </div>
          </div>
        </div>
        <div class="deadline-item-content">
          <div>
            <h1 class="deadline-item-header">
              <span class="deadline-item-header-brand">{{ product.productName }}</span>
              <span class="deadline-item-header-name">{{ product.productInfo }}</span>
            </h1>
            <span class="deadline-item-price">
                <span class="deadline-item-price-rate">
                    {{Math.floor((product.price - product.salePrice ) / product.price  * 100)}}
                    <span class="percentage">%</span>
                </span>
                <span class="deadline-item-price-price">{{ product.salePrice }} 원</span>
            </span>
            <div>
              현재 참여 인원 <span style="font-weight: bold"> {{ product.peopleCount}}명</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCardComponent',

  props: [
      "product"
  ],

  data() {
    return {
      timer:new Date().toLocaleTimeString(),
    }
  },

  methods: {
    update() {
      const now = new Date();	// 현재 날짜 및 시간
      const close = new Date(this.product.closeAt)
      const timeDifference  = new Date(close - now);

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.timer = days+"일 " + hours + ":" + minutes + ":" + seconds;
    }
  },

  mounted() {

    const now = new Date();	// 현재 날짜 및 시간
    const close = new Date(this.product.closeAt)
    const timeDifference  = new Date(close - now);

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    this.timer = days+"일 " + hours + ":" + minutes + ":" + seconds;
    setInterval(this.update, 1000);
  }
}
</script>

<style>
/* header start */

p{
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #2F3438;
}
a{
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #2F3438;
  text-decoration-line: none;
}

p.basic:hover{
  color:rgb(24, 204, 60);
}

.header-container{
  height: 80.75px;
  flex-direction: row;
  display: flex;
  margin-left: 105px;
}

.logo{
  width: 100px;
  height: 90px;
  margin-left: 30px;
  margin-right:30px;
}

.center{

  display: flex;
  flex-direction: row;
  width : 450px;
  height: 80.75px;
}

.center-first{
  width : 100px;
  height : 80.75px;;
  margin-left: -10px;
  margin-top: 15px;
}

.center-second{
  width : 100px;
  height : 80.75px;;
  margin-left: -18px;
  margin-top: 15px;
}

.center-third{
  width : 120px;
  height : 80.75px;;
  margin-left: -15px;
  margin-top: 15px;
}


.right{
  display: flex;
  flex-direction: row;
  width : 1350px;
  height: 80.75px;
}

.right-search{
  width : 300px;
  height : 45px   ;
  margin-left: 73px;
  margin-top: 18px;
  border: 1px solid #DADDE0;
}

.right-search-left{
  margin-left: 5px;
  margin-top: 8px;
}

.right-search-right{
  margin-top: -42px;
  margin-left: -75px;
}

.right-cart{
  width : 30px;
  height : 30px;
  margin-left: 15px;
  margin-top: 18px;
}

.right-login{
  width : 70px;
  height : 30px;
  margin-left: 25px;
  margin-top: 28px;
}

.right-signup{
  width : 60px;
  height : 30px;
  margin-left: 15px;
  margin-top: 28px;
}

.right-customercenter{
  width : 60px;
  height : 30px;
  margin-left: 15px;
  margin-top: 28px;
}

.right-postWrite{
  margin-left: 30px;
  margin-top: 17px;
}

.mybutton{
  color:white; /* 원하는 색상으로 설정 */
  text-align: center;
  border-radius: 5px 5px 5px 5px;
  margin-left: -15px;
}

.header-sub{
  border-top:1px solid gainsboro;
  height: 80.75px;
  flex-direction: row;
  display: flex;
  font-weight: 200;
}

.header-shoppingHome{
  width : 100px;
  height : 80.75px;;
  margin-left: 145px;
  margin-top: 15px;
}
.header-category{
  width : 100px;
  height : 80.75px;;
  margin-left: -33px;
  margin-top: 15px;
}
.header-best{
  width : 100px;
  height : 80.75px;;
  margin-left: -33px;
  margin-top: 15px;
}
.header-todayDeal{
  width : 100px;
  height : 80.75px;;
  margin-left: -33px;
  margin-top: 15px;
}
.header-market{
  width : 100px;
  height : 80.75px;;
  margin-left: -22px;
  margin-top: 15px;
}
.header-good{
  width : 100px;
  height : 80.75px;
  margin-left: -25px;
  margin-top: 15px;
}
.header-delivery{
  width : 100px;
  height : 80.75px;;
  margin-left: -25px;
  margin-top: 15px;
}
.header-room{
  width : 100px;
  height : 80.75px;;
  margin-left: -25px;
  margin-top: 15px;
}
.header-premium{
  width : 100px;
  height : 80.75px;;
  margin-left: -25px;
  margin-top: 15px;
}
.header-event{
  width : 100px;
  height : 80.75px;;
  margin-left: -25px;
  margin-top: 15px;
}
/* header end */

/* 배너, 카테고리 */
h1 {
  font-weight: inherit;
  margin: 0px;
  padding: 0px;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

section {
  display: block;
}

.deadline-product{
  height: 370px;
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.detail-product-img-wrapper {
  position: relative;
  width: 100%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0 auto;
}

.splide__slide{
  margin: 0 auto;
  object-fit:cover;
}

.css-1jjjg2j{
  width: 100%;
}

.deadline-product-number{
  font-size: 17px;
  line-height: 18px;
  position: absolute;
  max-width: 100%;
  border-radius: 30px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  position: absolute;
  top: 310px;
  right: 60px;
  padding: 5px 10px;
  background-color: rgba(33, 38, 41, 0.5);
  color: #EAEDEF;
}

.category{
  width: 100%;
  height: 176px;
  margin-left:10px;
}

.category-items{
  text-align: center;
  position: sticky;
  top: 80px;
  z-index: 100;
}

.category-item{
  display:inline-block;
  text-align:center;
  list-style: none;
  width: 100px;
  margin:0px;
}

.category-items-description{
  font-size: 16px;
  line-height: 20px;
  display: grid;
  text-align: center;
  color: #2F3438;
  margin-top: 8px;

}

/* 상품 메인 */
header {
  box-sizing: border-box;
  position: relative;
  display: block;
}
a {
  cursor: pointer;
  touch-action: manipulation;
  color: inherit;
  text-decoration: none;
}
div{
  margin: 0;
  padding: 0;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
.button {
  user-select: none;
  display: inline-block;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: none;
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color .1s,background-color .1s,border-color .1s;
  border-radius: 4px;
  cursor: pointer;
}

.container {
  margin-right: auto;
  margin-left: auto;
  width: calc(100% - 30px);
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
}

@media (min-width: 768px) {
  .container {
    margin-right: auto;
    margin-left: auto;
    width: calc(100% - 80px);
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }
}

@media (min-width: 375px) {
  .container {
    margin-right: auto;
    margin-left: auto;
    width: calc(100% - 30px);
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }
}

.button-color {
  background-color: #EDEDED;
  border-color: #EDEDED;
  color: #757575;
}
.button-size {
  padding: 11px 10px 12px;
  font-size: 17px;
  line-height: 20px;
}
.deadline-item-timer {
  position: absolute;
  z-index: 3;
  background-color: rgb(24, 204, 60);
  color: #fff;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  top: 8px;
  left: 8px;
  padding: 4px;
  font-size: 13px;
  line-height: 12px;
  padding-top: 8px;
  height: 25px;
}
.deadline-item-image-dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  transition: background-color .2s;
}
.deadline-item-image-info {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 300px;
  background-color: #e7e5e5;
}
.deadline-item-image {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 48%;
  -moz-box-flex: 0;
  -moz-flex: 0 0 48%;
  -ms-flex: 0 0 48%;
  flex: 0 0 48%;
  width: 48%;
}

@media (min-width: 768px) {
  .deadline-item-image {
    width: auto;
    margin: 0, -10px;
  }
}

.deadline-item {
  display: block;
  padding: 0 10px 15px;
}
.body-deadline-item-info {
  display: flex;
  position: relative;
}
.body-deadline-item-list {
  display: flex;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-right: -7.5px;
  margin-left: -7.5px;
  justify-content: center;

}
.body-deadline-item-header {
  margin-bottom: 20px;
  display: flex;
  margin-left: auto;
}
.body-deadline-item {
  margin-right: auto;
  margin-left: auto;
  width: calc(100% - 80px);
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
  justify-content: center;
}
.body-deadline-item-title {
  color: #000;
  font-weight: 700;
  font-size: 20px;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0px;
  -moz-box-flex: 1;
  -moz-flex: 1 0 0px;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  margin-left: 250px;
  display: block;
}
.body-deadline-item-link {
  margin-right: 260px;
  color: rgb(24, 204, 60);
  font-weight: 700;
  font-size: 15px;
  transition: opacity .1s;
  display: block;
}
.store-index-div {
  margin-top: 50px;
  /* justify-content: center; */
}
.deadline-item-content {
  display: flex;
  -webkit-box-flex: 1;
  flex: 1 0 0px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -moz-align-items: center;
  align-items: center;
}
.deadline-item-header {
  margin-top: 9px;
}
.deadline-item-header-brand {
  display: block;
  font-size: 11px;
  color: #828C94;
}
.deadline-item-header-name {
  margin-top: 5px;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  max-height: 34px;
  -webkit-line-clamp: 2;
}
.deadline-item-price {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 17px;
  line-height: 23px;
  font-weight: 700;
}
.deadline-item-price-rate {
  color: rgb(24, 204, 60);
  margin-right: 4px;
}
.percentage {
  color: rgb(24, 204, 60);
}
.deadline-item-price-price {
  color: #000;
  margin-right: 4px;
}
.deadline-item-stats {
  display: block;
  padding-right: 50px
}
.deadline-item-stats-info {
  font-size: 12px;
  color: #9E9E9E;
  line-height: 16px;
  font-weight: 700;
}
.deadline-item-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
#store-index {
  display: flex;
  flex-flow: column;
}

/* Footer */
* {
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
.footer{
  padding: 40px 40px;
  background-color: #F7F9FA;

  box-sizing: border-box;
  font-size: 12px;
  line-height: 16px;
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 2fr;
  grid-column-gap: 30px;
}
/* .footer-left{
    padding: 0 40px;
} */

.customer-service-btn{
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 20px;
}
.customer-service-btn:visited{
  color: black;
}
.customer-service-btn:active{
  color: black;
}
.customer-service-btn:hover{
  text-decoration: underline;
}

.footer-left-top-1{
  margin-top: 10px;
}
.phone-number{
  display: flex;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  white-space: nowrap;
  margin-right: 6px;
  text-decoration: none;
  display: inline;

}
.phone-number:visited{
  color: purple;
}
.phone-number:active{
  color: blue;
}
.phone-number:hover{
  text-decoration: underline;
}

.footer-left-middle{
  font-size: 10px;
  line-height: 5px;
  white-space: pre-wrap;
  margin-bottom: 12px;

}

.footer-left-middle-1{
  margin-top: 5px;
  position: relative;

  padding-left: 10px;

}
.footer-left-middle-2{
  margin-top: 5px;
  position: relative;
  line-height: 15px;
  padding-left: 10px;

}
.footer-left-middle-3{
  margin-top: 5px;
  position: relative;

  padding-left: 10px;

}
.footer-left-middle-1:before {
  content: '•';
  position: absolute;
  font-size: 10px;
  left: 0px;
}
.footer-left-middle-2:before {
  content: '•';
  position: absolute;
  font-size: 10px;
  left: 0px;
}
.footer-left-middle-3:before {
  content: '•';
  position: absolute;
  font-size: 10px;
  left: 0px;
}
.footer-left-bottom{
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-top: 12px\y;
}
.footer-left-bottom-counseling-btn{
  display: flex;
  cursor: pointer;
  touch-action: manipulation;

  height: 30px;
  width: 200px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color:  #F7F9FA;
  display: inline-block;

  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-size: 14px;
  line-height: 20px;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: auto;
  height: 32px;
  border-radius: 4px;
  padding: 0 8px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: #2F3438;
  border: 1px solid #DADDE0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  white-space: nowrap;
  text-decoration: none;
}
.footer-middle-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, min-content);
  grid-auto-flow: column;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
}
.footer-middle-element{
  text-decoration: none;
}
.footer-middle-element:visited{
  color: purple;
}
.footer-middle-element:link{
  color: black;
}
.footer-middle-element:active{
  color: blue;
}
.footer-middle-element:hover{
  text-decoration: underline;
}
.footer-middle-personal-infomation{
  text-decoration: none;
  font-weight: 700;
}
.footer-middle-personal-infomation:link{
  color:black;
}
.footer-middle-personal-infomation:visited{
  color: purple;
}
.footer-middle-personal-infomation:active{
  color: blue;
}
.footer-middle-personal-infomation:hover{
  text-decoration: underline;

}
.footer-right{


  font-size: 10px;
  line-height: 14px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 12px;
  color: #828C94;
  overflow-x: hidden;
}
.footer-right-1{
  overflow-x: hidden;
  text-decoration-line: none;
}
.footer-right-1-1{
  overflow-x: hidden;
}
.footer-right-1-1-element-infomation{
  font-size: 12px;
  line-height: 20px;
  display: inline-block;
  white-space: nowrap;
}
.footer-right-3{
  display: grid;
  grid-column-gap: 6px;
  grid-template-columns: max-content min-content min-content;
}
.footer-right-3-icon{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-width: 102px;
  height: 38px;
  padding: 0 6px;
  gap: 6px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.08);

}
.css-1a5klid {
  display: inline-block;
  margin-right: 14px;
}
.css-8n6bc3 {
  vertical-align: top;
  color: #828C94;
}

.image-size {
  width: 60px;
}

.deadline-item-image-show {
  margin: 0;
  padding: 0;
}

.image {
  width: 200px;
}
</style>