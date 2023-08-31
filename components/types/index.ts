import { RouteLocationRaw, NavigationFailure } from '.nuxt/vue-router'

export type ExecuteMethodType = (
  url?: string
) => false | void | RouteLocationRaw | Promise<false | void | NavigationFailure | void>

export interface IMenuOverlayItems {
  name: string
  icon: string
  method: ExecuteMethodType
  url?: Url
  requireUser?: boolean
}

export interface ITopMenuItems {
  id: Id
  title: string
  link: string
  icon_name?: string
}

export interface ISearchItem {
  id: number
  title: string
  description: string
  url: string
  price: number
  created_at: Date | null
}
