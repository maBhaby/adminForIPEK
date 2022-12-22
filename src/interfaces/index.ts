import React from 'react'

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
  children: React.ReactNode | React.ReactElement
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
