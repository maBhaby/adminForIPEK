import { $api } from '@/api'
import { AxiosResponse } from 'axios'
import { IProducts, IProduct } from './interface'

export default class ProductApiService {
  lint: string = ''
  constructor (lintEx: string) {
    this.lint = lintEx
  }

  static async getProducts (): Promise<AxiosResponse<IProducts>> {
    return await $api.get('/api/v2/product')
  }

  // todo:нормальный тип
  static async getProduct (idProduct: number): Promise<AxiosResponse<IProduct>> {
    return await $api.get(`/api/v2/product/${idProduct}`)
  }
}
