let marks = document.querySelectorAll('.mark'),
	page = document.querySelector('.mark_outputBlock')

marks.forEach(mark => {
	mark.addEventListener('click', () => {
		openPage()
		marksDataParser(mark)
	})
})

const openPage = () => {
	html.style.overflow = 'hidden'
	page.style.display = 'flex'
	setTimeout(() => {
		page.style.opacity = '1'
	}, 150)
}

const closePage = () => {
	let closeBtn = document.querySelector('.mark_outputBlock_CloseBtn')

	closeBtn.addEventListener('click', () => {
		page.style.opacity = '0'
		setTimeout(() => {
			html.style.overflow = 'auto'
			page.style.display = 'none'
		}, 150)
	})
}

const marksData = [
	{
		point: 'Львів',
		region: 'Львівська',
		district: '-',
		photo: '../img/marks/theater.png',
		morePhotos: '../img/marks/theater2.jpg',
		link: 'https://www.google.com/search?q=%D0%9D%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9+%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%B8%D0%B9+%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D1%82%D0%B5%D0%B0%D1%82%D1%80+%D1%96%D0%BC%D0%B5%D0%BD%D1%96+%D0%9C%D0%B0%D1%80%D1%96%D1%97+%D0%97%D0%B0%D0%BD%D1%8C%D0%BA%D0%BE%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%BE%D1%97&tbm=isch&ved=2ahUKEwiCjaHl-qHwAhWly7sIHX1FCGMQ2-cCegQIABAA&oq=%D0%9D%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9+%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%B8%D0%B9+%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D1%82%D0%B5%D0%B0%D1%82%D1%80+%D1%96%D0%BC%D0%B5%D0%BD%D1%96+%D0%9C%D0%B0%D1%80%D1%96%D1%97+%D0%97%D0%B0%D0%BD%D1%8C%D0%BA%D0%BE%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%BE%D1%97&gs_lcp=CgNpbWcQAzIECAAQEzoHCCMQ6gIQJ1C600ZYlNVGYKLXRmgBcAB4AIABZYgBZZIBAzAuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=zN2JYIL3OKWX7_UP_YqhmAY&bih=979&biw=1920',
		text: 'Будівлю Націона́льного академі́чного украї́нського драмати́чного теа́тру і́мені Марі́ї Занькове́цької було відкрито, як «Скарбківський театр» (від імені його засновника, Станіслава Скарбка) у Львові 28 березня 1842 року. На момент відкриття був третім за розмірами театром Європи. Будинок театру займає цілий квартал, обмежений вулицею Лесі Українки, проспектом Свободи, площею Князя Ярослава Осмомисла та вулицею Театральною. Зведений у класичному стилі за проєктом архітекторів Л. Піхля та Й. Зальцмана. Трупа самого театру приїхала до Львова у 1944 році.'
	},
	{
		point: 'Львів',
		region: 'Львівська',
		district: '-',
		photo: '../img/marks/library.png',
		morePhotos: '../img/marks/library2.jpg',
		link: 'https://www.google.com/search?q=%D0%BB%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BD%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0+%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%B0+%D0%B1%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8+%D1%96%D0%BC%D0%B5%D0%BD%D1%96+%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8F+%D1%81%D1%82%D0%B5%D1%84%D0%B0%D0%BD%D0%B8%D0%BA%D0%B0&sxsrf=ALeKk00pAwWQX207eMZZzVESlgdkoE9JOQ:1619647921226&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLx4XY-qHwAhXB-ioKHddlDREQ_AUoAnoECAEQBA&cshid=1619647935452416&biw=1920&bih=979',
		text: 'Наукова бібліотека імені Стефаника була заснована 2 січня 1940 року на основі 84 відомчих і приватних бібліотек Львова та Західної України. Головний корпус влаштовано на базі закритого Інституту Оссолінських. В збірку увійшли фонди бібліотеки НТШ і Народного дому у Львові, товариства «Просвіта», частина бібліотеки і архіву Ставропігійного інституту, конфісковані бібліотеки монастирів, приватні збірки, близько 70 %фондів Оссолінеуму. У скрутні часи бібліотеку підтримував художник Микола Бідняк. У Бібліотеці функціонують 3 науково-дослідних інститути: Науково-дослідний інститут пресознавства, Інститут досліджень бібліотечних мистецьких ресурсів та Інститут сучасних інформаційно-бібліотечних технологій. До складу Бібліотеки входять 19 науково-дослідних відділів, 8 науково-прикладних та 2 технічних структурних підрозділи. Універсальними інформаційними ресурсами Бібліотеки користується близько 200 тис. користувачів, яким щорічно видається до 800 тис. документів. Інформаційне обслуговування науковців, фахівців, аспірантів і студентів здійснюється у 18 галузевих та спеціалізованих залах.'
	},
	{
		point: 'Івано-Франківськ',
		region: 'Івано-Франківська',
		district: '-',
		photo: '../img/marks/school_if.png',
		morePhotos: '../img/marks/school_if2.jpg',
		link: 'https://www.google.com/search?q=%D0%A1%D1%82%D0%B0%D0%BD%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%BD%D0%B0+%D0%B3%D1%96%D0%BC%D0%BD%D0%B0%D0%B7%D1%96%D1%8F&sxsrf=ALeKk01msTKsgce6DMrs5qICsDEOh-OqjA:1619649694009&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi5zK-lgaLwAhViCRAIHSh0DTwQ_AUoA3oECAEQBQ&biw=1920&bih=979',
		text: 'У 1784 році на базі екс-езуїтського колегіуму було відкрито державну гімназію із німецькою мовою викладання. Спочатку усі предмети читали тільки німецькою, а після революційних подій викладовою була українська, а надалі і польська. Серед гімназистів був Іван Вагилевич, Дмитро Вітовський та інші видатні люди. До 1905 року це була єдина гімназія у Станіславові. Зараз – морфологічний корпус медінституту.'
	},
	{
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'yes',
		photo: '../img/marks/school.png',
		morePhotos: '../img/marks/school2.jpg',
		link: 'https://www.google.com/search?q=%D0%BB%D0%B8%D1%81%D0%B5%D1%86%D1%8C%D0%BA%D0%B5+%D0%BD%D0%B2%D0%BA&tbm=isch&ved=2ahUKEwi12aTw7qHwAhUQtaQKHfIrBYYQ2-cCegQIABAA&oq=%D0%BB%D0%B8%D1%81%D0%B5%D1%86%D1%8C%D0%BA%D0%B5+%D0%BD%D0%B2%D0%BA&gs_lcp=CgNpbWcQAzIECCMQJzoGCAAQBRAeOgQIABAeULMsWON2YM16aA9wAHgAgAFuiAGKDpIBBDExLjeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=TtGJYLX6MpDqkgXy15SwCA&bih=979&biw=1920',
		text: 'У 1975 році урочисто було відкрито новий корпус школи. На сьогодні у селищі функціонує Навчально-виховний комплекс загальноосвітня школа І-ІІІ ступенів, в 15 класах якої навчається 306 учнів. Навчальний процес організовують 40 педагогічних працівників.'
	},
	{
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'Тисменицький',
		photo: '../img/marks/church2.png',
		morePhotos: '../img/marks/church.jpg',
		link: 'https://www.google.com/search?q=%D0%9B%D0%B8%D1%81%D0%B5%D1%86%D1%8C%D0%BA%D0%B0+%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0&sxsrf=ALeKk027NQuXnHcoe5fN-DKkpMrzDAVb2g:1619347972841&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjShcGlnZnwAhWxlYsKHWC4CPcQ_AUoAnoECAIQBA&biw=1920&bih=979',
		text: 'Лисецька Греко-католицька церква. Побудована у 1920 році на місці старої церкви, яка згоріла від удару блискавки. Оновленого вигляду набула в 2011 році.'

	}
]

const marksDataParser = (mark) => {
	let data = marksData[mark.getAttribute('index')];
	page.innerHTML = `
	<div class="mark_outputBlock_CloseBtn">
    	<div class="aboutWriter_moreClose-line"></div>
    	<div class="aboutWriter_moreClose-line"></div>
	</div>
	<img src="${data.photo}" alt="photo" class="mark_outputBlock-img">
	<div class="mark_outputBlockContent">
		<div class="mark_outputBlockContent_col1">
			<div class="mark_outputBlock-info">
				<h2 class="mark_outputBlock-title">Інформація</h2>
				<p class="mark_outputBlock-info__point"><span>Пункт: </span>${data.point}</p>
				<p class="mark_outputBlock-info__region"><span>Область: </span>${data.region}</p>
				<p class="mark_outputBlock-info__district"><span>Район: </span>${data.district}</p>
			</div>
			<div class="mark_outputBlock-moreImages">
				<h2 class="mark_outputBlock-title">Більше зображень</h2>
				<div class="mark_outputBlock-moreImages__img" style="background-image: url(${data.morePhotos})">
					<a class="mark_outputBlock-moreImages__img-dim" target="_blank" href=${data.link}>
						<div class="mark_outputBlock-moreImages-line"></div>
						<div class="mark_outputBlock-moreImages-line"></div>
					</a>
				</div>
				<div class="mark_outputBlock-moreImages__img" style="background-image: url(${data.morePhotos})">
					<a class="mark_outputBlock-moreImages__img-dim" target="_blank" href="${data.link}">
						<div class="mark_outputBlock-moreImages-line"></div>
						<div class="mark_outputBlock-moreImages-line"></div>
					</a>
				</div>
			</div>
		</div>
		<div class="mark_outputBlock-description">
			<h2 class="mark_outputBlock-title">Опис</h2>
			<p class="mark_outputBlock-description-text">${data.text}</p>
		</div>
	</div>
	`
	closePage()
}
