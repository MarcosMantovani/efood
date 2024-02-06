import Product from './Product'

class Restaurant {
  title: string
  rating: string
  description: string
  image: string
  infos: string[]
  products: Product[]
  id: number

  constructor(
    title: string,
    rating: string,
    description: string,
    image: string,
    infos: string[],
    products: Product[],
    id: number
  ) {
    this.title = title
    this.rating = rating
    this.description = description
    this.image = image
    this.infos = infos
    this.products = products
    this.id = id
  }
}

export default Restaurant
