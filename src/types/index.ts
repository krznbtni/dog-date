type Ground = 'grass' | 'gravel';

interface Address {
  street: string,
  zip: string,
  city: string,
}

export interface IPark {
  id: number,
  name: string,
  description: string,
  rating: number,
  distance: string,
  grounds: Array<Ground>,
  size: string,
  images: Array<string>,
  numCurrentVisitors: number,
  address: Address,
  // currentWeatherConditions,
  // kommentarer
}

export interface IPet {
  id: number,
  name: string,
  age: string,
  bio: string,
  images: Array<string>,
  size: 'small' | 'medium' | 'large',
  type: 'sighthound',
  breed: 'lurcher',
  activityLevel: 'low' | 'medium' | 'high',
}

export interface IUser {
  id: number,
  name: string,
  petIds: Array<number>
}
