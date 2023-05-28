export const ROUTER_PATHS = {
  MAIN: '/',
  STUDENT_EDIT: '/student/:id',
  PRODUCTS: '/products/',
  PRODUCT_EDIT: '/products/:id',
  AUTH: '/login',
  GROUP: '/group',
  GROUP_EDIT: '/group/:id',
  USERS: 'users',
  CONTROL: 'control'
}

export const BASIC_COLOR = {
  WHITE: '#FFF',
  WHITE_IVORY: '#FFFFF0',
  BLACK: '#0a0a0a',
  CARD_COLOR: '#6b72800d',
  BACKGROUND: '#f5f5f5'
}

export const PRODUCT_STATUS = {
  ACTIVE: 'active',
  SOLD: 'soldout',
  COMING: 'comingsoon'
}

export const GROUP_EDIT_HEADER_DATA = [
  {
    id: 0,
    label: 'ФИО'
  },
  {
    id: 1,
    label: 'День рождения'
  },
  {
    id: 2,
    label: 'E-mail'
  },
  {
    id: 3,
    label: 'Телефон'
  },
  {
    id: 4,
    label: 'Место регистрации'
  },
  {
    id: 5,
    label: 'Год поступления'
  },
]

export const MODALS_TYPE = {
  USER_DATA: 'userData',
  ERROR: 'error',
  EMPTY: 'empty'
}