const imgs = [
  'https://material-ui.com/static/images/grid-list/breakfast.jpg',
  'https://material-ui.com/static/images/grid-list/morning.jpg',
  'https://material-ui.com/static/images/grid-list/hats.jpg',
  'https://material-ui.com/static/images/grid-list/honey.jpg',
  'https://material-ui.com/static/images/grid-list/vegetables.jpg',
  'https://material-ui.com/static/images/grid-list/plant.jpg',
  'https://material-ui.com/static/images/grid-list/mushroom.jpg',
  'https://material-ui.com/static/images/grid-list/olive.jpg',
  'https://material-ui.com/static/images/grid-list/star.jpg',
]

interface Tile {
  image: string
  title: string
  author: string
  col: number
}

export default function getTiles(col: number): Tile[] {
  return imgs.map((item, index) => ({
    image: item,
    title: `title ${index}`,
    author: `author ${index}`,
    col: Math.ceil(Math.random() * 10) % col,
  }))
}
