import BaseApi from '../api'
import { runtimeConfig } from '@/config'

interface IGroups {
  students: number[]
}

class GroupsApiService extends BaseApi {
  public createStudentList (data: any): void {
    this.axios.post('api/v1/studentlist/', data)
      .then((data) => console.log(data))
      .catch((data) => console.log(data))
  }

  public async getGroupList (): Promise<IGroups | undefined> {
    try {
      const res = await this.axios.get<IGroups>('api/v1/grouplist/')
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  public async getGroup (count: number): Promise<IGroups | undefined> {
    try {
      const res = await this.axios.get<IGroups>(`api/v1/grouplist/${count}`)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }
}

export const studentApiService = new GroupsApiService(runtimeConfig.URL)
