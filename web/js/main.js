"use strict";document.addEventListener("DOMContentLoaded",function(){Array.prototype.flat||(Array.prototype.flat=function(){return function n(e){return e.reduce(function(e,t){return Array.isArray(t)?e.concat(n(t)):e.concat(t)},[])}(this)});var e=function(e,t,n){var a,e=document.querySelector(e),r=document.querySelectorAll(t),s=document.querySelectorAll(n);e&&(e.addEventListener("click",function(n){n.target.classList.contains("less")&&r.forEach(function(e,t){e.getAttribute("data-card-inp")==n.target.getAttribute("data-less")&&1<e.value&&(e.value--,1<=s.length&&void 0!==s[t]&&(a=s[t].getAttribute("data-vvl").replace(/\s/g,""),s[t].innerHTML=i(+s[t].innerHTML.replace(/\s/g,"")-+a+" ")))}),n.target.classList.contains("more")&&r.forEach(function(e,t){e.getAttribute("data-card-inp")==n.target.getAttribute("data-more")&&(e.value++,1<=s.length&&void 0!==s[t]&&(a=s[t].getAttribute("data-vvl").replace(/\s/g,""),s[t].innerHTML=i(+s[t].innerHTML.replace(/\s/g,"")+ +a+" ")))})}),e.addEventListener("input",function(n){r.forEach(function(e,t){n.target.getAttribute("data-card-inp-val")==t&&1<=s.length&&void 0!==s[t]&&(a=s[t].getAttribute("data-vvl").replace(/\s/g,""),s[t].innerHTML=i(+a*+n.target.value+" "))})}))};function i(e){return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}e(".g-card1__wrap-sea",".g-product-quantity__inp-s",".g-card1__set-bottom > span"),e(".g-card1__wrap-sea2",".g-product-quantity__inp-2",".g-card1__set-bottom > span"),e(".g-card1__wrap-sea3",".g-product-quantity__inp-3",".g-card1__set-bottom > span"),e(".g-card1__wrap-sea4",".g-product-quantity__inp-4",".g-card1__set-bottom > span");var t,n,a,r,s;function c(){s.classList.remove("active")}t=document.querySelector(".header__search-inp-el"),n=document.querySelector(".header__search-inp"),a=document.querySelector(".header__search"),r=document.querySelector(".header__center"),s=document.querySelector(".header__search-block"),document.addEventListener("click",function(e){e.target.closest(".header__search-inp-el")&&(t.classList.add("active"),n.classList.add("active"),r.classList.add("active"),a.classList.add("active")),e.target.closest(".header__search")||(t.classList.remove("active"),n.classList.remove("active"),r.classList.remove("active"),a.classList.remove("active"),c()),document.addEventListener("keydown",function(e){"Escape"==e.code&&(t.classList.remove("active"),n.classList.remove("active"),r.classList.remove("active"),a.classList.remove("active"),c())})});var o,l;o=document.querySelector(".header__search-inp > input"),l=document.querySelector(".header__search-block"),o.addEventListener("change",function(e){l.classList.add("active")});!function(t,e){document.querySelector(t);var n=document.querySelector(e);document.addEventListener("click",function(e){e.target.closest(t)&&n.classList.add("active"),e.target.closest(t)||n.classList.remove("active")}),document.addEventListener("keydown",function(e){"Escape"==e.code&&n.classList.remove("active")})}(".header__basket",".header__basket-prod");function d(e,t,n,a,r){e=document.querySelector(e),t=document.querySelector(t),a=document.querySelector(a),e&&a&&(document.documentElement.clientWidth<=992?e.insertAdjacentElement(n,a):t.insertAdjacentElement(r,a))}d(".header__bottom-wrap",".header__block-wrap","beforeend",".header__burger","afterbegin"),d(".header__bottom-wrap",".header__block-wrap","beforeend",".header__catalog","afterbegin"),d(".header__center",".header__info-wrap","beforeend",".header__info-autoriz","afterbegin"),window.addEventListener("resize",function(){d(".header__bottom-wrap",".header__block-wrap","beforeend",".header__burger","afterbegin"),d(".header__bottom-wrap",".header__block-wrap","beforeend",".header__catalog","afterbegin"),d(".header__center",".header__info-wrap","beforeend",".header__info-autoriz","afterbegin")});var u,v,m,p;function g(){m.forEach(function(e){e.classList.remove("active")}),p.forEach(function(e){e.classList.remove("show"),e.classList.add("hide")})}function _(e){e=0<arguments.length&&void 0!==e?e:0;m[e].classList.add("active"),p[e].classList.remove("hide"),p[e].classList.add("show")}u=".top-slider__tabs-elem",v=".tabs__content-item",m=document.querySelectorAll(u),p=document.querySelectorAll(v),1<m.length&&1<p.length&&(m.forEach(function(e,n){e.addEventListener("click",function(t){t.preventDefault(),m.forEach(function(e){t.target!=e&&t.target.parentNode!=e||(g(),_(n))})})}),g(),_());function w(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],e=document.querySelectorAll(e),a=document.querySelectorAll(t),r=document.querySelector(n);e.forEach(function(n){n.addEventListener("click",function(e){a.forEach(function(t){n.getAttribute("data-linkValue")==t.getAttribute("data-ulValue")&&(t.style.maxHeight?(t.style.maxHeight=null,n.classList.remove("active")):(t.style.maxHeight=t.scrollHeight+"px",n.classList.add("active"))),r&&r.addEventListener("click",function(e){t.style.maxHeight=null})})})})}w(".questions__elem",".questions__sub"),w(".nameS__targ",".nameS__block");function b(e){return IMask(e,{mask:"+{7}(000)000-00-00"})}var f,e=document.querySelectorAll('input[type="tel"]');null!=e&&e.forEach(b),document.addEventListener("click",function(e){if(e.target.closest("[data-btn-modal]"))switch(e.preventDefault(),e.target.closest("[data-btn-modal]").dataset.btnModal){case"creatingClient":f=$plugins.modal({title:" ",closable:!0,width:"530px",content:h.creatingClient}),setTimeout(function(){return f.open()},300),y();break;case"videoModal":f=$plugins.modal({title:"Видео обзор",closable:!0,width:"800px",content:h.videoModal}),setTimeout(function(){return f.open()},300),y();break;case"getConsultation":f=$plugins.modal({title:" ",closable:!0,width:"585px",content:h.getConsultation}),setTimeout(function(){var e=document.querySelector(".vmodal__body").querySelector('input[type="tel"]');b(e),f.open()}),y();break;default:return}});var h={};(window.$globalHtmlElements=h).creatingClient='\n\t\t\t<div class="basketOK">\n\t\t\t\t<div class="basketOK__img">\n\t\t\t\t\t<img class="img" src="web/images/content/basketOK.png", alt="slide__img">\n\t\t\t\t</div>\n\t\t\t\t<div class="basketOK__body">\n\t\t\t\t\t<h3 class=".title-6">Товар добавлен в корзину</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class="basketOK__elems">\n\t\t\t\t\t<a href="#" class="basketOK__elem">продолжить покупки</a>\n\t\t\t\t\t<a href="#" class="basketOK__elem">Перейти в корзину</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',h.videoModal='\n\t<div class="videoReviews__column"> <a class="videoReviews__elem" href="#">\n\t\t<div class="videoReviews__img">\n\t\t\t<iframe width="100%" height="500" src="https://www.youtube.com/embed/MnrJzXM7a6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>\n\t\t</div>\n\t</div>\n\t\t',h.getConsultation='\n\t\t<div class="getConsult">\n\t\t\t<div class="questions">\n\t\t\t\t<form class="questions__right"> \n\t\t\t\t\t<h2 class="title-3">Нужна консультация?</h2>\n\t\t\t\t\t<p>Подберем оборудование для маркировки на любой бюджет! Доставка по все РФ</p>\n\t\t\t\t\t<label class="g-label">\n\t\t\t\t\t<input type="text" placeholder="Ваше имя" name="name" required>\n\t\t\t\t\t<svg class="svg-sprite-icon icon-men">\n\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#men"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class="g-label">\n\t\t\t\t\t<input type="tel" placeholder="Номер телефона" name="phone" required>\n\t\t\t\t\t<svg class="svg-sprite-icon icon-phone">\n\t\t\t\t\t\t<use xlink:href="web/images/sprite/symbol/sprite.svg#phone"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class="questions__check myInp">\n\t\t\t\t\t<input type="checkbox" id="check1">\n\t\t\t\t\t<label for="check1">Отправляя форму вы принимаете условия обработки <a class="g-link g-link-tdu" href="#">персональных данных</a></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="questions__btn"> \n\t\t\t\t\t<button class="button button-blank">Перезвоните мне</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t';var y=function(){var e=document.querySelectorAll(".products__elem-basket"),t=document.querySelector(".header__basket-body-val"),n=document.querySelector(".header__basket-icon > span");t.textContent=e.length+" ",n.textContent=e.length};y();var L,k;L=document.querySelector(".sort__el > .label > .mySelect"),k=document.querySelector(".hid"),L&&k&&L.addEventListener("change",function(e){9999==e.target.value?k.classList.add("active"):k.classList.remove("active")});var E=document.querySelector(".header__info"),q=document.querySelector(".header__block");window.addEventListener("scroll",function(e){50<window.pageYOffset?(E.classList.add("active"),q.classList.add("active")):(E.classList.remove("active"),q.classList.remove("active"))});e=function(t,n){var e=document.querySelector(t),a=document.querySelector(n);null!=e&&(document.addEventListener("click",function(e){e.target.closest(t)&&a.classList.add("active"),e.target.closest(n)||e.target.closest(t)||a.classList.remove("active")}),document.addEventListener("keydown",function(e){"Escape"==e.code&&a.classList.remove("active")}))};e(".topmenu__item-link-services",".submenu"),e(".topmenu__item-link-selecting",".submenu2");var S,A,B,P;S=".header__catalog",A=".submenu3",B=document.querySelector(S),P=document.querySelector(A),null!=B&&1199<window.innerWidth&&(document.addEventListener("click",function(e){e.target.closest(S)&&P.classList.add("active"),e.target.closest(A)||e.target.closest(S)||P.classList.remove("active")}),document.addEventListener("keydown",function(e){"Escape"==e.code&&P.classList.remove("active")}))});var coocie=document.querySelector(".coocie"),coocieTarg=document.querySelector(".coocieTarg");coocie&&coocieTarg.addEventListener("click",function(e){e.preventDefault(),coocie.classList.add("active")});var gCardLine=document.querySelector(".g-card__line"),slid=document.querySelector(".slid");null==gCardLine&&slid&&slid.classList.add("full");var galleryThumbs2WrapElems=document.querySelectorAll(".gallery-thumbs2-wrap > .swiper-slide");null!==slid&&(0==galleryThumbs2WrapElems.length?slid.classList.add("slideNone"):slid.classList.remove("slideNone"));var galleryTop2WrElems=document.querySelectorAll(".gallery-top2-wr > .swiper-slide > .slider-img > .img"),galleryTop2OpenMagn=document.querySelectorAll(".gallery-top2-wr > .open-magn");galleryTop2WrElems&&galleryTop2OpenMagn&&galleryTop2WrElems.forEach(function(e,t){e.src.length<=34&&(e.src="web/images/content/articles-1.png",galleryTop2OpenMagn[t].setAttribute("href","web/images/content/articles-1.png"))});var inpBorder=function(e){var n,e=document.querySelector(e);e&&(n=e.querySelectorAll(".myInp3")).forEach(function(e,t){e.addEventListener("change",function(e){n.forEach(function(e){e.classList.remove("act")}),n[t].classList.add("act")})})};inpBorder(".formation__delivery-wrap-1"),inpBorder(".formation__delivery-wrap-2"),inpBorder(".formation__delivery-wrap-3");var catalogBlock=document.querySelectorAll(".catalog__block"),catalogItem=document.querySelectorAll(".catalog__item");function scrollTo(s){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:700,c=document.scrollingElement||document.documentElement,o=c.scrollTop,l=s-o,d=+new Date;(function e(){var t,n,a,r=+new Date-d;c.scrollTop=parseInt((t=r,n=o,a=l,(t/=i/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n)),r<i?requestAnimationFrame(e):c.scrollTop=s})()}catalogBlock&&catalogBlock.forEach(function(e,t){e.addEventListener("mouseover",function(e){catalogItem[t].classList.add("active")}),e.addEventListener("mouseout",function(e){catalogItem[t].classList.remove("active")})}),$(document).ready(function(){new Swiper(".mySwiper",{direction:"vertical",slidesPerView:1,spaceBetween:30,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3}}),new Swiper(".top-slider__swiper",{slidesPerView:5,spaceBetween:10,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},576:{slidesPerView:2,spaceBetween:10},992:{slidesPerView:3,spaceBetween:10},1200:{slidesPerView:4,spaceBetween:10},1601:{slidesPerView:5,spaceBetween:10}}}),new Swiper(".clients-slider",{slidesPerView:6,spaceBetween:10,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},576:{slidesPerView:2,spaceBetween:10},992:{slidesPerView:3,spaceBetween:10},1200:{slidesPerView:4,spaceBetween:10},1601:{slidesPerView:6,spaceBetween:10}}}),new Swiper(".g-card-slider",{slidesPerView:3,spaceBetween:10,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var e=new Swiper(".gallery-thumbs2",{spaceBetween:10,slidesPerView:3,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:2,spaceBetween:10},576:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:3,spaceBetween:10},1200:{slidesPerView:3,spaceBetween:10},1601:{slidesPerView:3,spaceBetween:10}}});new Swiper(".gallery-top2",{autoHeight:!0,loop:!0,observer:!0,observeParents:!0,spaceBetween:10,thumbs:{swiper:e}});$(".open-magn").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#back2Top");window.addEventListener("scroll",function(){700<pageYOffset?e.classList.add("show"):e.classList.remove("show")}),e.onclick=function(e){e.preventDefault(),scrollTo(0,400)}});