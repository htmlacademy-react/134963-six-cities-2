export type OfferType = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
};

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type City = {
    name: string;
    location: Location;
};

export type Host = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
};

export type OfferTypes = OfferType[];

export type FullOffer = {
    description: string | string[];
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
  } & OfferType;


