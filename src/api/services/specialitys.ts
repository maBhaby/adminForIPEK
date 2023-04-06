import BaseApi from '../api'
import { runtimeConfig } from '@/config'

interface ISpecialitys {
  students: number[]
}

class SpecialitysApiService extends BaseApi {
  public createSpeciality (data: any): void {
    this.axios.post('api/v1/specialitylist/', data)
      .then((data) => console.log(data))
      .catch((data) => console.log(data))
  }

  public async getSpecialityList (): Promise<ISpecialitys | undefined> {
    try {
      const res = await this.axios.get<ISpecialitys>('api/v1/specialitylist/')
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  public async getSpeciality (count: number): Promise<ISpecialitys | undefined> {
    try {
      const res = await this.axios.get<ISpecialitys>(`api/v1/specialitylist/${count}`)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }
}

export const studentApiService = new SpecialitysApiService(runtimeConfig.URL)
