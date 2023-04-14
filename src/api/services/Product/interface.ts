interface ISize {
  id: number
  count: number
  title: string
}

interface IPrice {
  price: number
  old_price: number | null
  locale: {
    id: number
    name: string
    code: string
    currency: {
      id: number
      code: string
      symbol: string
    }
  }
}

interface ICategory {
  id: number
  parent: ICategory | null
  slug: string
  title: string
}

interface IProduct {
  id: number
  title: string
  slug: string
  sort: number
  status: string
  category: ICategory
  collection: {
    id: number
    title: string
  }
  prices: IPrice[]
  sizes: ISize[]
}

interface IProducts {
  data: IProduct[]
}

export {
  type IProducts,
  type IProduct
}
