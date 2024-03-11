import { OfferTypes } from '../types/offer';

export const offers: OfferTypes = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg'
  },
  {
    id: '4aa5f711-c10d-4121-52cd-e0xa52a27u50',
    title: 'Terrible and ugly one-room apartment in the city center.',
    type: 'apartment',
    price: 18000,
    city: {
      name: 'Tomsk',
      location: {
        latitude: 23.64448112317,
        longitude: 7.673877537499948,
        zoom: 11
      }
    },
    location: {
      latitude: 23.64448112317,
      longitude: 7.673877537499948,
      zoom: 11
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg'
  },
  {
    id: '4qa5f761-c17d-4171-59wd-e0xa52627u50',
    title: 'Luxurious country house 3 hours from the village. one on one with wild nature.',
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
    location: {
      latitude: 11.775113488,
      longitude: 9.419346631,
      zoom: 1
    },
    isFavorite: false,
    isPremium: false,
    rating: 9,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
  },
  {
    id: '4qa53761-f17d-t171-54wd-e0xa52927u50',
    title: 'Luxurious country house 3 hours from the village. one on one with wild nature.',
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
    location: {
      latitude: 55.4507,
      longitude: 37.3656,
      zoom: 1
    },
    isFavorite: false,
    isPremium: false,
    rating: 11,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg'
  }
];
