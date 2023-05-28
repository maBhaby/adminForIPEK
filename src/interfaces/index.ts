export interface IUser {
  email: string
  name: string
  device: string
  roles: string[]
  permissions: string[]
}

export interface IInitValUser {
  userName: string
  password: string
}

export interface ILayout {
  children?: React.ReactNode | React.ReactElement
}

export interface IUserData {
  data: {
    device?: string
    email: string
    name: string
    permissions?: string[]
    roles?: string[]
  }
}

export interface Currency {
  id: number
  code: string
  symbol: string
}

export interface Locale {
  id: number
  code: string
  name: string
  currency: Currency
}

export interface Shipment {
  country: string
  region: string
  city: string
  type: string
  point: string
  address: string
  index?: any
  shipment_price: number
}

export interface Parent {
  id: number
  slug: string
  title: string
  parent?: any
}

export interface Category {
  id: number
  slug: string
  title: string
  parent: Parent
}

export interface Collection {
  id: number
  title: string
}

export interface Currency2 {
  id: number
  code: string
  symbol: string
}

export interface Locale2 {
  id: number
  code: string
  name: string
  currency: Currency2
}

export interface Price {
  locale: Locale2
  price: number
  old_price?: any
}

export interface Size {
  id: number
  title: string
  count: number
}

export interface Product2 {
  id: number
  slug: string
  title: string
  sort: number
  status: string
  category: Category
  collection: Collection
  prices: Price[]
  sizes: Size[]
}

export interface Size2 {
  id: number
  title: string
}

export interface Product {
  product: Product2
  size: Size2
}

export interface Datum {
  id: number
  order_num: string
  firstname: string
  lastname: string
  contact?: string | null
  phone: string
  locale: Locale
  status: number
  shipment: Shipment
  products: Product[]
}

export interface Links {
  first: string
  last: string
  prev?: any
  next: string
}

export interface Link {
  url: string
  label: string
  active: boolean
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface OrdersI {
  data: Datum[]
  links: Links
  meta: Meta
}

export interface IModalsBase {
  closeModal: () => void
  isOpen: boolean
  modalProps: any
}

