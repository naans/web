export const slides = () => Promise.resolve([{
  key: 1,
  picture: '/pictures/1200x500.png',
  description: 'Slide 1'
}, {
  key: 2,
  picture: '/pictures/1200x500.png',
  description: 'Slide 2'
}, {
  key: 3,
  picture: '/pictures/1200x500.png',
  description: 'Slide 3'
}])

export const cards = () => Promise.resolve([{
	id: 'sandwitches',
	picture:'/pictures/300x300.png',
	title: 'Cheese Naans',
	description: 'blablabla ....',
	url: '/repas/sandwitches'
}, {
	id: 'assiettes',
	picture:'/pictures/300x300.png',
	title: 'Assiettes Naans',
	description: 'blablabla ....',
	url: '/repas/assiettes'
}, {
	id: 'pattes',
	picture:'/pictures/300x300.png',
	title: 'Pasta',
	description: 'blablabla ....',
	url: '/repas/pattes'
}, {
	id: 'desserts',
	picture:'/pictures/300x300.png',
	title: 'Desserts',
	description: 'blablabla ....',
	url: '/repas/desserts'
}])

export const infos = () => Promise.resolve({
	halal: 'Viandes Halal',
	address: '42 Boulevard Président Wilson, 06600 Antibes',
	phone: '04 83 15 35 77',
	openingTime: 'Ouvert tous les jours de 11h a 15h et de 18h30 a 22h',
	shipping: 'Livraison gratuite tous les soirs',
	payment: 'Paiements par especes, tickets restaurant et carte bancaire acceptes',
	facebook: 'https://www.facebook.com/Naansfood/',
	google: 'https://www.google.fr/maps/place/Naan\'s/@43.5771401,7.1157315,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0x5bc5bc1b4122c7a1!8m2!3d43.5771401!4d7.1179202!9m1!1b1',
	map: {
		lat: 43.577140, 
		lng: 7.117920
	}
})

const allMeals = [{
	category: 'sandwitches',
	name: 'Americain',
	label: 'classic',
	color: 'secondary',
	description: '2 Steaks 45g',
	picture: '/pictures/300x300.png',
	price: 5.5,
	extras: [{
		name: 'Frites',
		price: 0
	}, {
		name: 'Oeuf ou Fromage',
		price: 0.5
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'sandwitches',
	name: 'Kebab',
	label: 'classic',
	color: 'secondary',
	description: 'Lamelle de kebab de volaille',
	picture: '/pictures/300x300.png',
	price: 5.5,
	extras: [{
		name: 'Frites',
		price: 0
	}, {
		name: 'Oeuf ou Fromage',
		price: 0.5
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'sandwitches',
	name: 'Chicken Curry',
	description: 'Poulet aux epices curry',
	picture: '/pictures/300x300.png',
	price: 5.5,
	extras: [{
		name: 'Frites',
		price: 0
	}, {
		name: 'Oeuf ou Fromage',
		price: 0.5
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'sandwitches',
	name: 'Chicken Tandoori',
	description: 'Poulet aux epices tandoori',
	picture: '/pictures/300x300.png',
	price: 5.5,
	extras: [{
		name: 'Frites',
		price: 0
	}, {
		name: 'Oeuf ou Fromage',
		price: 0.5
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'sandwitches',
	name: 'Chicken Sate',
	description: 'Poulet aux epices sate',
	picture: '/pictures/300x300.png',
	price: 6,
	extras: [{
		name: 'Frites',
		price: 0
	}, {
		name: 'Oeuf ou Fromage',
		price: 0.5
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'sandwitches',
	name: 'Vegetarien',
	description: 'Sans viande',
	picture: '/pictures/300x300.png',
	price: 5.5,
	extras: [{
		name: 'Frites',
		price: 0
	}, {
		name: 'Oeuf ou Fromage',
		price: 0.5
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'sandwitches',
	name: 'Kefta',
	description: 'Viande hachee aux epices douces',
	picture: '/pictures/300x300.png',
	price: 6,
	extras: [{
		name: 'Frites',
		price: 0
	}, {
		name: 'Oeuf ou Fromage',
		price: 0.5
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'sandwitches',
	name: 'Tenders',
	description: 'Poulet pane, plein fillet',
	picture: '/pictures/300x300.png',
	price: 6,
	extras: [{
		name: 'Frites',
		price: 0
	}, {
		name: 'Oeuf ou Fromage',
		price: 0.5
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Kefta',
	description: '',
	picture: '/pictures/300x300.png',
	price: 9,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Brochettes de poulet sate',
	description: '',
	picture: '/pictures/300x300.png',
	price: 9,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Kefta et brochettes de poulet sate',
	description: '',
	picture: '/pictures/300x300.png',
	price: 12,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Kebab',
	description: '',
	picture: '/pictures/300x300.png',
	price: 9,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Autre viande',
		price: 1
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Steak',
	description: '',
	picture: '/pictures/300x300.png',
	price: 9,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Autre viande',
		price: 1
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Poulet curry',
	description: '',
	picture: '/pictures/300x300.png',
	price: 9,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Autre viande',
		price: 1
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Poulet sate',
	description: '',
	picture: '/pictures/300x300.png',
	price: 9,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Autre viande',
		price: 1
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Poulet tandoori',
	description: '',
	picture: '/pictures/300x300.png',
	price: 9,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Autre viande',
		price: 1
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'assiettes',
	name: 'Tenders',
	description: '',
	picture: '/pictures/300x300.png',
	price: 9,
	extras: [{
		name: 'Cheese Naan',
		price: 0
	}, {
		name: 'Autre viande',
		price: 1
	}, {
		name: 'Boisson 33cl',
		price: 1
	}]
}, {
	category: 'pattes',
	name: 'Poulet sate',
	description: '',
	picture: '/pictures/300x300.png',
	price: 6,
	extras: [{
		name: 'Cheese Naan + Boisson 33cl',
		price: 3
	}]
}, {
	category: 'pattes',
	name: 'Kebab sate',
	description: '',
	picture: '/pictures/300x300.png',
	price: 6,
	extras: [{
		name: 'Cheese Naan + Boisson 33cl',
		price: 3
	}]
}, {
	category: 'pattes',
	name: 'Kefta tomate',
	description: '',
	picture: '/pictures/300x300.png',
	price: 6,
	extras: [{
		name: 'Cheese Naan + Boisson 33cl',
		price: 3
	}]
}, {
	category: 'pattes',
	name: 'Tomate',
	description: '',
	picture: '/pictures/300x300.png',
	price: 6,
	extras: [{
		name: 'Cheese Naan + Boisson 33cl',
		price: 3
	}]
}, {
	category: 'desserts',
	name: 'Tiramisu',
	description: 'Choix: Oreo, Kinder, Nutella, Fraise, ...',
	picture: '/pictures/300x300.png',
	price: 3,
	extras: []
}]

export const meals = () => Promise.resolve(allMeals)

export default {slides, cards, infos, meals}
