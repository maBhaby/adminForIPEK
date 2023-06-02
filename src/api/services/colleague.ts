import BaseApi from '../api'
import { runtimeConfig } from '@/config'

export interface IPost {
  id: number
  name: string
}

export interface IPosts {
  posts: IPost[]
}

export interface TColleague {
  fist_name: string
  id?: number
  last_name: string
  patronymic: string
  telephone: string
  post: string | number
}

interface IColleagueApi {
  colleague: TColleague
}

export interface IColleagueList {
  colleagues: Array<Omit<TColleague, 'telephone' | 'post' >>
}

class ColleagueApiService extends BaseApi {
  getColleagueList = async (): Promise<IColleagueList> => {
    return await this.axios.get<IColleagueList>('api/v1/colleaguelist/')
      .then(res => res.data)
  }

  getColleague = async (id: number): Promise<IColleagueApi> => {
    const res = await this.axios.get<IColleagueApi>(`api/v1/colleaguelist/${id}`)
    return res.data
  }

  deleteColleague = async (id: number): Promise<IColleagueApi> => {
    const res = await this.axios.delete<IColleagueApi>(`api/v1/colleaguelist/${id}`)
    return res.data
  }

  changeColleague = async (id: number, value: any): Promise<IColleagueApi> => {
    debugger
    const res = await this.axios.put<IColleagueApi>(`api/v1/colleaguelist/${id}`, value)
    return res.data
  }

  createColleague = async (value: any): Promise<IColleagueApi> => {
    const res = await this.axios.post<IColleagueApi>('api/v1/colleaguelist/', value)
    return res.data
  }

  getPositions = async (): Promise<IPosts> => {
    const res = await this.axios.get<IPosts>('api/v1/postlist/')
    return res.data
  }

  setPosition = async (value: any) => {
    const res = await this.axios.post('api/v1/postlist/', value)
    return res.data
  }

  deletePosition = async (id: any) => {
    const res = await this.axios.delete(`api/v1/postlist/${id}`)
    return res.data
  }
}

export const ColleagueApi = new ColleagueApiService(runtimeConfig.URL)
