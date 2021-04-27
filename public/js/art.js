let button = document.querySelector('.art_filtersSpoiler-arrowBlock'),
    content = document.querySelector('.art_filtersContent'),
    content_choosen = document.querySelector('.filters_choosen'),
    arrow = document.querySelector('.art_filtersSpoiler-arrow'),
    body = document.querySelector('body'),
    isActive = false;


button.addEventListener('click', () => {
    if (!isActive) {
        arrow.style.transform = 'scale(-1)';
        arrow.style.margin = '5px 0 0 0';
        isActive = true;
        content.style.height = '220px';
        content.style.marginTop = '0';
        setTimeout(() => {
            content_choosen.style.display = 'grid';
            setTimeout(() => {
                content_choosen.style.opacity = '1';
            }, 150)
        }, 150)
    } else {
        arrow.style.transform = 'scale(1)';
        arrow.style.margin = '0 0 5px 0';
        isActive = false;
        content.style.height = '0';
        content.style.marginTop = '-50px';
        content_choosen.style.opacity = '0';
        setTimeout(() => {
            content_choosen.style.display = 'none';
        }, 150)

    }
})


// FILTERS
let filters_choosenColumnCheckbox = document.querySelectorAll('.filters_choosenColumn-checkbox'),
    content_cart = document.querySelectorAll('.art');

filters_choosenColumnCheckbox.forEach(item => {
    item.addEventListener('click', () => {
        let count = 0;
        content_cart.forEach(item => {
            item.style.opacity = "0";
            setTimeout(() => {
                item.style.display = "none";
            }, 300)
        })
        setTimeout(() => {
            filters_choosenColumnCheckbox.forEach(item => {
                if (item.checked) {
                    content_cart.forEach(block => {
                        if (item.id == block.getAttribute("year") || item.id == block.getAttribute("genre") || item.id == block.getAttribute("language") || item.id == block.getAttribute("pages") || item.id.slice(0, -3) == block.getAttribute("year") || item.id.slice(0, -3) == block.getAttribute("genre") || item.id.slice(0, -3) == block.getAttribute("language") || item.id.slice(0, -3) == block.getAttribute("pages")) {
                            block.style.display = "block";
                            setTimeout(() => {
                                block.style.opacity = "1";
                            }, 300)
                        }
                    })
                    count++;
                }
            })
            if (count <= 0) {
                content_cart.forEach(block => {
                    block.style.display = "block";
                    setTimeout(() => {
                        block.style.opacity = "1";
                    }, 300)
                })
            }
        }, 300)
        if (body.offsetWidth <= 600) {
            setTimeout(() => {
                closeFilterBlockMbl();
            }, 300)
        }
    })
})


// SHOW OUTPUT BLOCK
let art_button = document.querySelectorAll('.art_button'),
    art_outputBlock = document.querySelector('.art_outputBlock');

const dataForBooks = [
    {
        "photo": "img/books/book5.jpg",
        "name": "Чорні крила",
        "description": {
            "year": "2016",
            "ganre": "Модернізм",
            "language": "Українська",
            "countOfPage": "192 ст."
        },
        "linkForBuyBook": "https://www.yakaboo.ua/ua/chorni-krila-ta-inshi-tvori.html",
        "writings": [
            "«Гріх не все вийде наяву…»",
            "«Одна дівчина любила ліжко…»",
            "«Любім щире слово…»",
            "«Приятель дому…»",
            "Гості",
            "«Прийшла з далекого села…»",
            "«Внесли його на ношах»",
            "Діточа грудь у скрипці",
            "Пегас",
            "Дитина",
            "Смерека",
            "«Літнього полудня лежав я…»",
            "«Хлоп’я купається в ріці…»",
            "Регіт трупа",
            "Портрет",
            "Діточа тайна",
            "Звела з дороги",
            "Казка про перстень",
            "Жаб’ячий похорон",
            "Напасть",
            "По дорозі",
            "Лісовий дзвін",
            "Віднова на порохні",
            "Бузьок",
            "Горобці",
            "Повернення",
            "Благословення",
            "Серп",
            "Поема долин",
            "Доля молоденької Музи",
            "Мальований стрілець",
            "Біла квітка",
            "З монастиря",
            "Дівчина чорнім коні",
            "Яків Маренга",
            "Тихий світ",
            "Сонце западає",
            "За горою",
            "Зерно гірчиці",
            "Тіні серед тіней",
            "Вечірні збитки",
            "Ой, не ходи, Грицю",
            "Адонай і Бербера",
            "Дорійське підсіння",
            "Картина з дневника",
            "Похила вежа",
            "Боротьба з головою",
            "«Отсе я знов на чужині»",
            "Журавлі",
            "Мрія вірла",
            "Білий коник",
            "Поштиліон",
            "Полк Ойзієна",
            "Adagio consolаnte",
            "Йонська колумня",
            "Будівля кораблів",
            "Орликівна",
            "Де правда?",
            "Псярня"
        ]
    },
    {
        "photo": "img/books/book4.jpg",
        "name": "Вибрані твори",
        "description": {
            "year": "1973",
            "ganre": "Модернізм",
            "language": "Українська",
            "countOfPage": "456 ст."
        },
        "linkForBuyBook": "https://retrokniga.com/allproduct/books/yatsk%D1%96v-mihaylo-vibran%D1%96-tvori",
        "writings": [
            "У наймах",
            "Собака",
            "Недоумна",
            "Що ж робити?",
            "Шкапа",
            "Смерека",
            "Бузьок",
            "З монастиря",
            "Повернення",
            "Серп",
            "Благословення",
            "Душі кланяються",
            "Під обухом",
            "В казармі",
            "Христос у гарнізоні",
            "Дитяча забавка",
            "Лісовий дзвін",
            "Бувальщина",
            "Боротьба з головою",
            "Посол Петришин",
            "«Ой не ходи, Грицю…»",
            "Дитяча грудь у скрипці",
            "Красуня",
            "За горою",
            "Горобці",
            "Тихий світ",
            "Мрія вірла",
            "Журавлі",
            "Молоде вино грониться…",
            "Мандрівник",
            "Олень проклинає",
            "Furia addormentata",
            "Митець",
            "Гермес Праксітеля",
            "Поворотний акорд",
            "Остання зміна Івана Завади",
            "Убийте мене!",
            "На світанку",
            "Червоне Яблучко",
            "До нової школи",
            "По маму!",
            "Афродіта з Каїдос",
            "В лабетах (Танець тіней)",
            "Спогади",
            "Мої зустрічі з Каменярем",
            "Спогад про Василя Стефаника"
        ]
    },
    {
        "photo": "img/books/book3.jpg",
        "name": "Муза на<br />чорному коні",
        "description": {
            "year": "1989",
            "ganre": "Роман",
            "language": "Українська",
            "countOfPage": "846 ст."
        },
        "linkForBuyBook": "https://retrokniga.com/khudozhestvennaya-literatura/klassika/yack%D1%96v-mikhajjlo-muza-na-chornomu-kon%D1%96",
        "writings": [
            "У наймах",
            "Собака",
            "Недоумна",
            "Що ж робити?",
            "Затроєна шпилька",
            "Шкапа",
            "Білі вівці",
            "Diva",
            "Весняний захват",
            "Поганство юрби",
            "Готуріди",
            "Посуди",
            "З циклу вічних поезій",
            "Біла квітка",
            "Бузьок",
            "Пегас",
            "Смерека",
            "З монастиря",
            "Портрет",
            "Повернення",
            "Поема долин",
            "Серп",
            "Благословення",
            "Душі кланяються",
            "Під обухом",
            "В казармі",
            "Христос у гарнізоні",
            "Дитяча забавка",
            "У милосердної богині з кам’яним серцем",
            "На діброві",
            "Мальований стрілець",
            "Доля молоденької музи",
            "Боротьба з головою",
            "Бувальщина",
            "По дорозі",
            "Лісовий дзвін",
            "«Ой не ходи, Грицю…»",
            "Горобці",
            "Гості",
            "Казка про перстень",
            "Красуня",
            "Хлоп’я",
            "Дитяча грудь у скрипці",
            "За горою",
            "Посол Петришин",
            "Дбала",
            "Щире слово",
            "Прийшла з далекого села",
            "Все дурниця",
            "Дитина",
            "Звела з дороги",
            "Зерно гірчиці",
            "Віднова на порохні",
            "Тихий світ",
            "Де правда?",
            "Дівчина чорнім коні",
            "Журавлі",
            "Білий коник",
            "Полк Ойзієна",
            "Adagio consolante",
            "Архітвір",
            "Мрія вірла",
            "Поштиліон",
            "Псярня",
            "Новітня основа",
            "Мандрівник",
            "Дівчина з XVIII віку",
            "Вечорниці Романа Ничаєнка",
            "Ранок зільника",
            "Жінка Сарданапала",
            "Сфінкс",
            "Олень проклинає",
            "Думка",
            "Гомін будуччини",
            "Скам’яніла країна",
            "Зоря благовіщення",
            "Сучасний Каїн",
            "Furia addormentata …",
            "Молоде вино грониться…",
            "Митець",
            "Гермес Праксітеля",
            "Поворотний акорд",
            "Остання зміна Івана Завади",
            "Убийте мене!...",
            "На світанку",
            "Червоне яблучко",
            "До нової школи",
            "По маму!",
            "Афродіта з Кнідос",
            "Огні горять",
            "Блискавиці",
            "Горлиця",
            "В лабетах (Танець тіней)",
            "Лист до редакції «Громадянського голосу»",
            "Невідомий оповідач 50-ї казки Рудченка",
            "Леонід Андреєв на тлі своєї творчості",
            "Лесь Мартович",
            "Думки і враження з жалібного хороводу",
            "Мої зустрічі з Каменярем",
            "Спогад про Василя Стефаника"
        ]
    },
    {
        "photo": "img/books/book1.jpg",
        "name": "Новели",
        "description": {
            "year": "1985",
            "ganre": "Новела",
            "language": "Українська",
            "countOfPage": "199 ст."
        },
        "linkForBuyBook": "https://crafta.ua/uk/lots/6537626193-yackiv-myu-noveli-biblioteka-karpati-lviv-kamenyar-1985-200sportret%20",
        "writings": [
            "У наймах",
            "Собака",
            "Недоумна",
            "Бузьок",
            "Пегас",
            "Поема долин",
            "Душі кланяються",
            "Під обухом",
            "В казармі",
            "Христос у гарнізоні",
            "Дитяча забавка",
            "У милосердної богині з кам’яним серцем",
            "Доля молоденької музи",
            "Боротьба з головою",
            "Шкапа",
            "Смерека",
            "«Ой не ходи, Грицю…»",
            "З монастиря",
            "Горобці",
            "Повернення",
            "Гості",
            "Казка про перстень",
            "Серп",
            "Благословення",
            "Красуня",
            "Біла квітка",
            "Лісовий дзвін",
            "Глибінь",
            "Дитяча грудь у скрипці",
            "Бувальщина",
            "Тихий світ",
            "Мандрівник",
            "Де правда?",
            "За горою",
            "Мрія вірла",
            "Журавлі",
            "Молоде вино грониться…",
            "Посол Петришин",
            "Думка",
            "Добрий друг",
            "Жінка Сарданапала",
            "Гомін будуччини",
            "Сфінкс",
            "Олень проклинає",
            "Вечорниці Романа Ничаєнка",
            "Furia addormentata …",
            "Митець",
            "Гермес Праксітеля",
            "Поворотний акорд",
            "Остання зміна Івана Завади",
            "Убийте мене!...",
            "На світанку",
            "Червоне Яблучко",
            "До нової школи",
            "По маму!",
            "Афродіта з Кнідос"
        ]
    },
    {
        "photo": "img/books/book2.jpg",
        "name": "Химерний<br />Яцків",
        "description": {
            "year": "2010",
            "ganre": "Катарсис",
            "language": "Українська",
            "countOfPage": "223 ст."
        },
        "linkForBuyBook": "https://www.yakaboo.ua/ua/himernij-jackiv-modernists-kij-diskurs-u-prozi-mihajla-jackova.html",
        "writings": [
            "Химерний Яцків : модерністський дискурс у прозі Михайла Яцкова",
            "Михайло Яцків. Архітвір. Вибрані тексти.",
            "Ґотуріди",
            "Посуди",
            "Поганство юрби",
            "Мальований стрілець",
            "Лісовий дзвін",
            "Дитяча грудь у скрипці",
            "Дівчина на чорнім коні",
            "Архітвір",
            "Новітня основа",
            "Вечерниці Романа Ничаєнка",
            "Блискавиці"
        ]
    }
];

art_button.forEach(item => {
    item.addEventListener('click', () => {
        constructorOutputBlock(item.getAttribute("index"));
        setTimeout(() => {
            html.style.overflow = 'hidden';
            art_outputBlock.style.display = 'flex';
            setTimeout(() => {
                art_outputBlock.style.opacity = '1';
            }, 150)
        }, 10)
    })
})

const constructorOutputBlock = (index) => {
    const data = dataForBooks[index];
    art_outputBlock.innerHTML = `
        <div class="art_outputBlock_Close-btn">
            <div class="art_outputBlock_Close-line"></div>
            <div class="art_outputBlock_Close-line"></div>
        </div>
        <img class="art_outputBlock-img" src="${data.photo}" alt="book">
        <div class="art_outputBlockContent">
            <div class="art_outputBlockContent-description">
                <h2 class="art_outputBlockContent-title">${data.name}</h2>
                <p class="art_outputBlockContent-year"><span>Рік:</span> ${data.description.year}</p>
                <p class="art_genre"><span>Жанр:</span> ${data.description.ganre}</p>
                <p class="art_language"><span>Мова:</span> ${data.description.language}</p>
                <p class="art_pages">${data.description.countOfPage}</p>
                <a target="_blank" href="${data.linkForBuyBook}" class="art_outputBlockContent-button">Купити</a>
            </div>
            <div class="art_outputBlockContent-writings">
                <h2 class="art_outputBlockContent-writingsTitle">Список творів</h2>
                <ul class="art_outputBlockContent-writingsUl">
                    
                </ul>
            </div>
        </div>
    `;
    data.writings.forEach(writing => {
        document.querySelector('.art_outputBlockContent-writingsUl').innerHTML += `<li class="art_outputBlockContent-writingsLi">${writing}</li>`;
    })
    addEventListenerForCloseBtn();
}

const addEventListenerForCloseBtn = () => {
    let art_outputBlock_CloseBtn = document.querySelector('.art_outputBlock_Close-btn');

    art_outputBlock_CloseBtn.addEventListener('click', () => {
        art_outputBlock.style.opacity = '0';
        setTimeout(() => {
            html.style.overflow = 'auto';
            art_outputBlock.style.display = 'none';
        }, 150)
    })
}

// RESIZE BOOK FUNCTION

let artGallery = document.querySelector('.art_galery'),
    art = document.querySelectorAll('.art')[0],
    w = art.offsetWidth;

const resizeBook = () => {
    if(body.offsetWidth > 500){
        artGallery.style.gridTemplateRows = `repeat(5, ${w + 150}px)`;
    } else {
        artGallery.style.gridTemplateRows = `repeat(5, ${w + 175}px)`;
    }
}

resizeBook();




// OPEN FILTER FOR PHONE
let art_filtersBtnMb = document.querySelector('.art_filtersBtnMb'),
    art_filtersBlockMbCloseBtn = document.querySelector('.art_filtersBlockMb-closeBtn'),
    art_filtersBlockMb = document.querySelector('.art_filtersBlockMb');

art_filtersBtnMb.addEventListener('click', () => {
    openFilterBlockMbl();
})
art_filtersBlockMbCloseBtn.addEventListener('click', () => {
    closeFilterBlockMbl();
})

const openFilterBlockMbl = () => {
    art_filtersBlockMb.style.display = 'flex';
    html.style.overflow = 'hidden';
    setTimeout(() => {
        art_filtersBlockMb.style.opacity = '1';
    }, 150)
}

const closeFilterBlockMbl = () => {
    art_filtersBlockMb.style.opacity = '0';
    setTimeout(() => {
        art_filtersBlockMb.style.display = 'none';
        html.style.overflow = 'auto';
    }, 500)
}


// FIX BUG IN SAFARI WITH HOVER
document.querySelectorAll('.art').forEach(item => {
    item.addEventListener('click', () => {})
})