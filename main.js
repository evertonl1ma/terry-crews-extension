(() => {
	changeImage = () => {
		console.log('Java é uma merda')
		let images = [...document.images];
		setTimeout(() => {
			changeImage();
			images.forEach(image => image.src = 'https://i.pinimg.com/originals/29/06/84/290684438fc012a5168898b7cc597b02.jpg')
		}, 3000)
	}

	changeImage();

})()
	
