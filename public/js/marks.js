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
		name: 'school',
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'yes',
		photo: 'https://i.pinimg.com/originals/ca/4c/4e/ca4c4e30608a538c1aafb5d918951990.png',
		morePhotos: 'https://i.pinimg.com/originals/94/29/1f/94291f9fdca9af9ba1aefd9b104c8d94.png',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit sapiente, deleniti aut dolor facilis voluptatum error ipsam, at consequatur commodi tenetur! Accusamus illo neque et, obcaecati saepe nam architecto porro voluptate dicta explicabo quibusdam consectetur fugit sit molestiae earum velit eum! Repudiandae, reiciendis beatae, dolor autem totam, non dicta fugit iure temporibus aspernatur eligendi debitis id tempore sit! A quo laborum eligendi blanditiis ad illo rem ratione in! Adipisci cupiditate vel pariatur ullam libero corporis ab eum veniam velit.'
	},
	{
		name: 'school',
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'yes',
		photo: 'https://i.pinimg.com/originals/ca/4c/4e/ca4c4e30608a538c1aafb5d918951990.png',
		morePhotos: 'https://i.pinimg.com/originals/94/29/1f/94291f9fdca9af9ba1aefd9b104c8d94.png',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit sapiente, deleniti aut dolor facilis voluptatum error ipsam, at consequatur commodi tenetur! Accusamus illo neque et, obcaecati saepe nam architecto porro voluptate dicta explicabo quibusdam consectetur fugit sit molestiae earum velit eum! Repudiandae, reiciendis beatae, dolor autem totam, non dicta fugit iure temporibus aspernatur eligendi debitis id tempore sit! A quo laborum eligendi blanditiis ad illo rem ratione in! Adipisci cupiditate vel pariatur ullam libero corporis ab eum veniam velit.'
	},
	{
		name: 'school',
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'yes',
		photo: 'https://i.pinimg.com/originals/ca/4c/4e/ca4c4e30608a538c1aafb5d918951990.png',
		morePhotos: 'https://i.pinimg.com/originals/94/29/1f/94291f9fdca9af9ba1aefd9b104c8d94.png',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit sapiente, deleniti aut dolor facilis voluptatum error ipsam, at consequatur commodi tenetur! Accusamus illo neque et, obcaecati saepe nam architecto porro voluptate dicta explicabo quibusdam consectetur fugit sit molestiae earum velit eum! Repudiandae, reiciendis beatae, dolor autem totam, non dicta fugit iure temporibus aspernatur eligendi debitis id tempore sit! A quo laborum eligendi blanditiis ad illo rem ratione in! Adipisci cupiditate vel pariatur ullam libero corporis ab eum veniam velit.'
	},
	{
		name: 'school',
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'yes',
		photo: 'https://i.pinimg.com/originals/ca/4c/4e/ca4c4e30608a538c1aafb5d918951990.png',
		morePhotos: 'https://i.pinimg.com/originals/94/29/1f/94291f9fdca9af9ba1aefd9b104c8d94.png',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit sapiente, deleniti aut dolor facilis voluptatum error ipsam, at consequatur commodi tenetur! Accusamus illo neque et, obcaecati saepe nam architecto porro voluptate dicta explicabo quibusdam consectetur fugit sit molestiae earum velit eum! Repudiandae, reiciendis beatae, dolor autem totam, non dicta fugit iure temporibus aspernatur eligendi debitis id tempore sit! A quo laborum eligendi blanditiis ad illo rem ratione in! Adipisci cupiditate vel pariatur ullam libero corporis ab eum veniam velit.'
	},
	{
		name: 'school',
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'yes',
		photo: 'https://i.pinimg.com/originals/ca/4c/4e/ca4c4e30608a538c1aafb5d918951990.png',
		morePhotos: 'https://i.pinimg.com/originals/94/29/1f/94291f9fdca9af9ba1aefd9b104c8d94.png',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit sapiente, deleniti aut dolor facilis voluptatum error ipsam, at consequatur commodi tenetur! Accusamus illo neque et, obcaecati saepe nam architecto porro voluptate dicta explicabo quibusdam consectetur fugit sit molestiae earum velit eum! Repudiandae, reiciendis beatae, dolor autem totam, non dicta fugit iure temporibus aspernatur eligendi debitis id tempore sit! A quo laborum eligendi blanditiis ad illo rem ratione in! Adipisci cupiditate vel pariatur ullam libero corporis ab eum veniam velit.'
	},
	{
		name: 'school',
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'yes',
		photo: 'https://i.pinimg.com/originals/ca/4c/4e/ca4c4e30608a538c1aafb5d918951990.png',
		morePhotos: 'https://i.pinimg.com/originals/94/29/1f/94291f9fdca9af9ba1aefd9b104c8d94.png',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit sapiente, deleniti aut dolor facilis voluptatum error ipsam, at consequatur commodi tenetur! Accusamus illo neque et, obcaecati saepe nam architecto porro voluptate dicta explicabo quibusdam consectetur fugit sit molestiae earum velit eum! Repudiandae, reiciendis beatae, dolor autem totam, non dicta fugit iure temporibus aspernatur eligendi debitis id tempore sit! A quo laborum eligendi blanditiis ad illo rem ratione in! Adipisci cupiditate vel pariatur ullam libero corporis ab eum veniam velit.'
	},
	{
		name: 'church',
		point: 'Лисець',
		region: 'Івано-Франківська',
		district: 'no',
		photo: '../img/church.jpg',
		morePhotos: '../img/church2.jpg',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit sapiente, deleniti aut dolor facilis voluptatum error ipsam, at consequatur commodi tenetur! Accusamus illo neque et, obcaecati saepe nam architecto porro voluptate dicta explicabo quibusdam consectetur fugit sit molestiae earum velit eum! Repudiandae, reiciendis beatae, dolor autem totam, non dicta fugit iure temporibus aspernatur eligendi debitis id tempore sit! A quo laborum eligendi blanditiis ad illo rem ratione in! Adipisci cupiditate vel pariatur ullam libero corporis ab eum veniam velit.'

	}
]

const marksDataParser = (mark) => {
	let data = marksData[mark.getAttribute('index')];
	page.innerHTML = `
	<div class="mark_outputBlock_CloseBtn">
		<div class="aboutWriter_moreClose-line"></div>
		<div class="aboutWriter_moreClose-line"></div>
	</div>
	<div class="mark_outputBlock-img" style="background-image: url(${data.photo})"></div>
	<div class="mark_outputBlockContent">
		<div class="mark_outputBlockContent-col1">
			<div class="mark_outputBlock-info">
				<h2 class="mark_outputBlock-title">Інформація</h2>
				<p class="mark_outputBlock-info__point"><span>Пункт: </span>${data.point}</p>
				<p class="mark_outputBlock-info__region"><span>Область: </span>${data.region}</p>
				<p class="mark_outputBlock-info__district"><span>Район: </span>${data.district}</p>
			</div>
			<div class="mark_outputBlock-moreImages">
				<h2 class="mark_outputBlock-title">Більше зображень</h2>
				<div class="mark_outputBlock-moreImages__img" style="background-image: url(${data.morePhotos})">
					<a class="mark_outputBlock-moreImages__img-dim"href="https://www.google.com/search?q=%D0%9B%D0%B8%D1%81%D0%B5%D1%86%D1%8C%D0%BA%D0%B0+%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0&sxsrf=ALeKk027NQuXnHcoe5fN-DKkpMrzDAVb2g:1619347972841&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjShcGlnZnwAhWxlYsKHWC4CPcQ_AUoAnoECAIQBA&biw=1920&bih=979">
						<div class="mark_outputBlock-moreImages-line"></div>
						<div class="mark_outputBlock-moreImages-line"></div>
					</a>
				</div>
				<div class="mark_outputBlock-moreImages__img" style="background-image: url(${data.morePhotos})">
					<a class="mark_outputBlock-moreImages__img-dim"href="https://www.google.com/search?q=%D0%9B%D0%B8%D1%81%D0%B5%D1%86%D1%8C%D0%BA%D0%B0+%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0&sxsrf=ALeKk027NQuXnHcoe5fN-DKkpMrzDAVb2g:1619347972841&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjShcGlnZnwAhWxlYsKHWC4CPcQ_AUoAnoECAIQBA&biw=1920&bih=979">
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
	`
	closePage()
}
