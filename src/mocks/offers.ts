import { FullOffer } from '../types/offer';

export const offers: FullOffer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg'
    ],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Baby seat',
      'Cable TV',
      'Dishwasher',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Air conditioning',
      'Breakfast',
      'Washer',
      'Washing machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    bedrooms: 1,
    maxAdults: 10,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg'
  },
  {
    id: '4aa5f711-c10d-4121-52cd-e0xa52a27u50',
    title: 'Terrible and ugly one-room apartment in the city center.',
    type: 'apartment',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    price: 18000,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 23.64448112317,
        longitude: 7.673877537499948,
        zoom: 11
      }
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg'
    ],
    location: {
      latitude: 23.64448112317,
      longitude: 7.673877537499948,
      zoom: 11
    },
    goods: [
      'Cable TV',
      'Washer',
      'Laptop friendly workspace',
      'Dishwasher',
      'Heating',
      'Air conditioning',
      'Wi-Fi',
      'Breakfast',
      'Fridge',
      'Baby seat',
      'Washing machine',
      'Kitchen',
      'Towels'
    ],
    host: {
      isPro: false,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    bedrooms: 1,
    maxAdults: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg'
  },
  {
    id: '4qa5f761-c17d-4171-59wd-e0xa52627u50',
    title: 'Luxurious country house 3 hours from the village. one on one with wild nature.',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'house',
    price: 792,
    city: {
      name: 'Addis Ababa',
      location: {
        latitude: 11.775113488,
        longitude: 9.419346631,
        zoom: 1
      }
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    location: {
      latitude: 11.775113488,
      longitude: 9.419346631,
      zoom: 1
    },
    goods: [
      'Laptop friendly workspace',
      'Fridge',
      'Kitchen',
      'Washer',
      'Breakfast',
      'Air conditioning',
      'Wi-Fi',
      'Cable TV',
      'Baby seat',
      'Towels',
      'Dishwasher',
      'Heating',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    bedrooms: 1,
    maxAdults: 3,
    isFavorite: false,
    isPremium: true,
    rating: 9,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
  },
  {
    id: '4qa53761-f17d-t171-54wd-e0xa52927u50',
    title: 'Luxurious country house 3 hours from the village. one on one with wild nature.',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: 'house',
    price: 10,
    city: {
      name: 'moscow',
      location: {
        latitude: 55.4507,
        longitude: 37.3656,
        zoom: 1
      }
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg'
    ],
    location: {
      latitude: 55.4507,
      longitude: 37.3656,
      zoom: 1
    },
    goods: [
      'Breakfast',
      'Coffee machine',
      'Kitchen',
      'Heating',
      'Cable TV',
      'Wi-Fi',
      'Fridge',
      'Dishwasher',
      'Air conditioning'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isFavorite: true,
    isPremium: false,
    rating: 11,
    bedrooms: 3,
    maxAdults: 5,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg'
  }
];
