type Ground = 'grass' | 'gravel';

export interface IPark {
  id: number,
  description: string,
  distance: string,
  grounds: Array<Ground>,
  images: string[],
  name: string,
  numCurrentVisitors: number,
  rating: number,
  size: string,
  address: {
    street: string,
    zip: string,
    city: string,
  },
  // currentWeatherConditions,
  // kommentarer
}

export interface IPet  {
  id: number,
  name: string,
  age: string,
  images: Array<string>,
}
