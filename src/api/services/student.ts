import BaseApi from '../api'
import { runtimeConfig } from '@/config'

export interface IStudent {
  students: number[]
}

class StudentApiService extends BaseApi {
  public createStudentList (data: any): void {
    this.axios.post('api/v1/studentlist/', data)
      .then((data) => console.log(data))
      .catch((data) => console.log(data))
  }

  public getStudentList = async (): Promise<IStudent> => {
    try {
      const res = await this.axios.get<IStudent>('api/v1/studentlist/')
      return res.data
    } catch (error) {
      throw (error)
    }
  }

  public getStudent = async (id: number): Promise<IStudent> => {
    try {
      const res = await this.axios.get<IStudent>(`api/v1/studentlist/${id}`)
      return res.data
    } catch (error) {
      return (error)
    }
  }
}

export const studentApiService = new StudentApiService(runtimeConfig.URL)
