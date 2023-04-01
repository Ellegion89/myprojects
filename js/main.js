const burger = document.querySelector('.header-top__burger');
const menu = document.querySelector('.header-top__menu');
const body = document.querySelector('body');

burger.addEventListener('click', function (e) {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('_lock');
});

const burgerCatalog = document.querySelector('.header-bottom__burger');
const menuCatalog = document.querySelector('.catalog-menu');

burgerCatalog.addEventListener("click", function (e) {
    burgerCatalog.classList.toggle('active');
    menuCatalog.classList.toggle('active');
});

const footerHiddenButton = document.querySelector('.footer__btn-hidden');
const footerHiddenMenu = document.querySelector('.footer__body');

footerHiddenButton.addEventListener('click', function (e) {
    footerHiddenButton.classList.toggle('footer-visible');
    footerHiddenMenu.classList.toggle('footer-visible');
});

const catalogueMenuList = document.querySelectorAll('.catalogue-page-menu')

for (let index = 0; index < catalogueMenuList.length; index++) {
    const el = catalogueMenuList[index];
    const catalogueButton = el.querySelector('.catalogue-page-menu__top');
    const catalogueMenu = el.querySelector('.catalogue-page-menu__body');

    if (document.documentElement.clientWidth > 992) {
        catalogueButton.classList.add('_active');
        catalogueMenu.classList.add('_active');
    }

    if (document.documentElement.clientWidth < 992) {
        catalogueButton.classList.remove('_active');
        catalogueMenu.classList.remove('_active');
    }

    if (catalogueButton) {
        catalogueButton.addEventListener("click", function (e) {
            catalogueButton.classList.toggle('_active');
            catalogueMenu.classList.toggle('_active');
        });
    }

}

//---------------------------------------------------------------------------------------------//

window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+375 (__) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});

//---------------------------------------------------------------------------------------------//

const tabsBox = document.querySelectorAll('._tab');
for (let index = 0; index < tabsBox.length; index++) {
    const tabBox = tabsBox[index];
    const tabLinks = tabBox.querySelectorAll('._tab-link');

    for (let index = 0; index < tabLinks.length; index++) {
        const tabLink = tabLinks[index];
        tabLink.addEventListener("click", function (e) {
            e.preventDefault();
            const tabName = tabLink.getAttribute('href').replace('#', '');
            const currentTab = document.getElementById(tabName);

            const tabsActive = tabBox.querySelectorAll('.tab_active');
            for (let index = 0; index < tabsActive.length; index++) {
                const tabActive = tabsActive[index];
                tabActive.classList.remove('tab_active');
            }

            currentTab.classList.add('tab_active');
            tabLink.classList.add('tab_active');
        });
    }
}

//---------------------------------------------------------------------------------------------//

const btnUp = {
    el: document.querySelector('.up'),
    show() {
        this.el.classList.remove('_hide');
    },
    hide() {
        this.el.classList.add('_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 300 ? this.show() : this.hide();
        });
        document.querySelector('.up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

//---------------------------------------------------------------------------------------------//

const floatBtnSocial = document.querySelector('.social__button');
const socialBody = document.querySelector('.social__box ');

if (floatBtnSocial && socialBody) {
    floatBtnSocial.addEventListener("click", function (e) {
        socialBody.classList.toggle('_active');
        floatBtnSocial.classList.toggle('_active');
    });

    document.addEventListener("click", function (e) {
        if (e.target != floatBtnSocial && e.target != socialBody) {
            socialBody.classList.remove('_active');
            floatBtnSocial.classList.remove('_active');
        }
    });

}

//---------------------------------------------------------------------------------------------//

const header = document.querySelector('header');
const upMenuButton = document.querySelector('.header-midle__visible-menu-btn')

window.addEventListener('scroll', function () {
    const scrollMenu = window.scrollY || document.documentElement.scrollTop;
    scrollMenu > 100 ? header.classList.add('fixed') : header.classList.remove('fixed');
    header.classList.remove('none-fixed');
    upMenuButton.classList.remove('_active');
});

upMenuButton.addEventListener("click", function (e) {
    header.classList.toggle('none-fixed');
    upMenuButton.classList.toggle('_active');
});

//---------------------------------------------------------------------------------------------//

document.addEventListener("click", function (e) {
    let targetElement = e.target;
    if (targetElement.closest('.quantity__button')) {
        let value = parseInt(targetElement.closest('.quantity').querySelector('input').value);
        if (targetElement.classList.contains('quantity__button_plus')) {
            value++;
        } else {
            --value;
            if (value < 1) value = 1;
        }
        targetElement.closest('.quantity').querySelector('input').value = value;
    }
});

//---------------------------------------------------------------------------------------------//

const comparePage = document.querySelector('.compare-page');

if (comparePage) {
    const compareCards = document.querySelectorAll('.compare-card');
    const label = document.querySelector('.compare-page__label');
    const removeAll = document.querySelector('.compare-card__delete-product_all');
    count();

    if (compareCards.length > 0) {
        removeAll.addEventListener("click", function (e) {
            for (let index = 0; index < compareCards.length; index++) {
                const compareEl = compareCards[index];
                compareEl.remove();
                count();
            }
        });

        for (let index = 0; index < compareCards.length; index++) {
            const compareEl = compareCards[index];
            const removeBtn = compareEl.querySelector('.compare-card__delete-product_this');
            removeBtn.addEventListener("click", function (e) {
                compareEl.remove();
                count();
            });
        }
    }

    function count() {
        const compareCards = document.querySelectorAll('.compare-card');
        if (compareCards.length === 0) {
            label.innerText = `Не выбрано ни одного товара для сравнения!`;
            comparePage.classList.add('hidden');
            removeAll.classList.remove('visible');
        } else {
            label.innerText = `Для сравнения выбрано: ${compareCards.length}`;
            comparePage.classList.remove('hidden');
            removeAll.classList.add('visible');
        }
    }
}

//---------------------------------------------------------------------------------------------//

const dropDown = document.querySelectorAll('.drop-down');

if (dropDown.length > 0) {

    for (let index = 0; index < dropDown.length; index++) {
        const dropDownEl = dropDown[index];
        const dropDownButton = dropDownEl.querySelector('.drop-down__button');
        const dropDownList = dropDownEl.querySelector('.drop-down__list');

        dropDownButton.addEventListener("click", function (e) {
            dropDownList.classList.toggle('_active');
            this.classList.toggle('_active');
        });

        const dropDownItems = dropDownEl.querySelectorAll('.drop-down__item');
        const dropDownInput = dropDownEl.querySelector('.drop-down__input-hidden');

        for (let index = 0; index < dropDownItems.length; index++) {
            const dropDownItem = dropDownItems[index];

            dropDownItem.addEventListener("click", function (e) {
                e.stopPropagation();
                dropDownButton.innerText = this.innerText;
                dropDownInput.setAttribute('value', this.getAttribute('data-value'));
                dropDownList.classList.remove('_active');
                dropDownButton.classList.remove('_active');
            });
        }

        document.addEventListener('click', function (e) {
            if (e.target !== dropDownButton) {
                dropDownList.classList.remove('_active');
                dropDownButton.classList.remove('_active');
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                dropDownList.classList.remove('_active');
                dropDownButton.classList.remove('_active');
            }
        });
    }
}

//---------------------------------------------------------------------------------------------//

const form = document.querySelectorAll('.form');

for (let i = 0; i < form.length; i++) {
    const forme = form[i];

    const inputs = forme.querySelectorAll('.req');

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        input.oninput = (e) => {
            validation(input)
        }

        forme.addEventListener('submit', (e) => {
            e.preventDefault();
            validation(input);
        })
    }

    function validation(input) {
        if (input.value === "" || input.value === "+375 (" || input.value === "+375 ") {
            addError(input);
        } else {
            removeError(input);
        }
        if (input.classList.contains('mail')) {
            validateMail(input);
        }

        if (input.classList.contains('pass')) {
            if (input.value === "") {
                input.classList.add('_error');
                input.parentElement.querySelector('p').innerHTML = 'Введите пароль';
            } else {
                input.classList.remove('_error');
                input.parentElement.querySelector('p').innerHTML = '';
            }

        }
    }

    function addError(input) {
        input.classList.add('_error');
        input.parentElement.querySelector('p').innerHTML = 'Обязательное поле';
    }

    function removeError(input) {
        input.classList.remove('_error');
        input.parentElement.querySelector('p').innerHTML = '';

    }

    function validateMail(input) {
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(input.value).toLowerCase())) {
            input.classList.add('_error');
            input.parentElement.querySelector('p').innerHTML = 'Неверный E-mail';
        } else {
            input.classList.remove('_error');
            input.parentElement.querySelector('p').innerHTML = '';
        }

    }
}

//---------------------------------------------------------------------------------------------//

const swiperClasses = document.querySelectorAll('._swiper');

if (swiperClasses.length > 0) {

    for (let index = 0; index < swiperClasses.length; index++) {
        const swiperClass = swiperClasses[index];
        const swiperWrappers = swiperClass.children

        for (let index = 0; index < swiperWrappers.length; index++) {
            const swiperWrapper = swiperWrappers[index];

            if (!swiperWrapper.classList.contains('swiper-button-prev') && !swiperWrapper.classList.contains('swiper-button-next')) {
                swiperWrapper.classList.add('swiper-wrapper');
                break;
            }
        }

        const swiperSlides = swiperClass.querySelector('.swiper-wrapper').children;

        for (let index = 0; index < swiperSlides.length; index++) {
            const swiperSlide = swiperSlides[index];
            swiperSlide.classList.add('swiper-slide');
        }
    }

    //---------------------------------------------------------------------------------//

    new Swiper('.favourites-page__body', {

        navigation: {
            prevEl: '.favourites-page__btn-prev',
            nextEl: '.favourites-page__btn-next'
        },

        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 20,

            },
            600: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 3.2,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 35,
            }
        },
        speed: 300,
    });

    //---------------------------------------------------------------------------------//

    new Swiper('.news__body', {
        slidesPerView: 1.1,
        spaceBetween: 20,
        loop: true,

        navigation: {
            prevEl: '.news__btn-prev',
            nextEl: '.news__btn-next'
        },

        breakpoints: {
            600: {
                slidesPerView: 2.2,
                spaceBetween: 22,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },

        speed: 500,

    });

    //----------------------------------------------------------------------------------//

    new Swiper('.product-page__image-box', {
        slidesPerView: 1,
        loop: true,

        navigation: {
            prevEl: '.product-page__btn-prev',
            nextEl: '.product-page__btn-next'
        },

        speed: 200,

    });

    //----------------------------------------------------------------------------------//

    new Swiper('.reviews__body', {
        slidesPerView: 1.1,
        spaceBetween: 20,
        loop: true,

        navigation: {
            prevEl: '.reviews__btn-prev',
            nextEl: '.reviews__btn-next'
        },

        breakpoints: {
            600: {
                slidesPerView: 2.2,
                spaceBetween: 22,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },

        speed: 200,

    });
}

//----------------------------------------------------------------------------------//

new Swiper('.start-top__stocks', {
    loop: true,
    slidesPerView: 3,

    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 1500,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1300: {
            slidesPerView: 3,
        }
    },
});

//----------------------------------------------------------------------------------//

new Swiper('.little-slider', {
    loop: true,
    slidesPerView: 3,

    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 1800,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        }
    },
});

//----------------------------------------------------------------------------------//

new Swiper('.start-midle__slider', {
    navigation: {
        prevEl: '.big-slider__prev-button',
        nextEl: '.big-slider__next-button'
    },

    pagination: {
        el: '.big-slider__pagination_01',
        type: 'bullets',
        clickable: true,
    },

    slidesPerView: 1,
    autoHeight: true,
    watchOverflow: true,
    slidesPerGroup: 1,
    loop: true,

    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 2000,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

//----------------------------------------------------------------------------------//

new Swiper('.slider-block__big-slider', {
    navigation: {
        prevEl: '.big-slider__prev-button_02',
        nextEl: '.big-slider__next-button_02'
    },

    pagination: {
        el: '.big-slider__pagination_02',
        type: 'bullets',
        clickable: true,
    },

    slidesPerView: 1,
    autoHeight: true,
    watchOverflow: true,
    slidesPerGroup: 1,
    loop: true,

    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 2000,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

//----------------------------------------------------------------------------------//

new Swiper('.products-home__body_new-products', {

    navigation: {
        prevEl: '.products-home__button-prev_new-products',
        nextEl: '.products-home__button-next_new-products'
    },

    slidesPerView: 4,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 20,

        },
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3.2,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        }
    },
    speed: 300,
});

//----------------------------------------------------------------------------------//

new Swiper('.products-home__body_popular-products', {

    navigation: {
        prevEl: '.products-home__button-prev_popular-products',
        nextEl: '.products-home__button-next_popular-products'
    },
    slidesPerView: 4,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 20,

        },
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3.2,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        }
    },
    speed: 300,
});

//----------------------------------------------------------------------------------//

new Swiper('.products-home__body_stock-products', {

    navigation: {
        prevEl: '.products-home__button-prev_stock-products',
        nextEl: '.products-home__button-next_stock-products'
    },
    slidesPerView: 4,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 20,

        },
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3.2,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        }
    },
    speed: 300,
});

//----------------------------------------------------------------------------------//

new Swiper('.popular-categories__body', {
    slidesPerView: 1.1,
    spaceBetween: 20,

    breakpoints: {
        600: {
            slidesPerView: 2.2,
            spaceBetween: 22,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

    speed: 200,
});

//----------------------------------------------------------------------------------//

new Swiper('.popular-brand__body', {
    slidesPerView: 1.1,
    spaceBetween: 20,

    breakpoints: {
        600: {
            slidesPerView: 2.2,
            spaceBetween: 22,
        },

        1000: {
            slidesPerView: 4,
            spaceBetween: 25,
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
    },

    speed: 200,
});

new Swiper('.compare-page__row', {
    slidesPerView: 1.1,
    spaceBetween: 20,

    breakpoints: {

        480: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },


        680: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },

        992: {
            slidesPerView: 2.15,
            spaceBetween: 30,
        },
    },

    speed: 500,

});

//----------------------------------------------------------------------------------//

new Swiper('.recommendations__row', {

    navigation: {
        prevEl: '.recommendations__button-prev',
        nextEl: '.recommendations__button-next'
    },

    slidesPerView: 4,

    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 20,

        },
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3.2,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        }
    },
    speed: 300,
});

new Swiper('.recommendations__row_viewed', {

    navigation: {
        prevEl: '.recommendations__button-prev_viewed',
        nextEl: '.recommendations__button-next_viewed'
    },

    slidesPerView: 4,

    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 20,

        },
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3.2,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        }
    },
    speed: 300,
});
