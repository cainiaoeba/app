"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[907],{649:function(t,e,o){o.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"标题","left-text":"返回","left-arrow":"",fixed:"",placeholder:""},on:{"click-left":function(e){return t.$router.back()}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[t._t("title")],2)]},proxy:!0}],null,!0)})],1)},s=[],r={name:"NavBar",data(){return{}}},a=r,l=o(1001),u=(0,l.Z)(a,n,s,!1,null,"48cd60bc",null),c=u.exports},8907:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});o(7658);var n=function(){var t=this,e=t._self._c;return e("div",[e("NavBarVue",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[t._v("购物车")])]},proxy:!0}])}),t.shopCart.length>0?e("section",[e("div",{staticClass:"shopCart"},t._l(t.shopCart,(function(o){return e("section",{key:o.goodsId,staticClass:"cart-box"},[e("van-swipe-cell",{attrs:{id:"swipe"},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"},on:{click:function(e){return t.Del(o.cartItemId)}}})]},proxy:!0}],null,!0)},[e("van-checkbox",{model:{value:o.done,callback:function(e){t.$set(o,"done",e)},expression:"item.done"}}),e("van-card",{attrs:{num:o.goodsCount,price:o.sellingPrice,title:o.goodsName,thumb:o.goodsCoverImg},scopedSlots:t._u([{key:"footer",fn:function(){return[e("van-stepper",{on:{plus:function(e){return t.plus(o)},minus:function(e){return t.minus(o)}},model:{value:o.goodsCount,callback:function(e){t.$set(o,"goodsCount",e)},expression:"item.goodsCount"}})]},proxy:!0}],null,!0)})],1)],1)})),0),e("van-submit-bar",{attrs:{price:t.allPrice,"button-text":"结算",disabled:!(t.allPrice>0)},on:{submit:t.onSubmit}},[e("van-checkbox",{model:{value:t.allDone,callback:function(e){t.allDone=e},expression:"allDone"}},[t._v("全选")])],1)],1):e("div",{staticClass:"isShow-sky"},[e("span",[t._v("🤷")]),e("p",[t._v("购物车空空如也")]),e("div",{on:{click:function(e){return t.$router.push("/home")}}},[t._v("前往首页")])])],1)},s=[],r=o(649),a=o(9547),l={name:"cart",components:{NavBarVue:r.Z},data(){return{value:1,cartItemIds:[]}},computed:{shopCart(){return this.$store.state.shopCart},allDone:{get(){return this.shopCart.every((t=>t.done))},set(t){console.log(t),this.shopCart.forEach((e=>e.done=t))}},allPrice(){return this.shopCart.reduce(((t,e)=>t+(1==e.done?e.goodsCount*e.sellingPrice*100:0)),0)}},methods:{Del(t){(0,a.IA)(t).then((t=>{200===t.resultCode&&(this.$toast("删除成功"),this.$store.dispatch("shopCartAsync"))}))},onSubmit(){this.$store.state.shopCart.filter((t=>{t.done&&this.cartItemIds.push(t.cartItemId)})),localStorage.setItem("cartItemIds",this.cartItemIds),localStorage.setItem("allPrice",this.allPrice),this.$router.push("/addressList")},plus(t){(0,a.fr)({cartItemId:t.cartItemId,goodsCount:t.goodsCount+1}).then()},minus(t){(0,a.fr)({cartItemId:t.cartItemId,goodsCount:t.goodsCount-1}).then()}},created(){this.$store.dispatch("shopCartAsync")}},u=l,c=o(1001),i=(0,c.Z)(u,n,s,!1,null,"494871b8",null),d=i.exports}}]);
//# sourceMappingURL=907.5ff246b0.js.map