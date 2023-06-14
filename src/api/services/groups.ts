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
  public getGroupList = async (): Promise<IGroups | undefined> => {
    try {
      const res = await this.axios.get<IGroups>('api/v1/grouplist/')
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  public createGroup = async (value: any): Promise<any> => {
    const res = await this.axios.post<IRoot>(`api/v1/grouplist/`, value)
  }

  public async getGroup (count: any): Promise<IRoot> {
    const res = await this.axios.get<IRoot>(`api/v1/grouplist/${count}`)
    return res.data
  }

  public async changeGroup (count: any, value: any): Promise<IRoot> {
    const res = await this.axios.put<IRoot>(`api/v1/grouplist/${count}`, value)
    return res.data
  }

  public async changeGroupStud (count: any, value: any): Promise<IRoot> {
    const res = await this.axios.put<IRoot>(`api/v1/groupstudlist/${count}`, value)
    return res.data
  }

  public async deleteGroup (id: any): Promise<any> {
    const res = await this.axios.delete<IRoot>(`api/v1/grouplist/${id}`)
    return res.data
  }

  public getDisciplineslist = async (): Promise<any> => {
      const res = await this.axios.get<IRoot>('api/v1/specialitylist/')
      return res.data
  }

  public async deleteDisciplineslist (id: any): Promise<any> {
    const res = await this.axios.delete<IRoot>(`api/v1/disciplineslist/${id}`)
    return res.data
  }

  public getPlan = async (): Promise<any> => {
    const res = await this.axios.get<IRoot>('api/v1/preparation_plan_list/')
    return res.data
  }

  public deletePlan = async (id:any): Promise<any> => {
    const res = await this.axios.delete<IRoot>(`api/v1/preparation_plan_list/${id}`)
    return res.data
  }

}

export const groupsApiService = new GroupsApiService(runtimeConfig.URL)
