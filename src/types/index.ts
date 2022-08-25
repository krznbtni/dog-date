type Ground = 'grass' | 'gravel';

export interface IPark {
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
  name: string,
  age: string,
  img: string,
}
