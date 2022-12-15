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

export interface AuthResponse {
  accessToken: string
  data: IUser
}
