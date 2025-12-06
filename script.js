// выводит окошко на экран
// alert('222');

// Только раскрытие текста
// document.querySelector('.info__link').addEventListener('click', function () {
//     this.remove()
//     document.querySelector('.info__text').classList.add('info__text--active');
// })

let buttonText;
let buttonText2 = "Скрыть текст";

// Раскрытие-сворачивание
// document.querySelector('.info__link').addEventListener('click', function () {
//     document.querySelector('.info__text').classList.toggle('info__text--active');
//     if (this.textContent == 'Показать полностью') {
//         this.textContent = "Скрыть текст";
//     } else {
//         this.textContent = "Показать полностью";
//     }
// })

document.querySelector('.info__link').addEventListener('click', function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    buttonText = this.textContent;
    this.textContent = buttonText2;
    buttonText2 =  buttonText;
})

// ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
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

    let buttons = [
        "Супер хит",
        'Новинка',
        "С мясом",
        "Вегетарианская",
        "С курицей",
        "Без лука",
        "С грибами",
        "С морепродуктами",
        "Барбекью"
    ];

    const list = document.querySelector('.filter-common');
    if (list) {
        // list.textContent = "hello<br>world"
        // list.innerHTML = "<button>hello</button><button>world</button>"
        // list.outerHTML = "<div class='popup-filter__checkbox active'><button>asdlf</button></div>"

        for(let i = 0; i < buttons.length; i = i + 1) {
            let newElement = document.createElement('button')
            newElement.textContent = buttons[i];
            list.append(newElement)
        }
    }
});

// let m = [5, 4, 5, 2];
// console.log(m[0])
// m[1] = 7
// console.log(m);
// m[10] = 9
// console.log(m[10])
// m.push(588)
// m.length