import React from 'react'

export interface IUser {
  email: string
  name: string
}

export interface IInitValUser {
  userName: string
  password: string
}

export interface ILayout {
  children: React.ReactNode | React.ReactElement
}
