"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // polyfill flat
  if (!Array.prototype.flat) Array.prototype.flat = function () {
    return function f(arr) {
      return arr.reduce(function (a, v) {
        return Array.isArray(v) ? a.concat(f(v)) : a.concat(v);
      }, []);
    }(this);
  }; // Наращивание кол-ва товаров при клике и подсчет

  var productRampUp = function productRampUp(myWrap, myElems, myFullValue) {
    var wrap = document.querySelector(myWrap);
    var elems = document.querySelectorAll(myElems);
    var fullValue = document.querySelectorAll(myFullValue);
    var rez;
    var rez2;

    if (wrap) {
      wrap.addEventListener('click', function (e) {
        // e.preventDefault();
        if (e.target.classList.contains('less')) {
          elems.forEach(function (el, i) {
            if (el.getAttribute('data-card-inp') == e.target.getAttribute('data-less')) {
              if (el.value > 1) {
                +el.value--;

                if (fullValue.length >= 1 && fullValue[i] !== undefined) {
                  rez2 = fullValue[i].getAttribute('data-vvl').replace(/\s/g, '');
                  fullValue[i].innerHTML = prettify(+fullValue[i].innerHTML.replace(/\s/g, '') - +rez2 + ' ');
                }
              }
            }
          });
        }

        if (e.target.classList.contains('more')) {
          elems.forEach(function (el, i) {
            // if (fullValue.length >= 1) {
            // 	rez = +fullValue[i].getAttribute('data-my-price');
            // }
            if (el.getAttribute('data-card-inp') == e.target.getAttribute('data-more')) {
              +el.value++;

              if (fullValue.length >= 1 && fullValue[i] !== undefined) {
                // console.log(fullValue[i])
                rez2 = fullValue[i].getAttribute('data-vvl').replace(/\s/g, ''); // let v = fullValue[i].innerHTML.split('')
                // let v2 = v.filter(el => el != ' ').join('')
                // console.log(v)
                // console.log(v2)

                fullValue[i].innerHTML = prettify(+fullValue[i].innerHTML.replace(/\s/g, '') + +rez2 + ' ');
              }
            }
          });
        }
      });
      wrap.addEventListener('input', function (e) {
        elems.forEach(function (el, i) {
          if (e.target.getAttribute('data-card-inp-val') == i) {
            // console.log(e.target.value)
            // console.log(fullValue[i])
            if (fullValue.length >= 1 && fullValue[i] !== undefined) {
              rez2 = fullValue[i].getAttribute('data-vvl').replace(/\s/g, '');
              fullValue[i].innerHTML = prettify(+rez2 * +e.target.value + ' ');
            }
          }
        });
      });
    }
  };

  productRampUp('.g-card1__wrap-sea', '.g-product-quantity__inp-s', '.g-card1__set-bottom > span');
  productRampUp('.g-card1__wrap-sea2', '.g-product-quantity__inp-2', '.g-card1__set-bottom > span');
  productRampUp('.g-card1__wrap-sea3', '.g-product-quantity__inp-3', '.g-card1__set-bottom > span');
  productRampUp('.g-card1__wrap-sea4', '.g-product-quantity__inp-4', '.g-card1__set-bottom > span'); // Конец Наращивания кол-ва товаров при клике и подсчета
  // Функция вставки проблема между цифрами

  function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  } // end 


  var inpSearch = function inpSearch() {
    var headerSearchInpEl = document.querySelector('.header__search-inp-el');
    var headerSearchInp = document.querySelector('.header__search-inp');
    var headerSearch = document.querySelector('.header__search');
    var headerCenter = document.querySelector('.header__center');
    var headerSearchBlock = document.querySelector('.header__search-block');

    function closeSearchBlock() {
      headerSearchBlock.classList.remove('active');
    }

    document.addEventListener('click', function (e) {
      // e.preventDefault();
      if (e.target.closest('.header__search-inp-el')) {
        headerSearchInpEl.classList.add('active');
        headerSearchInp.classList.add('active');
        headerCenter.classList.add('active');
        headerSearch.classList.add('active');
      }

      if (!e.target.closest('.header__search')) {
        headerSearchInpEl.classList.remove('active');
        headerSearchInp.classList.remove('active');
        headerCenter.classList.remove('active');
        headerSearch.classList.remove('active');
        closeSearchBlock();
      }

      document.addEventListener('keydown', function (e) {
        if (e.code == 'Escape') {
          headerSearchInpEl.classList.remove('active');
          headerSearchInp.classList.remove('active');
          headerCenter.classList.remove('active');
          headerSearch.classList.remove('active');
          closeSearchBlock();
        }
      });
    });
  };

  inpSearch();

  var inputSerachBlock = function inputSerachBlock() {
    var serachInp = document.querySelector('.header__search-inp > input');
    var headerSearchBlock = document.querySelector('.header__search-block');
    serachInp.addEventListener('change', function (e) {
      headerSearchBlock.classList.add('active');
    });
  };

  inputSerachBlock();

  var basketOpenWrap = function basketOpenWrap() {
    var basketOpen = function basketOpen(myTarget, myWrap) {
      var tar = document.querySelector(myTarget);
      var wrap = document.querySelector(myWrap);
      document.addEventListener('click', function (e) {
        if (e.target.closest(myTarget)) {
          wrap.classList.add('active');
        }

        if (!e.target.closest(myTarget)) {
          wrap.classList.remove('active');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.code == 'Escape') {
          wrap.classList.remove('active');
        }
      });
    };

    basketOpen('.header__basket', '.header__basket-prod');
  };

  basketOpenWrap(); // Перемещение элементов

  var movingElements = function movingElements(myWrapWhere, myWrapWhereFrom, position, myElem, positionBack) {
    var wrapWhere = document.querySelector(myWrapWhere);
    var wrapWhereFrom = document.querySelector(myWrapWhereFrom);
    var elem = document.querySelector(myElem);

    if (wrapWhere && elem) {
      if (document.documentElement.clientWidth <= 992) {
        wrapWhere.insertAdjacentElement(position, elem);
      } else {
        wrapWhereFrom.insertAdjacentElement(positionBack, elem);
      }
    }
  };

  movingElements('.header__bottom-wrap', '.header__block-wrap', 'beforeend', '.header__burger', 'afterbegin');
  movingElements('.header__bottom-wrap', '.header__block-wrap', 'beforeend', '.header__catalog', 'afterbegin');
  movingElements('.header__center', '.header__info-wrap', 'beforeend', '.header__info-autoriz', 'afterbegin');
  window.addEventListener('resize', function () {
    movingElements('.header__bottom-wrap', '.header__block-wrap', 'beforeend', '.header__burger', 'afterbegin');
    movingElements('.header__bottom-wrap', '.header__block-wrap', 'beforeend', '.header__catalog', 'afterbegin');
    movingElements('.header__center', '.header__info-wrap', 'beforeend', '.header__info-autoriz', 'afterbegin');
  }); // end перемещение элементов
  // wrapWhere - куда вставим на мобильных
  // wrapWhereFrom - куда вставим обратно на больших экранах
  // position - позиция вставки на мобильных
  // positionBack - позиция вставки на больших
  // elem - элемент который вырезаем
  // tabs

  var myTabs = function myTabs() {
    var tabs = function tabs(myTargets, myContents) {
      var targets = document.querySelectorAll(myTargets);
      var contents = document.querySelectorAll(myContents);

      if (targets.length > 1 && contents.length > 1) {
        targets.forEach(function (target, i) {
          target.addEventListener('click', function (e) {
            e.preventDefault();
            targets.forEach(function (elem) {
              if (e.target == elem || e.target.parentNode == elem) {
                hideElems();
                showElems(i);
              }
            });
          });
        });

        function hideElems() {
          targets.forEach(function (target) {
            target.classList.remove('active');
          });
          contents.forEach(function (cont) {
            cont.classList.remove('show');
            cont.classList.add('hide');
          });
        }

        function showElems() {
          var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          targets[i].classList.add('active');
          contents[i].classList.remove('hide');
          contents[i].classList.add('show');
        }

        hideElems();
        showElems();
      }
    };

    tabs('.top-slider__tabs-elem', '.tabs__content-item');
  };

  myTabs(); //end tabs
  // accordion

  var myProlapse = function myProlapse() {
    var prolapse = function prolapse(myTargets, myContents) {
      var myClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var targets = document.querySelectorAll(myTargets);
      var contents = document.querySelectorAll(myContents);
      var close = document.querySelector(myClose); // console.log(myTargets)
      // console.log(myContents)

      targets.forEach(function (target) {
        target.addEventListener('click', function (e) {
          contents.forEach(function (cont) {
            if (target.getAttribute('data-linkValue') == cont.getAttribute('data-ulValue')) {
              if (cont.style.maxHeight) {
                cont.style.maxHeight = null;
                target.classList.remove('active');
              } else {
                cont.style.maxHeight = cont.scrollHeight + "px";
                target.classList.add('active');
              }
            }

            if (close) {
              close.addEventListener('click', function (e) {
                cont.style.maxHeight = null;
              });
            }
          });
        });
      });
    };

    prolapse('.questions__elem', '.questions__sub');
    prolapse('.nameS__targ', '.nameS__block');
  };

  myProlapse(); // end accordion
  // Imask на мобильный телефон

  var telInputs = document.querySelectorAll('input[type="tel"]');

  var crateMaskForTel = function crateMaskForTel(inp) {
    return IMask(inp, {
      mask: '+{7}(000)000-00-00'
    });
  };

  telInputs === null || telInputs === void 0 ? void 0 : telInputs.forEach(crateMaskForTel); // Вызовы модалок

  var modalElem;
  document.addEventListener('click', function (e) {
    // console.log(e.target)
    if (e.target.closest('[data-btn-modal]')) {
      e.preventDefault();
      var datTarget = e.target.closest('[data-btn-modal]').dataset.btnModal;

      switch (datTarget) {
        case 'creatingClient':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '530px',
            content: $globalHtmlElements.creatingClient
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          countItemsBasket();
          break;

        case 'videoModal':
          modalElem = $plugins.modal({
            title: 'Видео обзор',
            closable: true,
            width: '800px',
            content: $globalHtmlElements.videoModal
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          countItemsBasket();
          break;

        case 'getConsultation':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '585px',
            content: $globalHtmlElements.getConsultation
          });
          setTimeout(function () {
            var _parentModalBody = document.querySelector('.vmodal__body');

            var _inputSearch = _parentModalBody.querySelector('input[type="tel"]');

            crateMaskForTel(_inputSearch);
            modalElem.open(), 300;
          });
          countItemsBasket();
          break;

        default:
          return;
      }
    }
  });
  var $globalHtmlElements = {};
  window.$globalHtmlElements = $globalHtmlElements; // Модальное окно для Развернутого отзыва

  $globalHtmlElements.creatingClient = "\n\t\t\t<div class=\"basketOK\">\n\t\t\t\t<div class=\"basketOK__img\">\n\t\t\t\t\t<img class=\"img\" src=\"web/images/content/basketOK.png\", alt=\"slide__img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"basketOK__body\">\n\t\t\t\t\t<h3 class=\".title-6\">\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"basketOK__elems\">\n\t\t\t\t\t<a href=\"#\" class=\"basketOK__elem\">\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438</a>\n\t\t\t\t\t<a href=\"#\" class=\"basketOK__elem\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"; // Модальное окно для Видео

  $globalHtmlElements.videoModal = "\n\t<div class=\"videoReviews__column\"> <a class=\"videoReviews__elem\" href=\"#\">\n\t\t<div class=\"videoReviews__img\">\n\t\t\t<iframe width=\"100%\" height=\"500\" src=\"https://www.youtube.com/embed/MnrJzXM7a6o\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\"></iframe>\n\t\t</div>\n\t</div>\n\t\t"; // Модальное окно для получения консультации

  $globalHtmlElements.getConsultation = "\n\t\t<div class=\"getConsult\">\n\t\t\t<div class=\"questions\">\n\t\t\t\t<form class=\"questions__right\"> \n\t\t\t\t\t<h2 class=\"title-3\">\u041D\u0443\u0436\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F?</h2>\n\t\t\t\t\t<p>\u041F\u043E\u0434\u0431\u0435\u0440\u0435\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0431\u044E\u0434\u0436\u0435\u0442! \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0432\u0441\u0435 \u0420\u0424</p>\n\t\t\t\t\t<label class=\"g-label\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F\" name=\"name\" required>\n\t\t\t\t\t<svg class=\"svg-sprite-icon icon-men\">\n\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#men\"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"g-label\">\n\t\t\t\t\t<input type=\"tel\" placeholder=\"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\" name=\"phone\" required>\n\t\t\t\t\t<svg class=\"svg-sprite-icon icon-phone\">\n\t\t\t\t\t\t<use xlink:href=\"web/images/sprite/symbol/sprite.svg#phone\"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"questions__check myInp\">\n\t\t\t\t\t<input type=\"checkbox\" id=\"check1\">\n\t\t\t\t\t<label for=\"check1\">\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0444\u043E\u0440\u043C\u0443 \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 <a class=\"g-link g-link-tdu\" href=\"#\">\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"questions__btn\"> \n\t\t\t\t\t<button class=\"button button-blank\">\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043C\u043D\u0435</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t"; // end modal
  // Подсчет кол-ва элементов в корзине

  var countItemsBasket = function countItemsBasket() {
    var productsElemBasket = document.querySelectorAll('.products__elem-basket');
    var headerBasketBodyVal = document.querySelector('.header__basket-body-val');
    var headerBasketIcon = document.querySelector('.header__basket-icon > span');
    headerBasketBodyVal.textContent = productsElemBasket.length + ' ';
    headerBasketIcon.textContent = productsElemBasket.length;
  };

  countItemsBasket(); // выбор города

  var innerCity = function innerCity() {
    var sortEl = document.querySelector('.sort__el > .label > .mySelect');
    var hid = document.querySelector('.hid');

    if (sortEl && hid) {
      sortEl.addEventListener('change', function (e) {
        if (e.target.value == 9999) {
          hid.classList.add('active');
        } else {
          hid.classList.remove('active');
        }
      });
    }
  };

  innerCity(); // Фиксация шапки

  var headerInfo = document.querySelector('.header__info');
  var headerBlock = document.querySelector('.header__block');
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 50) {
      headerInfo.classList.add('active');
      headerBlock.classList.add('active');
    } else {
      headerInfo.classList.remove('active');
      headerBlock.classList.remove('active');
    }
  }); // end Фиксации шапки
  // клик на услуги и подбор решения

  var funcAddClass = function funcAddClass(myTarg, myWrap) {
    var targ = document.querySelector(myTarg);
    var wrap = document.querySelector(myWrap);

    if (targ !== null && targ !== undefined) {
      document.addEventListener('click', function (e) {
        if (e.target.closest(myTarg)) {
          wrap.classList.add('active');
        }

        if (!e.target.closest(myWrap) && !e.target.closest(myTarg)) {
          wrap.classList.remove('active');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.code == 'Escape') {
          wrap.classList.remove('active');
        }
      });
    }
  };

  funcAddClass('.topmenu__item-link-services', '.submenu');
  funcAddClass('.topmenu__item-link-selecting', '.submenu2'); // клик на категории

  var funcAddClass2 = function funcAddClass2(myTarg, myWrap) {
    var targ = document.querySelector(myTarg);
    var wrap = document.querySelector(myWrap);

    if (targ !== null && targ !== undefined && window.innerWidth > 1199) {
      document.addEventListener('click', function (e) {
        if (e.target.closest(myTarg)) {
          wrap.classList.add('active');
        }

        if (!e.target.closest(myWrap) && !e.target.closest(myTarg)) {
          wrap.classList.remove('active');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.code == 'Escape') {
          wrap.classList.remove('active');
        }
      });
    }
  };

  funcAddClass2('.header__catalog', '.submenu3');
}); // скрыть куки

var coocie = document.querySelector('.coocie');
var coocieTarg = document.querySelector('.coocieTarg');

if (coocie) {
  coocieTarg.addEventListener('click', function (e) {
    e.preventDefault();
    coocie.classList.add('active');
  });
} // Условие с кнопкой-видео


var gCardLine = document.querySelector('.g-card__line');
var slid = document.querySelector('.slid');

if (gCardLine == null && slid) {
  slid.classList.add('full');
} // Скрыть слайдер если нет картинок


var galleryThumbs2WrapElems = document.querySelectorAll('.gallery-thumbs2-wrap > .swiper-slide');

if (slid !== null) {
  if (galleryThumbs2WrapElems.length == 0) {
    slid.classList.add('slideNone');
  } else {
    slid.classList.remove('slideNone');
  }
} // Заглушка в слайдере если нет картинки


var galleryTop2WrElems = document.querySelectorAll('.gallery-top2-wr > .swiper-slide > .slider-img > .img');
var galleryTop2OpenMagn = document.querySelectorAll('.gallery-top2-wr > .open-magn');

if (galleryTop2WrElems && galleryTop2OpenMagn) {
  galleryTop2WrElems.forEach(function (el, i) {
    if (el.src.length <= 34) {
      // el.style.cssText = "background-image: url(\"./web/images/content/articles-1.png\");"
      el.src = 'web/images/content/articles-1.png';
      galleryTop2OpenMagn[i].setAttribute('href', 'web/images/content/articles-1.png');
    }
  });
}

var inpBorder = function inpBorder(myWrap) {
  var wrap = document.querySelector(myWrap);

  if (wrap) {
    var myInp3 = wrap.querySelectorAll('.myInp3');
    myInp3.forEach(function (el, i) {
      el.addEventListener('change', function (e) {
        myInp3.forEach(function (elem) {
          elem.classList.remove('act');
        });
        myInp3[i].classList.add('act');
      });
    });
  }
};

inpBorder('.formation__delivery-wrap-1');
inpBorder('.formation__delivery-wrap-2');
inpBorder('.formation__delivery-wrap-3'); // hover catalog__item

var catalogBlock = document.querySelectorAll('.catalog__block');
var catalogItem = document.querySelectorAll('.catalog__item');

if (catalogBlock) {
  catalogBlock.forEach(function (el, i) {
    el.addEventListener('mouseover', function (e) {
      catalogItem[i].classList.add('active');
    });
    el.addEventListener('mouseout', function (e) {
      catalogItem[i].classList.remove('active');
    });
  });
}

$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 4000
    }
  });
  var swiper2 = new Swiper('.top-slider__swiper', {
    // autoHeight: true,
    slidesPerView: 5,
    spaceBetween: 10,
    // loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1601: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    } // autoplay: {
    // 	delay: 5000,
    // },

  });
  var swiper4 = new Swiper(".clients-slider", {
    slidesPerView: 6,
    spaceBetween: 10,
    // loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1601: {
        slidesPerView: 6,
        spaceBetween: 10
      }
    }
  });
  var swiper5 = new Swiper('.g-card-slider', {
    // autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 10,
    // loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    } // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 10,
    // 	},
    // 	576: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 10,
    // 	},
    // 	992: {
    // 		slidesPerView: 3,
    // 		spaceBetween: 10,
    // 	},
    // 	1200: {
    // 		slidesPerView: 4,
    // 		spaceBetween: 10,
    // 	},
    // 	1601: {
    // 		slidesPerView: 5,
    // 		spaceBetween: 10,
    // 	},
    // }
    // autoplay: {
    // 	delay: 5000,
    // },

  });
  var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1601: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });
  var galleryTop2 = new Swiper('.gallery-top2', {
    autoHeight: true,
    loop: true,
    observer: true,
    observeParents: true,
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs2
    }
  });
  $('.open-magn').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS

    }
  });
});
/* Прокручивает страницу вверх при нажатии на кнопку */
// $(window).scroll(function () {
// 	var height = $(window).scrollTop();
// 	if (height > 100) {
// 		$('#back2Top').fadeIn();
// 	} else {
// 		$('#back2Top').fadeOut();
// 	}
// });
// $(document).ready(function () {
// 	$("#back2Top").click(function (event) {
// 		event.preventDefault();
// 		$("html, body").animate({ scrollTop: 0 }, "slow");
// 		return false;
// 	});
// });

function scrollTo(to) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;

  var element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
  // b = start value
  // c = change in value
  // d = duration
  easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  },
      animateScroll = function animateScroll() {
    var currentDate = +new Date();
    var currentTime = currentDate - startDate;
    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;
    }
  };

  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('#back2Top');
  window.addEventListener('scroll', function () {
    // Если прокрутили дальше 599px, показываем кнопку
    if (pageYOffset > 700) {
      btn.classList.add('show'); // Иначе прячем
    } else {
      btn.classList.remove('show');
    }
  }); // При клике прокручиываем на самый верх

  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 400);
  };
});