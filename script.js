// ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
    
    // раскрытие текста в блоке info
    const infoLink = document.querySelector('.info__link')
    if (infoLink) {
        infoLink.addEventListener('click', function () {
            const infoText = document.querySelector('.info__text')
            if (infoText) {
                infoText.classList.toggle('info__text--active');
                let buttonText = this.textContent;
                this.textContent = this.dataset.hello;
                this.dataset.hello =  buttonText;
            }
        })
    }

    // открытие попапа фильтра
    const popupFilter = document.querySelector('.popup-filter');
    if (popupFilter) {
        const buttonPopup = document.querySelector('.catalog__filter');
        if (buttonPopup) {
            buttonPopup.addEventListener('click', function () {
                document.body.classList.add('no-scroll');
                popupFilter.classList.add('popup-filter--show')
                setTimeout(function () {
                    popupFilter.classList.add('popup-filter--active')
                }, 10);
            })
        }

        const buttonPopupClose = document.querySelector('.popup-filter__close');
        if (buttonPopupClose) {
            buttonPopupClose.addEventListener('click', function () {
                popupFilter.classList.remove('popup-filter--active')
                setTimeout(function () {
                    popupFilter.classList.remove('popup-filter--show')
                    document.body.classList.remove('no-scroll');
                }, 300);
            });
        }
    }

    // формирование групп фильтров в попапе
    const titles = [
        "Общее",
        "Сыр",
        "Мясо",
        "Компонент"
    ];

    const buttons = [
        [
            "Супер хит",
            'Новинка',
            "С мясом",
            "Вегетарианская",
            "С курицей",
            "Без лука",
            "С грибами",
            "С морепродуктами",
            "Барбекью"
        ],
        [
            "Реджанито",
            "Моцарелла",
            "Чеддер",
            "С голубой плесенью",
            "Смесь итальянских сыров",
            "Мягкий молодой сыр лука",
        ],
        [
            "Пепперони",
            "Свинина",
            "Ветчина",
            "Бекон",
            "Говядина",
            "Чоризо",
            "Колбаски",
            "Куриная грудка",
        ],
        [
            "Креветка",
            "Ананасы",
            "Шампиньоны",
            "Лук",
            "Перец халапеньо",
            "Орегано",
            "Зеленый перец",
            "Томаты",
            "Чеснок",
            "Красный перец",
            "Оливки",
            "Маслины",
            "Клубника",
            "Смесь итальянских трав",
        ]
    ];

    const groups = document.querySelector('.popup-filter__groups');
    if (groups) {
        let groupHtml = '';
        for(let i = 0; i < titles.length; i++) {
            let buttonsHtml = '';
            for(let j = 0; j < buttons[i].length; j++) {
                buttonsHtml = buttonsHtml + `<button>${buttons[i][j]}</button>`
            }
            groupHtml = groupHtml + `<div class="popup-filter__group">
                        <h4>${titles[i]}</h4>
                        <div class="popup-filter__checkbox">
                            ${buttonsHtml}
                        </div>
                    </div>`;
        }
        groups.innerHTML = groupHtml;
    }

    // формирование пагинации
    const n = 1000;
    const here = document.querySelector('.here');
    if (here) {
        let paginationHtml = '';
        for (let i = 1; i <= n; i++) {
            if (i <= 3 || i > n - 3) {
                paginationHtml = paginationHtml + `<li>
                        <a href="#" class="pagination__button">${i}</a>
                    </li>`;
            }
            if (i == 3) {
                paginationHtml = paginationHtml + `<li>
                        <span>...</span>
                    </li>`;
            }
        }
        here.outerHTML = paginationHtml;
    }

    // формирование категорий на главной странице
    const categories = [
        {
            icon: "icon-sale",
            title: 'Акции',
            isActive: true
        },
        {
            icon: "icon-pizza",
            title: 'Пицца',
            isActive: false
        },
        {
            icon: "icon-sushi",
            title: 'Суши',
            isActive: false
        },
        {
            icon: "icon-juice",
            title: 'Напитки',
            isActive: false
        },
        {
            icon: "icon-snakes",
            title: 'Закуски',
            isActive: false
        },
        {
            icon: "icon-combo",
            title: 'Комбо',
            isActive: false
        },
        {
            icon: "icon-desert",
            title: 'Десерты',
            isActive: false
        },
        {
            icon: "icon-souce",
            title: 'Соусы',
            isActive: false
        },
    ];

    const categoriesList = document.querySelector('.categories__list');
    if (categoriesList) {
        let categoriesHtml = '';
        categories.forEach(function (category) {
            let isActive = '';
            if (category.isActive == true) {
                isActive = 'active';
            }
            categoriesHtml = categoriesHtml + `<li>
                        <a href="#" class="categories__link ${isActive}">
                            <svg width="24" height="24">
                                <use xlink:href="images/icons/sprite.svg#${category.icon}" />
                            </svg>
                            ${category.title}
                        </a>
                    </li>`
        });
        categoriesList.innerHTML = categoriesHtml;
    }

    // увеличение и уменьшение количества товара
    const buttonPlus = document.querySelector('.cart__item-plus');
    if (buttonPlus) {
        buttonPlus.addEventListener('click', function () {
            const cartInput = document.querySelector('.cart__item-quantity')
            if (cartInput) {
                if (+cartInput.value < 999) {
                    cartInput.value = +cartInput.value + 1;
                }
            }
        });
    }

    const buttonMinus = document.querySelector('.cart__item-minus');
    if (buttonMinus) {
        buttonMinus.addEventListener('click', function () {
            const cartInput = document.querySelector('.cart__item-quantity')
            if (cartInput) {
                if (+cartInput.value > 0) {
                    cartInput.value = +cartInput.value - 1;
                }
            }
        });
    }
});
