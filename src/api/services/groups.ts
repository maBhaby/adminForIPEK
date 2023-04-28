import BaseApi from "../api"
import { runtimeConfig } from "@/config"

interface IGroups {
  groups: number[]
}

class GroupsApiService extends BaseApi {
  public getGroupList = async (): Promise<IGroups> => {
    const res = await this.axios.get<IGroups>("api/v1/grouplist/")
    return res.data
  }

  public getGroup = async (id: string): Promise<IGroups> => {
    console.log(id)
    const res = await this.axios.get<IGroups>(id)
    return res.data
  }
}

export const groupsApiService = new GroupsApiService(runtimeConfig.URL)
