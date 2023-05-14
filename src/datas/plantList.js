import monstera from '../assets/monstera.jpg'
import ficus_lyrata from '../assets/ficus-lyrata.jpg'
import silver_pothos from '../assets/silver-pothos.jpg'
import yucca from '../assets/yucca.jpg'
import olive_tree from '../assets/olive-tree.webp'
import geranium from '../assets/geranium.webp'
import basil from '../assets/basil.jpg'
import aloe from '../assets/aloe.jpg'
import succulent from '../assets/succulent.webp'

export const plantList = [
	{
		name: 'monstera',
		category: 'classic',
		id: '1ed',
        isBestSale: true,
		light: 2,
		water: 3,
		cover: monstera
	},
	{
		name: 'ficus lyrata',
		category: 'classic',
		id: '2ab',
        isBestSale: false,
		light: 3,
		water: 1,
		cover: ficus_lyrata
	},
	{
		name: 'silver pothos',
		category: 'classic',
		id: '3sd',
        isBestSale: true,
		light: 1,
		water: 2,
		cover: silver_pothos
	},
	{
		name: 'yucca',
		category: 'classic',
		id: '4kk',
        isBestSale: true,
		light: 3,
		water: 1,
		cover: yucca
	},
	{
		name: 'olive tree',
		category: 'exterior',
		id: '5pl',
        isBestSale: false,
		light: 3,
		water: 1,
		cover: olive_tree
	},
	{
		name: 'geranium',
		category: 'exterior',
		id: '6uo',
        isBestSale: true,
		light: 2,
		water: 2,
		cover: geranium
	},
	{
		name: 'basil',
		category: 'exterior',
		id: '7ie',
        isBestSale: false,
		light: 2,
		water: 3,
		cover: basil
	},
	{
		name: 'aloe',
		category: 'succulent',
		id: '8fp',
        isBestSale: false,
		light: 2,
		water: 1,
		cover: aloe
	},
	{
		name: 'succulent',
		category: 'succulent',
		id: '9vn',
        isBestSale: false,
		light: 2,
		water: 1,
		cover: succulent
	}
]