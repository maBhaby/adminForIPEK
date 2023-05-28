import BaseApi from '../api'
import { runtimeConfig } from '@/config'

export interface IRoot {
  group: Group
}

export interface Group {
  student: Student[]
  colleague: string
  plan: string
  speciality: string
  number: string
  year_receipt: string
  school_graduation_class: string
  form_education: string
}

export interface Student {
  id: number
  fist_name: string
  last_name: string
  patronymic: string
  birthday: string
  place_residence: string
  place_registration: string
  telephone: string
  number_personal_file: string
  year_receipt: string
  email: string
}

export interface IGroup {
  id: number
  number: string
}

interface IGroups {
  groups: IGroup[]
}

class GroupsApiService extends BaseApi {
  public  getGroupList = async (): Promise<IGroups | undefined> => {
    try {
      const res = await this.axios.get<IGroups>('api/v1/grouplist/')
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  public async getGroup (count: any): Promise<IRoot> {
    const res = await this.axios.get<IRoot>(`api/v1/grouplist/${count}`)
    return res.data
  }
}

export const groupsApiService = new GroupsApiService(runtimeConfig.URL)
